<template>
  <div class="bg-cover bg-center flex w-full h-screen"
    style="background-image: url(https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80)">
    <div class="overlay"></div>
    <div class="w-full max-w-md mx-auto my-16 flex flex-col justify-center z-10">
      <div class="text-center">
        <h1 class=" text-5xl text-padua-100 antialiased font-normal mb-5 font-Vidaloka">Blog</h1>
      </div>
      <div class=" bg-padua-500 shadow-2xl rounded-lg px-8 pt-12 pb-8 mb-4">
        <div class="mb-4">
          <label  class="block text-white text-sm font-medium mb-2" for="username">
            username
          </label>
          <input v-model="email" class="rounded-lg bg-padua-300 w-full py-5 px-4 text-white leading-tight focus:outline-none" placeholder="email@example.com" type="text">
        </div>
        <div class="mb-4">
          <label  class="block text-white text-sm font-medium mb-2" for="username">
            password
          </label>
          <input v-model="password" class="rounded-lg bg-padua-300 w-full py-5 px-4 text-white leading-tight focus:outline-none" placeholder="password" type="password">
        </div>
        <div class="flex justify-center">
          <button
            class="bg-white w-40 hover:bg-gray-300 text-gray-800 font-bold font-medium text-sm uppercase py-3 rounded-full focus:outline-none"
            @click="login"
            >
            log in <i class="fas fa-chevron-right bg-padua-700 p-1 w-5 ml-2 rounded-full text-xs text-white"></i>
          </button>
        </div>
      </div>
      <a class="font-bold text-sm text-white hover:text-gray-400 text-center underline uppercase"
        href="#">
        Forgot Password?
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      // eslint-disable-next-line camelcase
      const { data: { access_token } } = await this.axios.post('http://localhost:3013/api/v1/auth/login', {
        email: this.email,
        password: this.password
      })
      this.$cookies.set('access_token', access_token, '10d', '/')
      this.$store.dispatch('getUser')
    }
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
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(224, 224, 224);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgb(224, 224, 224);
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: rgb(224, 224, 224);
}
</style>
