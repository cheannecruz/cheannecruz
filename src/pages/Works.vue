<template>
  <Layout>
    <workRoll />
  </Layout>
</template>

<page-query>
  query {
    works: allWorkPost(sortBy: "order", order: ASC) {
      edges {
        node {
          id
          title
          summary
          path
          thumbImage
          order
          dateCreated
        }
      }
    }
  }
</page-query>

<script>
import workRoll from '~/components/WorkRoll';
export default {
  metaInfo: {
    title: 'Hello, world!',
    name: 'works',
  },
  components: {
    workRoll
  },
}
</script>

<style>

</style>

