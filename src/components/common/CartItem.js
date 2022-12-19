import React from "react";

import trashIcon from '../../assets/icons/trash.svg';
import '../../styles/CartItem.css';

const CartItem = ({item,onTrashClick, increment, decrement, quantity}) => {

  return (
    <div className="cart-item">
      <img src={item.imageUrl} />
      <div className="cart-item-content">
        <div className="cart-item-content-header">
          <h4 className='cart-item-title'>{(item.title.length > 30) ? item.title.slice(0, 30) + '...' : item.title}</h4>
          <img className="trash-icon" src={trashIcon} onClick={() => onTrashClick()} />
        </div>
        <div className="cart-item-lower-content">
          <div className="incrementer">
            <p onClick={decrement}>-</p>
            <p className="quantity">{quantity}</p>
            <p onClick={increment}>+</p>
          </div>
          <h3 className="cart-item-price">{item.price}<span>EUR</span></h3>
        </div>
      </div>
    </div>
  )
}

export default CartItem;