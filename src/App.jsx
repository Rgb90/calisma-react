import './App.css'

import React from 'react';

function App() {
  const date = new Date(); // new Date(2024, 1, 1, 19), new Date(2024, 1, 1, 15), new Date(2024, 1, 1, 10) değiştir, hızlı gör
  const currentHour = date.getHours();

  let greetingMessage;

  const customStyle = {
    color: ""
  }

  if (currentHour < 12) {
    greetingMessage = "Hayırlı sabahlar";
    customStyle.color = "red";
  } else if (currentHour < 18) {
    greetingMessage = "Hayırlı günler";
    customStyle.color = "green"; // Öğlen sonrası yeşil renk
  } else {
    greetingMessage = "Hayırlı geceler";
    customStyle.color = "blue"; // Akşam mavi renk (örnek)
  }

  return (
    <>
      <h1 className='heading' style={customStyle}>{greetingMessage}</h1>
    </>
  );
}

export default App;




/* const name = "Ragibe AK";
const dinamikTarih = new Date(); */

/* const year = dinamikTarih.getFullYear(); 
bu şekilde de olur */


/* const customStyle = {
  color: "red",
  border: "1px solid gray",
};

  return (
    <>
     <h1 style={customStyle}> Hello World </h1>
       <p>Created by {name}</p>
    <p>Copyright {dinamikTarih.getFullYear() }</p>
    </>
  ) */