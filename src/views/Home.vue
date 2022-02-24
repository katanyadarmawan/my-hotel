<template>
  <div class="home">
    <HeaderHotel />
    <AboutHotel />
    <Acomodation />
    <DinningHotel />
    <RoomHotel />
    <Review />
    <Localarea />
    <AddressHotel />
    <FooterHotel />
    <a href="#" class="btn btn-wa"
      ><img src="images/icon-whatsapp.svg" alt="WhatsApp"
    /></a>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderHotel from "../components/Header.vue";
import AboutHotel from "../components/About.vue";
import Acomodation from "../components/Acomodation.vue";
import DinningHotel from "../components/Dinning.vue";
import RoomHotel from "../components/Room.vue";
import Localarea from "../components/Localarea.vue";
import AddressHotel from "../components/Address.vue";
import FooterHotel from "../components/Footer.vue";
import Review from "../components/Review.vue";

export default {
  name: "Home",
  components: {
    HeaderHotel,
    AboutHotel,
    Acomodation,
    DinningHotel,
    RoomHotel,
    Review,
    Localarea,
    AddressHotel,
    FooterHotel,
  },
};
</script>


