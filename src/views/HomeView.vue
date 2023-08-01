<template>
  <NavBar />
  <div class="space"></div>
  <MainSlider />
  <SecSlider />
  <MinSlider />
  <MainComponent />
  <SectionZero />
  <SectionOne />
  <SectionTwo />
  <SectionThree />
  <LastSection />
  <FooterSec />
</template>
<script>
import NavBar from "@/components/Layout/NavBar.vue";
import FooterSec from "@/components/Layout/FooterSec.vue";
import LastSection from "@/components/HomeComponents/LastSection.vue";
import SectionThree from "@/components//HomeComponents/SectionThree.vue";
import SectionTwo from "@/components//HomeComponents/SectionTwo.vue";
import SectionOne from "@/components/HomeComponents/SectionOne.vue";
import SectionZero from "@/components/HomeComponents/SectionZero.vue";
import MinSlider from "@/components/HomeComponents/MinSlider.vue";
import SecSlider from "@/components/HomeComponents/SecSlider.vue";
import MainSlider from "@/components/HomeComponents/MainSlider.vue";
import MainComponent from "@/components/HomeComponents/Multicomponents/MainComponent.vue";
export default {
  name: "HeaderNa",
  components: {
    NavBar,
    FooterSec,
    LastSection,
    SectionThree,
    SectionTwo,
    SectionOne,
    SectionZero,
    MainComponent,
    MinSlider,
    SecSlider,
    MainSlider,
  },
};
</script>
<style>
.space {
  height: 200px;
}
@media only screen and (max-width: 991px) {
  .space {
    height: 130px;
  }
}
</style>
