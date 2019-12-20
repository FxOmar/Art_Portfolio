<template>
  <div class="">
      <div class="flex flex-col">
        <h1 class="text-padua-200 text-3xl m-5">Your board</h1>
        <ul class="container mx-auto flex">
        <li class="text-padua-300 ml-4 hover:bg-padua-500 hover:text-white">
            <router-link to="/user/new">New Post</router-link>
        </li>
        <li class="text-padua-300 ml-4 hover:bg-padua-500 hover:text-white">
            <router-link to="/">Preview</router-link>
        </li>
        </ul>
      </div>
    <div class="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3 float-right mr-5 mt-0">
      <img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />
      <div class="flex justify-center -mt-8">
        <img src="https://i.imgur.com/8Km9tLL.jpg" class="rounded-full border-solid border-white border-2 -mt-3">
      </div>
      <div class="text-center px-3 pb-6 pt-2">
        <h3 class="text-black text-sm bold font-sans">Olivia Dunham</h3>
        <p class="mt-2 font-sans font-light text-grey-dark">Hello, i'm from another the other side!</p>
      </div>
      <div class="flex justify-center pb-3 text-grey-dark">
        <div class="text-center mr-3 border-r pr-3">
          <h2>34</h2>
          <span>Photos</span>
        </div>
        <div class="text-center">
          <h2>42</h2>
          <span>Friends</span>
        </div>
      </div>
    </div>
    <div>
      <button @click="user">User</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    user: function () {
      const auth = {
        headers: { token: localStorage.getItem('token') }
      }
      this.axios.get('http://localhost:3013/api/v1/auth/user', auth)
        .then((res) => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
    }
  }
}

</script>

<style>

</style>
