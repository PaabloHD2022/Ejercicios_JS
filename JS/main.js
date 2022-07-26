/* PRIMER DESAFÍO ENTREGABLE - PABLO DEMARTINI

EL EJERCICIO PREGUNTA NOMBRE COMPLETO - FECHA NAC - MES NAC - AÑO NAC
(NO SE COMO CALCULAR LA EDAD PARA LOS QUE AL DIA DE LA FECHA NO CUMPLIERON AÑOS.)
DEVUELVE NOMBRE COMPLETO - EDAD - SIGNO DEL ZODIACO.*/

/*let nombreCompleto = prompt("Ingrese su nombre y apellido");
let diaNac = parseInt(prompt("Ingrese dia de nacimento..."));
let mesNac = parseInt(prompt("Ingrese numero de mes de nacimiento..."));
let anioNac = parseInt(prompt("ingrese año de nacimento"));*/
const anioActual = 2022;
let diaNac = ""
let mesNac = ""
let anioNac = ""

validacion()
signoZodiaco(diaNac, mesNac)

function validacion(){
    let i = 0;
    while(i<4){

        console.log(i)

        do {
            nombreCompleto = prompt("Ingrese su nombre y apellido");
        }while(nombreCompleto!="")

        i++
        diaNac = parseInt(prompt("Ingrese dia de nacimento..."));
        mesNac = parseInt(prompt("Ingrese mes de nacimento..."));

        

    }
}

function signoZodiaco(diaNac, mesNac){

    switch (diaNac){

        case 
            (((diaNac >=23) && (mesNac ==12)) || ((diaNac <=20) && (mesNac ==1))):
            alert("Su signo es: Capricornio");
            break;


        case
            ((diaNac >=21) && (mesNac ==1) || (diaNac <= 19) && (mesNac ==2)):
            alert("Su signo es: Acuario");
            break;


        case
            ((diaNac >=20) && (mesNac ==2) || (diaNac <=20) && (mesNac ==3)):
            alert("Su signo es: Piscis");
            break;

        case
            ((diaNac >=21) && (mesNac ==3) || (diaNac <=20) && (mesNac ==4)):
            alert("Su signo es: Aries");
            break;


        case
            ((diaNac >=21) && (mesNac ==4) || (diaNac <=21) && (mesNac ==5)):
            alert("Su signo es: Tauro");
            break;


        case
            ((diaNac >=22) && (mesNac ==5) || (diaNac <=21) && (mesNac ==6)):
            alert("Su signo es: Géminis");
            break;


        case    
            ((diaNac >=22) && (mesNac ==6) || (diaNac <= 23) && (mesNac ==7)):
            alert("Su signo es: Cancer");
            break;


        case
            ((diaNac >=24) && (mesNac ==7) || (diaNac <=23) && (mesNac ==8)):
            alert("Su signo es: Leo");
            break;


        case
            ((diaNac >=24) && (mesNac ==8) || (diaNac <=23) && (mesNac ==9)):
            alert("Su signo es: Virgo");
            break;


        case
            ((diaNac >=24) && (mesNac ==9) || (diaNac <=23) && (mesNac ==10)):
            alert("Su signo es: Libra");
            break;


        case
            ((diaNac >=24) && (mesNac ==10) || (diaNac <=22) && (mesNac ==11)):
            alert("Su signo es: Escorpio");
            break;


        case
            ((diaNac >=23) && (mesNac ==11) || (diaNac <=22) && (mesNac ==12)):
            alert("Su signo es: Sagitario");
            break;

    }
}
