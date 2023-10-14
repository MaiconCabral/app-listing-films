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

  const movies = [
    {
        id: 1,
        year: "1980",
        title: "Can't stop the Music",
        winner: "Yes",
    },
    {
      id: 2,
      year: "1981",
      title: "Cruising",
      winner: "No",
    },
    {
      id: 3,
      year: "1982",
      title: "Xanadu",
      winner: "Yes",
    },
    {
      id: 4,
      year: "1981",
      title: "Endless Love",
      winner: "No",
    },
    {
      id: 5,
      year: "1990",
      title: "Tarzan, the Ape man",
      winner: "No",
    },
]

  const [data, setData]= useState([]);
  const [search, SetSearch]= useState('');
  const [filter, setFilter]= useState([]);
  
  const getProduct=async()=>{
  try{
    const req= await fetch("https://fakestoreapi.com/products");
    const res= await req.json();
    setData(res);
    setFilter(res);
  } catch(error){
   console.log(error);
  }
  }
  useEffect(()=>{
    getProduct();
  }, []);
  
  useEffect(()=>{
    const result= data.filter((item)=>{
     return item.title.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFilter(result);
  },[search]);
  
  const handleDelete=(val)=>{
  const newdata= data.filter((item)=>item.id!==val);
  setFilter(newdata);
  }
  
  const tableHeaderstyle={
  headCells:{
    style:{
        fontWeight:"bold",
        fontSize:"14px",
        backgroundColor:"#ccc"
  
    },
  },
  }

  return (
    <div className='container'>
      <div className='row'>
        <h1>View List</h1>

        <div className='col-md-12 col-xl-12'>
                <article className="painel-card">
                    <h1>List years with multiple winners</h1>

                    <div className="content-table">
                         <React.Fragment>
                            <h1>Product List</h1>
                            <DataTable 
                            customStyles={ tableHeaderstyle}
                            columns={columns}
                            data={movies}
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