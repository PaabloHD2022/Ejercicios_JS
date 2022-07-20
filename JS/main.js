//DESAFÍO COMPLEMENTARIO

let nombreCompleto = prompt("Ingrese su nombre y apellido");
let fechaUno = parseInt(prompt("Ingrese dia de nacimento..."));
let fechaDos = parseInt(prompt("Ingrese numero de mes de nacimiento..."));


if(nombreCompleto ==""){
    prompt("Ingrese su nombre y apellido");
}

else {
    alert("Nombre: " +nombreCompleto);
}

while(!fechaUno && !fechaDos){
    fechaUno = parseInt(prompt("Ingrese dia de nacimento..."));
    fechaDos = parseInt(prompt("Ingrese mes de nacimento..."));
}

if((fechaUno >=23) && (fechaDos ==12) || (fechaUno <=20) && (fechaDos ==1)){
    alert("Tu signo es: Capricornio");
}

if((fechaUno >=21) && (fechaDos ==1) || (fechaUno <= 19) && (fechaDos ==2)){
    alert("Tu signo es: Acuario");
}

if((fechaUno >=20) && (fechaDos ==2) || (fechaUno <=20) && (fechaDos ==3)){
    alert("Tu signo es: Piscis");
}

if((fechaUno >=21) && (fechaDos ==3) || (fechaUno <=20) && (fechaDos ==4)){
    alert("Tu signo es: Aries");
}

if((fechaUno >=21) && (fechaDos ==4) || (fechaUno <=21) && (fechaDos ==5)){
    alert("Tu signo es: Tauro");
}

if((fechaUno >=22) && (fechaDos ==5) || (fechaUno <=21) && (fechaDos ==6)){
    alert("Tu signo es: Géminis");
}

if((fechaUno >=22) && (fechaDos ==6) || (fechaUno <= 23) && (fechaDos ==7)){
    alert("Tu signo es: Cancer");
}

if((fechaUno >=24) && (fechaDos ==7) || (fechaUno <=23) && (fechaDos ==8)){
    alert("Tu signo es: Leo");
}

if((fechaUno >=24) && (fechaDos ==8) || (fechaUno <=23) && (fechaDos ==9)){
    alert("Tu signo es: Virgo");
}

if((fechaUno >=24) && (fechaDos ==9) || (fechaUno <=23) && (fechaDos ==10)){
    alert("Tu signo es: Libra");
}

if((fechaUno >=24) && (fechaDos ==10) || (fechaUno <=22) && (fechaDos ==11)){
    alert("Tu signo es: Escorpio");
}

if((fechaUno >=23) && (fechaDos ==11) || (fechaUno <=22) && (fechaDos ==12)){
    alert("Tu signo es: Sagitario");
}
