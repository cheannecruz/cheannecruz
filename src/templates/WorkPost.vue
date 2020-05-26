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
        <h1>{{$page.post.title}}</h1>
        <p>{{$page.post.summary}}</p>
        <div class="blog__content" v-html="$page.post.content"></div>
      </div>
    </section>
  </Layout>
</template>


<page-query>
  query Work ($path: String){
    post: workPost (path: $path) {
      title
      summary
      content
      mainBannerImage
    }
  }
</page-query>
<script>
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
</style>