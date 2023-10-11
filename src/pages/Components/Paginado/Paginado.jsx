import React from "react";



const Paginado = ({digiPerPage, allDigimons,paginado,currentPage})=>{
    const pageNumbers=[]
    const countPages=Math.ceil( allDigimons/digiPerPage)
   
   
    for(let i=1;i<=countPages;i++){
        pageNumbers.push(i)
    }
    
    
    return(
        <div>
  <ul style={{ display: 'flex', alignItems: 'center' }}>
    <li>
      <button onClick={() => paginado(currentPage - 1)}>Prev</button>
    </li>
    {pageNumbers?.map((number) => (
      <li key={number}>
        <button
          onClick={() => paginado(number)}
          style={{
            margin: '0',
            padding: '5px',
            backgroundColor: number === currentPage ? 'green' : 'transparent',
            color: number === currentPage ? 'white' : 'black',
          }}
        >
          {number}
        </button>
      </li>
    ))}
    <li className="numbers">
      <button onClick={() => paginado(currentPage + 1)}>Next</button>
    </li>
  </ul>
</div>

          )
}

export default Paginado