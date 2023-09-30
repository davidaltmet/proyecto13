let botonesValor = document.querySelectorAll(".boton");
let inputText = document.querySelector(".datos");

// function agregarValor() {
//   botonesValor.forEach((boton) => {
//     boton.addEventListener("click", function () {
//       inputText.value += boton.textContent;
//     });
//   });
// }
function agregarValor() {
  for (let i = 0; i < botonesValor.length; i++) {
    botonesValor[i].addEventListener("click", function () {
      inputText.value += botonesValor[i].textContent;
    });
  }
}

agregarValor();

let botonReiniciar = document.querySelector(".reset");

function reiniciar() {
  botonReiniciar.addEventListener("click", function () {
    inputText.value = "";
  });
}
reiniciar();

let botonBorar = document.querySelector(".borrar");

function borrar() {
  botonBorar.addEventListener("click", function () {
    let valorActual = inputText.value;
    inputText.value = valorActual.slice(0, -1);
  });
}
borrar();

let botonCalcular = document.querySelector(".calcular");

function calculate() {
  botonCalcular.addEventListener("click", function () {
    try {
      let displayValue = inputText.value; // Obtiene el valor del campo de entrada
      let resultado = eval(displayValue); // Evalúa la expresión en displayValue

      inputText.value = resultado.toString(); // Muestra el resultado en el campo de entrada
    } catch (error) {
      inputText.value = "Error";
    }
  });
}
calculate();

function moveCircleToPosition(position) {
  const circleElement = document.querySelector(".circle");
  const newPosition = (position - 1) * 33 + "%"; // Assuming each number is 33.33% wide
  circleElement.style.left = newPosition;
}

let nums = document.querySelectorAll(".num");
let backgraundBody = document.querySelector(".body");
let theme = document.querySelector(".thme");

let contendorValores = document.querySelector(".valores");
let logo = document.querySelector(".logo");

function cambioCalculadora(
  backBody,
  theme,
  backInpText,
  contValor,
  logo,
  nums,
  backBodyCol,
  themeCol,
  backInpCol,
  backinpuco,
  contValorCol,
  logoCol,
  numsCol
) {
  backBody.style.backgroundColor = backBodyCol;
  theme.style.color = themeCol;
  backInpText.style.backgroundColor = backInpCol;
  backInpText.style.color = backinpuco;
  contValor.style.backgroundColor = contValorCol;
  logo.style.color = logoCol;
  for (let i = 0; i < nums.length; i++) {
    nums[i].style.color = numsCol;
  }
}

let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let num3 = document.querySelector(".num3");

num1.addEventListener("click", function () {
  cambioCalculadora(
    backgraundBody,
    theme,
    inputText,
    contendorValores,
    logo,
    nums,
    "hsl(222, 26%, 31%)",
    "white",
    "hsl(223, 31%, 20%)",
    "white",
    "hsl(223, 31%, 20%)",
    "white",
    "white"
  );
});

num2.addEventListener("click", function () {
  cambioCalculadora(
    backgraundBody,
    theme,
    inputText,
    contendorValores,
    logo,
    nums,
    " hsl(0, 0%, 93%)",
    "black",
    "white",
    "black",
    "hsl(0, 0%, 90%)",
    "black",
    "black"
  );
});
num3.addEventListener("click", function () {
  cambioCalculadora(
    backgraundBody,
    theme,
    inputText,
    contendorValores,
    logo,
    nums,
    " hsl(268, 75%, 9%)",
    "hsl(25, 98%, 40%)",
    " hsl(268, 71%, 12%)",
    "white",
    " hsl(268, 71%, 12%)",
    "hsl(25, 98%, 40%)",
    "hsl(25, 98%, 40%)"
  );
});
