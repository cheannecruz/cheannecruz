<template>
  <Layout>
    <section class="work-page__main-banner">
      <g-image
        :src='$page.post.mainBannerImage'
        :alt='$page.post.title'
        fit="contain"
        class="work-page__main-banner-img"
        immediate="true"
      />
    </section>
    <section class="work-page__section">
      <div class="work-page__main-content">
        <h1 class="work-page__heading">{{$page.post.title}}</h1>
        <small class="work-page__date">Cheryl Cruz | {{formatDate($page.post.dateCreated)}}</small>
        <div class="work-page__content" v-html="noFirstLetter($page.post.content)"></div>
      </div>
    </section>
  </Layout>
</template>


<page-query>
  query Work ($path: String){
    post: workPost (path: $path) {
      title
      content
      mainBannerImage
      dateCreated
    }
  }
</page-query>
<script>
  export default {
    data() {
      return {
        firstLetter: '',
      }
    },
    methods: {
      formatDate(thisDate) {
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let current_datetime = new Date(thisDate);
        let formatted_date = current_datetime.getDate() + " " + months[current_datetime.getMonth()] + " " + current_datetime.getFullYear();
        return formatted_date;
      },
      noFirstLetter(content) {
        const strip = content.substring(4);
        const pTag = content.slice(0, 3) + '<span>' + content.slice(3, 4) + '</span>';
        return pTag + strip;
      }
    }
  };
</script>
<style lang="scss">
.work-page__main-banner {
  position: relative;
  height: 300px;
  overflow: hidden;
}
.work-page__main-banner-img {
  width: 100%;
  display: block;
}
.work-page__section {
  background: #fff;
  overflow: hidden;
  padding: 0 30px;

  .work-page__main-content {
    max-width: 980px;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }
}
.work-page__heading {
  font-family: 'Montserrat Alternates', sans-serif;
  padding: 1.5em 0 0;
  font-size: 46px;
  margin-bottom: 0;
  font-weight: 700;
}

.work-page__date {
  color: #586069;
  font-size: 14px;
  line-height: 2;
  padding-bottom: 3em;
  display: block;
}

.work-page__content {
  line-height: 2;
  margin-bottom: 5em;

  span:first-of-type {
    float: left;
    font-size: 100px;
    margin-right: 10px;
    vertical-align: baseline;
    font-weight: 700;
    height: 100px;
    line-height: 1;
    margin-top: -5px;
  }

  .main-img-holder {
    img {
      float: left;
      margin: 0 20px 10px 0px;
      max-width: 400px;
    }

    @media only screen and (max-width: 667px) {

      p {
        text-align: center;
      }

      img {
        float: none;
        margin: 0 auto;
      }
    }
  }

  .img-holder {
    margin: 0 auto;
    display: block;
    max-width: 600px;

    p, p.desc {
      text-align: center;
      margin: 0;
      color: #586069;
      font-size: 12px;
    }
    img {
      margin: 0px;
      max-width: 600px;
    }
  }

  p {
    margin: 2em 0;
    text-align: justify;
  }

  strong {
    font-weight: 700;
  }

  .references {
    color: #586069;
    font-size: 12px;
  }

  ul {
    display: inline-block;
    margin: 0;
    list-style: none;
  }

  ul li::before {
    content: "\2022";
    color: #2BB4F7;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
}
</style>