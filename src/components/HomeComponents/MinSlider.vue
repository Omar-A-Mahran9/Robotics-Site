<template>
  <section class="container mb-5">
    <div
      class="d-flex flex-column align-items-center gap-4 container pt-5 back"
    >
      <div>
        <a class="senddd">تغطيات خاصة</a>
      </div>
      <div class="mb-2" style="position: relative">
        <img
          class="shp"
          src="@/assets/photos/Group_15.svg"
          style="position: absolute; right: 10px; top: 35px; width: 70px"
        />
        <h3 class="title">حماس وتحدي لا ينتهي</h3>
        <p style="font-size: 16px; line-height: 30px; width: 70%; margin: auto">
          عش اجواء بطولاتنا وفعاليتنا مع تغطية مختصرة وسريعة
        </p>
      </div>
    </div>
    <div>
      <div class="row justify-content-center align">
        <div class="col">
          <div style="position: relative; width: 594px">
            <video class="vid" loop muted ref="video" width="594">
              <source src="@/assets/videos/e_e.mp4" type="video/mp4" />
            </video>
            <div
              id="overlay"
              style="
                background: linear-gradient(
                  180deg,
                  rgba(5.72, 45.17, 72.25, 0.26) 0%,
                  #021d2f 100%
                );
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 335px;
                border-radius: 16px;
                opacity: 0.7;
                z-index: 9;
              "
            ></div>
            <button
              v-if="!isPlaying || !isPaused"
              @click="playVideo"
              ref="button"
              class="center-button"
            >
              <img src="@/assets/photos/play-button.svg" />
            </button>
            <button class="center-button" v-if="isPlaying" @click="playVideo">
              <img src="@/assets/photos/puse.png" />
            </button>
          </div>
        </div>
        <div class="col align-items-center">
          <div
            class="d-flex gap-3 align-items-center justify-content-center mb-3"
          >
            <div
              class="card"
              style="
                width: 310px;
                background: #ffffff;
                box-shadow: 0px 4px 4px rgba(162.56, 162.56, 162.56, 0.25);
                border-radius: 16px !important;
              "
            >
              <video class="vid" loop muted width="310">
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
                  السعودية تحقق المركز الأول في جائزة مشروع الابتكار
                </p>

                <div style="float: right">
                  <img src="@/assets/photos/Vector2.svg" />
                  <span style="font-size: 15px"> الثلاثاء 13 / 4 / 2023</span>
                </div>
              </div>
            </div>
            <div
              class="card"
              style="
                width: 310px;
                background: #ffffff;
                box-shadow: 0px 4px 4px rgba(162.56, 162.56, 162.56, 0.25);
                border-radius: 16px !important;
              "
            >
              <video class="vid" loop muted width="310">
                <source src="@/assets/videos/Omar.mp4" type="video/mp4" />
              </video>
              <!-- <button @click="playVideo1" class="center-button">
                <img src="@/assets/photos/play-button.svg" />
              </button> -->
              <div class="card-body">
                <p
                  class="card-text fw-bold"
                  style="text-align: right; font-size: 12px; color: #306386"
                >
                  المنتخب السعودي للروبوت في يومه الأول من البطولة العالمية
                  لدوري فيرست
                </p>

                <div style="float: right">
                  <img src="@/assets/photos/Vector2.svg" />
                  <span style="font-size: 15px"> الثلاثاء 13 / 4 / 2023</span>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <a href="#"><img src="@/assets/photos/RightArrow.svg" /></a>
            <a href="#"><img src="@/assets/photos/leftarrrow.svg" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isPlaying: false,
      isPaused: false,
    };
  },
  mounted() {
    this.button = this.$refs.button;
    this.button.style.display = "block";
  },
  methods: {
    playVideo() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.$refs.video.play();
        this.button.style.display = "none";
      } else {
        this.$refs.video.pause();
        this.button.style.display = "block";
      }
    },
  },
};
</script>
<style scoped>
.title {
  color: #306386;
  font-weight: bold;
}
.vid {
  border-radius: 16px;
}
.vid:hover {
  cursor: pointer;
}
.back {
  background-image: url("@/assets/photos/back22.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.shp {
  display: none;
}
.center-button {
  background-color: transparent;
  border: none;
  position: absolute;
  right: 40%;
  top: 36%;
  z-index: 99;
}
</style>
