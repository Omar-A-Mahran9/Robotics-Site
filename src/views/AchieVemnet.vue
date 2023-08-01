<template>
  <Header />

  <Achievemnet />
  <Footer />
</template>
<script>
import Header from "@/components/Layout/NavBar.vue";
import Footer from "@/components/Layout/FooterSec.vue";
import Achievemnet from "@/components/AchievementComponents/AchievementComp.vue";

export default {
  components: {
    Achievemnet,
    Footer,
    Header,
  },
};
</script>
