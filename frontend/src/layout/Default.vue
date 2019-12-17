<template>
  <div>
      <navbar />
      <div>
          <slot />
      </div>
      <appFooter />
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import appFooter from '@/components/appFooter'

export default {
  components: {
    navbar,
    appFooter
  }
}
</script>

<style>

</style>
