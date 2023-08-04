<template>
  <section class="container pt-5" style="margin-bottom: 200px">
    <div class="d-flex gap-3 mb-4 mt-3 pt-5">
      <img src="@/assets/photos/home(2).svg" />
      <a href="" class="link"> &nbsp;اتصل بنا</a>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="">
          <div class=" ">
            <h3
              style="
                text-align: right;
                color: #306386;
                font-size: 32px;
                width: 40%;
                font-weight: 700;
                word-wrap: break-word;
              "
            >
              لديك استفسارات أو اقتراحات
            </h3>
            <p
              style="
                width: 100%;
                text-align: right;
                color: #6a6a6a;
                font-size: 24px;
                width: 60%;
                font-weight: 400;
                line-height: 40px;
                word-wrap: break-word;
              "
            >
              نسعد دائما بتواصلكم معنا من خلال البريد الالكتروني وأرقام التواصل
              الموضحة بالأسفل.
            </p>
          </div>
          <div class=" ">
            <div class="form" style="text-align: right">
              <form>
                <input
                  type="text"
                  class="mb-3 form-control"
                  placeholder="الاسم ثلاثي"
                />
                <div class="row">
                  <div class="col-4">
                    <input
                      type="number"
                      class="mb-3 form-control"
                      placeholder="العمر"
                    />
                  </div>
                  <div class="col-8">
                    <input
                      type="text"
                      class="mb-3 form-control"
                      placeholder="رقم الهاتف"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="عنوان الرسالة"
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    class="form-control"
                    name="Massage"
                    rows="12"
                    placeholder="نص الرسالة..."
                  ></textarea>
                </div>
                <input
                  type="submit"
                  name="submit"
                  value="ارسال"
                  style="
                    background-color: #d2398d;
                    border: none;
                    color: white;
                    border-radius: 16px;
                    padding: 5px 25px 5px 25px;
                  "
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6">
        <img src="@/assets/photos/footerimg.svg" width="75%" />

        <div>
          <div
            class="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3"
            style="text-align: right"
          >
            <a href="">
              <img class="mb-4" src="@/assets/photos/image_14.svg"
            /></a>

            <div>
              <div class="mb-4">
                <p class="title">
                  <span><img src="@/assets/photos/Location.svg" /></span>
                  العنوان
                </p>
                <p class="para">
                  الرياض - تقاطع شارع الملك فهد مع شارع الإمام سعود حي النخيل
                  شارع وادي الحدلي مبنى 2
                </p>
              </div>

              <div>
                <p class="title">
                  <span><img src="@/assets/photos/Call.svg" /></span> الهاتف
                </p>
                <p class="para">
                  <a
                    href="tel:+966116027234"
                    style="color: black; text-decoration: none"
                    >+966 11 6027234</a
                  >
                </p>
              </div>

              <div>
                <p class="title">
                  <span><img src="@/assets/photos/Message.png" /></span>
                  البريد الإلكتروني
                </p>
                <p class="para text-black">
                  <a
                    href="mailto:info@tahakoom.gov.sa"
                    style="text-decoration: none; color: black"
                    >info@tahakoom.gov.sa</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.title {
  color: #3a9bd6;
  font-size: 14px;
  font-family: Cairo;
  font-weight: 700;
  word-wrap: break-word;
}
</style>
