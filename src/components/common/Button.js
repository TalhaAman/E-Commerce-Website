import React from "react";
import { useDispatch, useSelector } from "react-redux";

import '../../styles/Button.css';

const Button = ({text, classes, onClick}) => {

  return (
    <button
      className={`${classes}-btn btn`}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  )
}
export default Button;