import React from "react";

import CartIcon from "../../assets/icons/cart-icon.svg";
import "../../styles/Button.css";

const Button = ({ text, classes, onClick }) => {
  return (
    <button className={`${classes}-btn btn`} onClick={onClick}>
      <p>{text}</p>
      <img className="btn-icon" alt="cart-icon" src={CartIcon}></img>
    </button>
  );
};
export default Button;
