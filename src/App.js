import React from "react";

function Food({fav}){
  return <h1>I Like {fav}</h1>
}

function App() {
  return (
  <div>
    <h1>Hello!!!!</h1>
    <Food fav="kimchi" />
    <Food fav="meat" />
    <Food fav="coffee" />
    <Food fav="cake" />
  </div>);
}

export default App;
