<template>

  <v-container fluid>
    <div class="header-div">
      <h2 class="heading">Top Videos</h2>
      <v-btn class="plus-icon" @click="overlay = !overlay" dark>Upload
        <v-icon right>mdi-plus</v-icon>
      </v-btn>
      <v-overlay :value="overlay">
        <v-form>
          <v-text-field
            v-model="uploadURL"
            label="YouTube URL">
            <v-icon right>mdi-clear</v-icon>
          </v-text-field >
          <v-btn @click="uploadVideo">Upload</v-btn>
          <v-btn color="primary" @click="overlay = false">Close</v-btn>
        </v-form>
      </v-overlay>
    </div>
    <v-row no-gutters class="justify-space-between">
      <v-col v-for="(post, index) in posts" :key=index class="mx-1 my-6 test-col">
        <VideoCard v-bind:post="post" class="test-col"></VideoCard>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>
import VideoCard from '../components/VideoCard'
import DbService from '../services/DbService.js'

export default {
  name: 'VideoView',

  components: { VideoCard },

  data: () => ({
    uploadURL: '',
    posts: [],
    overlay: false
  }),

  methods: {
    uploadVideo: async function () {
      const res = await DbService.uploadVideo(this.uploadURL, '2')
      this.getVideos()
      console.log(res.data)
    },

    getVideos: async function () {
      const res = await DbService.getVideos()
      this.posts = res.data
      console.log(this.posts)
    }
  },

  beforeMount: async function () {
    this.getVideos()
  }
}
</script>

<style>
  .test-col {
    width: 320px;
  }

  .heading {
    float: left;
  }

  .plus-icon {
    float: right;
  }

  .header-div {
    overflow: overlay;
  }
</style>
