const fs = require('fs');
const ytdl = require('ytdl-core');
 
const info = async function(){
  const data = await ytdl.getBasicInfo('https://www.youtube.com/watch?v=7JJfJgyHYwU')
  console.log(data.videoDetails.title)
}
info()