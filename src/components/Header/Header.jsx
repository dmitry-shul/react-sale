import React, { useEffect, useState, useContext } from 'react';
import styles from "./Header.module.css"
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../store/slices/filtersSlice";
import { useNavigate, useLocation } from "react-router-dom"
import { totalPrice } from '../../utils/totalPrice';
import { amountInCart } from "../../utils/amountInCart"
import { ModalContext } from "../../App";

const Header = () => {
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const cart = useSelector(state => state.cart.cart)
  const searchValue = useSelector(state => state.filters.searchValue)
  const [visibleSearch, setVisibleSearch, visibleFilters, setVisibleFilters] = useContext(ModalContext)

  useEffect(() => {
    search !== "" && deleteSearchRedux()
  }, [location.pathname])

  const deleteSearchRedux = () => {
    setSearch("")
    dispatch(setSearchValue(""))
  }

  const searchToRedus = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(search))
  }

  return (
    <header>
      <div className="container">
        <div className={styles.headerBlock}>
          <div onClick={() => navigate("/")} className={styles.logoBlock}>
            <img src="./assets/icons/logoIcon.svg" alt="logo" className={styles.logoIcon} />
            <h1>React Sale</h1>
          </div>

          <form style={location.pathname !== "/" ? {display: "none"} : {}} className={styles.searchBlock}>
                <input 
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  type="text" 
                  placeholder="Search here" 
                  className={styles.search} 
                />
                <div onClick={deleteSearchRedux} style={searchValue === "" ? {display: "none"} : {}} className={styles.searchDeleteBtn}>×</div>
                <button className={styles.searchBtn} onClick={e => searchToRedus(e)}>
                  <img src="./assets/icons/searchIcon.svg" alt="search" className={styles.searchIcon} />
                </button>
              </form>

          <div style={location.pathname !== "/" ? {display: "none"} : {}} className={styles.openBtns}>
            <button onClick={() => setVisibleSearch(true)} className={styles.searchBtnOpen}>
              <img src="./assets/icons/searchIcon.svg" alt="search" className={styles.searchIcon} />
            </button>

            <button onClick={() => setVisibleFilters(true)} className={styles.filtersBtnOpen}>
              <img src="./assets/icons/filters.svg" alt="search" className={styles.searchIcon} />
            </button>
          </div>

          <div onClick={() => navigate("/cart")} className={styles.cartBlock}>
            <div className={styles.cartTotal}>${totalPrice(cart)}</div>
            <div className={styles.cart}>
              <div className={styles.amountCart}>{amountInCart(cart)}</div>
              <img src="./assets/icons/cartIcon.svg" alt="cart" className={styles.cartIcon} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header