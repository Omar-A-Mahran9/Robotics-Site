<template>
  <section class="container">
    <div class="mt-5 mb-3 viid" style="h position: relative">
      <iframe
        class="vid"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Xe-gFvBfZPc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <!-- <video class="myVideo mt-5 mb-4" controls loop muted style="height: 100%">
        <source src=" " type="video/mp4" />
        <button
          v-if="!isPlaying || !isPaused"
          @click="toggleModal"
          ref="button"
          class="center-button"
        >
          <img src="@/assets/photos/play-button.svg" />
        </button>
        <button class="center-button" v-if="isPlaying" @click="playVideo">
          <img src="@/assets/photos/puse.png" />
        </button>
      </video> -->
    </div>
    <div class="row">
      <div v-for="i in 4" :key="i" class="col-12 col-md-6 pb-5">
        <div
          class="card mb-2"
          style="
            background: #ffffff;
            box-shadow: 0px 4px 4px rgba(162.56, 162.56, 162.56, 0.25);
            border-radius: 16px !important;
          "
        >
          <div class="bn">
            <iframe
              class="vid"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Xe-gFvBfZPc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
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
.viid {
  height: 600px;
}
.card {
  width: 100%;
}
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
.vid {
  border-radius: 16px;
  width: 100%;
}
.bn {
  height: 300px;
}
@media only screen and (max-width: 991px) {
  .viid {
    height: 200px;
  }
  .bn {
    height: 100%;
  }
}
</style>
<script></script>
