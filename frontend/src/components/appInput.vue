<template>
  <input class="p-2 border-none focus:outline-none rounded shadow" :placeholder="`${placeholder}`" :type="`${type}`" :name="`${name}`">
</template>

<script>
export default {
  props: ['type', 'name', 'placeholder']
}
</script>
