const Video = require('../models/Videos')
const config = require('./config/config')
const {google} = require('googleapis')
const LoginWithTwitter = require('login-with-twitter')

const tw = new LoginWithTwitter({
    consumerKey: 'HocKX3yMjU7AkqLkZtcXhYjnP',
    consumerSecret: '6TBFCI0zlba2t6fATDRy2u7OJH6dovvRh3V88c3kK2aKgKJN5G',
    callbackUrl: 'https://example.com/twitter/callback'
  })

module.exports = (app) => {
    app.get('/videos', async (req, res) => {
        
        const videos = await Video.query().limit(15)
        
        res.json(videos)
    })

    app.post('/uploadVideo', async (req, res) => {
        const body = req.body
        console.log(body)
        console.log(typeof body)
        const url = body.uploadURL
        const service = google.youtube('v3')

        var video_id = url.split('v=')[1];
        const ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }

        console.log('video id: ' + video_id)

        service.videos.list({
            part: 'snippet',
            key: 'AIzaSyChRxSFCM9C5H1j_5SPyz54i-a4tE_Rvkc',
            id: video_id
        }, async function (err, response) {
            if (err) {
                console.log(err.message)
                return
            }
            
            var today = new Date();
            var date = today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate();

            const snippet = response.data.items[0].snippet
            const title = snippet.title
            const channelTitle = snippet.channelTitle
            const thumbnailURL = snippet.thumbnails.medium.url
            const reply = {
                title: title,
                channelTitle: channelTitle,
                thumbnailURL: thumbnailURL
            }

            const newVid = await Video.query().insert({ 
                postId: '2',
                userId: '112',
                url: url,
                postTimestamp: date,
                upvotes: 0,
                score: 0,
                thumbnailUrl: thumbnailURL,
                title: title,
                creatorName: channelTitle
            });
            console.log(newVid)
            const vids = response.data.items
            // insert in to db
            res.json(reply)

        })
    })

    app.get('/twitter', (req, res) => {
        tw.login((err, tokenSecret, url) => {
          if (err) {
            // Handle the error your way
          }
          
          // Save the OAuth token secret for use in your /twitter/callback route
          req.session.tokenSecret = tokenSecret
          
          // Redirect to the /twitter/callback route, with the OAuth responses as query params
          req.redirect(url)
        })
      })

      app.get('/twitter/callback', (req, res) => {
        tw.callback({
          oauth_token: req.query.oauth_token,
          oauth_verifier: req.query.oauth_verifier
        }, req.session.tokenSecret, (err, user) => {
          if (err) {
            // Handle the error your way
          }
          
          // Delete the tokenSecret securely
          delete req.session.tokenSecret
          
          // The user object contains 4 key/value pairs, which
          // you should store and use as you need, e.g. with your
          // own calls to Twitter's API, or a Twitter API module
          // like `twitter` or `twit`.
          // user = {
          //   userId,
          //   userName,
          //   userToken,
          //   userTokenSecret
          // }
          req.session.user = user
          
          // Redirect to whatever route that can handle your new Twitter login user details!
          req.redirect('/')
        });
      });


}