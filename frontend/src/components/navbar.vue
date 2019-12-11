<template>
  <nav class="flex w-full items-center justify-between flex-wrap bg-padua shadow-md p-6 z-20">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span class="font-semibold text-xl tracking-tight"></span>
    </div>
    <div class="flex justify-end">
      <div class="block">
        <button @click="isActive = !isActive" class="flex items-center px-3 py-2 text-moss border-moss hover:text-white hover:border-white focus:outline-none">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <transition name="slide-fade">
        <div v-if="isActive" class="bg-padua fixed inset-0 w-64 h-full py-12 shadow-lg slide-menu z-10">
          <div v-on-clickaway="away" class="absolute top-0 right-0 my-5 mx-8 text-moss text-lg"><a @click="isActive = false" href="#"><i class="fas fa-times"></i></a></div>
          <ul class="text-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </transition>
      <div class="flex px-3 py-2 text-moss">
        <i class="fas fa-moon mr-5 hover:text-white"></i>
        <button @click="isModalVisible = !isModalVisible"><i class="fas fa-search hover:text-white"></i></button>
        <div>
          <modal v-model="isModalVisible"></modal>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway'
import modal from '@/components/modal'

export default {
  name: 'navbar',
  components: {
    modal
  },
  directives: {
    onClickaway: onClickaway
  },
  data () {
    return {
      isActive: false,
      isModalVisible: false
    }
  },
  methods: {
    away: function () {
      this.isActive = false
    }
  }
}

</script>

<style scoped>
.slide-menu ul li {
  @apply pt-3 text-moss antialiased text-lg font-medium
}
.slide-menu ul li:hover{
  @apply text-white
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */{
  transform: translateX(-10px);
  opacity: 0;
}
</style>
