import React, { useState } from "react";
import Modal from "./Modal";
import "./Modalmain.css";
import button from "../../assets/button3.png";

function Modalmain(props) {
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
      <button className="btton_Modalmain" onClick={openModal}>
        {" "}
        <img src={button} className="submit_button" alt="submit_button" />
      </button>

      <Modal open={modalOpen} close={closeModal} header="백수의 일기장">
        <h1>참 잘했어요!</h1>
        <main> {props.children} </main>
        <p>일기장 작성이 완료 되었습니다.</p>
      </Modal>
    </React.Fragment>
  );
}

export default Modalmain;
