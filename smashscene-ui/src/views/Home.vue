<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Videos/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Videos from '@/components/Videos.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Videos
  }
}
</script>
