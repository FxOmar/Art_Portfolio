<template>
  <div class="modal z-20" v-show="value">
    <button type="button" @click.prevent="close" class="close-button focus:outline-none"><i class="fas fa-times"></i></button>
    <div class="modal-content">
      <slot name="modal-content">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    value: {
      required: true
    }
  },
  methods: {
    close () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.712);
    transform: scale(1.1);
}
.modal-content {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-x: auto;
}
.close-button {
    position: absolute;
    top: 3.5rem;
    right: 6rem;
    font-size: 20px;
    cursor: pointer;
    color: white;
}
.close-button:hover {
    color: seagreen;
}
.modal::-webkit-scrollbar {
  display: none;
}
</style>
