<template>
  <router-link :to="`post/${url}`" class="card">
    <div class="overlay"></div>
    <img :src="`${ image }`" :alt="`${ title }`">
  </router-link>
</template>

<script>
export default {
  props: ['image', 'title', 'url']
}
</script>

<style scoped>

.overlay{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(77, 77, 77, 0.76);
  color: #FEF5DF;
  opacity: 0;
  transition: all 0.5s;
}

.overlay:hover{
  opacity: 1;
}

</style>
