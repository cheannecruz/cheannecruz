<template>
  <div class="main-banner"
    data-aos="fade-in"
    data-aos-delay="1000"
  >
    <div class="main-banner__content">
      <div class="main-banner__text">
        <span class="main-banner__text-intro">
          <span>Hello I'm Cheryl Cruz,</span>
        </span>
        <vue-typed-js
          :strings='["Frontent<br/>Developer.","UI Designer.","Aspiring UX<br/>Practitioner.","Digital Unicorn<br/>... &#129412; &#128517;"]'
          :loop="true"
          :typeSpeed="100"
          :backDelay="3000"
        >
          <h1 class="typing"></h1>
        </vue-typed-js>
      </div>
      <div class="main-banner__img">
        <g-image src="@/assets/images/a.svg" class="main-banner__img-bg"/>
        <g-image src="@/assets/images/b.svg" class="main-banner__img-body"/>
        <g-image src="@/assets/images/c.svg" class="main-banner__img-arm-left"/>
        <g-image src="@/assets/images/d.svg" class="main-banner__img-arm-right"/>
        <g-image src="@/assets/images/e.svg" class="main-banner__img-head"/>
        <g-image src="@/assets/images/f.svg" class="main-banner__img-laptop"/>
        <g-image src="@/assets/images/shape1.svg" class="main-banner__shape1 floating-lg"/>
        <g-image src="@/assets/images/shape2.svg" class="main-banner__shape2 floating-lg"/>
        <g-image src="@/assets/images/shape3.svg" class="main-banner__shape3 floating-sm"/>
        <g-image src="@/assets/images/shape1.svg" class="main-banner__shape4 floating"/>
        <g-image src="@/assets/images/shape2.svg" class="main-banner__shape5 floating"/>
        <g-image src="@/assets/images/shape3.svg" class="main-banner__shape6 floating-sm"/>
      </div>
      <a href="#" class="main-banner__scroll" v-scroll-to="'#myWorks'">
        <span class="main-banner__scroll-arrow">
        </span>
        <span class="main-banner__scroll-text">VIEW MY WORKS</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
  };
</script>

<style lang='scss'>
.main-banner {
  position: relative;
  padding: 0;
  height: calc(100vh - 60px);
  animation: gradient 15s ease infinite;
  z-index: 2;

  @media (max-device-width : 900px) and (orientation: landscape) {
    min-height: 700px;
    margin-top: 10%;
  }
}

.main-banner__bg {
  height: calc(100vh - 60px);
  position: absolute;
  top: 0;
  left: 0;
}

.main-banner__content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  min-height: calc(100vh - 60px);
  align-content: center;
  justify-content: center;

  @media only screen and (max-width: 1280px) {
    max-width: 1000px;
  }

  @media (max-device-width: 1024px) and (orientation: portrait){
    flex-direction: column;
    justify-content: flex-start;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
}

