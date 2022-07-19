//DESAFÍO COMPLEMENTARIO

let nombreCompleto = prompt("Ingrese su nombre");
let apellidoCompleto = prompt("Ingrese su apellido");
let fechaUno = parseInt(prompt("Ingrese dia de nacimento..."));
let fechaDos = parseInt(prompt("Ingrese numero de mes de nacimiento..."));

if ((nombreCompleto !="") && (apellidoCompleto !="")){

    alert("Nombre: " +nombreCompleto + "\nApellido: " +apellidoCompleto )}

else{
    alert("ingrese nombre y apellido por favor...");
}

if ((isNaN(fechaUno)) && (isNaN(fechaDos))){
    alert("Ingrese numeros de fecha y mes de naciemiento por favor...")
}

else if((fechaUno >=21) && (fechaDos ==3) || (fechaUno <=20) && (fechaDos ==4)){
    alert("Tu signo es: Aries");
}

else if((fechaUno >=21) && (fechaDos ==4) || (fechaUno <=21) && (fechaDos ==5)){
    alert("Tu signo es: Tauro");
}

else if((fechaUno >=22) && (fechaDos ==5) || (fechaUno <=21) && (fechaDos ==6)){
    alert("Tu signo es: Géminis");
}

else if((fechaUno >=22) && (fechaDos ==6) || (fechaUno <= 23) && (fechaDos ==7)){
    alert("Tu signo es: Cancer");
}

else if((fechaUno >=24) && (fechaDos ==7) || (fechaUno <=23) && (fechaDos ==8)){
    alert("Tu signo es: Leo");
}

else if((fechaUno >=24) && (fechaDos ==8) || (fechaUno <=23) && (fechaDos ==9)){
    alert("Tu signo es: Virgo");
}

else if((fechaUno >=24) && (fechaDos ==9) || (fechaUno <=23) && (fechaDos ==10)){
    alert("Tu signo es: Libra");
}

else if((fechaUno >=24) && (fechaDos ==10) || (fechaUno <=22) && (fechaDos ==11)){
    alert("Tu signo es: Escorpio");
}

else if((fechaUno >=23) && (fechaDos ==11) || (fechaUno <=22) && (fechaDos ==12)){
    alert("Tu signo es: Sagitario");
}

else if((fechaUno >=23) && (fechaDos ==12) || (fechaUno <=20) && (fechaDos ==1)){
    alert("Tu signo es: Capricornio");
}

else if((fechaUno >=21) && (fechaDos ==1) || (fechaUno <= 19) && (fechaDos ==2)){
    alert("Tu signo es: Acuario");
}

else if((fechaUno >=20) && (fechaDos ==2) || (fechaUno <=20) && (fechaDos ==3)){
    alert("Tu signo es: Piscis");
}