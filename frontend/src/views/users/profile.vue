<template>

  <div>
    <!--divider-->
    <hr class="bg-gray-300 my-12">

    <!--Title-->
    <h2 class="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Section 2</h2>

    <!--Card-->
    <div id='section2' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

      <form>

        <div class="md:flex mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
              Text Field
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="form-input block w-full focus:outline-none border p-3 rounded" type="text" value="">
            <p class="py-2 text-sm text-gray-600">add notes about populating the field</p>
          </div>
        </div>

        <div class="md:flex mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
              Drop down field
            </label>
          </div>
          <div class="md:w-2/3">
            <select name="" class="form-select block w-full focus:bg-white" id="my-select">
              <option value="Default">Default</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>

            <p class="py-2 text-sm text-gray-600">add notes about populating the field</p>
          </div>
        </div>

        <div class="md:flex mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
              Text Area
            </label>
          </div>
          <div class="md:w-2/3">
            <textarea class="form-textarea block w-full focus:bg-white" id="my-textarea" value="" rows="8"></textarea>
            <p class="py-2 text-sm text-gray-600">add notes about populating the field</p>
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button">
              Save
            </button>
          </div>
        </div>
      </form>

    </div>
    <!--/Card-->

    <!--divider-->
    <hr class="bg-gray-300 my-12">
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
