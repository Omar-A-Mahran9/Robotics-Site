<template>
  <div class="about">
    <Header />
    <div style="height: 150px"></div>
    <About />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Layout/NavBar.vue";
import Footer from "@/components/Layout/FooterSec.vue";
import About from "@/components/AboutComponents/AboutSec1.vue";
export default {
  components: {
    Header,
    Footer,
    About,
  },
};
</script>
