<template>
  <section class="work-roll" id="myWorks">
    <h2 class="work-roll__heading">Recent works</h2>
    <p class="work-roll__description">
      Here are some projects that I have worked on recently.
    </p>
    <div class="work-roll__list">
      <article
        v-for="edge in $page.works.edges"
        :key="edge.node.id"
        data-aos="fade-up"
        class="work-roll__item">
        <div class="work-roll__item-details">
          <h2 class="work-roll__item-title">
            {{edge.node.title}}
          </h2>
          <small class="work-roll__item-project">{{edge.node.projectName}}</small>

          <small class="work-roll__item-summary">{{edge.node.summary}}</small>

          <g-link :to='edge.node.path' class="work-roll__item-link">
            Read Full Case Study
          </g-link>
        </div>
        <div class="work-roll__item-image">
          <g-link :to='edge.node.path'>
            <g-image
              :src='edge.node.thumbImage'
              :alt='edge.node.title'
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </g-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
  export default {
    methods: {
      formatDate(thisDate) {
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let current_datetime = new Date(thisDate);
        let formatted_date = current_datetime.getDate() + " " + months[current_datetime.getMonth()] + " " + current_datetime.getFullYear();
        return formatted_date;
      }
    }
  };
</script>

<style lang='scss'>
#myWorks {
  padding: 3rem 20px 10rem;
  overflow: hidden;
  background: #fff;
}

.work-roll__list {
  max-width: 980px;
  margin: 0 auto;
}

.work-roll__item {
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  &:first-child {
    margin-top: 0;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
}

.work-roll__item-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3rem;
  max-width: 360px;
  order: 1;

  @media only screen and (max-width: 768px) {
    padding-right: 0rem;
  }
}

.work-roll__item-title {
  font-size: 32px;
  font-family: 'Montserrat Alternates', sans-serif;
  margin-bottom: 0;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: 26px;
  }
}

.work-roll__item-link {
  border: 2px solid #c648b1;
  display: inline-block;
  padding: 0px 70px 0px 20px;
  margin: 2rem 0;
  align-self: flex-start;
  color: #c648b1;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  position: relative;
  height: 55px;
  line-height: 55px;
  transition: all 0.5s ease;
  -webkit-transition: all .5s ease;
  border-radius: 3px;

  @media only screen and (max-width: 768px) {
    margin: 0.5rem 0 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    right: 30px;
    bottom: 42%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 20;
    border-left: 2px solid #c648b1;
    border-bottom: 2px solid #c648b1;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
    box-sizing: border-box;
    transition: all 0.5s ease;
    -webkit-transition: all .5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    z-index: 20;
    right: 18px;
    bottom: 12px;
    border: 2px solid #c648b1;
    box-sizing: border-box;
    border-radius: 50px;
    transition: all 0.5s ease;
    -webkit-transition: all .5s ease;
  }

  &:hover {
    border: 2px solid #f85ccf;
    background: #f85ccf;
    color: #fff;

    &::before {
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
    }

    &::after {
      border: 2px solid #fff;
    }
  }
}

.work-roll__item-image {
  position: relative;
  display: flex;
  align-content: center;
  transition: all 0.5s ease 0s;
  -webkit-transition: all 0.5s ease 0s;
  order: 2;

  img {
    width: 100%;
    max-width: 600px;
    align-self: center;
    border-radius: 10px;
  }

  &::before {
    content: "";
    top: 50px;
    right: -50px;
    bottom: 0px;
    opacity: 0.20;
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    background-blend-mode: screen;
    border-radius: inherit;
    transition: all 0.5s ease 0s;
    -webkit-transition: all 0.5s ease 0s;
    background: linear-gradient(223.34deg, rgb(108, 110, 231) 0%, rgb(100, 196, 229) 100%);
    border-radius: 5px;

    @media only screen and (max-width: 768px) {
      top: 25px;
      right: -30px;
    }
  }

  &:hover {
    transform: scale(1.02);
    &::before {
      opacity: 0.80;
    }
  }
}

.work-roll__item {
  &:nth-child(odd) {
    .work-roll__item-details {
      order: 2;
      padding-right: 0rem;
      padding-left: 3rem;
    }
    .work-roll__item-image {
      order: 1;

      &::before {
        left: -50px;
        background: linear-gradient(223.34deg, rgb(108, 110, 231) 0%, rgb(241, 87, 115) 100%);

        &:hover {
          &::before {
            opacity: 0.80;
          }
        }
      }
    }

    @media only screen and (max-width: 768px) {
      top: 25px;
      right: -30px;

      .work-roll__item-details {
        order: 1;
        padding-right: 0rem;
        padding-left: 0rem;
      }
      .work-roll__item-image {
        order: 2;
      }
    }
  }
}

.work-roll__item-summary {
  line-height: 2;
  color: #586069;
  font-size: 14px;
  padding-top: 0.5rem;
}

.work-roll__item-project {
  color: #586069;
  font-size: 14px;
  line-height: 2;
  text-transform: uppercase;
}

.work-roll__heading {
  font-family: 'Montserrat Alternates', sans-serif;
  color: #2BB4F7;
  font-size: 34px;
  text-align: center;
  margin: 2rem 0 0;

  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
}

.work-roll__description {
  text-align: center;
  margin: 0 0 5rem;

  @media only screen and (max-width: 768px) {
    margin: 0 0 2rem;
  }
}
</style>