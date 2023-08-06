<template>
  <div class="Section">
    <div class="container">
      <div class="row align-items-center mt-5 mb-5">
        <div class="col-12 col-md-6 mb-5">
          <div style="position: relative">
            <img src="@/assets/photos/Rectangle_5.svg" style="width: 100%" />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div style="text-align: justify; margin-bottom: 100px">
            <h3 class="fw-bold mb-3" style="line-height: 50px width: 60%">
              السعودية تحقق المركز الأول في جائزة مشروع الابتكار
            </h3>
            <hr />
            <p class="mb-2">
              نبارك للمنتخب السعودي المشارك في بطولة الفيرست ليغو الدولية
              المفتوحة بالمملكة المغربية بتحقيقه المركز الأول في جائزة مشروع الا
              ابتكار.
            </p>
          </div>

          <div class="d-flex justify-content-between text-white mt-5">
            <div>
              <img src="@/assets/photos/Vector.svg" /> الثلاثاء 13 / 4 / 2023
            </div>
            <div>
              <router-link
                :to="{ name: 'news' }"
                style="line-height: 50px; padding-left: 30px; color: #d2398d"
                ><p class="fw-bold">المزيد ..</p></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
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
      class="mySwiper"
    >
      <swiper-slide v-for="text in swiperTextBase" :key="text.description">
        <div class="container row justify-content-center mt-5">
          <div
            v-for="text in swiperTextBase"
            :key="text.description"
            class="card col-12 col-md-6 crd resp"
            style="
              width: 30%;
              background: white;
              box-shadow: 0px 4px 4px rgba(162.56, 162.56, 162.56, 0.25);
              border-radius: 16px !important;
              color: #306386;
            "
          >
            <img
              class="card-img-top"
              :src="require('@/assets/photos/' + text.img1)"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text fw-bold" style="text-align: right">
                {{ text.title }}
              </p>
              <hr />
              <div style="float: right">
                <img src="@/assets/photos/Vector2.svg" />
                <span> الثلاثاء 13 / 4 / 2023</span>
              </div>
            </div>
          </div>
          <div
            class="card col-12 col-md-6 crdd"
            style="
              width: 100%;
              background: white;
              box-shadow: 0px 4px 4px rgba(162.56, 162.56, 162.56, 0.25);
              border-radius: 16px !important;
              color: #306386;
            "
          >
            <img
              class="card-img-top"
              :src="require('@/assets/photos/' + text.img1)"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text fw-bold" style="text-align: right">
                {{ text.title }}
              </p>
              <hr />
              <div style="float: right">
                <img src="@/assets/photos/Vector2.svg" />
                <span> الثلاثاء 13 / 4 / 2023</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
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
        title: "السعودية تحقق المركز الأول في جائزة مشروع الابتكار",
        vector: "@/assets/photos/Vector_6.svg",
        img1: "Rectangle_16.svg",
      },
      {
        title: "السعودية تحقق المركز الأول في جائزة مشروع الابتكار",
        vector: "@/assets/photos/Vector_6.svg",
        img1: "Rectangle_15.svg",
      },
      {
        title: "السعودية تحقق المركز الأول في جائزة مشروع الابتكار",
        vector: "@/assets/photos/Vector_6.svg",
        img1: "Rectangle_14.svg",
      },
    ]);
    return { modules: [Pagination, Autoplay, Navigation], swiperTextBase };
  },
};
</script>
<style>
.crdd {
  display: none !important;
}
@media only screen and (max-width: 991px) {
  .crd {
    width: 100% !important;
  }
  .resp {
    display: none !important;
  }
  .crdd {
    display: block !important;
  }
}
</style>
