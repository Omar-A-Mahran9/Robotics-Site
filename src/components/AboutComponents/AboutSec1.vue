<template>
  <section class="container">
    <div class="MainComp">
      <div class="d-flex flex-column align-items-center gap-4">
        <div class="mb-2" style="position: relative">
          <img
            class="sh"
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
          <router-link :to="{ name: 'Home' }"
            ><img src="@/assets/photos/home(2).svg"
          /></router-link>
          <a @click="about" :class="lin" class="link"
            ><img src="@/assets/photos/Group_11.svg" /> &nbsp; عن الاتحاد
          </a>
          <a @click="manage" :class="lin2" class="link"
            ><img src="@/assets/photos/Group_48.svg" /> &nbsp; مجلس الادارة
          </a>
        </div>
      </div>
    </div>
    <div v-show="abot"><AboutComp1 /></div>
    <div v-show="manag"><AboutComp2 /></div>
  </section>
</template>
<style scoped>
.link {
  padding: 10px 30px 10px 30px;

  border-radius: 30px;
  color: rgb(0, 0, 0);
  cursor: pointer;
}
.active {
  color: white !important;
  background-color: #d2398d;
}
a {
  cursor: pointer;
}

@media only screen and (max-width: 991px) {
  .sh {
    display: none;
  }
  .link {
    padding: 5px 10px 5px 15px;
    font-size: 14px;

    border-radius: 30px;
    color: black;
    cursor: pointer;
  }
}
</style>
<script>
import AboutComp1 from "@/components/AboutComponents/AboutComp1.vue";

import AboutComp2 from "@/components/AboutComponents/AboutComp2.vue";
export default {
  data() {
    return {
      manag: false,
      abot: true,
      lin: "active",
      lin2: "",
    };
  },
  components: {
    AboutComp1,
    AboutComp2,
  },
  methods: {
    manage() {
      this.manag = true;
      this.abot = false;
      this.lin = "";
      this.lin2 = "active";
    },
    about() {
      this.manag = false;
      this.abot = true;
      this.lin = "active";
      this.lin2 = "";
    },
  },
};
</script>
