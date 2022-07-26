/* PRIMER DESAFÍO ENTREGABLE - PABLO DEMARTINI

EL EJERCICIO PREGUNTA NOMBRE COMPLETO - FECHA NAC - MES NAC - AÑO NAC
(NO SE COMO CALCULAR LA EDAD PARA LOS QUE AL DIA DE LA FECHA NO CUMPLIERON AÑOS.)
DEVUELVE NOMBRE COMPLETO - EDAD - SIGNO DEL ZODIACO.*/

const anioActual = 2022;

validacion()

function validacion(){
    let nombreCompleto = ""
    let diaNac = ""
    let mesNac = ""
    let anioNac = ""


    do {
        nombreCompleto = prompt("Ingrese su nombre y apellido");
        diaNac = parseInt(prompt("Ingrese dia de nacimento..."));
        mesNac = parseInt(prompt("Ingrese mes de nacimento..."));
        anioNac = parseInt(prompt("Ingrese anio de nacimento..."));   
    }while(nombreCompleto.trim() == "" || isNaN(diaNac) || isNaN(mesNac) || isNaN(anioNac));

    const signo = signoZodiaco(diaNac, mesNac)
    const edad = anioActual-anioNac;

    alert(`Su nombre es ${nombreCompleto}, su edad es ${edad} y su signo zodiaco es ${signo}`);
}

function signoZodiaco(diaNac, mesNac){

    let signo = ""

    if ((diaNac >=23 && mesNac ==12) || (diaNac <=20 && mesNac ==1))
    signo = "Capricornio";

    if ((diaNac >=21 && mesNac ==1) || (diaNac <= 19 && mesNac ==2))
    signo = "Acuario";

    if ((diaNac >=20 && mesNac ==2) || (diaNac <=20 && mesNac ==3))
    signo = "Piscis";

    if ((diaNac >=21 && mesNac ==3) || (diaNac <=20 && mesNac ==4))
    signo = "Aries";

    if ((diaNac >=21 && mesNac ==4) || (diaNac <=21 && mesNac ==5))
    signo = "Tauro";

    if ((diaNac >=22 && mesNac ==5) || (diaNac <=21 && mesNac ==6))
    signo = "Geminis";

    if ((diaNac >=22 && mesNac ==6) || (diaNac <= 23 && mesNac ==7))
    signo = "Cancer";

    if ((diaNac >=24 && mesNac ==7) || (diaNac <=23 && mesNac ==8))
    signo = "Leo";

    if ((diaNac >=24 && mesNac ==8) || (diaNac <=23 && mesNac ==9))
    signo = "Virgo";

    if ((diaNac >=24 && mesNac ==9) || (diaNac <=23 && mesNac ==10))
    signo = "Libra";

    if ((diaNac >=24 && mesNac ==10) || (diaNac <=22 && mesNac ==11))
    signo = "Escorpio";

    if ((diaNac >=23 && mesNac ==11) || (diaNac <=22 && mesNac ==12))
    signo = "Sagitario";

    return signo
}