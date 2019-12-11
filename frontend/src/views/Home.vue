<template>
  <div class="home">
    <div class="container mx-auto my-10">
      <div class="flex flex-wrap justify-center">
        <card class="mx-5 my-5" v-for="n in 9" :key="n" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import card from '@/components/card'

export default {
  name: 'home',
  components: {
    card
  }
}
</script>

<style scoped>

</style>
