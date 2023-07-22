import React from 'react';
import './Modal.css';
import data from '../../data.json';


export default function Modal({object, closeModal}) {
  return (
    <div className="modal">
      <div className="modal-container">
        
        <img src={object.image_url}/>
        <p>{object.description}</p>
        <span onClick={closeModal} className='modal__cross'>X</span>
      </div>
      <span className="modal-button"></span>
      </div>
  )
}
