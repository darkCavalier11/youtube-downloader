const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('./public'))

const quality_itag = {
    360: 134,
    480: 135,
    720: 136,
    1080: 137
}

app.get('/', (req, res)=>{
    res.render('index.html')
})

app.get('/download', async(req, res)=>{
    const url = req.query.url
    const quality = req.query.quality
    try{
        const data = await ytdl.getBasicInfo(url)
        res.header("Content-Disposition", `attachment;\  filename=${data.videoDetails.title}.mp4`)
        ytdl(url, {quality: quality_itag[quality]}).pipe(res)
    }
    catch (err){
        res.status(400).send({
            error: err.message
        })
    }
})

app.listen(PORT, ()=>{
    console.log('@ port' + PORT)
})