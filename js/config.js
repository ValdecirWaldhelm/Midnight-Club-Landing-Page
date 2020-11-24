
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

var sound = document.getElementById("myVideo");
var btnsound = document.getElementById("soundBtn");

function myFunctionvideo() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else{
    video.pause();
    btn.innerHTML = "Play";
  }
}

function enableMute(){
  video.muted = true;
}

function disableMute(){
  video.muted = false;
}


myFunction()

enableMute()

disableMute()

