<template>
  <Layout>
    <section class="about-banner">
      <g-image src="~/assets/images/shape1.svg" class="about-banner__shape1"/>
        <g-image src="~/assets/images/shape2.svg" class="about-banner__shape2"/>
        <g-image src="~/assets/images/shape3.svg" class="about-banner__shape3"/>
        <g-image src="~/assets/images/shape1.svg" class="about-banner__shape4"/>
        <g-image src="~/assets/images/shape2.svg" class="about-banner__shape5"/>
        <g-image src="~/assets/images/shape3.svg" class="about-banner__shape6"/>
    </section>
    <section class="about-section">
      <g-image src="~/assets/images/che.jpeg" class="about-section__img-bg"/>
      <div class="about-section__content">
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style lang="scss">
  .about-banner {
    height: 300px;
    position: relative;
  }

  .about-section {
    min-height: calc(100vh - 60px);
    background: #fff;
    position: relative;
  }

  .about-section__content {
    max-width: 980px;
    margin: 0 auto;
    padding-top: 150px;
  }

  .about-section__img-bg {
    max-width: 200px;
    top: -100px;
    margin: 0 auto;
    position: absolute;
    display: block;
    border-radius: 100%;
    box-shadow: 0 5px 15px -8px rgba(0,0,0,.24), 0 8px 10px -5px rgba(0,0,0,.2);
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border: solid 5px #fff;
  }

  .about-banner__shape1 {
    position: absolute;
    z-index: 5;
    top: 20%;
    left: 10%;
    width: 5%;
    opacity: .8;
  }

  .about-banner__shape2 {
    position: absolute;
    z-index: 5;
    bottom: 15%;
    right: 25%;
    width: 3%;
    opacity: .8;
  }

  .about-banner__shape3 {
    position: absolute;
    z-index: 5;
    top: 57%;
    left: 25%;
    width: 4%;
    opacity: .8;
  }

  .about-banner__shape4 {
    position: absolute;
    z-index: 5;
    top: 25%;
    right: 13%;
    width: 5%;
    opacity: .8;
  }

  .about-banner__shape5 {
    position: absolute;
    z-index: 5;
    left: 36%;
    top: 10%;
    width: 3%;
    opacity: .8;
  }

  .about-banner__shape6 {
    position: absolute;
    z-index: 5;
    top: 21%;
    right: 38%;
    width: 4%;
    opacity: .8;
  }
</style>
