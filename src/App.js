import React from "react";

function Food({name, image}){
  return <div>
    <h2>I Like {name}</h2>
    <img src = {image} />
  </div>
}

const foodLike=[
  {
    name: "kimchi",
    image: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https:%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F27617836561AE05F2A.jpg"
  },
  {
    name: "meat",
    image: "https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/steakpanistock.jpg?ve=1&tl=1?ve=1&tl=1.jpg"
  },
  {
    name: "coffee",
    image: "http://www.indigofinance.com.au/wp-content/uploads/2018/07/istock-157528129.jpg"
  },
  {
    name: "cake",
    image: "https://www.superiorwallpapers.com/download/carpet-made-of-coffee-beans-delicious-muffin-and-coffee-2560x1440.jpg"
  }
]

function App() {
  return (
  <div>
    {foodLike.map(dish => <Food name={dish.name} image={dish.image} /> )}
  </div>);
}

export default App;
