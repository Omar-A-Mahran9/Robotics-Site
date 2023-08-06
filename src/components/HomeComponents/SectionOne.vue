<template>
  <section class="OneSection pt-5">
    <div class="container">
      <div>
        <p
          class="new_button2"
          style="
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 2px;
            padding-bottom: 4px;
            border: 2px solid #d2398d;
            border-radius: 24px;

            color: #d2398d;
            font-weight: bold;
            float: center;
            margin-bottom: 50px;
          "
        >
          تابع أخبارنا
        </p>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <img
            src="@/assets/photos/Rectangle_13.svg"
            width="100%"
            style="border-radius: 25px"
          />
        </div>
        <div class="col-12 col-md-5 text-white">
          <a
            class="new_button1"
            style="
              padding-left: 40px;
              padding-right: 40px;
              padding-top: 2px;
              padding-bottom: 4px;
              border: 2px solid #d2398d;
              border-radius: 24px;
              text-decoration: none;
              color: #d2398d;
              font-weight: bold;
              float: right;
              margin-bottom: 50px;
            "
            >تابع أخبارنا</a
          >
          <div class="mb-5">
            <h5
              class="pargraph"
              style="
                font-weight: bold;

                text-align: justify;
                line-height: 40px;
              "
            >
              السعودية تحقق المركز الأول في جائزة مشروع الابتكار
            </h5>
            <p style="text-align: justify">
              نبارك للمنتخب السعودي المشارك في بطولة الفيرست ليغو الدولية
              المفتوحة بالمملكة المغربية بتحقيقه المركز الأول في جائزة مشروع الا
              ابتكار.
            </p>
          </div>
          <div class="d-flex justify-content-between text-white">
            <div>
              <img src="@/assets/photos/Vector.svg" /> الثلاثاء 13 / 4 / 2023
            </div>
            <div>
              <router-link
                :to="{ name: 'news' }"
                style="line-height: 50px; padding-left: 30px; color: #d2398d"
              >
                <p class="fw-bold">المزيد ..</p></router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row gap-4 justify-content-center">
        <div
          v-for="element in elements"
          :key="element"
          class="card col-12 col-md-4 respon"
          style="background: #306386; color: white"
        >
          <img
            class=""
            :src="require('@/assets/photos/' + element.path)"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text fw-bold" style="text-align: right">
              {{ element.title }}
            </p>

            <div style="float: right">
              <img src="@/assets/photos/Vector2.svg" />
              <span> الثلاثاء 13 / 4 / 2023</span>
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
      elements: [
        {
          path: "Rectangle_14.svg",
          title:
            "              السعودية تحقق المركز الأول في جائزة مشروع الابتكار",
          date: "الثلاثاء 13 / 4 / 2023",
        },
        {
          path: "Rectangle_15.svg",
          title:
            "              السعودية تحقق المركز الأول في جائزة مشروع الابتكار",
          date: "الثلاثاء 13 / 4 / 2023",
        },
        {
          path: "Rectangle_16.svg",
          title:
            "              السعودية تحقق المركز الأول في جائزة مشروع الابتكار",
          date: "الثلاثاء 13 / 4 / 2023",
        },
      ],
    };
  },
};
</script>
<style>
.OneSection {
  background: linear-gradient(180deg, #022c48 0%, #306386 100%);
}

.new_button2 {
  display: none;
}
.new_button1 {
  display: block;
}
.respon {
  width: 30% !important;
  margin-bottom: 50px;
}
.row .respon {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.pargraph {
  width: 40%;
}
@media only screen and (max-width: 991px) {
  .new_button2 {
    display: block;
    float: center !important;
  }
  .new_button1 {
    display: none;
  }
  .respon {
    width: 100% !important;
  }
  .pargraph {
    width: 100%;
  }
}
</style>
