import React from "react";
import {useState} from "react";

import Card from "../Components/Card/Card";
import Paginado from "../Components/Paginado/Paginado"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import digimon from "../../Data/Digimon.json";

const All_digimons = () => {
  const allDigimons= digimon
  const[orden,setOrden]=useState('')
  const[currentPage,setCurrentPage]=useState(1)
  const [digiPerPage, setDigiPerPage]=useState(40)
  var indexOfLastDigi=currentPage * digiPerPage
  var indexOfFirstDigi=indexOfLastDigi - digiPerPage
  var currentDigi= allDigimons.slice(indexOfFirstDigi,indexOfLastDigi)
  var countPages2=Math.ceil(allDigimons.length/digiPerPage)
  const paginado=(pageNumber)=>{
    if(pageNumber>0 && pageNumber<=countPages2)
    setCurrentPage(pageNumber)
}


function handleSelectPaginado(e){
  console.log("VALUE:",e.target.value)
  setDigiPerPage(e.target.value)
  indexOfLastDigi=currentPage * digiPerPage
  paginado(1)
  indexOfFirstDigi=indexOfLastDigi - digiPerPage
  currentDigi= allDigimons.slice(indexOfFirstDigi,indexOfLastDigi)
  countPages2=Math.ceil(allDigimons.length/digiPerPage)
}

  return (
    <div
      key="Container A"
      className=" flex flex-col place-items-center w-full m-auto h-full"
      style={{ backgroundColor: "#F2EDDC" }}
    >
      <h1 className="font-bold mt-28 mb-12 text-4xl text-center md:text-4xl md:text-4xl sm:text-3xl text-green-800 animate-fade-down">
        Digimons Disponibles
      </h1>

      <div className=" flex flex-col md:flex-row my-4 mx-auto md:ml-6 lg:ml-4 xl:ml-64 animate-fade-down">
        
      </div>

      <div key="Cards Container" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
  {currentDigi?.map((e, index) => {
    return (
      <Card
        key={`card-${index}`}
        image={e.img}
        front={e.name}
        back={e.level}
      />
    );
  })}
</div>
      <Paginado
            digiPerPage={digiPerPage}
            allDigimons={allDigimons.length}
            paginado={paginado}
            currentPage={currentPage}/>

      
    </div>
  );
};

export default All_digimons;
