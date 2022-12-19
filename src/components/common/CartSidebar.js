import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateCartUI, deleteCartWorkshop, incrementQuantity, decrementQuantity, initializeQuantity } from "../../Redux/cartSlice";
import cartIcon from '../../assets/icons/cart-icon.svg';
import crossIcon from '../../assets/icons/cross.svg';
import {CartItem, Button} from '../common'
import '../../styles/CartSidebar.css';

let num =0;
const CartSidebar = ({isOpen,onClick}) => {
  const dispatch = useDispatch();
  const { workshop } = useSelector(state => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartLength, setCartLength] = useState(0);

  
    const onTrashClick = cartItem => {
      dispatch(deleteCartWorkshop(cartItem.id));
    }
    useEffect(() => {
      let newPrice = 0;
      for(let i=0; i<workshop.length; i++){
        newPrice += workshop[i].price * workshop[i].quantity; 
      }
      setTotalPrice(newPrice);
      setCartLength(workshop.length);

    }, [workshop])

    const increment = (id) => {
      const newWorkshop = workshop.map(data => {
        return {...data}
      })
    
      for(let i=0; i<workshop.length; i++){
        if(newWorkshop[i].id === id){
          
          if(newWorkshop[i].quantity){
            newWorkshop[i].quantity +=1;
          }
        }
      }
      dispatch(incrementQuantity(newWorkshop))
    }
    const decrement = (id) => {
      const newWorkshop = workshop.map(data => {
        return {...data}
      })
      for(let i=0; i<workshop.length; i++){
        if(newWorkshop[i].id === id){
          if(newWorkshop[i].quantity && newWorkshop[i].quantity > 1){
            newWorkshop[i].quantity -=1;
          }
        }
      }
      dispatch(decrementQuantity(newWorkshop))
    }    

  return (
    <div className={isOpen ? 'cart-sidebar' : 'no-cart'}>
      <div className="cart-sidebar-header">
        <img src={cartIcon} />
        <h5>{`${cartLength} Workshops`}</h5>
        <img className="cross-icon" src={crossIcon} onClick={() => dispatch(updateCartUI(false))}/>
      </div>
      <div>
        {workshop.map(item =>{
          return (
            <CartItem 
              key={item.id} 
              item={item} 
              increment={() => increment(item.id)} 
              decrement={() => decrement(item.id)} 
              onTrashClick={() => onTrashClick(item)} 
              quantity={item.quantity} 
            />   
          )
        })}
      </div>
      <div className="subtotal">
        <h6>SUBTOTAL</h6>
        <h2>{totalPrice}<span>EUR</span></h2>
      </div> 
      <Button text='Checkout' classes='checkout' onClick={onClick}/>  
    </div>
  )
}
export default CartSidebar;