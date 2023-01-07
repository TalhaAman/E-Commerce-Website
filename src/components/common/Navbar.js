import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateCartUI } from "../../Redux/cartSlice";
import MainLogo from '../../assets/images/main-logo.svg';
import CartIcon from '../../assets/icons/cart-icon.svg';
import '../../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isCartOpen, workshop} = useSelector(state => state.cart);
  const [cart, setCart] = useState('Cart is Empty');

  useEffect((() => {
    if(workshop.length === 1){
      setCart(`${workshop.length} workshop in cart`)
    } else if(workshop.length > 1){
      setCart(`${workshop.length} workshops in cart`)
    } else if(workshop.length === 0){
      setCart('Cart is Empty')
    }
  }),[workshop])
  
  return (
  <div className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
        <img  src={MainLogo} alt='logo'/>
      </div>
      <div className="cart-condition" onClick={() => dispatch(updateCartUI(!isCartOpen))}>
        <img src={CartIcon} alt='cart' current-count='1' />
        <h6>{cart}</h6>
      </div>
  </div>
  )
}


export default Navbar;