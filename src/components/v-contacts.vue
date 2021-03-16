<template>
  <div class="contacts-wrapper">
    <vHeader></vHeader>
    <div class="container">
      <div class="info-wrapper">
        <h1 class="title">Контакты</h1>
        <h2>Адрес</h2>
        <p>Москва, Красная площадь, дом 3</p>
        <p><a href="https://www.google.ru/maps/place/%D0%93%D0%A3%D0%9C/@55.7540094,37.6210972,18z/data=!4m5!3m4!1s0x46b54a598b4552fd:0xd2f2265b70fe6a05!8m2!3d55.7546966!4d37.6215213">Посмотреть на Google Maps</a></p>
        <h2>Время работы</h2>
        <p>11:00 - 00:00</p>
      </div>


      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1122.629313004033!2d37.62109719635494!3d55.75400938049934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a598b4552fd%3A0xd2f2265b70fe6a05!2z0JPQo9Cc!5e0!3m2!1sru!2sru!4v1615887934516!5m2!1sru!2sru" width="1000" height="700" style="border:2px solid #22356F; border-radius: 10px" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from '../components/v-header'
export default {
  name: "v-contacts",
  components: {
    vHeader,
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container{
  display: flex;
  width: 1650px;
  margin: 0 auto;
}
.info-wrapper{
  width: 40%;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: left;
}
.title{
  font-size: 50px;
  font-weight: 700;
  padding-bottom: 20px;
  color: #979797;
}
h2{
  font-size: 32px;
  font-weight: 600;
  padding-bottom: 15px;
  color: #979797;
}
a{
  text-decoration: none;
  color: #22356F;
  font-size: 18px;
}
p{
  font-size: 24px;
  padding-bottom: 10px;
}
.map{
  padding-top: 120px;
}
</style>