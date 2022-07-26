/* PRIMER DESAFÍO ENTREGABLE - PABLO DEMARTINI

EL EJERCICIO PREGUNTA NOMBRE COMPLETO - FECHA NAC - MES NAC - AÑO NAC
(NO SE COMO CALCULAR LA EDAD PARA LOS QUE AL DIA DE LA FECHA NO CUMPLIERON AÑOS.)
DEVUELVE NOMBRE COMPLETO - EDAD - SIGNO DEL ZODIACO.*/

let nombreCompleto = prompt("Ingrese su nombre y apellido");
let fechaUno = parseInt(prompt("Ingrese dia de nacimento..."));
let fechaDos = parseInt(prompt("Ingrese numero de mes de nacimiento..."));
let anio_Nac = parseInt(prompt("ingrese año de nacimento"));
const anio_Actual = 2022;


if(nombreCompleto ==""){
    prompt("Ingrese su nombre y apellido");
}

else {
    alert("Nombre: " +nombreCompleto);
}

if (isNaN(anio_Nac)) {
    alert ("No ingresaste un numero en año de nacimiento");
}

else{
	let edad = anio_Actual - anio_Nac
	alert ("Usted tiene: " + edad + " años de edad...");
}

while(!fechaUno && !fechaDos){
    fechaUno = parseInt(prompt("Ingrese dia de nacimento..."));
    fechaDos = parseInt(prompt("Ingrese mes de nacimento..."));
}

if((fechaUno >=23) && (fechaDos ==12) || (fechaUno <=20) && (fechaDos ==1)){
    alert("Su signo es: Capricornio");
}

else if((fechaUno >=21) && (fechaDos ==1) || (fechaUno <= 19) && (fechaDos ==2)){
    alert("Su signo es: Acuario");
}

else if((fechaUno >=20) && (fechaDos ==2) || (fechaUno <=20) && (fechaDos ==3)){
    alert("Su signo es: Piscis");
}

else if((fechaUno >=21) && (fechaDos ==3) || (fechaUno <=20) && (fechaDos ==4)){
    alert("Su signo es: Aries");
}

else if((fechaUno >=21) && (fechaDos ==4) || (fechaUno <=21) && (fechaDos ==5)){
    alert("Su signo es: Tauro");
}

else if((fechaUno >=22) && (fechaDos ==5) || (fechaUno <=21) && (fechaDos ==6)){
    alert("Su signo es: Géminis");
}

else if((fechaUno >=22) && (fechaDos ==6) || (fechaUno <= 23) && (fechaDos ==7)){
    alert("Su signo es: Cancer");
}

else if((fechaUno >=24) && (fechaDos ==7) || (fechaUno <=23) && (fechaDos ==8)){
    alert("Su signo es: Leo");
}

else if((fechaUno >=24) && (fechaDos ==8) || (fechaUno <=23) && (fechaDos ==9)){
    alert("Su signo es: Virgo");
}

else if((fechaUno >=24) && (fechaDos ==9) || (fechaUno <=23) && (fechaDos ==10)){
    alert("Su signo es: Libra");
}

else if((fechaUno >=24) && (fechaDos ==10) || (fechaUno <=22) && (fechaDos ==11)){
    alert("Su signo es: Escorpio");
}

else if((fechaUno >=23) && (fechaDos ==11) || (fechaUno <=22) && (fechaDos ==12)){
    alert("Su signo es: Sagitario");
}
