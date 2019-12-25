<template>
  <div class="my-5">
    <header class="w-full px-8 py-3 flex justify-between items-center mb-5 sticky top-0  canvas-header--sticky" style="background: #f6f6f6;">
        <h1 class="text-3xl text-gray-700 font-bold antialiased">Pages</h1>
        <router-link to="/user/new" class="bg-padua-300 text-white py-2 px-2 rounded focus:outline-none hover:bg-padua-500">New page</router-link>
    </header>
    <section class="mx-8">
      <ol class="">
        <div class="flex px-3 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-xs">
            <div class="w-9/12">Title</div>
            <div class="w-24">Status</div>
            <div class="">LAST UPDATE</div>
        </div>
        <ul class="bg-white">
            <a v-for="i in 9" :key="i" href="#">
                <li class="flex w-full hover:bg-gray-100">
                    <div class="w-9/12">Alfreds Futterkiste</div>
                    <div class="w-24"><span class="bg-gray-300 py-1 px-1 rounded text-sm text-gray-600 font-bold">Published</span></div>
                    <div class=" antialiased text-sm text-gray-600">3 hour ago</div>
                </li>
            </a>
        </ul>
    </ol>
    </section>
  </div>
</template>

<script>
export default {

}

</script>

<style scoped>
ol {
    @apply border-collapse w-full shadow rounded-lg
}

li {
    @apply border-t text-gray-800 py-6 px-4
}
</style>
