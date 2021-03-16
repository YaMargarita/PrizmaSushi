<template>
  <div class="product-card">
    <div class="card-wrapper">
      <div class="img-wrapper">
        <img :src="product.img" alt="" class="img">
      </div>
      <div class="description-wrapper">
        <div class="product-title">{{ product.name }}</div>
        <div class="product-description">{{ product.description }}</div>

        <div class="price-wrapper">
          <div class="product-price">{{ product.price }} руб.</div>
          <div class="product-count">
            <button class="btn btn-minus"
                    :disabled="product.count <= 0"
                    @click="minusItem">-</button>
            <span class="count">{{ product.count }}</span>
            <button class="btn btn-plus"
                    :disabled="product.count >= 20"
                    @click="plusItem">+</button>
          </div>
        </div>
      </div>
      <button class="close" @click="closeModal"><i class="fas fa-times"></i></button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: "v-product-card",
  props: {
    product: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    ...mapGetters([
      "CART"
    ]),
  },
  methods: {
    ...mapActions([
      "ADD_TO_CART",
      "MINUS_ITEM",
    ]),
    minusItem(){
      this.product.count--;
      this.ADD_TO_CART(this.product);
      this.MINUS_ITEM(this.product);
    },
    plusItem(){
      this.product.count++;
      this.ADD_TO_CART(this.product);
    },
    closeModal(){
      this.$emit('closeModal');
    }
  },
}
</script>

<style scoped>
.product-card{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.39);
}
.card-wrapper{
  position: fixed;
  width: 800px;
  height: 300px;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -400px;
  z-index: 10;
  display: flex;
  align-items: center;
  background-color: #fff;
}
.img-wrapper{
  width: 50%;
}
.img{
  width: 50%;
}
.description-wrapper{
  display: flex;
  flex-direction: column;
}
.product-title{
  padding-bottom: 10px;
  font-size: 24px;
  text-align: center;
}
.product-description{
  padding-bottom: 20px;
  font-size: 20px;
}
.price-wrapper{
  width: 400px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #afafaf;
  border-bottom: 1px solid #afafaf;
}
.product-price{
  font-size: 20px;
}
.product-count{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
}
.btn{
  background-color: inherit;
  border: none;
  font-size: 32px;
  line-height: 24px;
  cursor: pointer;
}
.count{
  font-size: 20px;
}
.close{
  position: absolute;
  top: 0;
  right: 0;
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-size: 32px;
}
</style>