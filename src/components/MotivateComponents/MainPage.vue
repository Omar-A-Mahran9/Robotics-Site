<template>
  <section class="">
    <div class="MainComp">
      <div class="container d-flex flex-column align-items-center gap-4">
        <div class="mb-2" style="position: relative">
          <img
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
          <a href=""><img src="@/assets/photos/home(2).svg" /></a>
          <a href="#/news" class="link"
            ><img src="@/assets/photos/NewsVector.svg" /> &nbsp; الأخبار
          </a>
          <a href="" class="link"
            ><img src="@/assets/photos/Coverage.svg" /> &nbsp; التغطيات
          </a>
        </div>
      </div>
      <seccomp1 />
      <!-- <seccomp3 /> -->
      <a
        style="
          line-height: 50px;
          text-align: center;
          padding-left: 30px;
          color: #d2398d;
        "
        href="#/Action"
        ><p class="fw-bold mt-4">المزيد ..</p></a
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
.card {
  border: none !important;
}
</style>
<script>
import seccomp1 from "@/components/MotivateComponents/SecComp1.vue";
// import seccomp3 from "@/components/MotivateComponents/SecComp3.vue";

export default {
  components: {
    seccomp1,
    // seccomp3,
  },
};
</script>
