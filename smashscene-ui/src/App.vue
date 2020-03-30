<template>
  <v-app>
    <v-app-bar dark short app>
      <v-toolbar-title>SmashScene</v-toolbar-title>
    </v-app-bar>
    <v-content class="grey lighten-3">
      <div class="main elevation-1">
        <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
// ++++++++++++++++++++++++++++++++++++++++++++++++++++ BACKGROUND COLOR
// import VideoView from './views/VideoView'

export default {
  name: 'App',

  data: () => ({
    //
  })
}

// <template>
//   <v-app>
//     <div class="main">
//       <div>
//         <v-app-bar dark flat>
//           <v-toolbar-title>SmashScene</v-toolbar-title>
//         </v-app-bar>
//       </div>

//       <div class="main-content">
//         <router-view></router-view>
//       </div>

//     </div>
//   </v-app>
// </template>
</script>

<style>
  .side {
    background-color: whitesmoke;
    height: 100%;
  }

  .main {
    height: 100%;
    width: 80%;
    background-color: white;
    margin: 0 auto;
  }

</style>
