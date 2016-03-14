// your code here:
var letItRun = document.getElementById('start');
var title  = document.getElementById('timer');
var reset = document.getElementById('reset');
var pauseIt = document.getElementById('pause');
var timerID;
var seconds=0;
var timerOff = true

letItRun.addEventListener('click',function(){
  if(timerOff) {
    timerID =window.setInterval(updateTime, 100);
    console.log("hi")
    timerOff = false;
  }
});



reset.addEventListener('click',function(){
    clearInterval(timerID);
    seconds = 0;
    title.innerHTML = "Stop Watch"
    timerOff = true
});

pauseIt.addEventListener('click',function(){
    clearInterval(timerID);
    timerOff = true
});

function updateTime(){
  seconds +=0.1000
  title.innerHTML = ("Time Elapsed " + seconds.toPrecision(2));
}

