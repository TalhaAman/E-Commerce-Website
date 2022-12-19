import React from "react";
import { useDispatch } from "react-redux";
import { addWorkshopsToCart, updateCartUI } from "../../Redux/cartSlice";

import { Button } from "../common";
import '../../styles/Ticket.css';

const Ticket = ({item}) => {
  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(updateCartUI(true));
    dispatch(addWorkshopsToCart(item));     
 }

  return (
    <div className='ticket'>
          <div className='ticket-heading'>
           <h5>Buy your Ticket</h5> 
          </div>
          <h2 className="ticket-price">{item.price}<span>EUR</span></h2>
          <Button text="Add to Cart" classes='ticket' onClick={openCart}/>
          <h6 className="ticket-subtotal">Subtotal:</h6>
        </div>
  )
}
export default Ticket;