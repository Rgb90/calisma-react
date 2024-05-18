import './App.css'

import React from 'react';

function App() {
  const date = new Date(2024, 1, 1, 19);
  const currentHour = date.getHours();

  let greetingMessage;

  if (currentHour < 12) {
    greetingMessage = "Hayırlı sabahlar"
  } else if (currentHour < 18) {
    greetingMessage = "Hayırlı günler"
  } else { greetingMessage = "Hayırlı geceler" }

  return (
    <>
      <h1>{greetingMessage}</h1>
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