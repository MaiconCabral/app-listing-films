import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard() {

    const [multipleWinners, setMultipleWinners]= useState();
    const [studiosWinners, setStudiosWinners]= useState();
    const [searchWinners, setSearchWinners]= useState();
    const [producersMax, setProducersMax]= useState();
    const [producersMin, setProducersMin]= useState();

    const getMultipleWinners=async()=>{
        try{
          const req= await fetch("http://localhost:8000/api/films/filter/winners");
          const res= await req.json();
          setMultipleWinners(res);
      
        } catch(error){
        console.log(error);
        }
    }
    
    const getStudiosWinners=async()=>{
        try{
          const req= await fetch("http://localhost:8000/api/films/filter/studios");
          const res= await req.json();
          setStudiosWinners(res);
        //   console.log(res);
        } catch(error){
            console.log(error);
        }
    }

    const getProducersWinners=async()=>{
        try{
          const req= await fetch("http://localhost:8000/api/films/filter/interval");
          const res= await req.json();
      
          let max = Object.values(res);
          max.splice(0, 1)[0]

          let min = Object.values(res);
          min.splice(1, 1)[0]
        
          setProducersMax(max);
          setProducersMin(min);
      
        } catch(error){
            console.log(error);
        }
    }

    const onSearchForm =async(e)=> {
       
        e.preventDefault();
        var searchYear = e.target.year.value;

        try{
            const req= await fetch("http://localhost:8000/api/films/filter/year?winner=true&year="+searchYear+"");
            const res= await req.json();
            setSearchWinners(res)
        } catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
  
        getMultipleWinners();
        getStudiosWinners();
        getProducersWinners();
      }, []);

    return (
      <div className='container'>
        <div className='row'>
            <h1>View Dashboard</h1>
            <div className='col-md-12 col-xl-6'>
                <article className="painel-card">
                    <h1>List years with multiple winners</h1>

                    <div className="content-table">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Year</th>
                                    <th scope="col">Win Count</th>
                                </tr>
                            </thead>
                            <tbody>
                              {multipleWinners && multipleWinners.year.map((item, index) => (
                                    <tr key={index}>
                                    <th scope="row">{item.year}</th>
                                    <td>{item.total}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </article>
            </div>
            <div className='col-md-12 col-xl-6'>
                <article className='painel-card'>
                    <h1>Top 3 studios with winners</h1>

                    <div className="content-table">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Win Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studiosWinners && studiosWinners.studios.map((item, index) => (
                                    <tr key={index}>
                                    <th scope="row">{item.studios}</th>
                                    <td>{item.total}</td>
                                </tr>
                                ))}
                               
                            </tbody>
                        </table>
                    </div>

                </article>
            </div>
            <div className='col-md-12 col-xl-6'>
                <article className='painel-card'>
                    <h1>Producers with longest and shortest interval between wins</h1>
                    
                    <div className="content-table">
                        <p>Maximum</p>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Producer</th>
                                    <th scope="col">Interval</th>
                                    <th scope="col">Previous Year</th>
                                    <th scope="col">Following Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                { producersMax && producersMax.map((item, index) => (
                                    <tr key={index}>
                                    <th scope="row">{item.producers}</th>
                                    <td>{item.interval}</td>
                                    <td>{item.previousWin}</td>
                                    <td>{item.followingWin}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="content-table">
                        <p>Minimum</p>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Producer</th>
                                    <th scope="col">Interval</th>
                                    <th scope="col">Previous Year</th>
                                    <th scope="col">Following Year</th>
                                </tr>
                            </thead>
                            <tbody>
                            { producersMin && producersMin.map((item, index) => (
                                    <tr key={index}>
                                    <th scope="row">{item.producers}</th>
                                    <td>{item.interval}</td>
                                    <td>{item.previousWin}</td>
                                    <td>{item.followingWin}</td>
                                </tr>
                                ))}
                               
                            
                            </tbody>
                        </table>
                    </div>

                </article>
            </div>
            <div className='col-md-12 col-xl-6'>
                <article className='painel-card'>
                    <h1>List movie winners by year</h1>
                    
                    <form onSubmit={onSearchForm}>

                        <input type="number" placeholder="Search by year" name="year"/>
                        <button className='btn btn-primary'>
                            <i class="bi bi-search"></i>
                        </button>
                    </form>

                    <div className="content-table">
                        
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchWinners && searchWinners.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.year}</td>
                                        <td>{item.title}</td>
                                    </tr>
                                ))}
                               
                                
                            </tbody>
                        </table>
                    </div>

                </article>
            </div>
        </div>
          
      </div>
    )
  }
  

  export default Dashboard;