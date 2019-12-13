<template>
  <div id="app" class="" style="background: #f6f6f6">
    <navbar />
    <!-- <hero /> -->
    <router-view/>
    <appFooter />
  </div>
</template>

<script>
import navbar from '@/components/navbar'
// import hero from '@/components/hero'
import appFooter from '@/components/appFooter'

export default {
  components: {
    navbar,
    // hero,
    appFooter
  },
  computed: {
    background () {
      return require('./assets/img/augustine-wong-kTg4NXEmfs8-unsplash.jpg')
    }
  }
}
</script>

<style>

</style>
