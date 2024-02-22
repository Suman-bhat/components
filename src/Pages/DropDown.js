import { useState } from "react"
import {BsCaretDown} from "react-icons/bs";
import Pannel from "../Components/Pannel";
function DropDown({options,onSelect,selection}){
     
 const [open,SetOpen]= useState(false);
 const handleClick=()=>{
    SetOpen(!open);
 }

 const handleOptionClick =(option)=>{
    SetOpen(false);
    onSelect(option);

 }
    const renderedItems = options.map((option)=>{
     return <div onClick={()=>handleOptionClick(option)} key={option.label} className="hover:bg-sky-100 rounded cursor-pointer p-1">{option.label}</div>
    })
   
    return <div className="w-48 relative">
        <Pannel onClick={handleClick} className="flex justify-between items-center cursor-pointer ">{selection?.label || 'Select....'}
        <BsCaretDown className="text-2xl"/>
        </Pannel>
       
       
        { open &&<Pannel className="absolute top-full ">{renderedItems}</Pannel>}
        
    </div>
    
}
export default DropDown;