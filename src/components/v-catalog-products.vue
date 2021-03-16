<template>
  <div class="catalog" :id="id">
    <h3 class="catalog-title">{{ title }}</h3>
    <div class="catalog-wrapper">
      <div class="catalog-item" v-for="(item, index) in productList"
           :key="item.id">
        <div class="link-wrapper" @click="productModal(index)">
          <img v-bind:src="item.img" alt="" class="catalog-item-img">
          <div class="catalog-item-name">{{ item.name }}</div>
        </div>

        <div class="price-wrapper">
          <div class="item-price">{{ item.price }} руб.</div>
          <div class="count-wrapper">
            <button class="btn-count item-minus"
                    v-bind:disabled="item.count <= 0"
                    v-on:click="minusItem(index)">-</button>
            <span class="item-count">{{ item.count }}</span>
            <button class="btn-count item-plus"
                    v-bind:disabled="item.count >= 20"
                    v-on:click="addToCart(index)">+</button>
          </div>
        </div>
      </div>
      <vProductCart v-if="showModal"
                    :product="arr"
                    @closeModal="closeModal">
      </vProductCart>
    </div>
  </div>
</template>

<script>
import vProductCart from "../components/v-product-card"
export default {
  name: "v-catalog-products",
  components: {
    vProductCart,
  },
  props: {
    productList: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default() {
        return '';
      }
    },
    id: {
      type: String,
      default(){
        return ''
      }
    }
  },
  data(){
    return{
      showModal: false,
      arr: {},
    }
  },
  methods: {
    addToCart(index){
      this.productList[index].count++;
      this.$emit('addToCart', this.productList[index]);
    },
    minusItem(index){
      this.productList[index].count--;
      this.$emit('minusItem', this.productList[index]);
    },
    productModal(index){
      this.showModal = true;
      this.arr = this.productList[index];
      console.log(this.arr);
    },
    closeModal() {
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
.router-link{
  text-decoration: none;
  color: #000;
}
.catalog{
  padding-top: 100px;
}
.catalog-wrapper{
  width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-flow: wrap;
}
.catalog-title{
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  padding-bottom: 20px;
  color: #979797;
}
.catalog-item{
  padding: 30px;
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.catalog-item-img{
  margin-bottom: auto;
  width: 100%;
  cursor: pointer;
}
.catalog-item-name{
  padding: 5px 0 10px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
}
.price-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-price{
  font-size: 20px;
}
.count-wrapper{
  display: flex;
  align-items: center;
}
.item-count{
  width: 50px;
  text-align: center;
  font-size: 20px;
}
.btn-count{
  position: relative;
  font-size: 40px;
  border: none;
  background-color: initial;
  cursor: pointer;
}
</style>