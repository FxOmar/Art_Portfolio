<template>
  <div class="home">
    <div>
        <carrousel>
          <swiper-slide v-for="post in data.posts" :key="post.id">
            <card :title="post.title" :image="post.feature_image" :url="post.slug" />
          </swiper-slide>
        </carrousel>
    </div>
    <!-- <div>
      <carrousel />
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import card from '@/components/card'
import carrousel from '@/components/carrousel'

export default {
  name: 'home',
  components: {
    carrousel,
    card
  },
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    getPosts () {
      this.axios.get('http://localhost:2368/ghost/api/v3/content/posts?key=34ab7a4a3d0d6c74fcd12bfd6e')
        .then((res) => {
          this.data = res.data
          this.data.posts.forEach(post => {
            console.log(post.title)
          })
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.home{
  @apply py-10 px-6 overflow-hidden
}
</style>
