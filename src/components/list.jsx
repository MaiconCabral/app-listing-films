import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function List() {

  const columns= [
    {
        name:"ID",
        selector:(row)=>row.id,
    },
    {
        name:"Year",
        selector:(row)=>row.year,
    },
    {
        name:"Title",
        selector:(row)=>row.title,
    },
    {
        name:"Winner?",
        selector:(row)=>row.winner,
    }
  
  ];

  const [data, setData]= useState([]);
  const [search, SetSearch]= useState('');
  const [winner, SetWinner]= useState('');
  const [filter, setFilter]= useState([]);
  
  const getMovies=async()=>{
    try{
      const req= await fetch("http://localhost:8000/api/films/all");
      const res= await req.json();
      setData(res);
      setFilter(res);
    } catch(error){
    console.log(error);
    }
  }
 

  useEffect(()=>{
  
    getMovies();
  }, []);
  
  useEffect(()=>{
    const result = data.filter((item)=>{
      return item.year.toLowerCase().match(search.toLocaleLowerCase());
    });
    
    setFilter(result);

  },[search]);
  
  const handleWinners=(val)=>{
    const win = data.filter((item)=>{
      return item.winner  == val;
    });
    setFilter(win);
   }

  const handleDelete=(val)=>{
  const newdata = data.filter((item)=>item.id!==val);
  setFilter(newdata);
  }
  
  const tableHeaderstyle={
  headCells:{
    style:{
        fontWeight:"bold",
        fontSize:"14px",
        backgroundColor:"#f8f9fa"
  
    },
  },
  }

  return (
    <div className='container'>
      <div className='row'>
      
        <div className='col-md-12 col-xl-12'>
                <article className="painel-card">
                  

                    <div className="content-table">
                         <React.Fragment>
                            <h1>List Movies</h1>
                            <DataTable 
                            customStyles={ tableHeaderstyle}
                            columns={columns}
                            data={filter}
                            pagination
                            fixedHeader
                            selectableRowsHighlight
                            highlightOnHover
                            subHeader
                            subHeaderComponent={
                                <input type="text"
                                className="w-25 form-control"
                                placeholder="Search..."
                                value={ search}
                                onChange={(e)=>SetSearch(e.target.value)}
                                
                                />
                            }
                            actions={
                              <div>
                                <select className="form-select" value={winner} aria-label="Default select example" onChange={(e)=>handleWinners(e.target.value)}>
                                  <option selected>Yes/No</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>
                            }
                            subHeaderAlign="right"
                            
                            />
                        </React.Fragment>
                    </div>

                </article>
            </div>

      </div>
    </div>
  )
}

export default List;