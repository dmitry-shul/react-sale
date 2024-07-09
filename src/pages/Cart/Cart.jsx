import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import styles from "./Cart.module.css"
import { totalPrice } from "../../utils/totalPrice"
import { useNavigate } from 'react-router-dom';
import { order } from '../../store/slices/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  //console.log(cart)

  const buy = () => {
    navigate("/")
    dispatch(order([]))
  }

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <div className="mainBlock">
      <div className="container">
        {
          cart.length === 0 ? <div style={{width: "100%", textAlign: "center", marginTop: "30px", fontSize: "20px"}}>Shopping cart is empty</div> : <></>
        }
        <div style={cart.length === 0 ? {display: "none"} : {}} className={styles.cartBlock}>
          {
            cart.map(itemCart => 
              <CartItem key={itemCart.product.id} itemCart={itemCart} />
            )
          }
          <div className={styles.order}>
            <div className={styles.totalPrice}>${totalPrice(cart)}</div>
            <button onClick={() => buy()} className={styles.buyBtn}>Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart