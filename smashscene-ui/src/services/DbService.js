import Api from './Api'

export default {
  getVideos () {
    return Api().get('videos')
  },

  uploadVideo (uploadURL, userId) {
    return Api().post('uploadVideo', {
      uploadURL: uploadURL,
      userId: userId
    })
  }
}
