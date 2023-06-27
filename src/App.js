import './App.css';
import { useState } from 'react';
import Modal from './components/Modal';
import Form from './components/Form';
import ModalContent from './components/ModalContent';

function App() {
  const [showModal, setShowModal]=useState(false)
  const [content, setContent] = useState(true)
  const [modalForm, setModalForm] = useState(false)

  const closeModal = ()=>{
      setShowModal(false)
  }

  const TrueFalse = false;
  return (
    <>
      {showModal&&<Modal closeModal={closeModal}>
          {content&&<ModalContent></ModalContent>}
          {modalForm&&<Form></Form>}
        </Modal>}
        
      <button className='btn' style={{
        backgroundColor: TrueFalse ? "green" : "red",
        color: "white"
        
        }} onClick={()=>{setShowModal(true); setContent(true); setModalForm(false)}}>Show Modal</button>
      <button className='btn' onClick={()=>{setShowModal(true); setContent(false); setModalForm(true)}}>Show Form Modal</button>
    </>
  );
}

export default App;
