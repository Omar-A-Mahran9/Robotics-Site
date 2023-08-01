<template>
  <div
    class="seczero"
    style="
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        #a7e5ff 100%
      );
    "
  >
    <div class="container back1">
      <div class="row">
        <div class="col-5" style="position: relative">
          <img
            src="@/assets/photos/Group_15.svg"
            style="position: absolute; top: 30px; right: 1px; width: 70px"
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
            الاتحاد في أرقام
          </h4>
          <p
            style="
              text-align: right;
              line-height: 30px;
              width: 80%;
              word-wrap: break-word;
              font-size: 15px;
            "
          >
            تعد لغة الأرقام هي الدليل الحي على حجم العمل والجهد المبذول في
            الاتحاد.
          </p>
          <div class="d-flex align-items-center gap-3 mb-4">
            <img
              src="@/assets/photos/checked_1.svg"
              style="
                float: right;
                background-color: white;
                padding: 10px;
                border-radius: 25px;
              "
            />
            <p style="color: #3a9bd6; font-weight: bold">
              مع أكثر من 42161 مستفيد
            </p>
          </div>
        </div>
        <div class="col-7">
          <div class="d-flex gap-5 justify-content-between">
            <div></div>
            <div style="position: relative">
              <h5
                class="text-white"
                style="
                  position: absolute;
                  right: 40px;
                  top: 55px;
                  font-weight: bold;
                "
              >
                5000+
              </h5>
              <img src="@/assets/photos/image_3.svg" />
              <h5 class="mt-2 fw-bold text-muted">مشارك</h5>
            </div>
            <div style="position: relative">
              <h5
                class="text-white"
                style="
                  position: absolute;
                  right: 50px;
                  top: 55px;
                  font-weight: bold;
                "
              >
                60+
              </h5>
              <img src="@/assets/photos/image_3.svg" />
              <h5 class="mt-2 fw-bold text-muted">فعالية</h5>
            </div>
            <div style="position: relative">
              <h5
                class="text-white"
                style="
                  position: absolute;
                  right: 50px;
                  top: 55px;
                  font-weight: bold;
                "
              >
                45+
              </h5>
              <img src="@/assets/photos/image_3.svg" />
              <h5 class="mt-2 fw-bold text-muted">دورة تدريبية</h5>
            </div>
            <div style="position: relative">
              <h5
                class="text-white"
                style="
                  position: absolute;
                  right: 40px;
                  top: 55px;
                  font-weight: bold;
                "
              >
                3500+
              </h5>
              <img src="@/assets/photos/image_3.svg" />
              <h5 class="mt-2 fw-bold text-muted">متدرب</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.seczero {
  background: url("@/assets/photos/bk_stats.svg");
  background-repeat: no-repeat;
  background-size: 10px;
}
.back1 {
  background-image: url("@/assets/photos/Background2.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
