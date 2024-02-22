
 import classNames from "classnames";
 import useNavagation from "../hooks/use-Navagation";

 
function Link ({to,children,className,activeClassName}){
    const {Navigation,currentPath}=  useNavagation();

    const classes =classNames('text-blue-500',className, 
    currentPath ===to && activeClassName
     )
     

const handleClick=(e)=>{
    e.preventDefault();
     Navigation ( to);


}


    return <a href="to" className={classes}onClick={handleClick}>{children}</a>
}
export default Link;