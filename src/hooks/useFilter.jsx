import { useMemo } from 'react';

export const useFilter = (products, searchValue, prices, category, sort) => {
  const a = PriceFilter(products, prices);
  const b = CategoryFilter(a, category)
  const c = SearchFilter(b, searchValue)
  const d = SortFilter(c, sort)
  return d
}


const PriceFilter = (data, prices) => {
  return useMemo(() => {
    if(prices.min === "" && prices.max === "") return data
    let price = {
      min: prices.min === "" ? 0 : prices.min,
      max: prices.max === "" ? 9999999999999 : prices.max,
    }
    return data.filter(prod => prod.price >= price.min && prod.price <= price.max)
  }, [data, prices])
}


const CategoryFilter = (data, category) => {
  return useMemo(() => {
    if(category === "All") return data;
    return data.filter(dt => dt.category === category.toLowerCase())
  }, [data, category])
}


const SearchFilter = (data, searchValue) => {
  return useMemo(() => {
    if(searchValue === "") return data
    return data.filter(dt => dt.title.toLowerCase().includes(searchValue?.toLowerCase()) || dt.brand.toLowerCase().includes(searchValue?.toLowerCase()))
  }, [data, searchValue])
}


const SortFilter = (data, sort) => {
  return useMemo(() => {
    const newData = [...data]
    if(sort === "popular") return newData
    if(sort === "cheap") return newData.sort((a, b) => a.price - b.price)
    if(sort === "expensive") return newData.sort((a, b) => b.price - a.price)
    if(sort === "a - z") return newData.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() && -1)
    if(sort === "z - a") return newData.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() && -1)
  }, [data, sort])
}
