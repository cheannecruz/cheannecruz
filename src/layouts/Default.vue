<template>
  <div class="layout">
    <mainHeader />
    <div class="main-body">
      <div class="main-body-content">
        <slot />
      </div>
    </div>
    <div class="footer">
      <g-image src="~/assets/images/pattern-bg.png" class="footer__bg" fit="cover" immediate="true"/>
      <h2 class="footer__heading">Let's Connect!</h2>
      <div class="footer__socials">
        <a href="https://dribbble.com/cheannecruz" target="_blank">
          <g-image src="~/assets/images/dribble.svg" class="footer__dribble" immediate="true"/>
        </a>
        <a href="https://github.com/cheannecruz" target="_blank">
          <g-image src="~/assets/images/github.svg" class="footer__github" immediate="true"/>
        </a>
        <a href="https://www.instagram.com/cheannecruz/" target="_blank">
          <g-image src="~/assets/images/instagram.svg" class="footer__instagram" immediate="true"/>
        </a>
        <a href="https://www.linkedin.com/in/cheannecruz/" target="_blank">
          <g-image src="~/assets/images/linkedin.svg" class="footer__linkedin" immediate="true"/>
        </a>
      </div>
    </div>
    <contactForm />
  </div>
</template>

<script>
import mainHeader from '~/components/MainHeader';
import contactForm from '~/components/ContactForm';

export default {
  components: {
      mainHeader,
      contactForm
  },
  data: function () {
    return {
    };
  },
  mounted () {
    this.$modal.hide('contact-form');
  },
  metaInfo: {
    meta: [
      { key: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }
    ]
  }
};
</script>

<style lang='scss'>
body {
  font-family: 'Open Sans', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.main-body-content{
  padding: 60px 0 0;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  z-index: 2;
  -webkit-box-shadow: 0px 5px 30px rgba(57, 63, 72, 0.5);
  -moz-box-shadow: 0px 5px 30px rgba(57, 63, 72, 0.5);
  box-shadow: 0px 5px 30px rgba(57, 63, 72, 0.5);
}

.footer {
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  &::before {
    content: '';
    width: 100%;
    height: 100vh;
    height: calc(100vh - 60px);
    background: #f857a6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #333399, #f857a6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #333399, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    position: fixed;
    bottom: 0;
    z-index: -1;
  }
}

.footer__socials {
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
  z-index: 10;

  a {
    margin: 1rem;

    img {
      display: block;
    }

    &:hover {
      img {
        opacity: 0.7;
      }
      background: #f857a6;
      border-radius: 30px;
    }
  }
}

.footer__heading {
  font-family: 'Montserrat Alternates', sans-serif;
  color: #fff;
  font-size: 34px;
  text-align: center;
  margin: 0 0 2rem;

  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
}

.footer__bg {
  position: fixed;
  bottom: 0;
  height: 100vh;
  z-index: 1;
}
</style>
