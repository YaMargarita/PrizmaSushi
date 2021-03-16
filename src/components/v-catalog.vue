<template>
  <div class="catalog-wrapper">
    <vHeader></vHeader>

    <!--    ABOUT-->
    <div class="about">
      <div class="container">
        <div class="about-wrapper">
          <div class="about-row">
            <div class="about-item about-location">
              <p class="about-text"><span class="about-title">Хорошее расположение.</span>
                Наш ресторан расположен в самом сердце Москвы.</p>
            </div>
            <div class="about-item about-products">
              <p class="about-text"><span class="about-title">Качественные продукты.</span>
                Мы используем только свежие ингредиенты.</p>
            </div>
            <div class="about-item about-img">

            </div>
          </div>
          <div class="about-row">
            <div class="about-item about-delivery">
              <p class="about-text"><span class="about-title">Быстрое время доставки.</span>
                Доставка в среднем занимает час по Москве.</p>
            </div>
            <div class="about-item about-service">
              <p class="about-text"><span class="about-title">Мы постоянно улучшаем наш сервис,</span>
                чтобы сделать Ваш отдых комфортнее.</p>
            </div>
            <div class="about-item about-location">
              <p class="about-text"><span class="about-title">Льготы студентам.</span>
                Просто предъявите свой студенческий при заказе.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    ABOUT-->

    <!--    Компонент слайдер-->
    <vSlider @showProduct="showProduct"></vSlider>
    <!--    Компонент слайдер-->

<!--    Слайдер, который появляется, когда большой пропадает-->
    <vFixedSlider @showProduct="showProduct"></vFixedSlider>
<!--    Слайдер, который появляется, когда большой пропадает-->

    <!--    Компонент, который отображает выбранную категорию товаров-->
    <vCatalogProduct :productList='PRODUCTS[chooseProduct]'
                     :title="displayTitle"
                     :id="chooseProduct"
                     @addToCart="addToCart"
                     @minusItem="minusItem"></vCatalogProduct>
    <!--    Компонент, который отображает выбранную категорию товаров-->

  </div>
</template>

<script>
import vHeader from '../components/v-header';
import vSlider from '../components/v-catalog-slider';
import vCatalogProduct from '../components/v-catalog-products';
import vFixedSlider from '../components/v-fixed-slider';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "v-catalog",
  components: {
    vHeader,
    vSlider,
    vCatalogProduct,
    vFixedSlider,
  },
  data(){
    return{
      chooseProduct: '',
      displayTitle: '',
    }
  },
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
      "CHANGE_PRODUCT",
    ]),
    showProduct(data, title){
      this.chooseProduct = data;
      this.displayTitle = title;
    },
    addToCart(data){
      this.ADD_TO_CART(data);
    },
    minusItem(data){
      //метод будет менять состояние CART и PRODUCT
      this.MINUS_ITEM(data);
    },
  },
  mounted() {
    if(this.CART.length <= 0){
      this.GET_PRODUCTS_FROM_API()
    } else {
        this.CART.forEach((elem) => {
          let id = elem.id
          let key = elem.id.substring(0, elem.id.length - 2);
          //нужно составить новый массив из PRODUCTS, только измененный
          let newProducts = this.PRODUCTS;

          newProducts[key].forEach((item) => {
            if (item.id === id) {
              item.count = elem.count;
            }
          });
          this.PRODUCTS[key] = newProducts[key];
          this.CHANGE_PRODUCT(this.PRODUCTS);
        })
      }
    }
  }
</script>

<style scoped>
.about{
  margin-top: 100px;
  padding-bottom: 20px;
}
.about-wrapper{
  width: 100%;
}
.about-row{
  display: flex;
  align-items: center;
}
.about-item{
  width: 34%;
  height: 200px;
}
.about-text{
  text-align: center;
  border-top: 1px solid #fff;
  font-size: 20px;
  color: #fff;
  padding-top: 20px;
  width: 50%;
  margin: 30px auto;
  font-weight: 400;
}
.about-title{
  padding-bottom: 10px;
  display: block;
  font-weight: 600;
}
.about-img{
  background: url("https://i.ibb.co/pxx580t/about-img.jpg") 60% 60% no-repeat;
  background-size: cover;
}
.about-location{
  background-color: #22356F;
}
.about-products{
  background-color: #0052C1;
}
.about-delivery{
  background-color: #62D0DF;
}
.about-service{
  background-color: #8F00FF;
}
</style>