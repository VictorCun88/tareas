// Variables y estructuras de control

// Crear una variable llamada mes y que tenga asignado por defecto el valor 10.

let mes = 10;
console.log(mes);


// Crear un programa que verifique si el valor de mes está entre 12 y 2 (12, 1 o 2), entonces que imprima en pantalla “es invierno”, si el valor de mes está entre 3 y 5, que imprima en pantalla “es primavera”, si el valor de mes se encuentra entre 6 y 8 que imprima en pantalla “es verano” y si se encuentra entre 9 y 11 que imprima en pantalla “es otoño”.

let mes = 11;

if (mes <=2){
  console.log("Es Invierno");
}else if (mes <=5){
  console.log("Es primavera");
}else if (mes <=8){
  console.log("Es verano");
}else if (mes<=11){
  console.log("Es otoño");
}else{
  console.log("Es Invierno");
}

// Al finalizar debe imprimir en pantalla un mensaje que indique su número de carné y su nombre completo.

let carne = 22000146;
let nombre = "Victor Manuel Cun Pichiya";

console.log("Numero de Carné " + carne);
console.log("Mi nombre es " + nombre)