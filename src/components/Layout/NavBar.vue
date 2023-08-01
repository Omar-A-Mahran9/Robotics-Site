<template>
  <nav
    class="navbar navbar-expand-lg bg-white"
    style="
      height: 70px;
      z-index: 99999;
      box-shadow: 0px 16px 19px rgba(0, 0, 0, 0.12);
      position: fixed;
      width: 100%;
    "
  >
    <div class="container">
      <div>
        <a class="navbar-brand" href="#/"
          ><img src="@/assets/photos/logo.svg"
        /></a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="home">
          <a href="#/"> <img src="@/assets/photos/HomeVector.svg" /></a>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/about">
              <img src="@/assets/photos/Ithad.svg" />
              <p class="links">عن الاتحاد</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/achievemnet">
              <img src="@/assets/photos/Botolat.svg" />
              <p class="links">البطولات</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/motivate">
              <img src="@/assets/photos/I3lam.svg" />
              <p class="links">
                المركز الإعلامي<img src="@/assets/photos/vvector.svg" />
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/Action">
              <img src="@/assets/photos/fa3lyat.svg" />
              <p class="links">الفعاليات</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/report">
              <img src="@/assets/photos/reports.svg" />
              <p class="links">التقارير</p>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a class="contact" href="#/contact">اتصل بنا</a>
      </div>
    </div>
  </nav>
</template>
<script></script>
<style>
.contact {
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
  border: none;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #d2398d;
  border-radius: 24px;
  /* padding-left: 143px; */
}

.home {
  margin-right: 120px;
  /* scale: 90%; */
  height: 70px;
  padding-top: 10px;
}

.links {
  color: #306386 !important;
  font-size: 18px;
  font-weight: 400;
  word-wrap: break-word;
}
.navbar-nav {
  display: flex;
  gap: 30px;
  margin: auto;
  text-align: center;
}
ul {
  height: 70px;
}
.nav-link:hover {
  border-bottom: 6px solid #d2398d;
  margin-bottom: -10px;
  height: 70px;
  cursor: pointer;
}
.home:hover {
  border-bottom: 6px solid #d2398d;

  cursor: pointer;
}
@media only screen and (max-width: 991px) {
  .navbar-brand {
    display: none;
  }
  .navbar-toggler {
    position: absolute;
    right: 0;
    margin-right: 5%;
  }
  .navbar-collapse {
    background-color: #306386;
    color: white !important;
  }
  .navbar-collapse img {
    visibility: hidden;
  }
  .links {
    color: #ffffff !important;
    font-size: 18px;
    font-weight: bold;
    word-wrap: break-word;
  }
  .home img {
    visibility: hidden;
  }
}
</style>
