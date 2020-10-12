export default {
  setData({ commit }) {
    let phoneData = JSON.parse(localStorage.getItem('phoneData') || '[]')
    const totalPrice = Number(localStorage.getItem('totalPrice') || '0')
    const totalMount = Number(localStorage.getItem('totalMount') || '0')
    const cartData = JSON.parse(localStorage.getItem('cartData') || '[]')

    phoneData = phoneData.map((item) => {
      const picsData = JSON.parse(item.pics)

      item.img = picsData[0][0][0]
      return item
    })
    commit('SET_DATA', {
      phoneData,
      totalPrice,
      totalMount,
      cartData
    })
  }
}