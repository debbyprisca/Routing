import React from 'react'
import Header from '../components/Header'
import events from '../assets/events.jpg'; 

function Gallerypage() {
  return (
    <div>
        <Header />
        <h1>Gallerypage</h1>
      
    <div>
      <img src={events} alt="Logo" />
    </div>
  );


        
    </div>
  )
}

export default Gallerypage

