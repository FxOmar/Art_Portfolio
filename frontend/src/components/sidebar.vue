<template>
    <div class="container bg-gray-400 shadow-lg w-56 h-screen">
        <div class="px-6">
            <div class="flex justify-center my-10">
                <!-- <img src="" alt=""> -->
                <h1 class="text-4xl antialiased font-extrabold text-gray-800">
                    <router-link to="/">Logo</router-link>
                </h1>
            </div>
            <div class="flex justify-center my-10">
                <ul class="nav">
                    <li>
                        <router-link to="#">Gellary +</router-link>
                    </li>
                    <li>
                        <router-link to="#">Gellary +</router-link>
                    </li>
                </ul>
            </div>
            <div class="social-media flex justify-center">
                <a href="#"><i class="fab fa-dribbble"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
            <div class="">
                <p>Made with <i class="fas fa-heart"></i> & <i class="fab fa-vuejs"></i></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.nav li:hover{
    @apply text-red-700
}
.social-media a{
    @apply p-5
}
.social-media a:hover{
    @apply text-red-700
}
</style>
