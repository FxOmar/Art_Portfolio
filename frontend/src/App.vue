<template>
  <div id="app">
    <navbar />
    <hero />
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import hero from '@/components/hero'
export default {
  components: {
    navbar,
    hero
  }
}
</script>

<style>

</style>
