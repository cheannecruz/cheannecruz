<template>
  <div class="page-preloader">
    <logoImg />
  </div>
</template>

<script>
  import logoImg from '~/assets/images/ccunicorn.svg'
  export default {
    data () {
      return {
        collapsed: false
      }
    },
    components: {
      logoImg
    },
  };
</script>

<style lang='scss'>
.page-preloader {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #fff;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;

  svg {
    max-width: 150px;
    transform: scale(1);
    animation: pulse 2s infinite;
    width: 150px;
  }
}

@keyframes pulse {
	0% {
		transform: scale(0.85);
	}

	70% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.85);
	}
}
</style>