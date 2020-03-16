<template>
  <v-app>
    <div class="main">
      <div>
        <v-app-bar dark flat>
          <v-toolbar-title>SmashScene</v-toolbar-title>
        </v-app-bar>
      </div>

      <div class="main-content">
        <router-view></router-view>
      </div>

    </div>
  </v-app>
</template>

<script>
// import VideoView from './views/VideoView'

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>
  .main {
    background-color: whitesmoke;
    height: 100%;
  }

  .main-content {
    height: 100%;
    width: 80%;
    background-color: white;
    display:grid;
  }

</style>
