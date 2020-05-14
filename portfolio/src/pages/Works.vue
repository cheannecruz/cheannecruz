<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <h1>Works</h1>

    <article
        v-for="edge in $page.works.edges"
        :key="edge.node.id">
        <h2>
          <g-link :to='edge.node.path'>
            {{edge.node.title}}
          </g-link>
        </h2>
        <small>{{edge.node.summary}}</small>
        <img :src='edge.node.thumbImage' :alt='edge.node.title' />
        <hr>
    </article>

  </Layout>
</template>

<page-query>
  query {
    works: allWorkPost {
      edges {
        node {
          id
          title
          summary
          path
          thumbImage
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
