import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard() {
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
                                <tr>
                                    <th scope="row">1986</th>
                                    <td>2</td>
                                
                                </tr>
                                <tr>
                                    <th scope="row">1990</th>
                                    <td>2</td>
                                   
                                </tr>
                                <tr>
                                    <th scope="row">2015</th>
                                    <td colspan="2">2</td>
                                </tr>
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
                                <tr>
                                    <th scope="row">Columbia Pictures</th>
                                    <td>2</td>
                                
                                </tr>
                                <tr>
                                    <th scope="row">Paramount Pictures</th>
                                    <td>2</td>
                                   
                                </tr>
                                <tr>
                                    <th scope="row">Warner Bros.</th>
                                    <td colspan="2">2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </article>
            </div>
            <div className='col-md-12 col-xl-6'>
                <article className='painel-card'>
                    <h1>Producers with longest ans shortest interval between wins</h1>
                    
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
                                <tr>
                                    <th scope="row">Matthew Vaughn</th>
                                    <td>13</td>
                                    <td>2002</td>
                                    <td>2015</td>
                                
                                </tr>
                                <tr>
                                    <th scope="row">Martin Lee</th>
                                    <td>13</td>
                                    <td>2002</td>
                                    <td>2015</td>
                                
                                </tr>
                                
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
                                <tr>
                                    <th scope="row">Joel Silver</th>
                                    <td>1</td>
                                    <td>1993</td>
                                    <td>1996</td>
                                
                                </tr>
                                <tr>
                                    <th scope="row">Away Brow</th>
                                    <td>1</td>
                                    <td>1990</td>
                                    <td>1991</td>
                                
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>

                </article>
            </div>
            <div className='col-md-12 col-xl-6'>
                <article className='painel-card'>
                    <h1>List movie winners by year</h1>
                    
                    <form action="">

                        <input type="number" placeholder="Search by year" name="year"/>
                        <button className='btn btn-primary'>
                            <i class="bi bi-search"></i>
                        </button>
                    </form>

                    <div className="content-table">
                        <p>Minimum</p>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>1995</td>
                                    <td>lorem ipsum</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>1960</td>
                                    <td>lorem ipsum</td>
                                </tr>
                                
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