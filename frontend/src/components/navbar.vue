<template>
  <nav class="flex w-full items-center justify-between flex-wrap bg-padua-300 shadow-md p-5 z-20">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link to="/"><svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg></router-link>
      <span class="font-semibold text-xl tracking-tight"></span>
    </div>
    <div class="flex justify-end">
      <button @click="isActive = !isActive" class="flex items-center px-3 py-2 text-moss border-moss hover:text-white hover:border-white focus:outline-none">
        <i class="fas fa-bars"></i>
      </button>
      <transition name="slide-fade">
        <div v-if="isActive" class="bg-padua-200 fixed inset-0 w-64 h-full py-12 shadow-lg slide-menu z-10">
          <div v-on-clickaway="away" class="absolute top-0 right-0 my-5 mx-8 text-moss text-lg"><a @click="isActive = false" href="#"><i class="fas fa-times"></i></a></div>
          <ul class="text-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </transition>
      <div class="flex justify-center items-center px-3 text-moss">
        <!-- <button class="focus:outline-none"><i class="fas fa-moon mr-5 hover:text-white"></i></button> -->
        <div class="">
          <transition name="slide-fadeR">
            <input v-show="isSearchBarActive" class="mr-2 rounded px-3 py-1 bg-padua-500 text-white" placeholder="Search..." type="search" name="" id="">
          </transition>
          <button @click="isSearchBarActive = !isSearchBarActive" class="focus:outline-none"><i class="fas fa-search hover:text-white"></i></button>
        </div>
        <!-- <modal v-model="isModalVisible"></modal> -->
        <router-link v-if="!isLoggedIn" class="ml-5 hover:text-white antialiased font-bold" to="/login">Login</router-link>
        <template  v-if="isLoggedIn">
          <div  class="relative">
            <button v-on-clickaway="out" @click="isPopdown = !isPopdown" class="ml-5 mt-2 hover:text-whit focus:outline-none"><img class="w-8 h-8 rounded-full" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink"></button>
            <div v-show="isPopdown" class="rounded bg-white z-10 mt-1 absolute -ml-16 min-w-full list-1">
                <ul class="list-reset">
                  <li><router-link to="/senku/posts" href="#" class="px-4 py-2 block text-gray-800">My account</router-link></li>
                  <li><hr class="border-t mx-2 border-grey-200"></li>
                  <li><a href="#" @click="logout" class="px-4 py-2 block text-gray-800">Logout</a></li>
                </ul>
            </div>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway'
// import modal from '@/components/modal'

export default {
  name: 'navbar',
  components: {
    // modal
  },
  directives: {
    onClickaway: onClickaway
  },
  data () {
    return {
      isActive: false,
      isSearchBarActive: false,
      isPopdown: false
    }
  },
  methods: {
    away: function () {
      this.isActive = false
    },
    out: function () {
      this.isPopdown = false
    },
    logout: function () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    }
  },
  computed: {
    isLoggedIn: function () { return this.$store.getters.isLoggedIn }
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
.slide-fadeR-enter-active {
  transition: all .3s ease;
}
.slide-fadeR-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fadeR-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
.list-1 .list-reset li:hover{
  @apply bg-gray-200
}
::placeholder {
  color: rgb(231, 231, 231);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
 color: rgb(231, 231, 231);
}

::-ms-input-placeholder { /* Microsoft Edge */
 color: rgb(231, 231, 231);
}
</style>
