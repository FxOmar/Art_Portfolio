<template>
  <div id="app">
    <navbar />
    <hero />
    <router-view/>
    <appFooter />
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import hero from '@/components/hero'
import appFooter from '@/components/appFooter'

export default {
  components: {
    navbar,
    hero,
    appFooter
  }
}
</script>

<style>

</style>
