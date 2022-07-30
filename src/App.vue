<template>
  <div id="app" class="h-full">
    <router-view class="h-full"/>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar";
import {mapMutations} from "vuex";

export default {
  name: 'App',
  components: {
    Navbar
  },
  mounted() {
    let user = JSON.parse(localStorage.user)
    this.storeUser(user)
  },
  methods: {
    ...mapMutations(['storeUser'])
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
