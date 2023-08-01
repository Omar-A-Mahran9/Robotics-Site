<template>
  <Header />
  <Event />
  <Footer />
</template>
<script>
import Header from "@/components/Layout/NavBar.vue";
import Footer from "@/components/Layout/FooterSec.vue";
import Event from "@/components/EventComponents/EventComp.vue";
export default {
  components: {
    Header,
    Footer,
    Event,
  },
};
</script>
