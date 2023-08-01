<template>
  <section class="container">
    <video class="myVideo mt-5 mb-4" autoplay loop muted style="height: 600px">
      <source src="@/assets/videos/e_e.mp4" type="video/mp4" />
      <div class="overlay1"></div>
    </video>

    <div class="row">
      <div v-for="i in 4" :key="i" class="col-6 pb-5">
        <div
          class="card mb-3"
          style="
            background: #ffffff;
            box-shadow: 0px 4px 4px rgba(162.56, 162.56, 162.56, 0.25);
            border-radius: 16px !important;
          "
        >
          <video class="vid" controls autoplay loop muted>
            <source
              src="@/assets/videos/مبادرة_التصنيع_الرياضي.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div class="card-body">
            <p
              class="card-text fw-bold"
              style="text-align: right; font-size: 12px; color: #306386"
            >
              المنتخب السعودي للروبوت في يومه الأول من البطولة العالمية لدوري
              فيرست
            </p>

            <div style="float: right">
              <img src="@/assets/photos/Vector2.svg" />
              <span style="font-size: 15px"> الثلاثاء 13 / 4 / 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.myVideo {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 25px;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0.447);
}
.overlay1 {
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: red;
  opacity: 1;
}
</style>
