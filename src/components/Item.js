import { useState } from "react";

function Item({ name, category }) {
  const [isClick, setOnchange] = useState(false);

  function handleChange(){
    setOnchange((isClick) => !isClick);
  }
  return (
    <li className={ isClick ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleChange}>{ isClick ?"Remove from Cart" :"Add to Cart" }</button>
    </li>
  );
}

export default Item;
