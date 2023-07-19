import React, { useState } from 'react';
import './HornedBeast.css';



export default function HornedBeast({title, image_url, keyword, description}) {
  
  const [count, setCount] = useState(() => 0);

  function increaseCount() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className='beast'>
        <h2 className='beast__title'>{title}</h2>
        <img onClick={increaseCount} className='beast__image' src={image_url} alt={keyword}></img>
        <p className='beast__description'>{description}</p>
        <p className='beast__counter'>This beast is favourite {count} times</p>
    </div>
  )
}
