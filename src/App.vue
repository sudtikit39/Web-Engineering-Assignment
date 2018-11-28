

<template>

<v-app>

<Navbar />
  <v-content>

  <div id="app">
  <img alt="Vue logo" src="./assets/1234.png"width="640" height="5%" >
  <router-view>
  </router-view>

  </div>
  </v-content>





</v-app>



</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'app',
  components:{ Navbar},

}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}
</style>
