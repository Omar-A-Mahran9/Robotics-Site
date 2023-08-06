<template>
  <section
    class="section"
    style="
      position: relative;
      background: linear-gradient(
        180deg,
        #a7e5ff 0%,
        rgba(255, 255, 255, 0) 100%
      );
    "
  >
    <div class="container back1 pt-5">
      <div class="d-flex justify-content-between align-items-center pt-5 mb-4">
        <div>
          <a class="senddd">الإنجازات والتكريمات</a>
        </div>
        <div class="d-flex justify-content-center">
          <div>
            <img class="size" src="@/assets/photos/RightArrow.svg" />
          </div>
          <div><img class="size" src="@/assets/photos/leftarrrow.svg" /></div>
        </div>
      </div>
      <div class="">
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
            <div class="row align-items-around">
              <div class="col-12 col-lg-6 mb-4">
                <div class="colstyle" style="text-align: justify; width: 60%">
                  <h3 class="fw-bold mb-3 title" style="line-height: 50px">
                    {{ title }}
                  </h3>
                  <hr class="line" />
                  <p class="mb-4">
                    {{ description }}
                  </p>
                  <a
                    class="mgroup"
                    style="
                      float: right;
                      color: deeppink;
                      background-color: #b2e3ff;
                      border-radius: 24px;
                      padding: 5px 35px 5px 35px;
                    "
                    ><img src="@/assets/photos/www.svg" /> انجاز عالمي
                  </a>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div style="position: relative">
                  <img
                    src="@/assets/photos/Rectangle_5.svg"
                    style="width: 100%"
                  />
                  <div class="sticker">
                    <img src="@/assets/photos/Vector_6.svg" />
                    <h5 class="fw-bold text-white" style="margin-top: -70px">
                      {{ text.title }}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <router-link
        :to="{ name: 'achievemnet' }"
        style="text-align: left; line-height: 50px; color: #d2398d"
        ><p class="fw-bold more">المزيد ..</p></router-link
      >
    </div>
  </section>
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
        title: "2023",
        vector: "@/assets/photos/Vector_6.svg",
        img1: "@/assets/photos/Rectangle_5.svg",
      },
      {
        title: "2023",
        vector: "@/assets/photos/Vector_6.svg",
        img1: "@/assets/photos/Rectangle_5.svg",
      },
      {
        title: "2023",
        vector: "@/assets/photos/Vector_6.svg",
        img1: "@/assets/photos/Rectangle_5.svg",
      },
    ]);
    return { modules: [Pagination, Autoplay, Navigation], swiperTextBase };
  },

  data() {
    return {
      title: "السعودية تحقق المركز الأول في جائزة مشروع الابتكار",
      description:
        "نبارك للمنتخب السعودي المشارك في بطولة الفيرست ليغو الدولية المفتوحة  بالمملكة المغربية بتحقيقه المركز الأول في جائزة مشروع الا ابتكار.",
    };
  },
};
</script>

<style scoped>
.title {
  color: #306386;
}
.sticker {
  position: absolute;
  top: 0;
  left: 240px;
  width: 100%;
  height: 100%;

  border-radius: 50%;
}
.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  overflow: clip;
  list-style: none;
  padding: 0;
  z-index: 1;
  display: block;
  padding-bottom: 40px;
}
.swiper-pagination-bullet {
  width: 14px !important;
  height: 14px !important;
  display: inline-block !important;
  border-radius: 50% !important;
  background: red !important;
  opacity: 0.2 !important;
}

.back1 {
  background-image: url("@/assets/photos/back_1.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.section {
  padding-top: 100px;
}

@media only screen and (max-width: 991px) {
  .title {
    color: #306386;
    scale: 85%;
    transform: translate(34px);
    text-align: right;
  }
  .back1 {
    margin-top: 0px;
  }
  .size {
    width: 20px;
  }
  .colstyle {
    width: 100% !important;
  }
  .line {
    display: none;
  }
  .more {
    display: none;
  }
  .sticker {
    position: absolute;
    top: -36px;
    left: 120px;
    width: 100%;
    height: 100%;

    transform: scale(70%);

    border-radius: 50%;
  }
  .mgroup {
    margin-bottom: 8px;
  }
}
</style>
