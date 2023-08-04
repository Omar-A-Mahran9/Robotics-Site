<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-6" style="position: relative">
        <div class="mb-5">
          <a class="senddd" style="float: right">أبطالنا</a>
        </div>
        <img
          class="sha"
          src="@/assets/photos/Group_15.svg"
          style="position: absolute; right: 0px; top: 85px; width: 70px"
        />

        <h4
          class="head"
          style="
            font-weight: bold;
            text-align: right;
            line-height: 40px;
            width: 30%;
            color: #306386;
          "
        >
          تعرف على ابطالنا عن قرب
        </h4>
        <p
          class="head"
          style="
            text-align: right;
            line-height: 30px;
            width: 50%;
            word-wrap: break-word;
          "
        >
          نفتخر في الاتحاد بأبطالنا المتميزين في جميع البطولات بكافة فئاتها.
        </p>
      </div>
      <div class="col-12 col-md-6">
        <div style="position: relative">
          <img
            class="ig"
            src="@/assets/photos/boy.svg"
            style="position: absolute; right: 1px"
          />
          <img class="ig" src="@/assets/photos/girl_copy.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.senddd {
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 2px;
  padding-bottom: 4px;
  border: 2px solid #d2398d;
  border-radius: 24px;
  text-decoration: none;
  color: #d2398d;
  font-weight: bold;
}
.sha {
  display: none;
}
.head {
  width: 100% !important;
}
@media only screen and (max-width: 991px) {
  .ig {
    margin-left: -102px;
    margin-right: -28px;
  }
}
</style>
