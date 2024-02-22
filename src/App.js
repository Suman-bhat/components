import DropdownPage from "./Pages/DropdownPage";
import AccordionPage from"./Pages/AccordionPage";
import ButtonPage from "./Pages/ButtonPage"
import ModalPage from "./Pages/ModalPage";
import TabelPage from './Pages/TabelPage';
import SideBar from "./Components/SideBar";
import Route from "./Components/Route";


function App(){
    return <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar/>
         <div className="col-span-5">
            <Route path="/accordion">
                <AccordionPage/>
            </Route>
         
            <Route path="/dropdown">
                <DropdownPage/>
            </Route>
         
            <Route path="/button">
                <ButtonPage/>
            </Route>
            <Route path='/modal'>
                <ModalPage/>
            </Route>
            <Route path='/tabel'>
               <TabelPage/>
            </Route>
         </div>
    </div>
    
}
export default App;