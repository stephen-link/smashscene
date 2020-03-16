import Api from './Api'

export default {
  getVideos () {
    return Api().get('videos')
  }
}
