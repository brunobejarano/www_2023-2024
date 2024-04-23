let total_sopar = 123;
let nombre_comensales = 9;
let result = total_sopar / nombre_comensales ;

console.log(" pago de cada uno " + result + "€");
document.getElementById("total").innerHTML = result.toFixed(2) ;