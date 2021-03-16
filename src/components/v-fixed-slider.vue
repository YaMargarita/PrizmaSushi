<template>
  <div class="slider-row-fixed">
    <div class="container">
      <div class="slider-row-fixed-wrapper">
        <a v-for="(item, index) in SLIDER"
           :key="item.id"
           :href="`#${item.id}`"
           class="original-link slider-link-fixed"
           v-on:click="showProduct(index)">
          <div class="slider-item-text">{{ item.title }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "v-fixed-slider",
  computed: {
    ...mapGetters([
      "SLIDER",
    ])
  },
  methods: {
    showProduct(index){
      this.$emit('showProduct', this.SLIDER[index].id, this.SLIDER[index].title)
    }
  },
  mounted() {
    window.onscroll = function (){
      if(document.querySelector('.slider-row-fixed') !== null){
        if(window.pageYOffset >= 650){
          document.querySelector('.slider-row-fixed').classList.add('active')
        } else document.querySelector('.slider-row-fixed').classList.remove('active')
      }
    }
  }
}
</script>

<style scoped>
.original-link{
  text-decoration: none;
  color: #000;
}
.container{
  width: 1700px;
  margin: 0 auto;
}
.slider-row-fixed{
  overflow: hidden;
  position: fixed;
  top: 320px;
  width: 100%;
  z-index: 7;
  background-color: #fff;
  border-bottom: 1px solid #cbcbcb;
  border-top: 1px solid #cbcbcb;
  padding: 15px 0;
  transform: translateY(-700%);
  transition: .7s;
}
.active{
  transform: translateY(-400%);
}
.slider-row-fixed-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.slider-item-text{
  font-size: 22px;
}
</style>