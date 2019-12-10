<template>
  <div class="home">
    <!-- <carrousel>
      <swiper-slide v-for="post in 9" :key="post.id">
        <carrouselCard />
      </swiper-slide>
    </carrousel> -->
    <div class="container mx-auto my-10">
      <div class="flex flex-wrap justify-center">
        <card class="mx-5 my-5" v-for="n in 9" :key="n" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import carrouselCard from '@/components/carrouselCard'
// import carrousel from '@/components/carrousel'
import card from '@/components/card'

export default {
  name: 'home',
  components: {
    // carrousel,
    // carrouselCard,
    card
  }
}
</script>

<style scoped>

</style>
