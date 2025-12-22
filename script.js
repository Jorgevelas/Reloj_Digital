
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  
  
  hours = (hours % 12 === 0 ? 12 : hours % 12);
  hours = (hours < 10 ? "0" + hours : hours);
  minutes = (minutes < 10 ? "0" + minutes : minutes);
  seconds = (seconds < 10 ? "0" + seconds : seconds);
  
  hrs.innerHTML = hours;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
}, 1000);

