const frasevalue = document.getElementById("frase_random");
const autorvalue = document.getElementById("autor_random");

const boton = document.querySelector("button");

fraseList = [
  { frase: "La forma de empezar es dejar de hablar y empezar a hacer.", autor: "Walt-Disney", numero: 1 },
  { frase: "La vida es lo que sucede cuando estás ocupado haciendo otros planes.", autor: "John Lennon", numero: 2 },
  { frase: "El futuro pertenece a aquellos que creen en la belleza de sus sueños.", autor: "Eleanor Roosevelt", numero: 3 },
  { frase: "Dime y lo olvido. Enséñame y lo recuerdo. Involucrarme y aprendo.", autor: "Benjamin Franklin", numero: 4 },
];

boton.addEventListener("click", cambiarFrase);
let numero = 0;
function cambiarFrase() {
  numero++;
  fraseList.forEach((frases) => {
    if (numero === frases.numero) {
      frason = frases.frase;
      autoraso = frases.autor;
      frasevalue.textContent = frason;
      autorvalue.textContent = autoraso;
      if (numero === 4) {
        numero = 0;
      }
    }
  });
}
