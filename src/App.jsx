import React, { useEffect, useState, createContext } from 'react';
import "./styles.css";
import HeaderLine from "./components/HeaderLine/HeaderLine"
import Header from "./components/Header/Header"
import Line from "./components/Line/Line"
import PagesRoute from "./router/PagesRoute"
import Footer from "./components/Footer/Footer"
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { order } from './store/slices/cartSlice';
import { setMobile } from './store/slices/resizeSlice';

export const ModalContext = createContext({});

export default function App() {
  const cart = useSelector(state => state.cart.cart)
  const [cookies, setCookie] = useCookies();
  const dispatch = useDispatch()
  const [visibleSearch, setVisibleSearch] = useState(false)
  const [visibleFilters, setVisibleFilters] = useState(false)

  
  useEffect(() => {
    setCookie("cart", cart)
  }, [cart])

  useEffect(() => {
    if(cookies.cart) {
      dispatch(order(cookies.cart))
    }
  }, [])

  useEffect(() => {
    const fun = () => {
      //console.log(window.innerWidth)
      window.innerWidth > 768
      ? dispatch(setMobile(false))
      : dispatch(setMobile(true))
    }
    fun()
    window.addEventListener('resize', fun);
    return () => window.removeEventListener('resize', fun);
  }, [])

  return (
    <ModalContext.Provider value={[visibleSearch, setVisibleSearch, visibleFilters, setVisibleFilters]}>
      <HeaderLine />
      <Header />
      <Line />
      <PagesRoute />
      <Footer />
    </ModalContext.Provider>
  );
}

