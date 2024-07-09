import React, { useState, useEffect } from 'react';
import styles from "./Product.module.css"
import axios from "axios";
import { useLocation } from "react-router-dom"
import discountPrice from '../../utils/discountPrice';
import { useDispatch } from 'react-redux';
import { setCart } from "../../store/slices/cartSlice";

const Product = () => {
  const [loaded, setLoaded] = useState(false)
  const [product, setProduct] = useState({})
  const [thumbnail, setThumbnail] = useState()
  const location = useLocation()
  const dispath = useDispatch()

  //console.log(loaded)

  const getProduct = async () => {
    const url = `https://dummyjson.com/products/${location.pathname.slice(1)}`
    const res = await axios.get(url);
    setProduct(res.data)
    setThumbnail(res.data.thumbnail)
    setLoaded(true)
    //console.log('async', res.data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  const addToCart = () => {
    dispath(setCart({product, amount: 1}))
  }

  return (
    <div className="mainBlock">
      <div className="container">
        {!loaded
        ? <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "10px"}}>
            <div className={styles.loader}></div>
          </div>
        : <div className={styles.productBlock}>
          <div className={styles.imagesBlock}>
            <img className={styles.thumbnail} src={thumbnail} alt="thumbnail"/>
            
            <div className={styles.images}>
              {
                product.images?.map((image, index) => 
                  <img 
                    key={index}
                    style={thumbnail === image ? {opacity: "0.5"} : {}} 
                    onClick={() => setThumbnail(image)} 
                    className={styles.image} 
                    src={image} 
                    alt="img"
                  />  
                )
              }
            </div>
          </div>

          <div className={styles.description}>
            <div className={styles.description__titleAndBtn}>
              <div style={{display: "flex", flexDirection: "column"}}>
                <span style={{color: "#a9a9a9"}}>{product.brand}</span>
                <span style={{fontSize: "20px"}}>{product.title}</span>
              </div>
              <div onClick={() => addToCart()} className={styles.btn}>
                <div className={styles.btn_icon}></div>
                <p className={styles.btn_title}>Add to cart</p>
              </div>
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", margin: "10px 0"}}>
              <div>{product.description}</div>
              <div style={{display: "flex", marginLeft: "20px"}}>
                <p className={styles.newPrice}>${product.price}</p>
                <p className={styles.oldPrice}>${discountPrice(product.price, product.discountPercentage)}</p>
              </div>
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", margin: "10px 0"}}>
              <div style={{display: "flex", flexDirection: "column"}}>
                <span style={{color: "#a9a9a9"}}>Category: {product.category}</span>
                <span style={{color: "#a9a9a9"}}>Stock: {product.stock}</span>
              </div>
              <div className={styles.block_icon}>
                <img className={styles.rate_star_icon} src={"./assets/icons/rate_star.svg"} alt="rate" />
                <p style={{marginLeft: "6px"}}>{product.rating}</p>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Product