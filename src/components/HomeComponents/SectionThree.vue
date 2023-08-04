<template>
  <div
    class="container"
    style="
      width: 100%;
      height: 200px;
      background: linear-gradient(270deg, #022c48 0%, #022c48 0%, #306386 100%);
      border-radius: 16px;

      padding-bottom: 360px;
      position: relative;
    "
  >
    <div class="row mainn justify-content-around">
      <div
        v-for="text in swiperTextBase"
        :key="text.title"
        class="col-md-2 col-5 card"
        style=""
      >
        <img
          :src="require('@/assets/photos/' + text.img1)"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-tit fw-bold p-2">{{ text.name }}</p>
          <p class="card-text text-white">
            {{ text.title }}
          </p>
        </div>
      </div>
    </div>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :modules="modules"
      class="response"
    >
      <swiper-slide v-for="text in swiperTextBase" :key="text.title">
        <div class="row justify-content-around mt-5">
          <img
            style="width: 60%"
            :src="require('@/assets/photos/' + text.img1)"
            alt="Card image cap"
          />
          <div class="">
            <p class="card-tit fw-bold p-2">{{ text.name }}</p>
            <p class="card-text text-white">
              {{ text.title }}
            </p>
          </div>
          <div class="col-md-2 col-5" style=""></div>
        </div>
      </swiper-slide>
    </swiper>
    <a
      style="
        text-align: left;
        color: rgb(255, 255, 255);
        bottom: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        padding-left: 34px;
        line-height: 50px;
        text-align: left;
        color: #ffffff;
      "
      href="#/heroes"
      ><p class="fw-bold">المزيد ..</p></a
    >
  </div>
</template>
<style scoped>
.card {
  width: 200px;

  height: 170px;
  background-color: aquamarine !important;
  border-radius: 35px !important;
  margin-top: -6%;
}
.main-card p {
  width: 80%;
}
.card-tit {
  margin-top: -30px;
  background: white;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  top: 190px;
  margin-right: 10px;
  box-shadow: 0px 4px 4px rgba(162.56, 162.56, 162.56, 0.25);
}

/* .respo {
  display: none;
} */
</style>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref } from "vue";
export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const swiperTextBase = ref([
      {
        name: "عبد الله العجاجي",
        title: "افضل لاعب في تحدي الروبوت الافتراضي",
        img1: "Rakan1.svg",
      },
      {
        name: "عبد الله العجاجي",
        title: "افضل لاعب في تحدي الروبوت الافتراضي",
        img1: "Rakan1.svg",
      },
      {
        name: "عبد الله العجاجي",
        title: "افضل لاعب في تحدي الروبوت الافتراضي",
        img1: "Rakan1.svg",
      },
      {
        name: "عبد الله العجاجي",
        title: "افضل لاعب في تحدي الروبوت الافتراضي",
        img1: "Rakan1.svg",
      },
      {
        name: "عبد الله العجاجي",
        title: "افضل لاعب في تحدي الروبوت الافتراضي",
        img1: "Rakan1.svg",
      },
    ]);
    return { modules: [Pagination, Autoplay, Navigation], swiperTextBase };
  },
};
</script>
<style>
.response {
  display: none !important;
}

@media only screen and (max-width: 991px) {
  .response {
    display: block !important;
  }
  .mainn {
    display: none !important;
  }
}
</style>
