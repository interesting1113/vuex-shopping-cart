<template>
  <div class="phone-list">
    <list-item 
      v-for="(item, index) in phoneData" 
      :key="index"
      :item="item"
      ></list-item>
  </div>
</template>

<script>
import ListItem from './Item'
import { mapState} from 'vuex'
export default {
  name: 'PhoneList',
  components: {
    ListItem
  },
  computed: {
    ...mapState(['phoneData'])
  }
}
</script>

<style lang="scss" scoped>
  .phone-list {
    padding-bottom: .44rem;
  }
</style>