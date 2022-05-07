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
  let i: number = num1;
  let suma: number = 0;
  while (i <= num2) {
    suma += i++;
  }
  console.log("La suma total es: " + suma);
});
