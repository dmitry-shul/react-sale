import React, { useEffect, useState } from 'react';
import styles from "./Pagination.module.css"
import { pageCount } from "../../../utils/pageCount"
import { pagesArray } from '../../../utils/pagesArray';
import { useSelector } from 'react-redux';

const Pagination = ({total, page, setPage}) => {
  const [pagesArr, setPagesArr] = useState(null)
  const mobile = useSelector(state => state.resize.mobile)

  useEffect(() => {
    const pC = pageCount(total)
    setPagesArr(pagesArray(pC))
    setPage(1)
  }, [total])

  const btnClick = (btn) => {
    setPage(btn)
    window.scrollTo({top: 0});
  }

  const pageIncrement = (btn) => {
    setPage(page + 1)
    window.scrollTo({top: 0});
  }

  const pageDecrement = (btn) => {
    setPage(page - 1)
    window.scrollTo({top: 0});
  }

  if(pagesArr === null) return <></>

  return (
    <div className={styles.paginationBlock}>
      <div className={styles.pagination}>
        <div 
          className={page === 1 ? styles.btn__arrow : styles.btn__arrow_active}
          onClick={() => page !== 1 && pageDecrement()}
         >{"<"}</div>
        {
          mobile
          ? <div className={styles.btn_active}>{page}</div>
          : pagesArr.map(btn =>
            <div 
              onClick={() => btnClick(btn)} 
              key={btn} 
              className={page === btn ? styles.btn_active : styles.btn}
            >{btn}</div>
          )
        }
        <div 
          className={page === pagesArr.length ? styles.btn__arrow : styles.btn__arrow_active} 
          onClick={() => page !== pagesArr.length && pageIncrement()}
        >{">"}</div>
      </div>
    </div>
  )
}

export default Pagination