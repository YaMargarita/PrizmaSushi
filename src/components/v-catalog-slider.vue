<template>
  <div class="slider">
    <div class="container">
      <div class="slider-row">
        <a class="original-link slider-link"
           v-for="(item, index) in SLIDER"
           :key="item.id"
           :href="`#${item.id}`">
          <div class="slider-item" v-on:click="showProduct(index)">
            <img v-bind:src="item.img" alt="" class="slider-img">
            <div class="slider-item-text">{{ item.title }}</div>
          </div>
        </a>
      </div>
      <button class="slider-arrow"
              v-on:click="moveSlider">
        <img src="https://i.ibb.co/W3hKNwq/slider-arrow.png" alt="" class="slider-arrow-img">
      </button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

let left = 0;
export default {
  name: "v-catalog-slider",
  computed: {
    ...mapGetters([
      "SLIDER",
    ])
  },
  methods: {
    moveSlider() {
      if (document.querySelector('.slider-row') !== null) {
        if (left > -1200) left -= 240;
        else left = 0;
        document.querySelector('.slider-row').style.left = left + 'px';
      }
    },
    showProduct(index){
      this.$emit('showProduct', this.SLIDER[index].id, this.SLIDER[index].title)
    }
  },
}
</script>

<style scoped>
.original-link{
  text-decoration: none;
  color: #000;
}
.slider{
  width: 1700px;
  overflow: hidden;
}
.container{
  width: 1700px;
  margin: 0 auto;
}
.slider-row{
  position: relative;
  width: 1700px;
  display: flex;
  left: 0;
  transition: all ease 2s;
}
.slider-item{
  width: 240px;
  cursor: pointer;
}
.slider-img{
  width: 240px;
  transition: 1s;
}
.slider-img:hover{
  transform: scale(1.1);
}
.slider-item-text{
  padding-top: 10px;
  text-align: center;
  font-size: 20px;
}
.slider-arrow{
  position: absolute;
  right: 10px;
  bottom: 220px;
  width: 40px;
  height: 40px;
  background-color: initial;
  border: none;
  cursor: pointer;
}
.slider-arrow:active{
  border: none;
}
.slider-arrow-img{
  width: 40px;
  height: 40px;
}
.slider-item-text{
  font-size: 22px;
}
</style>