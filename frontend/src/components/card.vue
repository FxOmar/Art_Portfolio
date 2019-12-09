<template>
  <div class="relative w-64">
    <div class="container">
      <div @mouseleave="isActived = false" @mouseenter="isActived = true" class="front" style="background-image: url(https://unsplash.it/508/508/)">
        <div v-if="isActived">
          <div class="overlay"></div>
          <div class="inner">
            <p>Sohanidd</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActived: false
    }
  }
}

</script>

<style scoped>
.front{
  background-size: cover;
  background-position: center;
  text-align: center;
  min-height: 280px;
  height: auto;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

.overlay::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  content: '';
  display: block;
  opacity: .6;
  background-color: #000;
}

.inner {
  top: 25%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  z-index: 2;
}

.front .inner p {
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.front .inner p:after {
  content: '';
  width: 4rem;
  height: 2px;
  position: absolute;
  background: #C6D4DF;
  display: block;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -.75rem;
}

.front .inner span {
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Montserrat';
  font-weight: 300;
}

</style>
