<template>
  <Header />
  <Contact />
  <Footer />
</template>
<script>
import Header from "@/components/Layout/NavBar.vue";
import Footer from "@/components/Layout/FooterSec.vue";
import Contact from "@/components/ContactComponents/ContactComp.vue";
export default {
  components: {
    Header,
    Footer,
    Contact,
  },
};
</script>
