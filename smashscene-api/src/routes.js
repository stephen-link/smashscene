const Video = require('../models/Videos')


module.exports = (app) => {
    app.get('/videos', async (req, res) => {
        
        const video = await Video.query().limit(15)
        
        res.json(video)
    })
}