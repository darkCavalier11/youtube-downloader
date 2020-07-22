const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')
const app = express()

const quality_itag = {
    360: 134,
    480: 135,
    720: 136,
    1080: 137
}

app.get('/download', (req, res)=>{
    const url = req.query.url
    const quality = req.query.quality
    res.header("Content-Disposition", 'attachment;\  filename="Video.mp4');    
    ytdl(url, {format: 'mp4'}).pipe(res);
})
