export const arrayProducts = (products) => {
  //console.log("products", products)
  let arr = []
  let arr2 = []
  products.forEach((item, index) => {
    arr2.push(item)
    if(arr2.length === 18) {
      arr.push(arr2)
      arr2 = []
    }
    index + 1 === products.length && arr.push(arr2)
  })
  //console.log("[arr, arr.length]", arr, products.length)
  return [arr, products.length]
}