.main-banner__text {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  @media (max-device-width: 1024px) and (orientation: portrait) {
    width: 100%;
    margin-top: 10%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
}

.main-banner__img {
  width: 60%;
  position: relative;
  max-width: 768px;
  max-height: 677px;
  align-self: center;
  margin-top: -5%;

  @media (max-device-width: 1024px) and (orientation: portrait) {
    width: 80%;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
}

.main-banner__text-intro {
  font-size: 28px;
  font-family: 'Montserrat Alternates', sans-serif;
  margin: 0px;
  color: #fff;
  font-weight: 700;
  position: relative;
  min-width: 400px;
  z-index: 10;
  line-height: 39px;
  display: inline-block;
  height: 50px;
  margin-bottom: 20px;

  span {
    position: relative;
    z-index: 10;
  }

  &::before {
    content: '';
    width: 100%;
    height: 50px;
    background-color: #00d4fe;
    display: block;
    position: absolute;
    top: -5px;
    left: -50px;
    z-index: 5;
  }

  &::after {
    content: '';
    width: 100%;
    height: 50px;
    background-color: #01a2c4;
    display: block;
    position: absolute;
    top: 5px;
    left: -40px;
    z-index: 4;
  }

  @media (max-device-width: 1024px) and (orientation: portrait){
    width: 80%;
    text-align: center;
    align-self: center;
    margin-bottom: 30px;

    &::before {
      left: 0px;
    }

    &::after {
      content: '';
      left: -10px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
    text-align: center;
    align-self: center;
    margin-top: 2rem;

    &::before {
      left: 0px;
    }

    &::after {
      content: '';
      left: -10px;
    }
  }

  @media only screen and (max-width: 667px) {
    font-size: 18px;
    min-width: 0;
    margin-bottom: 20px;
  }
}

.typed-element {
  display: block;
  min-height: 200px;
  z-index: 10;
  position: relative;

  @media (max-device-width: 1024px) and (orientation: portrait) {
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
  }

  @media only screen and (max-width: 667px) {
    min-height: 130px;
  }
}

.typing {
  font-size: 60px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 700;
  color: #fff !important;
  display: inline;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media only screen and (max-width: 667px) {
    font-size: 32px;
  }
}

.typed-cursor {
  font-size: 60px;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 200;
  color: #fff !important;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media only screen and (max-width: 667px) {
    font-size: 32px;
  }
}

.main-banner__img-bg {
  width: 106%;
  margin-left: -3%;
  margin-top: -5%;
}

.main-banner__img-body {
  position: absolute;
  z-index: 5;
  left: 10%;
  top: 34%;
  width: 74%;
}

.main-banner__img-arm-left {
  position: absolute;
  z-index: 6;
  width: 9%;
  left: 34%;
  top: 40%;
  animation: left-arm 2s 1s ease infinite;
}

.main-banner__img-arm-right {
  position: absolute;
  z-index: 6;
  width: 9%;
  left: 51%;
  top: 40%;
  animation: right-arm 2s 1s ease infinite;
}

.main-banner__img-head {
  position: absolute;
  z-index: 7;
  left: 37%;
  top: 20%;
  width: 19%;
}

.main-banner__img-laptop {
  position: absolute;
  z-index: 8;
  left: 36%;
  top: 58%;
  width: 33%;
}

.main-banner__shape1 {
  position: absolute;
  z-index: 5;
  top: 20%;
  left: 0;
  width: 16%;
}

.main-banner__shape2 {
  position: absolute;
  z-index: 5;
  top: 1%;
  right: -8%;
  width: 16%;
}

.main-banner__shape3 {
  position: absolute;
  z-index: 5;
  top: 57%;
  left: 8%;
  width: 6%;
}

.main-banner__shape4 {
  position: absolute;
  z-index: 5;
  top: 56%;
  right: 5%;
  width: 10%;
}

.main-banner__shape5 {
  position: absolute;
  z-index: 5;
  left: -10%;
  bottom: 13%;
  width: 10%;
}

.main-banner__shape6 {
  position: absolute;
  z-index: 5;
  top: 21%;
  right: 27%;
  width: 9%;
}

.floating {
  animation: floating 3s ease infinite;
  will-change: transform;
}

.floating-lg {
  animation: floating-lg 5s ease infinite;
}

.floating-sm {
  animation: floating-sm 3s ease infinite;
}

.main-banner__scroll {
  position: absolute;
  left: 0%;
  top: 80%;
  text-decoration: none;
  z-index: 10;
  width: auto;
  text-align: center;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);

  @media (max-device-width: 1024px) and (orientation: portrait) {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  @media (max-device-width: 768px) and (orientation: landscape) {
    display: none;
  }
}

.main-banner__scroll-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  margin-left: -20px;
  left: 50%;
  bottom: -35px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 20;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  box-sizing: border-box;
}

.main-banner__scroll-text {
  color: #fff;
  z-index: 20;
  font-weight: 700;
  background-color: #f85ccf;
  padding: 15px 60px;
  font-size: 14px;
  border: 2px solid #c648b1;
  box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
}
</style>