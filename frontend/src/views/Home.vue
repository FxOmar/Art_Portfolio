<template>
  <div class="home">
    <div>
      <card />
    </div>
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
  }
}
</script>

<style scoped>
.home{
  @apply py-10 px-6 overflow-hidden
}
</style>
