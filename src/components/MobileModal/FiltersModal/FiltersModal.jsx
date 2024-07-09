import React, { useContext, useEffect } from 'react';
import Modal from '../../UI/Modal/Modal';
import styles from "./FiltersModal.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../../store/slices/filtersSlice';
import { ModalContext } from "../../../App";


const FiltersModal = ({category, setCategory, prices, setPrices}) => {
  const sort = useSelector(state => state.filters.sort)
  const dispath = useDispatch()
  const [visibleSearch, setVisibleSearch, visibleFilters, setVisibleFilters] = useContext(ModalContext)

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <Modal visible={visibleFilters} setVisible={setVisibleFilters}>
      <div className={styles.filters}>
          <div className={styles.sort}>
            <h4>Sort by</h4>
            {
              menuList.map((item, i) => 
                <div 
                  key={i}
                  style={sort===item ? {background: "#e0e0e0"} : {}} 
                  className={styles.sort__item}
                  onClick={() => dispath(setSort(item))}
                >{item}</div>
              )
            }
          </div>

          <div className={styles.price__inputs}>
            <h4>Price</h4>
            <input 
              value={prices.min}
              onChange={e => setPrices({...prices, min: e.target.value})}
              placeholder="min" 
              type="number" 
              className={styles.price__input} 
              style={{borderRight: "1px solid #DEDEDE"}} 
            />
            <input 
              value={prices.max}
              onChange={e => setPrices({...prices, max: e.target.value})}
              placeholder="max" 
              type="number" 
              className={styles.price__input} 
            />
          </div>

          <div className={styles.categories}>
            <h4>Category</h4>
            {
              CATEGORIES.map((item, i) => 
                <div
                  key={i}
                  style={category===item ? {background: "#e0e0e0"} : {}} 
                  className={styles.categories__item}
                  onClick={() => setCategory(item)}
                >{item}</div>
              )
            }
          </div>

          <button className={styles.applyBtn} onClick={() => setVisibleFilters(false)}>Apply</button>
      </div>
    </Modal>
  )
}

export default FiltersModal


const menuList = ["popular", "cheap", "expensive", "a - z", "z - a"]


const CATEGORIES = [
  "All",
  "Smartphones",
  "Laptops",
  "Fragrances",
  "Skincare",
  "Groceries",
  "Home-decoration",
  "Furniture",
  "Tops",
  "Womens-dresses",
  "Womens-shoes",
  "Mens-shirts",
  "Mens-shoes",
  "Mens-watches",
  "Womens-watches",
  "Womens-bags",
  "Womens-jewellery",
  "Sunglasses",
  "Automotive",
  "Motorcycle",
  "Lighting"
]