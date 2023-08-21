import React, {useState} from "react";

function Item({ name, category }) {

  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
 
  return (
    <li className={isOn ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isOn ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;