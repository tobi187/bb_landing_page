<template>
  <div class="bg-baby-image h-screen bg-cover bg-no-repeat">
    <MainNavbar msg="Welcome to Your Vue.js App"/>
  <div class="w-1/2 mx-20 mt-52">
    <MainBody />
  </div>
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from './components/Main-Navbar.vue'
import MainBody from './components/Main-Body.vue'
import MainFooter from './components/Main-Footer'

export default {
  name: 'App',
  components: {
    MainNavbar,
    MainBody,
    MainFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>
