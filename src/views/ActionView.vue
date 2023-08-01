<template>
  <Header />

  <Action />
  <Footer />
</template>

<script>
import Header from "@/components/Layout/NavBar.vue";
import Footer from "@/components/Layout/FooterSec.vue";
import Action from "@/components/ActionComponents/ActionComp.vue";
export default {
  components: {
    Header,
    Footer,
    Action,
  },
};
</script>
