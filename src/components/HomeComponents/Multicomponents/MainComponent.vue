<template>
  <section class="container mb-5">
    <div class="d-flex flex-column align-items-center gap-4">
      <div>
        <a class="senddd">البطولات</a>
      </div>
      <div class="mb-2" style="position: relative">
        <img
          src="@/assets/photos/Group_15.svg"
          style="position: absolute; right: 10px; top: 35px; width: 70px"
        />
        <h3>أجواء بطولاتنا لا تنتهي</h3>
        <p style="font-size: 12px; line-height: 30px; width: 70%; margin: auto">
          ودك تعرف أكثر عن بطولاتنا اللي نقدمها في الاتحاد تعال ناخدك بجوله
        </p>
      </div>
      <div
        class="d-flex gap-5"
        style="background: #e2f4fe; border-radius: 15px; overflow: hidden"
      >
        <a class="linkk">الروبوت</a>
        <a class="linkk2">الرياضات اللاسلكية</a>
      </div>
    </div>
  </section>
  <FirstCompon />
  <!-- <SecCompon /> -->
</template>

<style>
.linkk,
.linkk2 {
  text-decoration: none;
  color: black;
  margin: 15px;
  cursor: pointer;
}
.linkk:active,
.linkk2:active {
  color: #d2398d;
  border: 2px solid #d2398d;
  border-radius: 30px;
  padding: 5px;
}
a {
  text-decoration: none !important;
}
</style>

<script>
import FirstCompon from "@/components/HomeComponents/Multicomponents/FirstCompon.vue";

// import SecCompon from "@/components/HomeComponents/Multicomponents/SecCompon.vue";

export default {
  components: {
    // SecCompon,
    FirstCompon,
  },
};
</script>
