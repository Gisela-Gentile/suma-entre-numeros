let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese un número";
rotulo2.innerHTML = "Ingrese otro número";

btnEnviar.addEventListener("click", () => {
  let num1: number = Number(dato1.value);
  let num2: number = Number(dato2.value);

  let suma: number = 0;
  let numPrimero: number = 0;
  let numSegundo: number = 0;

  if (num1 > num2) {
    numPrimero = num2;
    numSegundo = num1;
  } else {
    numPrimero = num1;
    numSegundo = num2;
  }
  let i: number = numPrimero;

  while (i <= numSegundo) {
    suma += i++;
  }
  console.log("La suma total es: " + suma);
});
