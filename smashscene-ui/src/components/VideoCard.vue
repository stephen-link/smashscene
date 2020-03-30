<template>
  <v-card hover @click="cardClicked">
    <v-img
      :src="post.thumbnailUrl" width="320px" height="180px">
    </v-img>
    <v-card-title> {{ post.title }} </v-card-title>
    <v-card-subtitle class="pb-0"> created by: {{ post.creatorName }} </v-card-subtitle>
    <v-card-text> uploaded by: {{ post.creatorName }} </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'VideoCard',

  data () {
    return {
    }
  },

  methods: {
    cardClicked: function () {
      console.log('clicked')
      window.open(this.post.url, '_blank')
    }
  },

  // Use v-bind="post" in VideoView to send all properties of post as separate props
  props: {
    post: Object
  }

}
</script>
