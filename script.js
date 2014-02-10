var audio = document.getElementsByTagName('audio')[0];

$("#stopBtn").click(function () {
    audio.pause();
    audio.currentTime = 0;
    $("#stopBtn").hide();
    $("#playBtn").show();
});

$("#playBtn").click(function () {    
    audio.play();  
    $("#playBtn").hide();
    $("#stopBtn").show();
});
