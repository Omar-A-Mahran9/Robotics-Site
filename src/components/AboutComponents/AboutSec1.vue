<template>
  <section class="container">
    <div class="MainComp">
      <div class="d-flex flex-column align-items-center gap-4">
        <div class="mb-2" style="position: relative">
          <img
            src="@/assets/photos/Group_15.svg"
            style="position: absolute; right: 50px; top: 55px; width: 70px"
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
            تعرف علينا عن قرب
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
            عش اجواء بطولاتنا وفعاليتنا مع تغطية مختصرة وسريعة
          </p>
        </div>
        <div
          class="d-flex gap-2 align-items-center justify-content-center"
          style="color: #d2398d"
        >
          <a href=""><img src="@/assets/photos/home(2).svg" /></a>
          <a href="" class="link"
            ><img src="@/assets/photos/Group_11.svg" /> &nbsp; عن الاتحاد
          </a>
          <a href="" class="link"
            ><img src="@/assets/photos/Group_48.svg" /> &nbsp; مجلس الادارة
          </a>
        </div>
      </div>
    </div>
    <AboutComp1 />
    <!-- <AboutComp2 /> -->
  </section>
</template>
<style scoped>
.link {
  padding: 10px 30px 10px 30px;

  border-radius: 30px;
  color: black;
  cursor: pointer;
}
a {
  cursor: pointer;
}
.link:hover {
  border: 2px solid #d2398d;
}
</style>
<script>
import AboutComp1 from "@/components/AboutComponents/AboutComp1.vue";

// import AboutComp2 from "@/components/AboutComponents/AboutComp2.vue";
export default {
  components: {
    AboutComp1,
    // AboutComp2,
  },
};
</script>
