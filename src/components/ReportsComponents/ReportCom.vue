<template>
  <section class="Reports pt-3 pb-5">
    <div class="container pt-5">
      <div class="d-flex gap-3 mb-5 pt-5">
        <img src="@/assets/photos/home(2).svg" />
        <p class="lino mt-3">&nbsp;التقارير</p>
      </div>
      <div
        class="card mb-5 respom"
        style="
          width: 50%;
          background: white;
          box-shadow: 0px 16px 19px rgba(0, 0, 0, 0.12);
          border-radius: 16px;
          overflow: hidden;
          border: none;
          margin: auto;
        "
      >
        <div
          style="margin-left: auto"
          class="d-flex align-items-center pe-3 pt-3 mb-3"
        >
          <img src="@/assets/photos/Vector2.svg" />
          <span> &nbsp; &nbsp; الثلاثاء 13 / 4 / 2023</span>
        </div>
        <!-- <img  src="holder.js/100x180/" alt="Title" /> -->
        <div class="card-body mb-4" style="text-align: justify">
          <h4 class="card-title fw-bold" style="color: #306386">
            تقرير الاتحاد الربع سنوى لعام 2023
          </h4>
          <p class="card-text mb-5">
            في هذا التقرير المفصل بالأرقام نستعرض كافة البطولات التي اطلقها
            الاتحاد والفعاليات التي شارك فيها...
          </p>
          <a href="" class="link"
            ><img src="@/assets/photos/logos_google-drive.svg" /> &nbsp; عن
            الاتحاد
          </a>
        </div>
      </div>
      <div
        class="card mb-5 respom"
        style="
          width: 50%;
          background: white;
          box-shadow: 0px 16px 19px rgba(0, 0, 0, 0.12);
          border-radius: 16px;
          overflow: hidden;
          border: none;
          margin: auto;
        "
      >
        <div
          style="margin-left: auto"
          class="d-flex align-items-center pe-3 pt-3 mb-3"
        >
          <img src="@/assets/photos/Vector2.svg" />
          <span> &nbsp; &nbsp; الثلاثاء 13 / 4 / 2023</span>
        </div>
        <!-- <img  src="holder.js/100x180/" alt="Title" /> -->
        <div class="card-body mb-4" style="text-align: justify">
          <h4 class="card-title fw-bold" style="color: #306386">
            تقرير الاتحاد الربع سنوى لعام 2023
          </h4>
          <p class="card-text mb-5">
            في هذا التقرير المفصل بالأرقام نستعرض كافة البطولات التي اطلقها
            الاتحاد والفعاليات التي شارك فيها...
          </p>
          <a href="" class="link"
            ><img src="@/assets/photos/logos_google-drive.svg" /> &nbsp; عن
            الاتحاد
          </a>
        </div>
      </div>
      <a
        style="
          line-height: 50px;
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
.lino {
  color: #d63384;
  border: 2px solid #d63384;
  border-radius: 26px;
  padding: 4px 20px;
}
.link {
  padding: 6px 30px 6px 30px;

  border-radius: 30px;
  color: #d2398d;
  cursor: pointer;
  border: 2px solid #d2398d;
}
a {
  cursor: pointer;
}
.link:hover {
  color: white;
  background: #d2398d;
}
.Reports {
  background: url("@/assets/photos/image_16.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.man {
  padding-top: 100px;
}

@media only screen and (max-width: 991px) {
  .respom {
    width: 100% !important;
  }
}
</style>
