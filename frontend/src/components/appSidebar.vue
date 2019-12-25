<template>
    <nav class=" py-5 bg-white">
      <div class="">
        <ul class="list-reset px-2 text-center md:text-left">
          <li class="text-gray-800 py-1 px-5 mb-1 antialiased hover:bg-gray-200 hover:text-gray-800 rounded-lg">
            <router-link to="/dashboard/posts"><i class="far fa-edit"></i> Posts</router-link>
          </li>
          <li class="text-gray-800 py-1 px-5 antialiased hover:bg-gray-200 hover:text-gray-800 rounded-lg">
            <router-link to="/dashboard/pages"><i class="fas fa-poll-h"></i> Pages</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {

}

</script>

<style>

</style>
