var audio = $('audio')[0];

$(document).on("click", "button", function() {
   (audio.paused) ? audio.play() : audio.pause();
   currentTime = 0;
   $("button").toggle();
});




