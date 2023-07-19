import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {

let [name, changed] = useState("Anna");

function changeName() {
  changed(name="Ann") 
}

  return (
    <div onClick={changeName} className='footer'>
      <p className='footer__copy'>2023 {name} Lisovykova</p>
    </div>
  )
}
