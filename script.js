$("#audio").bind('pause', function (e) {
    console.log(e)
    
    console.log("stopping!");
    var audio = document.getElementsByTagName('audio')[0];
    audio.pause();
    audio.currentTime = 0;
    e.preventDefualt
});
