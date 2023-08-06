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
        <router-link to="/" class="navbar-brand"
          ><img src="@/assets/photos/logo.svg"
        /></router-link>
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
        <img src="@/assets/photos/toggler.svg" alt="" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="home">
          <router-link :to="{ name: 'Home' }" @click="changeColor">
            <img src="@/assets/photos/HomeVector.svg" />
            <p style="padding-top: 10px"></p
          ></router-link>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item pt-2">
            <router-link :to="{ name: 'about' }" class="  " aria-current="page">
              <img src="@/assets/photos/Ithad.svg" />
              <p class="links">عن الاتحاد</p>
            </router-link>
          </li>
          <li class="nav-item pt-2">
            <router-link
              :to="{ name: 'achievemnet' }"
              class="  "
              aria-current="page"
            >
              <img src="@/assets/photos/Botolat.svg" />
              <p class="links">البطولات</p>
            </router-link>
          </li>
          <li class="dropdown pt-2">
            <div
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <router-link :to="{ name: 'motivat' }">
                <img src="@/assets/photos/I3lam.svg" />
                <p class="links">
                  المركز الإعلامي<img src="@/assets/photos/vvector.svg" />
                </p>
              </router-link>
            </div>
            <ul
              class="dropdown-menu text-center"
              aria-labelledby="navbarDropdown"
              style="color: #306386 !important"
            >
              <li>
                <router-link :to="{ name: 'motivat' }">الأخبار</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'motivat' }">التغطيات</router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item pt-2">
            <router-link
              :to="{ name: 'action' }"
              class="  "
              aria-current="page"
            >
              <img src="@/assets/photos/fa3lyat.svg" />
              <p class="links">الفعاليات</p>
            </router-link>
          </li>
          <li class="nav-item pt-2">
            <router-link
              :to="{ name: 'report' }"
              class="  "
              aria-current="page"
            >
              <img src="@/assets/photos/reports.svg" />
              <p class="links">التقارير</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <router-link :to="{ name: 'contact' }" class="contact"
          >اتصل بنا</router-link
        >
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    const Routes = [];
    return Routes;
  },
  mounted() {
    this.Routes = this.$router.options.routes;
  },
};
</script>
<style scoped>
.contact {
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;

  word-wrap: break-word;
  border: none;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 6px;
  padding-bottom: 6px;
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
  gap: 43px;
  margin: auto;
  text-align: center;
}
ul {
  height: 70px;
}

a {
  &.router-link-active p {
    border-bottom: 6px solid #d2398d;
    padding-bottom: 4px;

    cursor: pointer;
  }
}

@media only screen and (max-width: 991px) {
  .navbar-brand {
    display: none;
  }

  .navbar-toggler {
    position: relative;
    background-color: #ffffff;
    right: -99px;
  }
  .navbar-collapse {
    background-color: #306386;
    color: white !important;

    height: 1000px;
  }
  .navbar-collapse img {
    visibility: hidden;
  }

  .links {
    color: #ffffff !important;

    font-weight: bold;
    word-wrap: break-word;
  }

  .home img {
    visibility: hidden;
  }
  .home {
    margin-right: 120px;
    /* scale: 90%; */
    height: 1px !important;
  }
}
</style>
