const discountPrice = (price, discountPercentage) => {
  return Math.round(price + discountPercentage / 100 * price);
}

export default discountPrice