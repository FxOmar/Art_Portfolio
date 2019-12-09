<template>
  <div class="home">
    <div>
        <carrousel>
          <swiper-slide v-for="post in data.posts" :key="post.id">
            <card title="post.title" image="post.feature_image" url="post.slug" />
          </swiper-slide>
        </carrousel>
    </div>
    <!-- <div>
      <carrousel />
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import card from '@/components/card'
// import carrousel from '@/components/carrousel'

export default {
  name: 'home',
  components: {
    // carrousel,
    card
  },
  data () {
    return {
      data: []
    }
  }
}
</script>

<style scoped>
.home{
  @apply py-10 px-6 overflow-hidden
}
</style>
