<template>
  <div class="">
    <div class="main-content">
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, exercitationem. Corrupti, nam sint. Saepe animi quasi, consectetur debitis minima sint odit doloremque fugiat ducimus ratione corporis ex rerum, iste at?</h1>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      username: '',
      email: '',
      created_at: null
    }
  },
  methods: {
    user: function () {
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
    }
  },
  mounted () {
    this.user()
  }
}

</script>

<style>

</style>
