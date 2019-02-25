<template>
  <div id="app">
    <HelloWorld msg="☺☺Search Data From Given Table☺☺"/>
  </div>
</template>

<script>
import HelloWorld from './components/FirstPage.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:brown;
  margin-top: 60px;
}
</style>
