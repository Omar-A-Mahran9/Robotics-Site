<template>
  <section class="lastimg mt-4">
    <div class="container contain">
      <div class="d-flex flex-column align-items-center gap-3 mb-5">
        <a class="sendd">شركائنا</a>
        <p>نعتز ونفتخر بشراكاتنا المتنوعة والفريدة</p>
      </div>
      <div class="d-flex justify-content-center gap-5">
        <a href=""><img src="@/assets/photos/image_8.svg" /></a>
        <a href=""><img src="@/assets/photos/image_7.svg" /></a>
        <a href=""><img src="@/assets/photos/image_6.svg" /></a>
        <a href=""><img src="@/assets/photos/image_5.svg" /></a>
        <a href=""><img src="@/assets/photos/image_4.svg" /></a>
      </div>
    </div>
  </section>
</template>

<style>
.lastimg {
  background: url("@/assets/photos/Rectangle_17.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain, cover;
  padding: 10%;
  margin-bottom: -150px;
}
.sendd {
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 2px;
  padding-bottom: 4px;
  border: 2px solid #d2398d;
  border-radius: 24px;
  text-decoration: none;
  color: #d2398d;
  font-weight: bold;
}
.contain {
  margin-top: -150px;
}
</style>
