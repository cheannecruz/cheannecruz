<template>
  <Layout>
    <section class="about-banner">
        <g-image src="@/assets/images/shape1.svg" class="about-banner__shape1" immediate="true"/>
        <g-image src="@/assets/images/shape2.svg" class="about-banner__shape2" immediate="true"/>
        <g-image src="@/assets/images/shape3.svg" class="about-banner__shape3" immediate="true"/>
        <g-image src="@/assets/images/shape1.svg" class="about-banner__shape4" immediate="true"/>
        <g-image src="@/assets/images/shape2.svg" class="about-banner__shape5" immediate="true"/>
        <g-image src="@/assets/images/shape3.svg" class="about-banner__shape6" immediate="true"/>
    </section>
    <section class="about-section">
      <g-image src="@/assets/images/che.jpeg" class="about-section__img-bg" immediate="true"/>
      <div class="about-section__content">
        <h1 class="about-section__heading">Hello, I'm Cheryl!</h1>
        <p>I'm a Frontend Web Developer currently working for <a href="https://www.evolution7.com.au" target="_blank">Evolution7</a>, an award winning digital agency based in Melbourne, Australia. <br/><br/>
        I have a wide range of experience in the IT Industry, from being a Business Systems Analyst to pursuing my passion for designing and building websites. I love designing websites and interfaces and enjoy seeing them come to life through coding. This passion of mine also allowed me to live and work in Japan for a MedTech and Merging & Acquisition company. I moved to Australia to study a Masters Degree in Digital Media and learn more about Design Research and UX.<br/><br/>
        When I'm not busy with work and studies, I usually play video games or do other artsy stuff like handmade crafts, drawing, or painting. I also love to travel and take photos! <br/><br/>
        I'm very open to learning new things, especially concerning UX. I want to be involved in meaningful projects, join an amazing team, and excel more in design and development.  <br/><br/></p>
        <h1 class="about-section__heading">Here are some of the tools and tech I use!</h1>
        <p>I create web assets using Affinity designer, design user interfaces in Figma, and sometimes use Principle for prototypes.
        I mostly do development with HTML5, CSS3, Javascript, and frameworks such as ReactJS and VueJS.</p>
        <ul class="about-tools">
          <li>
            <g-image src="@/assets/images/html-icon.svg" immediate="true"/>
            <span>HTML 5</span>
          </li>
          <li>
            <g-image src="@/assets/images/css-icon.svg" immediate="true"/>
            <span>CSS 3</span>
          </li>
          <li>
            <g-image src="@/assets/images/sass-icon.svg" immediate="true" class="icon-sass"/>
            <span>Sass</span>
          </li>
          <li>
            <g-image src="@/assets/images/js-icon.svg" immediate="true" class="icon-js"/>
            <span>Javascript</span>
          </li>
          <li>
            <g-image src="@/assets/images/vue-icon.svg" immediate="true" class="icon-vue"/>
            <span>VueJS</span>
          </li>
          <li>
            <g-image src="@/assets/images/react-icon.svg" immediate="true" class="icon-react"/>
            <span>ReactJS</span>
          </li>
          <li>
            <g-image src="@/assets/images/yarn-icon.svg" immediate="true" class="icon-yarn"/>
            <span>Yarn</span>
          </li>
          <li>
            <g-image src="@/assets/images/affinity-icon.svg" immediate="true" class="icon-affinity"/>
            <span>Affinity Designer</span>
          </li>
          <li>
            <g-image src="@/assets/images/figma-icon.svg" immediate="true"/>
            <span>Figma</span>
          </li>
          <li>
            <g-image src="@/assets/images/principle-icon.svg" immediate="true"/>
            <span>Principle</span>
          </li>
      </ul>
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
    padding: 0 30px;

     p {
       text-align: justify;
       line-height: 2;

       a {
         color: #2BB4F7;
         text-decoration: none;
       }
     }
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

  @media only screen and (max-width: 768px) {
    .about-banner__shape1 {
      width: 8%;
    }

    .about-banner__shape2 {
      position: absolute;
      width: 6%;
    }

    .about-banner__shape3 {
      position: absolute;
      width: 7%;
    }

    .about-banner__shape4 {
      position: absolute;
      width: 8%;
    }

    .about-banner__shape5 {
      width: 6%;
    }

    .about-banner__shape6 {
      width: 7%;
    }
  }

  @media only screen and (max-width: 667px) {
    .about-banner__shape1 {
      width: 10%;
    }

    .about-banner__shape2 {
      position: absolute;
      width: 8%;
      bottom: 40%;
    }

    .about-banner__shape3 {
      position: absolute;
      width: 9%;
    }

    .about-banner__shape4 {
      position: absolute;
      width: 10%;
    }

    .about-banner__shape5 {
      width: 8%;
    }

    .about-banner__shape6 {
      width: 9%;
    }
  }

  .about-section__heading {
    font-family: 'Montserrat Alternates', sans-serif;
    color: #2BB4F7;
    font-size: 34px;
    text-align: center;
    margin: 0;

    @media only screen and (max-width: 768px) {
      font-size: 32px;
    }
  }

  .about-tools {
    margin:  0;
    padding: 2rem 2rem 5rem;
    display: flex;
    list-style: none;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    li {
      position: relative;
      padding: 20px;

      img {
        opacity: .5;
        transition: all 0.5s ease;
        -webkit-transition: all .5s ease;
        display: block;
        margin: 0 auto;

        &.icon-affinity, &.icon-sass, &.icon-js, &.icon-vue, &.icon-react, &.icon-yarn {
          width: 90%;
        }
      }

      span {
        opacity: 0;
        transition: all 0.3s ease;
        -webkit-transition: all .3s ease;
        display: block;
        text-align: center;
        margin: 10px 0;
        font-family: 'Montserrat Alternates', sans-serif;
        font-weight: 700;
        position: absolute;
        top: 100%;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 100%;
        background:#2BB4F7;
        color: #fff;
        z-index: 10;
        padding: 5px 0;
        box-shadow: 0 5px 15px -8px rgba(0,0,0,.24), 0 8px 10px -5px rgba(0,0,0,.2);
      }

      &:hover {
        cursor: pointer;
        background: #fff;

        img {
          opacity: 1;
          transform: scale(1.5);
        }

        span {
          opacity: 1;
        }
      }
    }
  }
</style>
