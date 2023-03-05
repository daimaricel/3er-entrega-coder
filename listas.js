//Listas

const mostrarItemI = () => {
    (listaI.innerHTML = ""),
      arrayIngresos.forEach((nuevoIngreso) => {
        const liI = document.createElement("li");
        liI.innerHTML = `
      <div class= "listas"><img class= "estiloLista" src="../images/${nuevoIngreso.categoria}.png" alt="${nuevoIngreso.categoria}">
      <p>Monto: $ ${nuevoIngreso.ingreso}, Categoría: ${nuevoIngreso.categoria}</p><button><img class= "bote" id="eliminar${nuevoIngreso.id}" src="images/bote-de-basura.png" alt="eliminar"></button></div>
      `;
        listaI.appendChild(liI);
  
        const elimino = document.getElementById(`eliminar${nuevoIngreso.id}`);
        elimino.addEventListener("click", () => {
          borrarItemI(nuevoIngreso.id);
        });
      });
  }; 
  
  const borrarItemI = (id) => {
    localStorage.getItem("listaIngresos");
    const item = arrayIngresos.find((el) => el.id == id);
    console.log(item);
    const indice = arrayIngresos.indexOf(item);
    arrayIngresos.splice(indice, 1);
    saldoFinal();
    mostrarItemI();
    localStorage.setItem("listaIngresos", JSON.stringify(arrayIngresos));
  };
  
  
  
  let listaG = document.getElementById("listaG");
  
  arrayGastos.forEach((nuevoGasto) => {
    const liG = document.createElement("li");
    liG.innerHTML = `
  <div class= "listas"><img class= "estiloLista" src="../images/${nuevoGasto.categoria}.png" alt="${nuevoGasto.categoria}">
  <p>Monto: $ ${nuevoGasto.gasto}, Categoría: ${nuevoGasto.categoria}</p><button><img class= "bote" id="eliminar${nuevoGasto.id}" src="images/bote-de-basura.png" alt="eliminar"></button></div>
  `;
    listaG.appendChild(liG);
    const elimino = document.getElementById(`eliminar${nuevoGasto.id}`);
    elimino.addEventListener("click", () => {
      borrarItemG(nuevoGasto.id);
    });
  });
  
  
  const mostrarItemG = () => {
    (listaG.innerHTML = ""),
      arrayGastos.forEach((nuevoGasto) => {
        const liG = document.createElement("li");
        liG.innerHTML = `
      <div class= "listas"><img class= "estiloLista" src="../images/${nuevoGasto.categoria}.png" alt="${nuevoGasto.categoria}">
      <p>Monto: $ ${nuevoGasto.gasto}, Categoría: ${nuevoGasto.categoria}</p><button><img class= "bote" id="eliminar${nuevoGasto.id}" src="images/bote-de-basura.png" alt="eliminar"></button></div>
      `;
        listaG.appendChild(liG);
        const elimino = document.getElementById(`eliminar${nuevoGasto.id}`);
        elimino.addEventListener("click", () => {
          borrarItemG(nuevoGasto.id);
        });
      });
  };
  
  const borrarItemG = (id) => {
    localStorage.getItem("listaGastos");
    const item = arrayGastos.find((el) => el.id == id);
    const indice = arrayGastos.indexOf(item);
    arrayGastos.splice(indice, 1);
    saldoFinal(); 
    mostrarItemG();
    localStorage.setItem("listaGastos", JSON.stringify(arrayIngresos));
  };