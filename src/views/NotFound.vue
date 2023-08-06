<template>
  <Header />

  <NotFound />
  <Footer />
</template>

<script>
import Header from "@/components/Layout/NavBar.vue";
import Footer from "@/components/Layout/FooterSec.vue";
import NotFound from "@/components/NotFound.vue";

export default {
  components: {
    NotFound,
    Header,
    Footer,
  },
};
</script>
