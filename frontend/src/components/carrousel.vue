<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <slot />
    <!-- Optional controls -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
// import card from '@/components/card'

export default {
  name: 'carrousel',
  components: {
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 0,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}

</script>
<style scoped>
.swiper-slide{
    @apply w-56
}
</style>
