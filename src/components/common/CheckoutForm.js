import React,{useState} from "react";
import { useForm } from 'react-hook-form';

import Button from "./Button";
import CrossIcon from '../../assets/icons/cross.svg';
import '../../styles/CheckoutForm.css';

const CheckoutForm = ({classes, onFormClose, onCheckout}) => {
  const { register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => { 
    onCheckout();
    console.log(data)
  }
  
  return (
    <div className={classes}>
      <form className="form-fields" onSubmit={handleSubmit(onSubmit)} >
      <div className="form-box">
        <div className="checkout-form-header">
          <h2>Checkout</h2>
          <img src={CrossIcon} onClick={onFormClose}/>
        </div>
        <div className='checkout-form-description'>
          <h6>Provide valid information in below fields to proceed </h6>
        </div>
        
          <div>
            <label className="label">
              <h6>First Name</h6>
              <span>{errors.firstName?.type === 'required' && 'This field is required'}</span>
            </label>
            <input type='text' className='input' {...register('firstName', {required: true})} placeholder="Type your first name here"></input>
          </div>
          <div>
            <label className="label">
              <h6>Last Name</h6>
              <span>{errors.lastName?.type === 'required' && 'This field is required'}</span>
            </label>
            <input type='text' className='input' {...register('lastName', {required: true})} placeholder="Type your last name here"></input>
          </div>
          <div>
            <label className="label">
              <h6>Email Address</h6>
              <span>{errors.email?.type === 'required' && 'This field is required'}</span>
            </label>
            <input type='text' className='input'  {...register('email', {required: true})} placeholder="Type your email address here"></input>
          </div>
          <div>
            <label className="label">
              <h6>Address</h6>
              <span>{errors.address?.type === 'required' && 'This field is required'}</span>
            </label>
            <input type='text' className='input' {...register('address', {required: true})} placeholder="Type your address here"></input>
          </div>
          <div>
            <label className="label"><h6>Zip Code</h6></label>
            <input type='text' className='input' {...register('zipCode')} placeholder="eg. 12345"></input>
          </div>
          <div className="checkbox">
            <label className="checkbox-label"></label>
            <input type='checkbox' {...register('agreed', {required: true})} /> I agree
          </div>
          <div className='form-button'>
          <Button text='Checkout' classes='form' />
          </div>      
      </div>
      </form> 
    </div>
  )
}
export default CheckoutForm;