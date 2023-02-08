import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import { Button } from "../common";

import ClockIcon from "../../assets/icons/clock-icon.svg";
import CalenderIcon from "../../assets/icons/calender.svg";
import DesignIcon from "../../assets/icons/design.svg";
import FrontEndIcon from "../../assets/icons/frontend.svg";
import BackendIcon from "../../assets/icons/backend.svg";
import MarketingIcon from "../../assets/icons/marketing.svg";
import "../../styles/ProductCard.css";

const ProductCard = ({ item, onBtnClick }) => {
  const navigate = useNavigate();
  const category = () => {
    if (item.category === "design") {
      return DesignIcon;
    } else if (item.category === "frontend") {
      return FrontEndIcon;
    } else if (item.category === "backend") {
      return BackendIcon;
    } else if (item.category === "marketing") {
      return MarketingIcon;
    }
  };

  return (
    <div className="product-card">
      <div className="card-img">
        <img
          alt="img"
          src={item.imageUrl}
          onClick={() => {
            navigate("/workshop-details", { state: item });
          }}
        />
      </div>
      <div className="card-content">
        <div className="date-time-parent">
          <div className="date-time">
            <img className="date-icon" alt="icon" src={CalenderIcon}></img>
            <p>{moment(item.date).format("D.M.YYYY.")}</p>
          </div>
          <div className="date-time">
            <img className="date-icon clock" alt="icon" src={ClockIcon}></img>
            <p>{moment(item.date).format("hh:00")}h</p>
          </div>
        </div>
        <div>
          <div
            className="title"
            onClick={() => navigate("/workshop-details", { state: item })}
          >
            <h4>
              {item.title.length > 38
                ? item.title.slice(0, 29) + "..."
                : item.title}
            </h4>
          </div>
        </div>
        <div className="card-lower-section">
          <div className="price">
            <h3>
              {item.price}
              <span>EUR</span>
            </h3>
          </div>
          <div>
            <Button
              text="Add to Cart"
              classes="card"
              onClick={onBtnClick}
              item={item}
            />
          </div>
        </div>
        <div className="category-icon">
          <img src={category()} alt="icon" />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
