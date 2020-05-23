<template>
  <Layout>
    <mainBanner />
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
import mainBanner from '~/components/MainBanner';
import workRoll from '~/components/WorkRoll';
export default {
  metaInfo: {
    title: 'Hello, welcome!'
  },
  components: {
    mainBanner,
    workRoll
  },
}
</script>

<style lang="scss">

</style>
