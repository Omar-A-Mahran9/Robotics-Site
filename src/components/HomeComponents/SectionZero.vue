<template>
  <section class="mt-5">
    <div
      class="seczero pb-5"
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
          <div style="text-align: right; margin-bottom: 40px">
            <a class="senddd">الإنجازات والتكريمات</a>
          </div>
          <div
            class="col-12 col-md-5 text-center d-flex flex-column justify-content-center"
            style="position: relative"
          >
            <img
              class="shp"
              src="@/assets/photos/Group_15.svg"
              style="position: absolute; top: 30px; right: 1px; width: 70px"
            />

            <h4
              class="title"
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
              class="description"
              style="
                line-height: 30px;
                text-align: right;
                width: 80%;
                word-wrap: break-word;
                font-size: 15px;
              "
            >
              تعد لغة الأرقام هي الدليل الحي على حجم العمل والجهد المبذول في
              الاتحاد.
            </p>
            <div class="d-flex respo align-items-center gap-3 mb-4">
              <img
                src="@/assets/photos/checked_1.svg"
                style="
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
          <div class="col-12 col-md-7">
            <div class="row justify-content-around">
              <div
                class="col-3"
                v-for="element in elements"
                :key="element"
                style="position: relative"
              >
                <div class="pb-2">
                  <img
                    src="@/assets/photos/image_3.svg"
                    style="object-fit: contain; position: relative; width: 100%"
                  />
                  <h5
                    class="text-white number"
                    style="
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      top: 39%;
                      font-weight: bold;
                    "
                  >
                    {{ element }}
                  </h5>
                </div>

                <h5 class="mt-2 fw-bold text-muted">
                  <span
                    style="
                      padding-left: -8px;
                      font-size: 5px;
                      padding-right: 9px;
                      border-radius: 50%;
                      background: linear-gradient(
                        221deg,
                        #d2398d 0%,
                        #3f8db4 42%,
                        #38a7e0 100%
                      );
                      margin-left: 15px;
                      align-items: center;
                    "
                  >
                    .
                  </span>
                  مشارك
                </h5>
              </div>
            </div>
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
      elements: ["5000+", "60+", "45+", "3500+"],
    };
  },
};
</script>
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
@media only screen and (max-width: 991px) {
  .shp {
    display: none;
  }
  .title {
    font-weight: bold;
    text-align: center !important;

    width: 100% !important;
  }
  .description {
    text-align: center !important;
    width: 100% !important;
  }
  .respo {
    justify-content: center;
    ntent: center;
  }
  .number {
    font-size: 10px;
    top: 30% !important;
  }
}
</style>
