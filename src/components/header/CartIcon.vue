<template>
  <router-link 
    to="/cart"
    class="cart-icon"
    v-if="cartIconShow"
  >
    <span class="cart">
      购物车({{ totalMount }})
    </span>
  </router-link>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CartIcon',
  props: {
    cartIconShow: Boolean
  },
  computed: {
    ...mapState(['totalMount'])
  },
  updated() {
    localStorage.setItem('totalMount', this.totalMount)
    localStorage.setItem('totalPrice', this.totalPrice)
    localStorage.setItem('cartData', JSON.stringify(this.cartData))
  }
}
</script>

<style lang="scss" scoped>
.cart-icon {
  color: #fff;
  .cart {
    position: absolute;
    right: 0.15rem;
    top: 0.15rem;
    font-size: .14rem;
  }
}

</style>