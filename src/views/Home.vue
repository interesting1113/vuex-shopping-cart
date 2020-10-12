<template>
  <div class="container">
    <mi-header
      :cartIconShow="true"
    >小米手机</mi-header>
    <phone-list></phone-list>
  </div>
</template>

<script>
import MiHeader from '@/components/header/Index'
import PhoneList from '@/components/phoneList/Index'
export default {
  name: 'Home',
  mounted() {
     this.$store.dispatch('setData')
   },
  components: {
   MiHeader,
   PhoneList
  }
}
</script>
