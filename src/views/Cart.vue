<template>
  <div class="container">
     <mi-header
      :backIconShow="true"
    >购物车</mi-header>
  </div>
</template>

<script>
import MiHeader from '@/components/header/Index'
export default {
  name: 'Cart',
  components: {
   MiHeader
  }
}
</script>