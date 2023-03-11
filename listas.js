//Listas

let listaI = document.getElementById("listaI");

arrayIngresos.forEach((nuevoIngreso) => {
  const liI = document.createElement("li");
  liI.innerHTML = `
<div class= "listas"><img class= "estiloLista" src="images/${nuevoIngreso.categoria}.png" alt="${nuevoIngreso.categoria}">
<p>Monto: $ ${nuevoIngreso.ingreso}, Categoría: ${nuevoIngreso.categoria}</p><button class="botonEliminar"><img class= "bote" id="eliminar${nuevoIngreso.id}" src="images/bote-de-basura.png" alt="eliminar"></button></div>
`;
  listaI.appendChild(liI);

  const elimino = document.getElementById(`eliminar${nuevoIngreso.id}`);
  elimino.addEventListener("click", () => {
    borrarItemI(nuevoIngreso.id);
  });
});

function mostrarItemI() {
  (listaI.innerHTML = ""),
    arrayIngresos.forEach((nuevoIngreso) => {
      const liI = document.createElement("li");
      liI.innerHTML = `
      <div class= "listas"><img class= "estiloLista" src="images/${nuevoIngreso.categoria}.png" alt="${nuevoIngreso.categoria}">
      <p>Monto: $ ${nuevoIngreso.ingreso}, Categoría: ${nuevoIngreso.categoria}</p><button class="botonEliminar"><img class= "bote" id="eliminar${nuevoIngreso.id}" src="images/bote-de-basura.png" alt="eliminar"></button></div>
      `;
      listaI.appendChild(liI);

      const elimino = document.getElementById(`eliminar${nuevoIngreso.id}`);
      elimino.addEventListener("click", () => {
        borrarItemI(nuevoIngreso.id);
      });
    });
}

function borrarItemI(id) {
  localStorage.getItem("listaIngresos");
  const item = arrayIngresos.find((el) => el.id == id);
  console.log(item);
  const indice = arrayIngresos.indexOf(item);
  arrayIngresos.splice(indice, 1);
  saldoFinal();
  mostrarItemI();
  localStorage.setItem("listaIngresos", JSON.stringify(arrayIngresos));
  Toastify({
    text: "Item eliminado",
    duration: 2000,
    gravity: "bottom",
    position: "right",
    style: {
      background: "#073B4C",
    },
  }).showToast();
}

let listaG = document.getElementById("listaG");

arrayGastos.forEach((nuevoGasto) => {
  const liG = document.createElement("li");
  liG.innerHTML = `
  <div class= "listas"><img class= "estiloLista" src="images/${nuevoGasto.categoria}.png" alt="${nuevoGasto.categoria}">
  <p>Monto: $ ${nuevoGasto.gasto}, Categoría: ${nuevoGasto.categoria}</p><button class="botonEliminar"><img class= "bote" id="eliminar${nuevoGasto.id}" src="images/bote-de-basura.png" alt="eliminar"></button></div>
  `;
  listaG.appendChild(liG);
  const elimino = document.getElementById(`eliminar${nuevoGasto.id}`);
  elimino.addEventListener("click", () => {
    borrarItemG(nuevoGasto.id);
  });
});

function mostrarItemG() {
  (listaG.innerHTML = ""),
    arrayGastos.forEach((nuevoGasto) => {
      const liG = document.createElement("li");
      liG.innerHTML = `
      <div class= "listas"><img class= "estiloLista" src="images/${nuevoGasto.categoria}.png" alt="${nuevoGasto.categoria}">
      <p>Monto: $ ${nuevoGasto.gasto}, Categoría: ${nuevoGasto.categoria}</p><button class="botonEliminar"><img class= "bote" id="eliminar${nuevoGasto.id}" src="images/bote-de-basura.png" alt="eliminar"></button></div>
      `;
      listaG.appendChild(liG);
      const elimino = document.getElementById(`eliminar${nuevoGasto.id}`);
      elimino.addEventListener("click", () => {
        borrarItemG(nuevoGasto.id);
      });
    });
}

function borrarItemG(id) {
  localStorage.getItem("listaGastos");
  const item = arrayGastos.find((el) => el.id == id);
  const indice = arrayGastos.indexOf(item);
  arrayGastos.splice(indice, 1);
  saldoFinal();
  mostrarItemG();
  localStorage.setItem("listaGastos", JSON.stringify(arrayIngresos));
  Toastify({
    text: "Item eliminado",
    duration: 2000,
    gravity: "bottom",
    position: "right",
    style: {
      background: "#073B4C",
    },
  }).showToast();
}
