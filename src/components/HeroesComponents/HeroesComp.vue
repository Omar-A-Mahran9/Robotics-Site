<template>
  <section class="container pt-5">
    <div class="d-flex gap-3 mb-4 pt-5">
      <img src="@/assets/photos/home(2).svg" />
      <p class="link">&nbsp;أبطالنا</p>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 col-md-6" style="position: relative">
          <img
            class="sh"
            src="@/assets/photos/Group_15.svg"
            style="position: absolute; right: 0px; top: 85px; width: 70px"
          />

          <h4
            class="titt"
            style="
              font-weight: bold;
              text-align: right;
              line-height: 40px;
              width: 30%;
              color: #306386;
            "
          >
            تعرف على ابطالنا عن قرب
          </h4>
          <p
            class="titt"
            style="
              text-align: right;
              line-height: 30px;
              width: 50%;
              word-wrap: break-word;
            "
          >
            نفتخر في الاتحاد بأبطالنا المتميزين في جميع البطولات بكافة فئاتها.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <div style="position: relative; align-items: center">
            <img
              class="imge"
              src="@/assets/photos/boy.svg"
              style="position: absolute; right: 1px"
            />
            <img class="imge" src="@/assets/photos/girl_copy.svg" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="container"
      style="
        width: 100%;
        height: ;
        background: linear-gradient(
          270deg,
          #022c48 0%,
          #022c48 0%,
          #306386 100%
        );
        border-radius: 16px;

        position: relative;
      "
    >
      <div class="row justify-content-center gap-1">
        <div class="row">
          <div
            v-for="i in 16"
            :key="i"
            class="main-card col-6 col-sm-6 col-md-3"
            style="position: relative; bottom: 90px"
          >
            <div class="card">
              <img src="@/assets/photos/Rakan1.svg" width="100%" />
              <div class="tit">
                <div
                  style="
                    text-align: center;
                    color: #306386;
                    font-size: 100%;
                    font-family: Cairo;
                    font-weight: 400;
                    line-height: 32px;
                    word-wrap: break-word;
                  "
                >
                  عبد الله العجاجي
                </div>
              </div>
            </div>
            <p class="mt-4 d text-white text-center">
              افضل لاعب في تحدي الروبوت الاتفراضي
            </p>
          </div>
        </div>
      </div>
      <router-link
        :to="{ name: 'heroes' }"
        style="line-height: 50px; text-align: left; color: #ffffff"
        ><p class="fw-bold">المزيد ..</p></router-link
      >
    </div>
  </section>
</template>
<style scoped>
.card {
  width: 100%;
  background-color: aquamarine !important;
  border-radius: 35px !important;
}
.main-card p {
  width: 100%;
  margin-right: 5px;
}
.tit {
  position: absolute;
  width: 100% !important;
  padding-left: 5px !important;
  padding-right: 5px !important;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 80%;
  background: white;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  top: 260px;
  right: -10px;
  margin-right: 10px;
  box-shadow: 0px 4px 4px rgba(162.56, 162.56, 162.56, 0.25);
}

@media only screen and (max-width: 991px) {
  .tit {
    position: absolute;
    width: 100%;
    font-size: 10px !important;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 4px;
    padding-bottom: 4px;
    background: white;
    border-radius: 24px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    top: 90px;
    right: -10px;
    margin-right: 10px;
    box-shadow: 0px 4px 4px rgba(162.56, 162.56, 162.56, 0.25);
  }
  .d {
    font-size: 11px !important;
  }
  .card {
    width: 130px;
    background-color: aquamarine !important;
    border-radius: 35px !important;
  }
  .imge {
    width: 70%;
    padding: 20px;
    margin-left: -160px;
    margin-right: -30px;
  }
  .titt {
    width: 100% !important;
    text-align: center !important;
  }
  .sh {
    display: none;
  }
}
</style>
