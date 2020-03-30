const Video = require('../models/Videos')
const config = require('./config/config')
const {google} = require('googleapis')


module.exports = (app) => {
    app.get('/videos', async (req, res) => {
        
        const videos = await Video.query().limit(15)
        
        res.json(videos)
    })

    app.post('/uploadVideo', async (req, res) => {
        const body = req.body
        const url = body.url
        const service = google.youtube('v3')
        service.videos.list({
            part: 'snippet',
            key: 'AIzaSyChRxSFCM9C5H1j_5SPyz54i-a4tE_Rvkc',
            id: 'q8m4Phc70qA'
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
}