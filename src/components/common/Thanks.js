import React from "react";

import "../../styles/Thanks.css";
import Button from "./Button";

const Thanks = ({ classes, onClick }) => {
  return (
    <div className={classes}>
      <div className="thanks-box">
        <div>
          <h2>Thank You!</h2>
        </div>
        <div>
          <h6>
            Thanks for using our services, Click on below Button to continue
            shopping
          </h6>
        </div>
        <div>
          <Button classes="thanks" text="Back to Shop" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default Thanks;
