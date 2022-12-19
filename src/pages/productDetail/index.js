import React,{useState} from "react";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { updateCartUI } from "../../Redux/cartSlice";
import { SimilarItems, Ticket } from "../../components/productDetail";
import { CartSidebar, Footer, Navbar, CheckoutForm, Thanks } from "../../components/common";
import ArrowIcon from '../../assets/icons/arrow.svg';
import DesignIcon from '../../assets/icons/design.svg';
import FrontEndIcon from '../../assets/icons/frontend.svg';
import BackendIcon from '../../assets/icons/backend.svg';
import MarketingIcon from '../../assets/icons/marketing.svg';
import ClockIcon from '../../assets/icons/clock-icon.svg';
import CalenderIcon from '../../assets/icons/calender.svg';
import '../../styles/ProductDetails.css';

const WorkshopDetails = () => {
  const item = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isCartOpen, workshop } = useSelector(state => state.cart);
  const [checkout, setCheckout] = useState('checkout-none');
  const [thanks, setThanks] = useState('thanks-none');

  const categoryIcon = () => {
    if(item.state.category === 'design'){
      return DesignIcon;
    }
    else if(item.state.category === 'frontend'){
      return FrontEndIcon;
    }
    else if(item.state.category === 'backend'){
      return BackendIcon;
    }
    else if(item.state.category === 'marketing'){
      return MarketingIcon;
    }
  }
  const backToShop = () => {
    setThanks('thanks-none');
    dispatch(updateCartUI(false));
  }

  return (
    <div>
      <Navbar/>
      <div style={{display: 'flex'}}>
        <div className='header-section'>
          <div 
            className="category" 
            onClick={() => {
              navigate('/',{state: {}});
            }}
            >
            <div className="details-left-section">
              <img className="arrow" src={ArrowIcon}></img>  
              <h6 className="back">Back</h6>
            </div>
          </div>
        </div>
      <div className='product-details'>
        <div className="details-cover-img">
          <img 
            alt='image' 
            src={item.state.imageUrl} 
          /> 
        </div>
        <div className='details'>
          <div className='content'>
            <div className="content-header">
              <div className="details-category">
                <img src={categoryIcon()} />
              </div>
              <div>
                <div className='date-time-parent'>
                  <div className='date-time'>
                    <img className='date-icon' src={CalenderIcon} ></img>
                    <p>{moment(item.state.date).format('D.M.YYYY.')}</p>
                  </div>
                  <div className='date-time'>
                    <img className='date-icon' src={ClockIcon}></img>
                    <p>{moment(item.state.date).format('hh:00')}h</p>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="detail-title">{item.state.title}</h4>
            <p className="detail-desc">{item.state.desc}</p>    
          </div>
          <Ticket item={item.state}/>
        </div>
      </div>
      </div>
      <SimilarItems item={item.state} />
      <CartSidebar 
        isOpen={isCartOpen} 
        checkoutFormVisible={checkout} 
        onClick={() => 
          workshop.length ? setCheckout('checkout-form') : checkout  
        }
      />
      <CheckoutForm 
        classes={checkout} 
        onFormClose={() => setCheckout('checkout-none')}
        onCheckout={() => {
          setCheckout('checkout-none');
          setThanks('thanks');
        }}
      />
      <Thanks classes={thanks} onClick={() => backToShop()}/>
      <Footer />   
    </div>
  )
}
export default WorkshopDetails;