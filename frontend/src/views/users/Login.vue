<template>
  <div class="bg-cover bg-center flex w-full h-screen"
    style="background-image: url(https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80)">
    <div class="overlay"></div>
    <div class="w-full max-w-md mx-auto my-16 flex flex-col justify-center z-10">
      <form class=" bg-padua-500 shadow-2xl rounded-lg px-8 pt-12 pb-8 mb-4">
        <div class="mb-4">
          <appInput type="text" name="username" placeholder="Username" />
        </div>
        <div class="mb-4">
          <appInput type="password" name="password" placeholder="Password" />
        </div>
        <div class="flex justify-center">
          <button
            class="bg-white w-40 hover:bg-gray-300 text-gray-800 font-bold font-medium text-sm uppercase py-3 rounded-full focus:outline-none"
            type="button">
            log in <i class="fas fa-chevron-right bg-padua-700 p-1 w-5 ml-2 rounded-full text-xs text-white"></i>
          </button>
        </div>
      </form>
      <a class="flex justify-center align-baseline font-bold text-sm text-white hover:text-gray-400 text-center"
        href="#">
        Forgot Password?
      </a>
    </div>
  </div>
</template>

<script>
import appInput from '@/components/appInput'
export default {
  name: 'login',
  components: {
    appInput
  }

}
</script>

<style scoped>
.overlay::before{
  content: ' ';
  background-color: theme('colors.padua.900');
  opacity: .8;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
