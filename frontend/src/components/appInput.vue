<template>
  <div class="relative">
    <label :class="[clazz, val]" class="block text-white text-sm font-medium mb-2 absolute" :for="name" style="transition: .2s; top: 20px;
    left: 14px;
    ">
      {{ placeholder }}
    </label>
    <input @focus="onFocus($event)" @blur="onBlur" v-model="content" class="rounded-lg bg-padua-300 w-full py-5 px-4 text-white leading-tight focus:outline-none" id="username" :type="type">
  </div>
</template>

<script>
export default {
  props: ['type', 'name', 'placeholder'],
  data () {
    return {
      input_active: false,
      content: ''
    }
  },
  methods: {
    onFocus: function (event) {
      event.target.select()
      this.input_active = true
    },
    onBlur: function (event) {
      this.input_active = false
    }
  },
  computed: {
    clazz: function () {
      let clzz = ''
      if (this.input_active === false) {
        clzz += ''
      } else {
        clzz += 'up'
      }
      return clzz
    },
    val: function () {
      let cl = ''
      if (this.content) { cl += 'up' }
      return cl
    }
  }
}
</script>

<style scoped>
.up {
  transform: translateY(-12px);
  font-size: 10px;
}
</style>
