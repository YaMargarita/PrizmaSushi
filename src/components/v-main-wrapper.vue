<template>
  <div class="main-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "v-main-wrapper",
  computed: {
    ...mapGetters([
      "PRODUCTS",
      "CART"
    ])
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API",
      "ADD_TO_CART",
      "MINUS_ITEM",
    ]),
    minusItem(data){
      // метод, который будет менять состояние CART и PRODUCT
      this.MINUS_ITEM(data);
    },
  }
}
</script>

<style scoped>
</style>