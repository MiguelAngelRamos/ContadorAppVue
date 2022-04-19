<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <Counter title="Mi contador" :start="5"/> -->
  <Counter :start="5"/>
</template>

<script>

import Counter from '@/components/Counter.vue';
export default {
  name: 'App',
  components: {
    Counter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
