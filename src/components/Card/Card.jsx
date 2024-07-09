import React from "react";
import { useDispatch } from "react-redux";
import discountPrice from "../../utils/discountPrice";
import styles from "./Card.module.css";
import { setCart } from "../../store/slices/cartSlice";

const Card = ({ product, ...props }) => {
  const {
    title,
    price,
    discountPercentage,
    rating,
    brand,
    thumbnail
  } = product;
  const dispath = useDispatch();

  const addToCart = (e) => {
    e.stopPropagation();
    dispath(setCart({ product, amount: 1 }));
  };

  return (
    <div {...props} className={styles.card}>
      <div className={styles.iconBlock}>
        <img className={styles.icon} src={thumbnail} alt="item_icon" />
      </div>

      <div className={styles.block}>
        <p style={{ color: "#757575B5", fontSize: "14px" }}>{brand}</p>
        <div className={styles.block_icon}>
          <img
            className={styles.rate_star_icon}
            src={"./assets/icons/rate_star.svg"}
            alt="rate"
          />
          <p style={{ marginLeft: "6px" }}>{rating}</p>
        </div>
      </div>

      <div className={styles.title}>{title}</div>

      <div className={styles.block}>
        <div style={{ display: "flex" }}>
          <p className={styles.newPrice}>${price}</p>
          <p className={styles.oldPrice}>
            ${discountPrice(price, discountPercentage)}
          </p>
        </div>

        <div onClick={(e) => addToCart(e)} className={styles.btn}>
          <div className={styles.btn_icon}></div>
          <p className={styles.btn_title}>Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
