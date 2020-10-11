<template>
  <div class="container">
    Home
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
   mounted() {
     this.$store.dispatch('setData')
   }
  }
}
</script>
