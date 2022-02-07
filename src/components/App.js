import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [ money, setMoney ] = useState(100);
  const eatenSushis = sushis.filter( sushi => sushi.isEaten === true);

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(sushisData => {
        const updatedSushis = sushisData.map( sushi => {return { ...sushi, isEaten: false}});
        setSushis(updatedSushis);
      })
  }, []);

  function handleEatenSushi (eatenSushi) {
    if ( money > eatenSushi.price ) {
      eatenSushi.isEaten = !eatenSushi.isEaten;
      setSushis(sushis.map( sushi => sushi.id === eatenSushi.id ? eatenSushi : sushi));
      setMoney(money => money - eatenSushi.price);
    } else {
      alert ('Need more money');
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis = { sushis } onEaten = { handleEatenSushi }/>
      <Table money = { money } plates = { eatenSushis }/>
    </div>
  );
}

export default App;
