import { useState } from "react";
import DropDown from "./DropDown";

function DropdownPage(){

    const [selection,setSelection]=useState(null);
    const options= [
        {
            label:'Red', value:'red'
        },
        {
            label:'Green', value:'green'
        },
        {
            label:'Yellow', value:'yellow'
        },
        {
            label:'Orange', value:'orange'
        },
    ]
      
    const handleSelect=(option)=>{
         setSelection(option)
    }

    return <div> 
        <DropDown options={options} selection={selection} onSelect={handleSelect}/>
    </div>
}
export default DropdownPage;