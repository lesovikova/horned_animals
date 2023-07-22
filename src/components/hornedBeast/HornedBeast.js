import React, { useState } from 'react';
import './HornedBeast.css';
import Modal from '../modal/Modal';


export default function HornedBeast({title, image_url, keyword, description, object}) {
  
  
  const [count, setCount] = useState(() => 0);

  function increaseCount() {
    setCount(prevCount => prevCount + 1);
  }

  const [open, setOpen] = useState(()=>false);

  function openModal() {
    setOpen(open => true)
  }
  function closeModal() {
    setOpen(open => false)
  }

  return (
    <div className='beast'>
      {open && <Modal object={object} closeModal={closeModal}/>}
        <h2 className='beast__title'>{title}</h2>
        <img onClick={openModal} className='beast__image' src={image_url} alt={keyword} object={object}></img>
        <p className='beast__description'>{description}</p>
        <span onClick={increaseCount} className='beast__counter'>This beast is favourite {count} times</span>
    </div>
  )
}

