// countdown.js

var countdownDate = new Date();
countdownDate.setSeconds(countdownDate.getSeconds() + 30);

function updateCountdown() {
  var now = new Date().getTime();
  var distance = countdownDate - now;
  
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("countdown").innerHTML = "Geri sayım: " + seconds + " saniye";
  
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "Süre doldu!";
  }
}

var interval = setInterval(updateCountdown, 1000);
