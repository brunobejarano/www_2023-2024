function concatenar() {

    let cadena1 = document.getElementById("u-l-cad1").value;
    let cadena2 = document.getElementById("u-l-cad2").value;


let resultado = cadena1 + cadena2;

document.getElementById("result-u-l").innerHTML = resultado;

}

function longitud() {

    let cadena1 = document.getElementById("u-r-cad1").value;
  
    document.getElementById("u-r-result").innerHTML = cadena1.length
    
    let resultado = cadena1;

document.getElementById("u-r-result").innerHTML = result;

}

function remplazar()  {

    let cadena1 = document.getElementById("d-l-cad1").value;
    let cadena2 = document.getElementById("d-l-cad2").value;
    let cadena3 = document.getElementById("d-l-cad3").value;

    console.log(cadena1.replace(cadena2, cadena3))

document.getElementById("result-d-l").innerHTML = (cadena1.replace(cadena2, cadena3)) ;

}

function dividir() {

    let cadena1 = document.getElementById("d-r-cad1").value;
    let cadena2 = document.getElementById("d-r-cad2").value;

    document.getElementById("result-d-r").innerHTML = (cadena1.split(cadena2))

}