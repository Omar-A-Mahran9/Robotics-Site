<template>
  <!-- Remove the container if you want to extend the Footer to full width. -->
  <div class="footer">
    <!-- Footer -->
    <footer class="text-center text-lg-start text-white container">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: Links -->
        <section class="">
          <!--Grid row-->
          <div class="row">
            <!-- Grid column -->
            <div
              class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"
              style="text-align: right"
            >
              <a href="">
                <img class="mb-4" src="@/assets/photos/image_14.svg"
              /></a>
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
                    style="text-decoration: none; color: white"
                    >+966 11 6027234</a
                  >
                </p>
              </div>

              <div>
                <p class="title">
                  <span><img src="@/assets/photos/Message.png" /></span>
                  البريد الإلكتروني
                </p>
                <p class="para">
                  <a
                    href="mailto:info@tahakoom.gov.sa"
                    style="text-decoration: none; color: white"
                    >info@tahakoom.gov.sa</a
                  >
                </p>
              </div>
            </div>
            <!-- Grid column -->

            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto Deta">
              <p class="title">أقسام الموقع</p>
              <ul class="d-flex flex-column gap-3">
                <li><a href="" class="lin">البطولات</a></li>
                <li><a href="" class="lin">المركز الإعلامي</a></li>
                <li><a href="" class="lin">عن الإتحاد</a></li>
                <li><a href="" class="lin">الفعاليات</a></li>
              </ul>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 Deta">
              <h6
                class="text-uppercase mb-4 font-weight-bold"
                style="text-align: right; line-height: 35px"
              >
                ادخل بريدك الإلكتروني ليصلك كل جديد
              </h6>
              <div class="d-flex bg-white Email">
                <input
                  id="input"
                  type="text"
                  placeholder=" ادخل البريد الالكتروني ..."
                />
                <button class="send">ارسال</button>
              </div>
            </div>

            <!-- Grid column -->
            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <img src="@/assets/photos/footerimg.svg" alt="" class="footerr" />
            </div>
            <!-- Grid column -->
          </div>
          <!--Grid row-->
        </section>

        <!-- Section: Copyright -->
        <section class="p-3 pt-0">
          <div class="row d-flex align-items-center">
            <!-- Grid column -->
            <div class="text-center">
              <!-- Copyright -->
              <div class="p-3">
                جميع الحقوق محفوظة لدى الإتحاد السعودي للروبوت والرياضات
                اللاسلكية SAUDI_RRC 2023
              </div>
              <!-- Copyright -->
            </div>
            <!-- Grid column -->
          </div>
        </section>
        <!-- Section: Copyright -->
      </div>
      <!-- Grid container -->
    </footer>
    <!-- Footer -->
  </div>
  <!-- End of .container -->
</template>

<script>
export default {
  data() {
    return {
      logo: "My LOGO",
    };
  },
};
</script>

<style scoped>
.title {
  color: #3a9bd6;
  font-size: 14px;
  font-family: Cairo;
  font-weight: 700;
  word-wrap: break-word;
  text-align: right;
}
.para {
  color: white;
  font-size: 14px;
  font-family: Cairo;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  text-align: right;
}
.Deta {
  padding-top: 125px;
}
.lin {
  text-decoration: none;
  color: #ffffff;
  text-align: right;
}
ul {
  list-style-type: none;
  text-align: right;
  margin: 0;
  padding: 0;
}
.send {
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 2px;
  padding-bottom: 4px;
  background: #d2398d;
  border-radius: 24px;
  border: none;
  color: #ffffff;
  font-weight: bold;
}
#input {
  padding: 5px;
  border-radius: 15px;
  border: none;
}
.Email {
  width: 320px;
  padding: 10px;
  border-radius: 15px;
}
.footer {
  background: url("@/assets/photos/Rectangle.svg");

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain, cover;
  padding: 3%;
}
.footerr {
  width: 90%;
}
</style>
