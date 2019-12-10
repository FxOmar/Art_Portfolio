<template>
  <div class="home">
    <carrousel>
      <swiper-slide v-for="post in 9" :key="post.id">
        <carrouselCard />
      </swiper-slide>
    </carrousel>
  </div>
</template>

<script>
// @ is an alias to /src
import carrouselCard from '@/components/carrouselCard'
import carrousel from '@/components/carrousel'

export default {
  name: 'home',
  components: {
    carrousel,
    carrouselCard

  }
}
</script>

<style scoped>

</style>
