import React, { useEffect, useState } from 'react';
import styles from "./Main.module.css"
import Filter from "../../components/Filter/Filter"
import Card from '../../components/Card/Card';
import axios from "axios";
import Pagination from '../../components/UI/Pagination/Pagination';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useFilter } from '../../hooks/useFilter';
import { setProducts, setIgnorEffect } from '../../store/slices/filtersSlice';
import { arrayProducts } from '../../utils/arrayProducts';
import SearchModal from '../../components/MobileModal/SearchModal/SearchModal';
import FiltersModal from '../../components/MobileModal/FiltersModal/FiltersModal';

const Main = () => {
  const ignorEffect = useSelector(state => state.filters.ignorEffect)
  const [loaded, setLoaded] = useState(false)
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState("All")
  const searchValue = useSelector(state => state.filters.searchValue)
  const navigate = useNavigate()
  const [prices, setPrices] = useState({min: "", max: ""})
  const products = useSelector(state => state.filters.products)
  const sort = useSelector(state => state.filters.sort)
  const dispath = useDispatch()
  const mobile = useSelector(state => state.resize.mobile)

  
  const filteredProducts = useFilter(products, searchValue, prices, category, sort)

  const [finallyProducts, total] = arrayProducts(filteredProducts)
  
  //console.log(mobile)
  
  const getData = async () => {
    const res = await axios.get("https://dummyjson.com/products", {
      params: {
        limit: 100,
      }
    });
    dispath(setProducts(res.data.products))
    dispath(setIgnorEffect(false))
  }


  useEffect(() => {
    ignorEffect && getData()
  }, [])


  useEffect(() => {
    products.length > 0 && setLoaded(true)
  }, [products])


  return (
    <div className="mainBlock">
      <div className="container">
        <div className={styles.main}>

          <Filter style={mobile ? {display: "none"} : {}} category={category} setCategory={setCategory} prices={prices} setPrices={setPrices} />

          { 
            finallyProducts.length === 0 && loaded
            ? productNotFound
            : <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
                <div className={styles.content}>              
                  {
                    !loaded 
                    ? <div className={styles.loader}></div>
                    : finallyProducts[page - 1]?.map(product => 
                      <Card onClick={() => navigate(`/${product.id}`)} key={product.id} product={product} />  
                    )
                  }
                </div>

                {
                  products.length !== 0 && <Pagination total={total} page={page} setPage={setPage} />
                }
              </div>
          }
          {
            mobile && 
              <>
                <SearchModal />
                <FiltersModal category={category} setCategory={setCategory} prices={prices} setPrices={setPrices}/>
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default Main



const productNotFound = <div style={{width: "100%", textAlign: "center", marginTop: "20px", fontSize: "20px"}}>Product not found</div>
