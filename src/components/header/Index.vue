<template>
  <div class="header">
    <back-icon :backIconShow="backIconShow"></back-icon>
    <h1><slot></slot></h1>
    <cart-icon :cartIconShow="cartIconShow"></cart-icon>
  </div>
</template>

<script>
import BackIcon from './BackIcon'
import CartIcon from './CartIcon'
export default {
  name: 'MiHeader',
  props: {
    backIconShow: Boolean,
    cartIconShow: Boolean
  },
  components: {
    BackIcon,
    CartIcon
  }

}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: .44rem;
  background-color: #ff6704;
  color: #fff;
  font-size: .18rem;
}

</style>