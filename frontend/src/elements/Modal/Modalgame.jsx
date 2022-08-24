import React, { useState } from "react";
import Modal from "./Modal";
import "./Modalgame.css";
import button from "../../assets/button3.png";

function Modalgame(props) {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <button className="btton_Modalgame" onClick={openModal}>
        입 력
      </button>

      <Modal open={modalOpen} close={closeModal} header="백런스게임">
        
        <main> {props.children} </main>
     
      </Modal>
    </React.Fragment>
  );
}

export default Modalgame;
