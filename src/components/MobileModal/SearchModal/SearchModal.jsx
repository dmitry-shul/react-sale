import React, { useContext, useState } from 'react';
import styles from "./SearchModal.module.css"
import Modal from '../../UI/Modal/Modal';
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../../store/slices/filtersSlice";
import { ModalContext } from "../../../App";


const SearchModal = () => {
  const [search, setSearch] = useState("")
  const searchValue = useSelector(state => state.filters.searchValue)
  const dispatch = useDispatch()
  const [visibleSearch, setVisibleSearch, visibleFilters, setVisibleFilters] = useContext(ModalContext)


  const deleteSearchRedux = () => {
    setSearch("")
    dispatch(setSearchValue(""))
  }

  const searchToRedus = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(search))
    setVisibleSearch(false)
  }
  
  return (
    <Modal visible={visibleSearch} setVisible={setVisibleSearch}>
              <form className={styles.searchBlock}>
                <div style={{width: "100%", display: "flex", marginBottom: "14px"}}>
                  <input 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    type="text" 
                    placeholder="Search here" 
                    className={styles.search} 
                  />

                  <div onClick={deleteSearchRedux} style={searchValue === "" ? {display: "none"} : {}} className={styles.searchDeleteBtn}>×</div>
                </div>
                
                <button className={styles.searchBtn} onClick={e => searchToRedus(e)}>
                  <img src="./assets/icons/searchIcon.svg" alt="search" className={styles.searchIcon} />
                  <span style={{color: "#fff", fontSize: "18px", marginLeft: "10px"}}>Search</span>
                </button>
              </form>
    </Modal>
  )
}

export default SearchModal