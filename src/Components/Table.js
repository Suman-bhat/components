import { Fragment } from "react";// need display key but donot show in dom 

function Tabel({data,config}){
       
    const renderedHeaders =config.map((column)=>{
              if(column.header){
                return <Fragment key={column.label }>{column.header()}</Fragment>
              }
        return<th key={column.label}>{column.label}</th>
        
    })


    const renderedData= data.map((fruit)=>{
      const  renderedColums=config.map((column)=>{
          return  <td className="p-2"
           key={column.label}>{column.render(fruit)}
           </td>
        })
        return( <tr className="border-b" key={fruit.name}>
          {renderedColums}
        </tr>
      )
        
      });
  
   return (
   <table className="table-auto border-spacing-2">
    <thead>
         <tr className="border-b-2">
             {renderedHeaders}
          </tr>
          </thead>
          <tbody>{renderedData}</tbody>
      </table>
  
  
   )
}
export default Tabel;


  