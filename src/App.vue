<template>
  <div class="container">
    <div class="block" :class="{animate: animatedBlog}"></div>
    <button @click="animateBlog">Animate</button>
  </div>
    <div class="container">
      <transition
          @before-enter="beforeEnter"
          @before-leave="beforeLeave"
          @enter="enter"
          @after-enter="afterEnter"
          @leave="leave"
          @after-leave="afterLeave">
      <p v-if="paraIsVisible">This is only sometimes visible</p>
      </transition>
      <button @click="toggleParagraph">Toggle Paragraph</button>
    </div>

    <div class="container">
      <transition  name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show users</button>
      <button @click="hideUsers" v-else>Hide users</button>
      </transition>
    </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p >This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animatedBlog: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible
    },

    showUsers() {
      this.usersAreVisible = true
    },
    hideUsers() {
      this.usersAreVisible =false
    },

    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlog() {
      this.animatedBlog = true
    },
    beforeEnter (el) {
      console.log('beforeEnter')
      console.log(el)
    },
    beforeLeave(el) {
      console.log('beforeLeave')
      console.log(el)
    },
    enter(el) {
      console.log('enter')
      console.log(el)
    },
    afterEnter(el) {
      console.log('afterEnter')
      console.log(el)
    },
    leave(el) {
      console.log('leave')
      console.log(el)
    },
    afterLeave(el) {
      console.log('afterLeave')
      console.log(el)
    },


  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.fade-button-enter-from,
.fade-button-leave-to{
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to
.fade-button-leave-from{
  opacity: 1
}


</style>