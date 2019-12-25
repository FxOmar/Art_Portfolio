<template>
  <div class="flex">
    <div>
      <sidebar class="w-64 sticky top-0 h-screen" />
    </div>
    <div class="w-full">
        <slot />
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/appSidebar'
export default {
  components: {
    sidebar
  }
}
</script>

<style>

</style>
