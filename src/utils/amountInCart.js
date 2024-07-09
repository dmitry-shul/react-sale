export const amountInCart = (cart) => {
  let n = 0;
  cart.forEach(item => {
    n = n + item.amount;
  })
  return n;
}