<template>
  <main>
    <div class="container lg:mx-auto w-full my-10">
      <div class="">
        <div class="flex flex-col flex-wrap items-center">
          <header class="header">
            <hr class="border-2 border-padua-400 w-20 inline-block mb-4">
            <h1>Single Travel: Tips for Going Solo</h1>
            <p>Posted on October 31, 2019 by Omar Chadidi | 16 comments</p>
          </header>
          <article class="content w-full lg:w-10/12">
            <img :src="`${ background }`" alt="">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus accusantium repellat iste eveniet iure
              voluptas blanditiis neque, illum quibusdam facilis modi quae, voluptate culpa delectus aliquam in, commodi
              distinctio possimus.
            </p>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    background () {
      return require('../assets/img/jonatan-pie-oDfB5yi376g-unsplash.jpg')
    }
  }
}
</script>

<style scoped>
  .header {
      @apply my-16 text-center
  }
  .header h1 {
    @apply text-4xl text-gray-800 antialiased font-bold mb-4
  }
  .header p {
      @apply text-gray-700 text-sm antialiased font-medium
  }
  .content {
      @apply shadow
  }
  .content img{
      @apply h-full w-full rounded-t
  }
  .content p {
      @apply p-10 antialiased text-gray-800 font-normal
  }

</style>
