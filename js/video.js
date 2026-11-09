/* Crazy Cake · página de video
   Convierte el enlace de config.js (youtube.com/watch?v=... o youtu.be/...) en el video incrustado. */

var idVideo = (CONFIG.videoUrl.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/) || [])[1];
if (idVideo) {
  document.getElementById("video-frame").src = "https://www.youtube.com/embed/" + idVideo;
}
