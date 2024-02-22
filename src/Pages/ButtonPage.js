import Button from '../Components/Button';

import { BsFillMicMuteFill,BsSearch,BsFillBinocularsFill,BsFillAwardFill,BsFillGeoAltFill} from "react-icons/bs";

function ButtonPage() {
  return (
    <div  className=' flex justify-evenly items-center cursor-pointer'>
        
     <div>
            <Button primary outline className= 'mb-5'>
                Mute
                <BsFillMicMuteFill/></Button>
        </div>
        <div>
            <Button secondary rounded outline  className= 'mb-5'> 
            Find me
            <BsSearch/>
            </Button>
        </div>
        <div>
            <Button success rounded className= 'mb-5'>
                Tap to explore
                <BsFillBinocularsFill/></Button>
        </div>
        <div>
            <Button warning rounded className= 'mb-5'>
                Submit
                <BsFillAwardFill/>
                </Button>
        </div>
        <div>
            <Button danger className= 'mb-5'>
                Location
            <BsFillGeoAltFill/>
            </Button>
        </div>
      
    </div>
  );
}

export default ButtonPage;
