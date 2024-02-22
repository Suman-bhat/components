import { useContext } from "react";
import NavigationContext from "../Context/Navigation";

function useNavagation (){
 return  useContext(NavigationContext);
}
export default useNavagation;