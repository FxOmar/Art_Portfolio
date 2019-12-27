<template>
  <div class="bg-white py-5 px-5 rounded shadow mx-16 my-16">
    <form @submit.prevent class="flex flex-col profile">
      <div class="mx-auto">
        <img class="w-40 rounded" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="">
        <input type="file" name="" id="avatar">
      </div>
      <label for="username">
        <span>Username</span>
      </label>
      <input type="text" name="username" v-model="username" id="username">
      <label for="email">
        <span>Email</span>
      </label>
      <input type="text" name="" v-model="email" id="email">
      <div class="my-4">
        <h2 class="pb-3 text-lg text-gray-800 font-bold">Change password</h2>
        <hr>
      </div>
      <label for="password">
        <span>Current Password</span>
      </label>
      <input type="password" name="" placeholder="password" id="password">
      <label for="newPassword">
        <span>New Password</span>
      </label>
      <input type="password" name="" placeholder="New Password" id="newPassword">
      <label for="confirmPassword">
        <span>Confirm new password</span>
      </label>
      <input type="password" name="" placeholder="Confirm new password" id="confirmPassword">
      <button @click="setUser" class="w-40 bg-padua-300 rounded py-2 px-3 text-white antialiased font-bold my-5 focus:outline-none hover:bg-padua-600" type="submit">Update profile</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      email: '',
      newPassword: '',
      ConfirmPassword: '',
      created_at: null
    }
  },
  methods: {
    getUser: function () {
      const auth = {
        headers: {
          token: localStorage.getItem('token')
        }
      }
      this.axios.get('http://localhost:3013/api/v1/auth/user', auth)
        .then((res) => {
          this.username = res.data.user.username
          this.email = res.data.user.email
          this.created_at = res.data.user.created_at
        }).catch(err => {
          console.log(err)
        })
    },
    setUser: function () {
      this.axios({
        method: 'post',
        url: 'http://localhost:3013/api/v1/auth/user',
        data: {
          username: this.username,
          email: this.email,
          password: this.newPassword
        },
        headers: {
          token: localStorage.getItem('token')
        }
      }).then((res) => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getUser()
  }
}

</script>

<style scoped>
.profile>label>span {
  @apply block text-gray-700
}
.profile>label {
  @apply
}
.profile>input {
  @apply py-2 px-3 rounded w-full text-gray-800 bg-gray-200
}
</style>
