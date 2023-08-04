<template>
  <section class="container pt-5" style="margin-bottom: 200px">
    <div class="d-flex gap-3 mb-4 mt-3 pt-5">
      <img src="@/assets/photos/home(2).svg" />
      <a href="#/action" class="link"> &nbsp;الفعاليات</a>
    </div>
    <div
      class="card border-0 mb-5"
      style="background: #e2f4fe; border-radius: 16px; overflow: hidden"
    >
      <img class="card-img-top" src="@/assets/photos/Action1.jpg" alt="Title" />
      <div class="card-body">
        <div class="d-flex gap-3 gap-md-5 align-items-center">
          <div class="">
            <div style="width: 100px">
              <div
                class="sect"
                style="
                  padding-left: 12px;
                  padding-right: 12px;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  border-radius: 16px;
                  overflow: hidden;
                  border: 0.8px #d2398d solid;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  gap: 8px;
                  display: inline-flex;
                  width: 100% !;
                "
              >
                <p
                  style="
                    text-align: right;
                    color: #d2398d;
                    font-size: 24px;
                    font-family: Cairo;
                    font-weight: 700;
                    word-wrap: break-word;
                  "
                >
                  17
                </p>
                <div
                  style="
                    width: 80px;
                    height: 0px;
                    transform-origin: 0 0;
                    border: 1px #889199 solid;
                  "
                ></div>
                <div
                  style="
                    text-align: center;
                    color: #306386;
                    font-size: 15px;
                    font-family: Cairo;
                    font-weight: 400;
                    line-height: 28px;
                    word-wrap: break-word;
                  "
                >
                  أغسطس 2023
                </div>
              </div>
            </div>
          </div>
          <div style="position: relative">
            <h4
              class="titlee card-title"
              style="
                color: #306386;

                font-weight: bold;
                line-height: 40px;
              "
            >
              بطولة الأولمبياد العالمي للروبوت
            </h4>
            <img
              class="sshap"
              src="@/assets/photos/Group_15.svg"
              style="position: absolute; right: -20px; top: 37px; width: 80px"
            />
          </div>
        </div>
      </div>
      <a
        style="
          margin-top: -40px;
          text-align: left;
          padding-left: 30px;
          color: #d2398d;
        "
        href="/Event"
        ><p class="fw-bold">المزيد ..</p></a
      >
    </div>
    <div
      class="card border-0 mb-5"
      style="background: #e2f4fe; border-radius: 16px; overflow: hidden"
    >
      <img class="card-img-top" src="@/assets/photos/Action2.jpg" alt="Title" />
      <div class="card-body">
        <div class="d-flex gap-3 gap-md-5 align-items-center">
          <div class="">
            <div style="width: 100px">
              <div
                style="
                  padding-left: 12px;
                  padding-right: 12px;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  border-radius: 16px;
                  overflow: hidden;
                  border: 0.8px #d2398d solid;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  gap: 8px;
                  display: inline-flex;
                "
              >
                <p
                  style="
                    text-align: right;
                    color: #d2398d;
                    font-size: 24px;
                    font-family: Cairo;
                    font-weight: 700;
                    word-wrap: break-word;
                  "
                >
                  17
                </p>
                <div
                  style="
                    width: 80px;
                    height: 0px;
                    transform-origin: 0 0;
                    border: 1px #889199 solid;
                  "
                ></div>
                <div
                  style="
                    text-align: center;
                    color: #306386;
                    font-size: 15px;
                    font-family: Cairo;
                    font-weight: 400;
                    line-height: 28px;
                    word-wrap: break-word;
                  "
                >
                  أغسطس 2023
                </div>
              </div>
            </div>
          </div>
          <div style="position: relative">
            <h4
              class="card-title titlee"
              style="
                color: #306386;
                text-align: right;
                font-weight: bold;
                line-height: 40px;
              "
            >
              الإتحاد يطلق بطولة الطائرات اللاسلكية
            </h4>
            <img
              class="sshap"
              src="@/assets/photos/Group_15.svg"
              style="position: absolute; right: -20px; top: 37px; width: 80px"
            />
          </div>
        </div>
      </div>
      <a
        style="
          margin-top: -40px;
          text-align: left;
          padding-left: 30px;
          color: #d2398d;
        "
        href="#/Action"
        ><p class="fw-bold">المزيد ..</p></a
      >
    </div>
  </section>
</template>
<style>
.titlee {
  width: 50%;
}
.sect {
}
@media only screen and (max-width: 991px) {
  .titlee {
    width: 100%;
    font-size: 15px;
    line-height: 25px !important;
    text-align: right;
  }
  .sshap {
    display: none;
  }
  .card-img-top {
    height: 150px;
  }
}
</style>
