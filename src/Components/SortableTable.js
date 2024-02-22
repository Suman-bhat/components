import { useState } from "react";
import Tabel from "./Table";
import { BsCaretUpFill,BsCaretDownFill} from "react-icons/bs";

function SortableTable(props){
    const [sortBy,setSortBy]=useState(null);
    const [sortOrder,setSortOrder]=useState(null);
    const {config,data}=props;

    const handleClick =(label)=>{
        if (sortBy && label !==sortBy){
            setSortBy('asc');
            setSortBy(label)
            return;
        }
        if (sortOrder===null){
            setSortOrder('asc');
            setSortBy(label);
        }else if (sortOrder==='asc'){
           setSortOrder('desc')
           setSortBy(label);
        }else if (sortOrder==='desc'){
            setSortOrder (null)
            setSortBy(null);
        }  
    }
    const updatedConfig = config.map((column)=>{
          if(!column.sortableVaue){
          return column;
          }
          return {
            ...column,
            header:()=><th className="cursor-pointer hover:bg-gray-100" onClick={()=>handleClick(column.label)}>
                <div className="flex items-center">
                {getIcons(column.label,sortBy,sortOrder)}
                {column.label} 
                
                </div>
                </th>
          }
    })
  //only sort data if sortOrder and sortBy are not null.
  //never modify the array hence you need to make a copy of data object.
  // Find the correct sortValue function and use it for sort value function and use it for sorting 

          let SortedData=data;
          if(sortOrder&& sortBy){
            const{ sortableVaue }=config.find(column=>column.label===sortBy);
            SortedData = [...data].sort((a,b)=>{
                const valueA =sortableVaue(a);
                const valueB = sortableVaue(b);
                const revseOrder =sortOrder==='asc'? 1:-1;
                if (typeof valueA ==='string'){
                    return valueA.localeCompare (valueB)*revseOrder;
                }else{
                    return (valueA -valueB)* revseOrder;
                }
            });
          }

    return  <Tabel {...props} data={SortedData} config={updatedConfig}/>
    
}


function getIcons(label,sortBy,sortOrder){
    if (label !== sortBy){
        return <div>
            <BsCaretUpFill/>
            <BsCaretDownFill/>
        </div>;
    } 
    if (sortOrder ===null){
        return <div>
        <BsCaretUpFill/>
        <BsCaretDownFill/>
    </div>;
    } else if(sortOrder ==='asc'){
        return <div>
            <BsCaretUpFill/>
           
        </div>;
    }else if (sortOrder === 'desc'){
        return <div>
       
        <BsCaretDownFill/>
    </div>;
    }

}




export default SortableTable;