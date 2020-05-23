<template>
  <Layout>
    <h1>{{$page.post.title}}</h1>
    <p>{{$page.post.summary}}</p>
    <div class="blog__content" v-html="$page.post.content"></div>
  </Layout>
</template>


<page-query>
  query Work ($path: String){
    post: workPost (path: $path) {
      title
      summary
      content
    }
  }
</page-query>
<script>

</script>