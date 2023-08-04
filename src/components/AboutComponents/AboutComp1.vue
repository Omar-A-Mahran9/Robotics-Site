<template>
  <div class="subCopm" style="margin-bottom: 200px">
    <div class="d-flex gap-5 mt-5 mb-5" style="width: 85%; margin: auto">
      <div class="shape"><img src="@/assets/photos/Chat.svg" /></div>
      <div>
        <h4 style="text-align: justify; font-weight: bold; color: #306386">
          عن الإتحاد
        </h4>
        <p style="text-align: justify">
          أنشئت وزارة الرياضة الاتحاد السعودي للروبوت والرياضات اللاسلكية عام
          2017 تحقيقًا لأهداف رؤية المملكة 2030 في تعزيز مهارات المستقبل
          للأفراد، فالاتحاد ينظم جميع الرياضات اللاسلكية وفعاليات الروبوت في
          المملكة. ينظم الاتحاد عددًا من المسابقات والفعاليات للرياضات اللاسلكية
          مثل: القوارب اللاسلكية و الطائرات اللاسلكية والسيارات اللاسلكية،
          بالإضافة إلى تنظيم الفعاليات والمسابقات الخاصة بالروبوت والذكاء
          الاصطناعي.
        </p>
      </div>
    </div>
    <div class="row gap-1 justify-content-around align-items-center">
      <div class="cardd col-5 col-sm-12 col-md-6">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h5 style="text-align: justify; font-weight: bold; color: #306386">
              الرؤية
            </h5>
          </div>
          <div><img src="@/assets/photos/Eyes.svg" /></div>
        </div>
        <p style="text-align: justify">
          أن تصبح المملكة العربية السعودية منصة إقليمية وعالمية في الرياضات
          اللاسلكية والروبوت.
        </p>
      </div>
      <div class="col-5 col-sm-12 col-md-6 cardd">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h5 style="text-align: justify; font-weight: bold; color: #306386">
              الرسالة
            </h5>
          </div>
          <div><img src="@/assets/photos/Massage.svg" /></div>
        </div>
        <p style="text-align: justify" class="">
          السعي في تمكين فئات المجتمع المختلفة من خلال توفير فرص التدريب في
          مجالات الرياضات اللاسلكية والروبوت، والمشاركة في مختلف المحافل
          والمسابقات، وتطويرهم ليكونوا محرك ومصدر للفرص الاقتصادية في المملكة.
        </p>
      </div>
    </div>

    <div
      class="row justify-content-right align-items-center why mt-2 mt-md-4 p-1 p-md-5"
      style="
        background: linear-gradient(180deg, #022c48 0%, #306386 100%);
        border-radius: 16px;
        margin-bottom: 15px;
        overflow: hidden;
      "
    >
      <div
        class="col-7 col-md-3 pt-md-4 d-flex flex-column gap-3 ms-5"
        style="margin-left: auto"
      >
        <img
          src="@/assets/photos/about_1.svg"
          width="40%"
          class="pt-4 pt-md-1"
        />
        <h3 class="text-white fw-bold titt">الركائز الإستراتيجية</h3>
        <img class="shape" src="@/assets/photos/aboutVector.svg" />
      </div>
      <div class="col-12 col-md-8 row gap-4 me-md-1 me-lg-5">
        <div class="col-12 text-white">
          <h5 style="font-weight: bold; text-align: justify">الإلهام</h5>
          <p style="text-align: justify">
            إلهام أجيال من المبتكرين والمحترفين بالتقنيات المتقدمة عبر سلسلة من
            المبادرات والمنافسات.
          </p>
        </div>
        <div class="col-12 text-white">
          <h5 style="font-weight: bold; text-align: justify">التمكين</h5>
          <p style="text-align: justify">
            تمكين الكفاءات وتطويرها، عبر المعسكرات التدريبية المكثفة، وإتاحة
            الأدوات، واستثمار الفرص.
          </p>
        </div>
        <div class="col-12 text-white">
          <h5 style="font-weight: bold; text-align: justify">الاستدامة</h5>
          <p style="text-align: justify">
            دعم المستفيدين من مبادرات الاتحاد في التوظيف بجهات متخصصة أو في بناء
            مشاريعهم الناشئة.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cardd {
  background: #e2f4fe;
  border-radius: 16px;
  overflow: hidden;
  width: 48% !important;
  height: 190px;
  padding: 20px;
}

.titt {
  text-align: justify;
  width: 50%;
  line-height: 40px;
}

@media only screen and (max-width: 991px) {
  .titt {
    text-align: justify;
    width: 100%;
    font-size: 20px;
  }
  .shape {
    display: none;
  }
  .cardd {
    background: #e2f4fe;
    border-radius: 16px;
    overflow: hidden;
    width: 95% !important;
    gap: 50px;
    margin-bottom: 10px;
    height: 100%;
    padding: 20px;
  }
}
</style>
