
import useNavagation from "../hooks/use-Navagation";

function Route( {path,children}){
   const {currentPath}=  useNavagation();
   if (path === currentPath){
   return children ;
   }
   return null;
   
}
export default Route;