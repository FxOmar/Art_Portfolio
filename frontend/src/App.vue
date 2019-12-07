<template>
  <div id="app">
    <div class="flex">
      <sidebar />
      <router-view/>
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/sidebar'
export default {
  components: {
    sidebar
  }
}
</script>

<style>

</style>
