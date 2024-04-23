function analizar() {
    
    let nota = document.getElementById("nota_numero").value;
    let frase;
    if (nota > 5){
     
        frase = "aprobado que buena"; } 


else {
         frase = "espabila crack"; }
 
    
    document.getElementById("resultado").innerHTML = frase;
    document.getElementById("resultado").style.color = "black";

}