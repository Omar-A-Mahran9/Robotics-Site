<template>
  <Header />

  <Main />
  <Footer />
</template>

<script>
import Header from "@/components/Layout/NavBar.vue";
import Footer from "@/components/Layout/FooterSec.vue";
import Main from "@/components/MotivateComponents/SecComp2.vue";
export default {
  components: {
    Header,
    Footer,
    Main,
  },
};
</script>
