<template>
  <div class="cart">
    <vHeader></vHeader>
    <div class="container">
      <h1 class="cart-title">Корзина</h1>

      <p class="empty" v-if="!cartList.length">Ваша корзина пуста. Загляните в наше
        <router-link class="link" to="/">Меню</router-link>
      </p>

      <div class="cart-wrapper">
        <div class="products-wrapper">
          <div class="item-wrapper" v-for="(item, index) in cartList"
               :key="index">
            <div class="image-wrapper">
              <img :src="item.img" alt="" class="img">
            </div>
            <div class="item-name">{{ item.name }}</div>
            <div class="count-wrapper">
              <button class="btn minus"
                      v-on:click="minusItem(index)"
                      v-bind:disabled="item.count <= 0">-</button>
              <span class="count">{{ item.count }}</span>
              <button class="btn plus"
                      v-on:click="plusItem(index)"
                      v-bind:disabled="item.count >= 20">+</button>
            </div>
            <div class="price">{{ item.count * item.price }} руб.</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from '../components/v-header'
import {mapActions} from 'vuex';

export default {
  name: "v-cart",
  components: {
    vHeader
  },
  props: {
    cartList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      "MINUS_ITEM",
    ]),
    minusItem(index){
      if(this.cartList[index].count > 0){
        this.cartList[index].count--;
        // this.$emit('minusItem', this.cartList[index]);
        this.MINUS_ITEM(this.cartList[index]);
      }
    },
    plusItem(index){
      if(this.cartList[index].count < 20){
        this.cartList[index].count++
        this.$emit('minusItem', this.cartList[index]);
      }
    }
  },
  computed: {
    totalAmount(){
      let sum = 0;

      return sum;
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.cart{
  padding-top: 120px;
}
.container{
  width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
}
.cart-title{
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  padding-bottom: 20px;
  color: #979797;
}
.empty{
  padding-top: 20px;
  font-size: 24px;
  text-align: center;
}
.link{
  color: #8F00FF;
  text-decoration: none;
  font-weight: bold;
}
.cart-wrapper{
  display: flex;
  justify-content: space-between;
}
.products-wrapper{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item-wrapper{
    width: 47%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.image-wrapper{
  width: 200px;
}
.img{
  width: 200px;
}
.item-name{
  font-size: 22px;
  width: 200px;
}
.count-wrapper{
  display: flex;
  align-items: center;
}
.btn{
  padding: 5px;
  background-color: inherit;
  border: none;
  font-size: 35px;
  line-height: 40px;
  cursor: pointer;
}
.count{
  padding: 0 20px;
  font-size: 22px;
}
.price{
  font-size: 22px;
}
</style>