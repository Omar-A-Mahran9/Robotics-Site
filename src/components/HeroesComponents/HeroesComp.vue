<template>
  <section class="container pt-5">
    <div class="d-flex gap-3 mb-4 pt-5">
      <img src="@/assets/photos/home(2).svg" />
      <a href="#/action" class="link"> &nbsp;أبطالنا</a>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col" style="position: relative">
          <img
            src="@/assets/photos/Group_15.svg"
            style="position: absolute; right: 0px; top: 85px; width: 70px"
          />

          <h4
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
        <div class="col">
          <div style="position: relative">
            <img
              src="@/assets/photos/boy.svg"
              style="position: absolute; right: 1px"
            />
            <img src="@/assets/photos/girl_copy.svg" />
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
        padding-right: 40px;

        position: relative;
      "
    >
      <div class="row justify-content-center gap-4">
        <div class="row">
          <div
            v-for="i in 16"
            :key="i"
            class="main-card col-3"
            style="position: relative; bottom: 90px"
          >
            <div class="card">
              <img src="@/assets/photos/Rakan1.svg" />
              <div class="tit">
                <div
                  style="
                    text-align: center;
                    color: #306386;
                    font-size: 16px;
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
            <p class="mt-4 text-white">افضل لاعب في تحدي الروبوت الاتفراضي</p>
          </div>
        </div>
      </div>
      <a
        style="line-height: 50px; text-align: left; color: #ffffff"
        href="#/heroes"
        ><p class="fw-bold">المزيد ..</p></a
      >
    </div>
  </section>
</template>
<style scoped>
.card {
  width: 220px;
  height: 220px;
  background-color: aquamarine !important;
  border-radius: 35px !important;
}
.main-card p {
  width: 80%;
}
.tit {
  position: absolute;
  width: 90%;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 4px;
  padding-bottom: 4px;
  background: white;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  top: 190px;
  margin-right: 10px;
  box-shadow: 0px 4px 4px rgba(162.56, 162.56, 162.56, 0.25);
}
</style>
