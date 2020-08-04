<template>
  <transition name="fade">
    <div v-if="show" class="page-preloader">
      <g-image src="~/assets/images/ccunicorn.svg" class="page-preloader__logo" immediate="true"/>
    </div>
  </transition>

</template>

<script>
  export default {
    data () {
      return {
        show: true
      }
    },
    mounted(){
      if(Boolean(this.show)) this.showToggle()
    },
    methods: {
      showToggle(){
        setTimeout(() => {
          this.show = false
        }, 700)
      }
    }
  };
</script>

<style lang='scss'>
.page-preloader {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba($color: #fff, $alpha: 0.8);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;

  .page-preloader__logo {
    max-width: 150px;
    width: 150px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
  .page-preloader {

    .page-preloader__logo {
      transform: scale(1);
      animation: pulse 2s infinite;
    }
  }
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>