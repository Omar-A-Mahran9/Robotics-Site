<template>
  <div class="container mt-5 mb-5">
    <div class="row align-items-center justify-content-center">
      <div
        class="col-md-6 st"
        style="
          background: linear-gradient(180deg, #022c48 0%, #306386 100%);
          border-radius: 16px;
          overflow: hidden;
        "
      >
        <div class="text-white" style="text-align: justify">
          <img class="mt-3 mb-5" src="@/assets/photos/Robot.svg" />
          <h5 class="fw-bold mb-4">بطولات الروبوت</h5>
          <p style="font-size: 18px">
            ينظم الاتحاد مسابقتين أساسيتين للروبوت لينضم آلآف المتسابقين سنويًا
            من مختلف الفئات العمرية.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex flex-column gap-3">
          <div class="row justify-content-center m-1 gap-3">
            <div class="col sty">
              <img src="@/assets/photos/wro-logo.svg" width="100%" />
              <h6 class="mt-3" style="color: #306386">
                بطولة الأولمبياد العالمي للروبوت
              </h6>
              <p style="color: #d2398d">المزيد ...</p>
            </div>

            <div class="col sty">
              <img src="@/assets/photos/wro-logo_1.svg" width="100%" />
              <h6 class="mt-3" style="color: #306386">بطولة فيرست</h6>
              <p style="color: #d2398d">المزيد ...</p>
            </div>
          </div>
          <div
            style="
              width: 100%;
              height: 100%;
              position: relative;
              background: #e2f4fe;
              border-radius: 16px;
              overflow: hidden;
            "
          >
            <img
              class="mt-3 mb-4 me-4"
              style="float: right"
              src="@/assets/photos/games.svg"
            />
            <div class="mt-5">
              <h5 style="color: #306386">الألعاب السعودية</h5>
              <p style="color: #d2398d">المزيد..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sty {
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 55px;
  padding-right: 55px;
  background: #e2f4fe;
  border-radius: 16px;
  overflow: hidden;
}

.st {
  text-align: right !important;
  padding-bottom: 140px;
}
@media only screen and (max-width: 991px) {
  .st {
    padding-bottom: 0px;
  }
  .sty {
    padding-top: 14px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    background: #e2f4fe;
    border-radius: 16px;
    overflow: hidden;
  }
  .sty p {
    margin-top: 20px;
    font-size: 15px;
  }
  .sty h5 {
    font-size: 10px;
  }
}
</style>
