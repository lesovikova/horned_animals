import React from 'react';
import './HornedBeast.css';

export default function HornedBeast(props) {
  return (
    <div className='beast'>
        <h2 className='beast__title'>{props.title}</h2>
        <img className='beast__image' src={props.image_url} alt={props.keyword}></img>
        <p className='beast__description'>{props.description}</p>
    </div>
  )
}
