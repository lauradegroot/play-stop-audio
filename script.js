var audio = $('audio')[0];

$("button").click(function () {
   (audio.paused) ? audio.play() : audio.pause();
   currentTime = 0;
   $("button").toggle();
});




