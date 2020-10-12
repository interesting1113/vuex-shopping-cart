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