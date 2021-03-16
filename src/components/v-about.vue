<template>
  <div class="about">
    <vHeader></vHeader>
    <div class="container">
      <div class="about-wrapper">
        <div class="about-row">
          <div class="text">
            <p>Разнообразие меню заставит задуматься даже опытного дегустатора.</p>
            <p>Посетители могут попробовать различные блюда <span>японской кухни</span>.</p>
            <p><span>Изысканность и непревзойденный вкус</span>, знаменитое японское гостеприимство не оставят равнодушными ни одного гостя заведения.</p>
          </div>
          <div class="img-wrapper">
            <img src="https://i.ibb.co/tcckRVV/about-us03.jpg" alt="">
          </div>
        </div>

        <div class="about-row">
          <div class="img-wrapper">
            <img src="https://i.ibb.co/DRgDfKQ/about-us02.jpg" alt="">
          </div>
          <div class="text">
            <p>В распоряжении гостей <span>две просторных веранды</span>, одна из которых выходит своим видом на знаменитую <span>Красную Площадь</span>, рассчитана на 170 человек и скрыта от посторонних глаз</p>
            <p>Вторая роскошная веранда смотрит на <span>Хрустальный переулок</span> и на ней могут получить удовольствие от ароматных блюд и теплого общения до 60 человек</p>
          </div>
        </div>

        <div class="about-row">
          <div class="text">
            <p><span>Высокий уровень сервиса</span> – один из приоритетов заведения.</p>
             <p>Внимательный и доброжелательный персонал поможет сделать правильный выбор, предоставит рекомендации и сделает отдых гостей предельно комфортным</p>
          </div>
          <div class="img-wrapper">
            <img src="https://i.ibb.co/1nj6nKJ/about-us01.jpg" alt="">
          </div>
        </div>

      </div>



    </div>
  </div>
</template>

<script>
import vHeader from '../components/v-header'
export default {
  name: "v-about",
  components: {
    vHeader,
  }
}
</script>

<style scoped>
.container{
  width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
}
.about-wrapper{

}
.about-row{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text{
  width: 45%;
  font-size: 22px;
}
.img-wrapper{
  width: 50%;
}
img{
  width: 100%;
}
span{
  color: #6962d3;
  font-weight: bold;
}
</style>