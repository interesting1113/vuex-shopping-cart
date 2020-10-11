export default {
  SET_DATA(state, data) {
    const { phoneData, totalPrice, totalMount, cartData} = data

    state.phoneData = phoneData
    state.totalPrice = totalPrice
    state.totalMount = totalMount
    state.cartData = cartData
  }
}