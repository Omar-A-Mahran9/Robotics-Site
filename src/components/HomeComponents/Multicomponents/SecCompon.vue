<template>
  <div class="container mt-5 mb-5">
    <div class="row" style="height: 368px">
      <div
        class="col"
        style="
          background: linear-gradient(180deg, #022c48 0%, #306386 100%);
          border-radius: 16px;
          overflow: hidden;
        "
      >
        <div class="text-white" style="text-align: justify">
          <img class="mt-4 mb-4" src="@/assets/photos/gaming.svg" />
          <h5 class="mb-4 fw-bold">بطولات الرياضات اللاسلكية</h5>
          <p style="font-size: 18px">
            ينظم الاتحاد ثلاث مسابقات للروبوت لينضم آلآف المتسابقين سنويًا تحت
            فئات عمرية محددة.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="d-flex flex-column gap-3">
          <div class="d-flex gap-3 justify-content-between">
            <router-link :to="{ name: 'action' }">
              <div
                style="
                  padding-top: 16px;
                  padding-bottom: 16px;
                  padding-left: 100px;
                  padding-right: 100px;
                  background: #e2f4fe;
                  border-radius: 16px;
                  overflow: hidden;
                "
              >
                <img src="@/assets/photos/Vector1.svg" />
                <h6 class="mt-3" style="color: #306386">الطائرات اللاسلكية</h6>
                <p style="color: #d2398d">المزيد ...</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'action' }">
              <div
                style="
                  padding-top: 16px;
                  padding-bottom: 16px;
                  padding-left: 90px;
                  padding-right: 90px;
                  background: #e2f4fe;
                  border-radius: 16px;
                  overflow: hidden;
                "
              >
                <img src="@/assets/photos/vector3.svg" />
                <h6 class="mt-3" style="color: #306386">السيارات اللاسلكية</h6>
              </div>
            </router-link>
          </div>
          <div
            style="
              width: 100%;
              height: 100%;
              padding-bottom: 25px;
              position: relative;
              background: #e2f4fe;
              border-radius: 16px;
              overflow: hidden;
            "
          >
            <img
              class="mt-4 mb-4 me-4"
              style="float: right"
              src="@/assets/photos/vector4.svg"
            />
            <div class="mt-5">
              <h5 style="color: #306386">القوارب اللاسلكية</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
