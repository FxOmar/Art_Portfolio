<template>
  <div class="flex">
      <sidebar class="w-1/5" />
      <div class="w-4/5 mx-16 flex-1">
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
