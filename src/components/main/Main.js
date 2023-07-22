import React from 'react';
import './Main.css'
import HornedBeast from '../hornedBeast/HornedBeast';



export default function Main({data}) {
  
  console.log(data);
  return (
    <div className='main'>
      { 
      data.map(
        (item)=>
      <HornedBeast title={item.title} 
      item={item}
      image_url={item.image_url} 
      keyword={item.keyword} 
      description={item.description} 
      key={item._id} 
      object={item}
      />
                  )
      }

    </div>
  )
}
