<template>
  <div class="header">
    <div class="container">
      <div class="header-wrapper">
        <a href="#" class="original-link">
          <router-link :to="{name: 'catalog'}" class="router-link">
            <span class="header-logo">Prizma-sushi</span>
          </router-link>
        </a>
        <div class="header-navbar">
            <span class="header-item">
              <router-link :to="{name: 'catalog'}" class="router-link">
              <a href="#" class="original-link header-item-link">Меню</a>
                </router-link>
            </span>
          <span class="header-item"><router-link :to="{name: 'about'}" class="router-link">О нас</router-link></span>
          <span class="header-item"><router-link :to="{name: 'contacts'}" class="router-link">Контакты</router-link></span>
        </div>
        <router-link :to="{name: 'cart', params: {cartList: CART}}" class="router-link">
          <div class="header-cart">
            <a href="#" class="original-link"><i class="fas fa-shopping-cart header-cart-icon" :class="{active: totalAmount !== 0}"></i></a>
            <a href="#" class="original-link"><span class="totalAmount" :class="{active: totalAmount !== 0}">{{ totalAmount }} руб.</span></a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "v-header",
  mounted() {
    //подкючаю иконку корзины
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/99b41e65bd.js')
    document.head.appendChild(recaptchaScript)
  },
  computed: {
    ...mapGetters([
      "CART"
    ]),
    //рассчитываю итоговую стоимость
    totalAmount(){
      let sum = 0;
      this.CART.forEach(function (item){
        sum += (item.price * item.count);
      })
      return sum;
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Stick&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.active{
  color: red;
  transition: all ease 2s;
  transform: scale(1.1);
}
.router-link{
  color: #000;
  text-decoration: none;
}
.router-link:hover{
  color: #0052C1;
}
.header{
  overflow: hidden;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  border-bottom: 1px solid #afafaf;
}
.container{
  max-width: 1700px;
  padding: 0 10px;
  margin: 0 auto;
  overflow: hidden;
}
.header-wrapper{
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.original-link{
  text-decoration: none;
  color: #000;
}
.header-logo{
  font-family: 'Stick', sans-serif;
  font-size: 44px;
}
.header-navbar{
  display: flex;
  align-items: center;
}
.header-item{
  font-size: 26px;
  font-weight: 500;
}
.header-item:not(:last-child){
  padding-right: 100px;
}
.header-item-link:hover{
  color: #0052C1;
}
.header-cart{
  padding: 20px 0;
  width: 165px;
  display: flex;
  align-items: center;
}
.header-cart-icon{
  font-size: 26px;
  color: #000;
}
.header-cart-icon.active{
  color: #ff0000;
}
.totalAmount{
  margin-left: 15px;
  font-size: 20px;
}
.totalAmount.active{
  font-size: 24px;
  color: #ff0000;
  font-weight: 500;
}
</style>