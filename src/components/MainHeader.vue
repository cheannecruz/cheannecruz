<template>
  <header class="header" :class="{'collapsed': isCollapsed}">
    <div class="header__content">
      <g-link to="/" class="header__home-link">
        <logoImg />
        <h1 class="header__logo-name">Cheryl Cruz.</h1>
      </g-link>
      <button class="hamburger hamburger--spin" type="button" v-on:click="toggleActive(!collapsed)" :class="{'is-active': isCollapsed}">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <nav class="nav" :class="{'collapsed': isCollapsed}" @click="toggleActive(false)">
        <div>
          <g-link class="nav__link" to="/" exact :class="activePage == 'home' ? 'active' : ''">Home</g-link>
          <g-link class="nav__link" to="/works/">Works</g-link>
          <g-link class="nav__link" to="/about/" exact>About</g-link>
          <a class="nav__link" @click="showContact();">Contact</a>
        </div>
      </nav>
      <div class="gray-area" @click="toggleActive(false)"></div>
    </div>
  </header>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

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
    computed: {
      activePage: function () {
        return this.$route.name
      },
      isCollapsed: function () {
        return this.collapsed
      }
    },
    methods: {
      toggleActive (flag) {
        this.collapsed = flag
      },
      reTollgeActive (flag) {
        this.collapsed = flag
        this.toggleActive(this.collapsed);
      },
      showContact () {
        this.$modal.show('contact-form');
      },
      hideContact () {
        this.$modal.hide('contact-form');
      }
    }
  };
</script>

<style lang='scss'>
.header {
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  background: #fff;
  height: 60px;
   -webkit-box-shadow: 0 1px 5px rgba(57, 63, 72, 0.1);
  -moz-box-shadow: 0 1px 5px rgba(57, 63, 72, 0.1);
  box-shadow: 0 1px 5px rgba(57, 63, 72, 0.1);

  .gray-area {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    &.collapsed {
      .gray-area {
        background: rgba(0,0,0,0.5);
        z-index: 1;
        position: absolute;
        top: 60px;
        left: 0px;
        height: calc(100vh - 60px);
        width: 100%;
        display: block;
      }
    }
  }
}

.header__content {
  max-width: 1280px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative;
  z-index: 20;
}

.header__home-link {
  margin: 0.5rem 0 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 50px;
  }
}

.header__logo-name {
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: #2BB4F7;
  margin: 0 10px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
}

.nav {
  display: flex;

  div {
    display: flex;
  }

  @media only screen and (max-width: 768px) {
    right: -70%;
    opacity: 0;
    transition: all 0.5s ease;
    -webkit-transition: all .5s ease;
    display: flex;
    flex-direction: column;
    width: 70%;
    height: calc(100vh - 60px);
    position: fixed;
    top: 60px;
    align-items: center;
    z-index: 100;

    div {
      width: 100%;
      background: #fff;
      align-self: flex-end;
      align-items: center;
      text-align: center;
      height: calc(100vh - 60px);
      display: flex;
      flex-direction: column;
      -webkit-box-shadow: inset 0px 5px 5px 1px rgba(0,0,0,0.05);
      -moz-box-shadow: inset 0px 5px 5px 1px rgba(0,0,0,0.05);
      box-shadow: inset 0px 5px 5px 1px rgba(0,0,0,0.05);
    }

    &.collapsed {
      right: 0;
      opacity: 1;
    }
  }
}

.nav__link {
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2BB4F7;
  margin: 0 10px;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  padding: 5px 10px;
  transition: all 0.5s ease;
  -webkit-transition: all .5s ease;
  display: block;
  align-self: center;

  &:hover {
    color: #F891C7;
    border-bottom: 3px solid #F891C7;
    cursor: pointer;
  }

  &.active {
    color: #4B2086;
    border-bottom: 3px solid #4B2086;
  }

  @media only screen and (max-width: 768px) {
    padding: 10px 30px;
    margin: 10px 0px;
    align-self: center;

    &:first-child {
      margin-top: 30px;
    }
  }
}

.hamburger {
  display: none !important;
  padding: 15px 0px 15px 15px !important;

  &:focus {
    outline: none !important;
  }

  @media only screen and (max-width: 768px) {
    display: inline-block !important;
  }
}

.hamburger-box {
  width: 25px !important;
}

.hamburger-inner {
  background-color: #2BB4F7 !important;
  width: 25px !important;

  &::before {
    background-color: #2BB4F7 !important;
    width: 25px !important;
  }

  &::after {
    background-color: #2BB4F7 !important;
    width: 25px !important;
  }
}

</style>