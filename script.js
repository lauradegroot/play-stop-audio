$("#stopBtn").click(function () {
    console.log("stopping!");
    var audio = document.getElementsByTagName('audio')[0];
    audio.pause();
    audio.currentTime = 0;
    $("#stopBtn").hide();
    $("#playBtn").show();
});

$("#playBtn").click(function () {
    console.log("stopping!");
    var audio = document.getElementsByTagName('audio')[0];
    audio.play();
    $("#stopBtn").show();
    $("#playBtn").hide();
});
