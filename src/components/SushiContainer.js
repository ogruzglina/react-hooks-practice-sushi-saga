import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi';

function SushiContainer({ sushis, onEaten }) {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  const fourSushi = sushis.slice(currentIndex, currentIndex + 4)
    .map(s => <Sushi key = {s.id} sushi = { s } onEaten = { onEaten }/>);

  function handleShowMore () {
    setCurrentIndex(currentIndex => currentIndex + 4);
    sushis
      .slice(currentIndex, currentIndex + 4)
      .map(s => <Sushi key = {s.id} sushi = { s } onEaten = { onEaten }/>);
  }

  return (
    <div className="belt">
      { fourSushi }
      <MoreButton onShowMore = {handleShowMore}/>
    </div>
  );
}

export default SushiContainer;
