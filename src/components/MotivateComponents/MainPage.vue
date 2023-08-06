<template>
  <section class="">
    <div class="MainComp">
      <div class="container d-flex flex-column align-items-center gap-4">
        <div class="mb-2" style="position: relative">
          <img
            class="pe"
            src="@/assets/photos/Group_15.svg"
            style="position: absolute; right: 90px; top: 55px; width: 90px"
          />
          <h2
            style="
              font-weight: bold;
              line-height: 60px;
              width: 70%;
              margin: auto;
              color: #306386;
            "
          >
            حماس وتحدي لا ينتهي
          </h2>
          <p
            style="
              font-size: 20px;
              font-weight: 400;
              line-height: 30px;
              width: 70%;
              margin: auto;
            "
          >
            عش اجواء بطولاتنا وفعاليتنا وتابع اخبارنا لحظة بلحظة مع تغطية مختصرة
            وسريعة
          </p>
        </div>
        <div
          class="d-flex gap-2 align-items-center justify-content-center"
          style="color: #d2398d"
        >
          <router-link :to="{ name: 'Home' }"
            ><img src="@/assets/photos/home(2).svg"
          /></router-link>
          <button :class="cls" class="link" @click="newsshow">
            <img src="@/assets/photos/NewsVector.svg" /> &nbsp; الأخبار
          </button>
          <button :class="cls2" class="link" @click="vidshow">
            <img src="@/assets/photos/Coverage.svg" /> &nbsp; التغطيات
          </button>
        </div>
      </div>
      <div v-show="news">
        <seccomp1 />
      </div>
      <div v-show="videos">
        <seccomp3 />
      </div>
      <router-link
        :to="{ name: 'action' }"
        style="
          line-height: 50px;
          text-align: center;
          padding-left: 30px;
          color: #d2398d;
        "
        ><p class="fw-bold mt-4">المزيد ..</p></router-link
      >
    </div>
  </section>
</template>
<style>
.Section {
  background: linear-gradient(180deg, #022c48 0%, #306386 100%);

  color: #ffffff;
  padding: 16px;
  margin-top: 60px;
}
.link {
  background-color: #ffffff;
}
.act {
  background-color: #d2398d;
  color: #ffffff;
}
.card {
  border: none !important;
}

@media only screen and (max-width: 991px) {
  .pe {
    display: none;
  }
  h2 {
    line-height: 50px !important;
  }
}
</style>

<script>
import seccomp1 from "@/components/MotivateComponents/SecComp1.vue";
import seccomp3 from "@/components/MotivateComponents/SecComp3.vue";

export default {
  data() {
    return { news: true, videos: false, cls: "act", cls2: "" };
  },
  components: {
    seccomp1,
    seccomp3,
  },
  methods: {
    newsshow() {
      this.news = true;
      this.videos = false;
      this.cls = "act";
      this.cls2 = "";
    },
    vidshow() {
      this.news = false;
      this.videos = true;
      this.cls = "";
      this.cls2 = "act";
    },
  },
};
</script>
