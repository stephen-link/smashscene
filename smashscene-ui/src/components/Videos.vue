<template>
    <button @click="getVideos">Get Videos</button>
</template>

<script>
import DbService from '../services/DbService.js'

export default {
  methods: {
    async getVideos () {
      const res = await DbService.getVideos()
      console.log(res.data)
    }
  }
}
</script>
