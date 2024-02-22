import { useState } from "react";
import Modal from "../Components/Modal";
import Button from "../Components/Button";

function ModalPage(){
  const [showModal,setShowModal]= useState(false);
     const handleClick=()=>{
        setShowModal(!showModal);
     }
     const handleClose=()=>{
        setShowModal(false)
     }
      


     const modal =<Modal actionBar={<Button success onClick={handleClick}>I Accept</Button>} onClose={handleClose}>
        <p>
            I have a import message to show
        </p>
     </Modal>

    return <div>
        <Button secondary onClick={handleClick}>Open Modal</Button>
        { showModal && modal  }
    </div>
}
export default ModalPage;