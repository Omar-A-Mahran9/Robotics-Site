<template>
  <section class="lastimg mt-4 backk">
    <div class="container contain">
      <div class="d-flex flex-column align-items-center gap-3 mb-5">
        <a class="sendd">شركائنا</a>
        <p>نعتز ونفتخر بشراكاتنا المتنوعة والفريدة</p>
      </div>
      <div class="justify-content-center">
        <div class="row gap-5 sh">
          <div style="width: 100%">
            <a
              v-for="text in swiperTextBase"
              :key="text.description"
              class="col-12 col-md-2 m-3"
              href=""
            >
              <img
                style="width: 15%"
                class="iml"
                :src="require('@/assets/photos/' + text.img1)"
              />
            </a>
          </div>
        </div>
        <swiper
          :spaceBetween="300"
          :centeredSlides="true"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
          }"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="text in swiperTextBase" :key="text.description">
            <div class="row gap-5 sh1">
              <div style="width: 100%">
                <a class="col-12 col-md-2 m-3" href=""
                  ><img
                    style="width: 40%"
                    :src="require('@/assets/photos/' + text.img1)"
                /></a>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
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
        vector: "@/assets/photos/image_5.svg",
        img1: "image_4.svg",
      },
      {
        title: "2023",
        vector: "@/assets/photos/image_6.svg",
        img1: "image_5.svg",
      },
      {
        title: "2023",
        vector: "@/assets/photos/image_8.svg",
        img1: "image_6.svg",
      },
      {
        title: "2023",
        vector: "@/assets/photos/image_8.svg",
        img1: "image_7.svg",
      },
      {
        title: "2023",
        vector: "@/assets/photos/image_8.svg",
        img1: "image_8.svg",
      },
    ]);
    return { modules: [Pagination, Autoplay, Navigation], swiperTextBase };
  },
};
</script>
<style>
.iml {
  filter: grayscale(100%);
}
.iml:hover {
  filter: grayscale(0%);
}
.lastimg {
  /* background: url("@/assets/photos/Rectangle_17.svg"); */
}
.sendd {
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 2px;
  padding-bottom: 4px;
  border: 2px solid #d2398d;
  border-radius: 24px;
  text-decoration: none;
  color: #d2398d;
  font-weight: bold;
}
.contain {
  margin-top: -150px;
}
.backk {
  background: rgb(232, 232, 232);
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  border-radius: 50% 50% 0% 0%;
  padding-top: 200px;
  padding-bottom: 300px;
}
.sh1 {
  display: none !important;
}
@media only screen and (max-width: 991px) {
  .backk {
    background: rgb(232, 232, 232);
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    border-radius: 0% 0% 0% 0%;
    padding-top: 200px;
    padding-bottom: 200px;
  }
  .sh {
    display: none !important;
  }
  .sh1 {
    display: block !important;
  }
}
</style>
