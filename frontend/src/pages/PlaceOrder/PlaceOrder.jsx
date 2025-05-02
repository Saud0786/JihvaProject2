import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/context/StoreContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PlaceOrder({setShowLogin}) {
  const  navigate=useNavigate();
  const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)

  const [data,setData]= useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    pincode:"",
    country:"",
    phone:""
  })

  const onChangeHandler=(event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data => ({ ...data, [name]: value }));
  }

   const placeOder = async (event)=>{
         event.preventDefault();
         let orderitems =[];
         food_list.map((item)=>{
          if(cartItems[item._id]>0){
            let itemInfo =item;
            itemInfo["quantity"]=cartItems[item._id]
            orderitems.push(itemInfo)
          }
         })
      
        let orderData = {
           address:data,
           items:orderitems,
           amount:getTotalCartAmount()+20
        }

        let response =await axios.post(url+"/api/order/place",orderData,{headers:{token}})

        if(response.data.success){
          const {session_url} =response.data;
          window.location.replace(session_url);
        }else{
          alert("Something went wrong")
        }
         
   }

  

   useEffect(()=>{
    if(!token){
      navigate('/cart')
      setShowLogin(true)
    }else if(getTotalCartAmount()===0){
      navigate('/cart')
    }

   },[token])

  return (
   <form onSubmit={placeOder} className='place-order'>
        <div className="place-order-left">
            <p className='title'>Delivery Information</p>
            <div class="multi-fields">
              <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name'/>
              <input required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name'/>
            </div>
            <input required name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Email adress'/> 
            <input required name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder='Street'/>
            <div class="multi-fields">
              <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder='City'/>
              <input required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder='State'/>
            </div>
            <div class="multi-fields">
              <input required name="pincode" onChange={onChangeHandler} value={data.pincode} type="text" placeholder='Pin code'/>
              <input required name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'/>
            </div>
            <input required name="phone" onChange={onChangeHandler} value={data.phone} type="number" placeholder='Phone'/>
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:20}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
            </div>
          </div>
          <button type='submit' onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
        </div>

        </div>
   </form>
  )
}

export default PlaceOrder
