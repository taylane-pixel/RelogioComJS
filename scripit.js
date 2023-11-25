// Selecinando os elementos
function updateClock() {
    const horasElement = document.querySelector(".horas");
    const minutosElement = document.querySelector(".minutos");
    const segundosElement = document.querySelector(".segundos");


    /*Para colocar a ahora atual e o minutos atual e isso é feito por
meio da DATA */

//acessando a data
const now = new Date();

// Convertera hora em string e dar um padStart 2 para nunca ficar com um digito só.

const horas = now.getHours().toString().padStart(2, "0");
const minutos = now.getMinutes().toString().padStart(2, "0");
const segundos = now.getSeconds().toString().padStart(2, "0");

horasElement.textContent = horas;
minutosElement.textContent = minutos;
segundosElement.textContent = segundos;

 Console.log(now, horas , segundos);

}
setInterval(updateClock, 1000);

