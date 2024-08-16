// Obtiene los elementos del DOM donde se mostrarán las horas, minutos y segundos
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// Función que se ejecuta cada segundo para actualizar el tiempo
setInterval(() => {
  // Obtiene la fecha y hora actual
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  
  // Formatea las horas, minutos y segundos para que siempre sean dos dígitos
  hours = (hours % 12 === 0 ? 12 : hours % 12);
  hours = (hours < 10 ? "0" + hours : hours);
  minutes = (minutes < 10 ? "0" + minutes : minutes);
  seconds = (seconds < 10 ? "0" + seconds : seconds);
  
  // Actualiza el contenido de los elementos del DOM con el nuevo tiempo
  hrs.innerHTML = hours;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
}, 1000);
