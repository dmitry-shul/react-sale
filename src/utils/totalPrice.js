export const totalPrice = (cart) => {
  let total = 0;
  cart.forEach(item => {
    total = total + item.product.price * item.amount;
  })
  return total;
}