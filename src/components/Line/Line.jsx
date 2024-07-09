import React from 'react';
import MenuSelect from '../UI/MenuSelect/MenuSelect';
import styles from "./Line.module.css"
import { useLocation, useNavigate } from "react-router-dom"

const Line = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className={styles.line}>
      <div className="container">
        <div className={styles.lineBlock}>
          <div className={styles.backBtnBlock}>
            <div style={location.pathname === "/" ? {opacity: "0"} : {}} onClick={() => location.pathname !== "/" && navigate("/")} className={styles.backBtn}>
              <span style={{fontSize: "20px", marginRight: "4px"}}>‹</span>
              <span>Back</span>
            </div>

            <span style={{color: "#888888", fontWeight: "500"}}>
              {
                location.pathname === "/" 
                ? "Catalog" 
                : location.pathname === "/cart" 
                ? "Cart" 
                : ""
              }
            </span>
          </div>

          <div className={styles.sort} style={location.pathname !== "/" ? {display: "none"} : {}}>
            Sort by: 
            <MenuSelect />
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Line