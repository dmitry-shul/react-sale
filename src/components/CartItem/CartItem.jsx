import React from 'react';
import styles from "./CartItem.module.css"
import discountPrice from '../../utils/discountPrice';
import { useDispatch } from 'react-redux';
import { delCartItem } from '../../store/slices/cartSlice';

const CartItem = ({itemCart}) => {
  const { product, amount } = itemCart
  const dispath = useDispatch()

  if(!product) {
    return (
      <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "30px"}}>
        <div className={styles.loader}></div>
      </div>
    )
  }

  return (
    <div className={styles.productItem}>
      <img className={styles.thumbnail} src={product.thumbnail} alt="thumbnail"/>

      <div className={styles.itemInfo}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <span style={{color: "#a9a9a9"}}>{product.brand}</span>
          <span style={{fontSize: "20px"}}>{product.title}</span>
        </div>

        <div style={{fontSize: "20px"}}>{amount} pcs</div>

        <div className={styles.priceBlock}>
          <p className={styles.newPrice}>${product.price}</p>
          <p className={styles.oldPrice}>${discountPrice(product.price, product.discountPercentage)}</p>
        </div>
        
        <img onClick={() => dispath(delCartItem(product))} className={styles.delete_can} src="assets/icons/delete_can.png" alt="delete"/>
      </div>
    </div>
  )
}

export default CartItem