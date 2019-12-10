<template>
  <div class="flex w-screen h-full bg-chill bg-cover bg-center overflow-hidden relative" style="background-image: url(https://images.unsplash.com/photo-1536147210925-5cb7a7a4f9fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80)">
    <div class="overlay"></div>
    <div class="w-full flex opacity-75"><img src="../assets/img/2383848257.png" alt=""></div>
    <div class=" flex flex-col justify-center items-center text-center text-white absolute inset-0">
      <h1 class="font-bold text-2xl antialiased mb-1">Welcome to our Blog</h1>
      <p class=" antialiased font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint magnam earum tempore beatae nesciunt</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.overlay::before{
  content: ' ';
  background-color: theme('colors.chill');
  opacity: .5;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
