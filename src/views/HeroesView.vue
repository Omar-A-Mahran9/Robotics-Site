<template>
  <Header />

  <Heroes />
  <Footer />
</template>
<script>
import Header from "@/components/Layout/NavBar.vue";
import Footer from "@/components/Layout/FooterSec.vue";
import Heroes from "@/components/HeroesComponents/HeroesComp.vue";
export default {
  components: {
    Header,
    Footer,
    Heroes,
  },
};
</script>
