<template>
  <section class="main" style="margin-bottom: 200px">
    <div
      class="card border-0 mb-5 pt-5"
      style="background: #e2f4fe; border-radius: 16px; overflow: hidden"
    >
      <img class="card-img-top" src="@/assets/photos/Action1.jpg" alt="Title" />
    </div>
    <div class="container">
      <div
        class="card border-0"
        style="
          position: relative;
          background: #e2f4fe;
          border-radius: 16px;
          overflow: hidden;
          margin-top: -130px;
        "
      >
        <div class="card-body">
          <div class="mb-4 me-1 mt-3" style="text-align: right">
            <a href="" class="link"> &nbsp; الفاعليات </a>
          </div>
          <div
            class="d-flex gap-5 align-items-center justify-content-between ps-4 pe-4"
          >
            <div style="position: relative">
              <div>
                <h4
                  class="card-title mb-4"
                  style="
                    color: #306386;
                    width: 20%;
                    font-weight: bold;
                    line-height: 40px;
                    text-align: right;
                  "
                >
                  بطولة الأولمبياد العالمي للروبوت
                </h4>
                <p style="text-align: right">
                  مسابقة عالمية تهدف إلى تمكين ودعم إبداعات الشباب لتطوير العديد
                  من المجالات عن طريق استهداف فئة عمرية واسعة بين 9 و 25 عام
                  للمنافسة في الروبوت والذكاء الاصطناعي وتقام سنويًا بتحديات
                  رياضية وتقنية تحت عنوان موضوع متغير سنويُا قائم على حل مشكلة
                  عالم
                </p>
              </div>

              <div>
                <img
                  src="@/assets/photos/Group_15.svg"
                  style="
                    position: absolute;
                    right: -20px;
                    top: 40px;
                    width: 80px;
                  "
                />
              </div>
            </div>

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
                      font-size: 18px;
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
          </div>
        </div>
      </div>
      <div class="mt-4 mb-5" style="text-align: right">
        <h4
          class="card-title mb-4"
          style="
            color: #306386;
            width: 20%;
            font-weight: bold;
            line-height: 40px;
            text-align: right;
          "
        >
          تفاصيل إضافية
        </h4>
        <p>
          أنشئت وزارة الرياضة الاتحاد السعودي للروبوت والرياضات اللاسلكية عام
          2017 تحقيقًا لأهداف رؤية المملكة 2030 في تعزيز مهارات المستقبل
          للأفراد، فالاتحاد ينظم جميع الرياضات اللاسلكية وفعاليات الروبوت في
          المملكة. ينظم الاتحاد عددًا من المسابقات والفعاليات للرياضات اللاسلكية
          مثل: القوارب اللاسلكية و الطائرات اللاسلكية والسيارات اللاسلكية،
          بالإضافة إلى تنظيم الفعاليات والمسابقات الخاصة بالروبوت والذكاء
          الاصطناعي.
        </p>
      </div>
      <div
        style="
          width: 100%;
          height: 100%;
          transform: rotate(180deg);

          border: 1px #d7dadd solid;
        "
      ></div>
      <h5
        class="card-title mb-4"
        style="
          color: #306386;

          font-weight: bold;
          line-height: 40px;
        "
      >
        يرجى تعبئة النموذج للتسجيل في البرنامج
      </h5>
      <div class="mb-4 me-1 mt-3">
        <a
          @click="toggleModal"
          class="link"
          style="background-color: #d2398d; font-weight: bold; color: white"
        >
          &nbsp; سجل
        </a>
      </div>
    </div>
  </section>
  <Modal @close="toggleModal" :modalActive="modalActive">
    <div style="position: absolute; top: -70px; left: 160px; z-index: 999">
      <img src="@/assets/photos/Modal.svg" />
    </div>

    <div style="position: relative">
      <div class="modal-content">
        <h4 class="fw-bold pt-5 mb-5 text-center">
          يرجى تعبئة النموذج للتسجيل في البرنامج
        </h4>
        <form class="pe-md-5 pe-2 ps-2 ps-md-5 pb-5">
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
          <input
            type="Email"
            class="mb-3 form-control"
            placeholder="البريد الاكتروني"
          />
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
  </Modal>
</template>
<style scoped>
.link {
  padding: 5px 35px 5px 35px;

  border-radius: 30px;
  color: #d2398d;
  cursor: pointer;
}
a {
  cursor: pointer;
}
.link:hover {
  border: 2px solid #d2398d;
}
</style>
<script>
import Modal from "@/components/ModalComp.vue";
import { ref } from "vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return {
      modalActive,
      toggleModal,
    };
  },
};
</script>
<style scoped>
.modal-content {
  align-items: center;
  position: relative;
  background: linear-gradient(180deg, #65bdfa 0%, #306386 100%);
  box-shadow: 0px 4px 30px #3ba3da;
  padding-top: 100px;
  border-radius: 16px;
  overflow: hidden;
  color: white;
  width: 100%;
  height: 100%;
}
</style>
