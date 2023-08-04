<template>
  <section class="container">
    <div>
      <video id="myVideo" autoplay loop muted width="100%">
        <source src="@/assets/videos/mainved.mp4" type="video/mp4" />
      </video>
      <div id="overlay"></div>
    </div>

    <div
      class="d-flex flex-column align-items-center justufy-content-center text-white"
    >
      <div class="title" style="width: 40%; position: relative; z-index: 999">
        <p style="font-size: 40px; font-family: Cairo; font-weight: 700">
          الاتحاد السعودي للروبوت والرياضات اللاسلكية
        </p>
        <img
          src="@/assets/photos/Group_15.svg"
          style="position: absolute; right: 30px; top: 60px; width: 100px"
          class="vector"
        />
        <div class="d-flex align-items-center">
          <div
            style="
              text-align: center;
              color: #d2398d;
              font-size: 64px;
              font-weight: 700;

              margin-top: -80px;
            "
            class="linee"
          >
            ,,
          </div>
          <div class="line1" style="margin: auto"></div>
        </div>
      </div>
      <div class="title" style="width: 40%; position: relative; z-index: 999">
        <p
          class="tit2"
          style="
            margin: auto;
            font-size: 32px;
            font-family: Cairo;
            font-weight: 700;
          "
        >
          <span class="respon" style="color: #d2398d; font-weight: bold"
            >"</span
          >

          نطمح أن تصبح المملكة العربية السعودية منصة إقليمية وعالمية في الرياضات
          اللاسلكية والروبوت
          <span class="respon" style="color: #d2398d; font-weight: bold"
            >"</span
          >
        </p>
        <div
          class="linee"
          style="
            transform: rotate(180deg);

            color: #d2398d;
            font-size: 60px;
            margin-bottom: -80px;
            margin-right: 400px;
            font-weight: 700;
          "
        >
          ,,
        </div>

        <div class="line linee mt-3" style="margin: auto"></div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.respon {
  display: none;
}
.line1 {
  border-bottom: 2px solid rgb(255, 255, 255);
  margin-top: 2px;
  width: 70%;
}

.line {
  border-bottom: 2px solid rgb(255, 255, 255);
  margin-top: 2px;
  width: 60%;
}
#myVideo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 700px;
  z-index: 99;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0.447);
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 700px;
  background-color: black;
  opacity: 0.7;
  z-index: 999;
}

@media only screen and (max-width: 991px) {
  .title {
    width: 100% !important;
  }
  p {
    font-size: 25px !important;
  }
  .respon {
    display: inline !important;
  }
  .tit2 {
    font-size: 25px !important;
    font-weight: lighter !important;
  }
  .vector {
    visibility: hidden;
  }
  .linee {
    display: none;
  }
  .respon {
    visibility: visible;
  }
  #myVideo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 450px;
    z-index: 99;
    object-fit: cover;
    background-color: rgba(0, 0, 0, 0.447);
  }
  #overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 450px;
    background-color: black;
    opacity: 0.7;
    z-index: 999;
  }
}
</style>
