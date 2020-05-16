<template>
  <v-app>
    <v-app-bar dark short app>
      <v-toolbar-title>SmashScene</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img @click="loginClicked" class="mx-0 cursor" contain src='./assets/twitter_sign_in.png' max-height=28 max-width=158></v-img>
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
  }),

  methods: {
    loginClicked: function () {
      console.log('yeet yeet')
    }
  }
}
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

  .cursor {
    cursor: pointer
  }

</style>
