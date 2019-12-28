<template>
  <div class="bg-white py-5 px-5 rounded shadow mx-16 my-16">
    <form @submit.prevent class="flex flex-col profile">
      <div class="mx-auto">
        <img class="w-40 rounded" :src="avatar_imgage" alt="">
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
      <input type="password" name="" v-model="password" placeholder="password" id="password" required>
      <label for="newPassword">
        <span>New Password</span>
      </label>
      <input type="password" name="" v-model="newPassword" placeholder="New Password" id="newPassword">
      <label for="confirmPassword">
        <span>Confirm new password</span>
      </label>
      <input type="password" name="" v-model="ConfirmPassword" placeholder="Confirm new password" id="confirmPassword" required>
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
      password: '',
      newPassword: '',
      ConfirmPassword: '',
      avatar_img: null,
      created_at: null
    }
  },
  computed: {
    avatar_imgage () {
      return require('../../assets/img/profile-picture.png')
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
        method: 'put',
        url: 'http://localhost:3013/api/v1/auth/user',
        data: {
          username: this.username,
          email: this.email,
          password: this.password,
          newPassword: this.newPassword,
          ConfirmPassword: this.ConfirmPassword
        },
        headers: {
          token: localStorage.getItem('token')
        }
      }).then((res) => {
        this.password = this.newPassword = this.ConfirmPassword = ''
        console.log(res)
      }).catch(err => {
        this.password = this.newPassword = this.ConfirmPassword = ''
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
  @apply mt-2
}
.profile>input {
  @apply py-2 px-3 rounded w-full text-gray-800 bg-gray-200
}
</style>
