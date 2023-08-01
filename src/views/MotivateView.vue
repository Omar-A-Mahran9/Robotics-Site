<template>
  <Header />
  <div style="height: 150px"></div>
  <Main />
  <Footer />
</template>

<script>
import Header from "@/components/Layout/NavBar.vue";
import Footer from "@/components/Layout/FooterSec.vue";
import Main from "@/components/MotivateComponents/MainPage.vue";
export default {
  components: {
    Header,
    Footer,
    Main,
  },
};
</script>
