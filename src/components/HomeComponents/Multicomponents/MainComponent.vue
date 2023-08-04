<template>
  <section class="container mb-5">
    <div class="d-flex flex-column align-items-center gap-4">
      <div>
        <a class="senddd">البطولات</a>
      </div>
      <div class="mb-2" style="position: relative">
        <img
          src="@/assets/photos/Group_15.svg"
          style="position: absolute; right: 10px; top: 35px; width: 70px"
        />
        <h3 style="color: #306386; font-weight: bold">
          أجواء بطولاتنا لا تنتهي
        </h3>
        <p style="font-size: 12px; line-height: 30px; width: 70%; margin: auto">
          ودك تعرف أكثر عن بطولاتنا اللي نقدمها في الاتحاد تعال ناخدك بجوله
        </p>
      </div>
      <div
        class="d-flex gap-3 text-center justify-contnet-center"
        style="background: #e2f4fe; border-radius: 15px; overflow: hidden"
      >
        <a class="linkk" :class="activee" @click="FirstCompo">الروبوت</a>
        <a class="linkk2" :class="active1" @click="SecCompo"
          >الرياضات اللاسلكية</a
        >
      </div>
    </div>
  </section>
  <div>
    <FirstCompon v-show="FirstCompon" />
    <SecCompon v-show="SecCompon" />
  </div>
</template>

<style>
.linkk,
.linkk2 {
  text-decoration: none;
  color: black;
  height: 60px;
  cursor: pointer;
  padding: 15px;
}
.active {
  color: #d2398d;
  border: 4px solid #d2398d;
  border-radius: 16px;
  font-weight: bold;
  align-items: center;
}

a {
  text-decoration: none !important;
}
</style>

<script>
import FirstCompon from "@/components/HomeComponents/Multicomponents/FirstCompon.vue";

import SecCompon from "@/components/HomeComponents/Multicomponents/SecCompon.vue";

export default {
  data() {
    return {
      FirstCompon: true,
      SecCompon: false,
      activee: "active",
      active1: "",
    };
  },
  components: {
    SecCompon,
    FirstCompon,
  },
  methods: {
    FirstCompo() {
      this.FirstCompon = true;
      this.SecCompon = false;
      this.activee = "active";
      this.active1 = "";
    },
    SecCompo() {
      this.SecCompon = true;
      this.FirstCompon = false;
      this.activee = "";
      this.active1 = "active";
    },
  },
};
</script>
