<template>
  <transition>
    <div v-show="modalActive" class="Modal">
      <transition name="modal-animation-inner">
        <div class="wi">
          <div
            v-show="modalActive"
            class="modal-inner"
            style="position: relative"
          >
            <div class="mb-3" style="text-align: right; margin-top: 170px">
              <a @click="close"><img src="@/assets/photos/close.svg" /></a>
            </div>
            <slot />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style></style>

<script>
export default {
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
};
</script>
<style>
.Modal {
  height: 100vh;
  width: 100vw;
  background: rgba(26, 34, 77, 0.9);
  backdrop-filter: blur(17px);
  z-index: 9999999;

  justify-content: center;
  position: fixed;
  top: 0;
}
.wi {
  width: 40%;
  margin: auto;
}
@media only screen and (max-width: 991px) {
  .wi {
    width: 90%;
  }
}
</style>
