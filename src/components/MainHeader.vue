<template>
  <header class="header">
    <div class="header__content">
      <g-link to="/" class="header__home-link">
        <logoImg />
        <h1 class="header__logo-name">Cheryl Cruz.</h1>
      </g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/" exact :class="activePage == 'home' ? 'active' : ''">Home</g-link>
        <g-link class="nav__link" to="/about/" exact>About</g-link>
        <g-link class="nav__link" to="/works/" name="works">Works</g-link>
        <g-link class="nav__link" to="/contact/" exact>Contact</g-link>
      </nav>
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
    components: {
      logoImg
    },
    computed: {
      activePage: function () {
        return this.$route.name
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
}

.header__content {
  max-width: 1280px;
  //padding: 0 2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
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
  transition: all 0.5s;
  display: block;

  &:hover {
    color: #F891C7;
    border-bottom: 3px solid #F891C7;
  }

  &.active {
    color: #4B2086;
    border-bottom: 3px solid #4B2086;
  }
}


</style>