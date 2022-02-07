import React from "react";

function Sushi({ sushi, onEaten }) {
  const s = sushi.isEaten 
  ? null
  : (<img
    src={ sushi.img_url }
    alt={ sushi.name }
    width="100%"
  />);

  return (
    <div className="sushi">
      <div className="plate" onClick = { () => onEaten(sushi) }>
        { s }
      </div>
      <h4 className="sushi-details">
        { sushi.name } - $ { sushi.price }
      </h4>
    </div>
  );
}

export default Sushi;
