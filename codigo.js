var date = new Date();
let hora =  date.getHours();
let min = date.getMinutes();
let seg = date.getSeconds();

const segundos = document.getElementById("segundos");

setInterval( function(){
    const date = new Date();  
    let seg = date.getSeconds(); 
    segundos.innerText = seg.toString().padStart(2, '0');
}, 1000);

document.getElementById("minutos").innerText = min.toString().padStart(2, '0');
document.getElementById("horas").innerText = hora.toString().padStart(2, '0');
