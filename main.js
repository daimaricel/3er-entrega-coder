class nuevoIngreso {
  constructor(ingreso, categoria) {
    this.ingreso = parseInt(ingreso);
    this.categoria = categoria;
    this.id = id();
  }
}
let arrayIngresos = [];

if (localStorage.getItem("listaIngresos")) {
  arrayIngresos = JSON.parse(localStorage.getItem("listaIngresos"));
}

function id() {
  let contador = arrayIngresos.length;
  let id = contador + 1;
  return id;
}

//localStorage.setItem("totalIng", 0);

class nuevoGasto {
  constructor(gasto, categoria) {
    this.gasto = parseInt(gasto);
    this.categoria = categoria;
    this.id = idG();
  }
}

const arrayGastos = [];

const idG = () => {
  let contador = arrayGastos.length;
  let id = contador + 1;
  return id;
};

//localStorage.setItem("totalGas", 0);

//HTML en JS

const section1 = document.getElementById("content");
section1.innerHTML = `
<div class="container" id="divCentral"></div>

<div class="container forms">
  <div class="container" id="divIngresos"></div>
  <div class="container" id="divGastos"></div>
</div>
`;
const section2 = document.getElementById("content2");
section2.innerHTML = `
<div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Ingresos
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body" id="contenedorLista1">
            <ul id="listaI"></ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Gastos
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body" id="contenedorLista2">
            <ul id="listaG"></ul>
          </div>
        </div>
      </div>
    </div>

`;
//Ingresos

const divIngresos = document.getElementById("divIngresos");
const formIngreso = document.createElement("form");
formIngreso.innerHTML = `
<fieldset>
    <h3>Nuevo ingreso</h3>
<label for="montoI">Monto $</label>
<input id= "montoI" type="text">   
<label for="category">Categoría</label>
<select name="category" id="category">
    <option value="Salario">Salario</option>
    <option value="Horas-extra">Horas Extra</option>
    <option value="Intereses">Intereses</option>
    <option value="Otra">Otra</option>
</select>  
<button id="ingresoI">Guardar</button>  
</fieldset>  
`;
divIngresos.appendChild(formIngreso);

let botonIngreso = document.getElementById("ingresoI");
botonIngreso.onclick =
  ("submit",
  (e) => {
    e.preventDefault();
    let ingreso = document.getElementById("montoI");
    let categoriaIngreso = document.getElementById("category");
    let ingresa = new nuevoIngreso(ingreso.value, categoriaIngreso.value);
    arrayIngresos.push(ingresa);
    localStorage.setItem("listaIngresos", JSON.stringify(arrayIngresos));
    console.log(arrayIngresos);
    mostrarItemI();
    /* totalIngresos= arrayIngresos.reduce((acumulador, item) => acumulador + item.ingreso, 0);
localStorage.setItem("totalIng", totalIngresos)
saldoFinal(); */
    formIngreso.reset();
  });

//Gastos

const divGastos = document.getElementById("divGastos");
const formGastos = document.createElement("form");
formGastos.innerHTML = `
<fieldset>
    <h3>Nuevo gasto</h3>
<label for="montoG">Monto $</label>
<input id= "montoG" type="text">   
<label for="categoryG">Categoría</label>
<select name="categoryG" id="categoryG">
    <option value="Alimentos">Alimentos</option>
    <option value="Servicios">Servicios</option>
    <option value="Salud">Salud</option>
    <option value="Tarjetas">Tarjetas</option>
    <option value="Otra">Otra</option>
</select>  
<button id="ingresoG">Guardar</button>  
</fieldset>  
`;
divGastos.appendChild(formGastos);

let botonGastos = document.getElementById("ingresoG");
botonGastos.onclick =
  ("submit",
  (e) => {
    e.preventDefault();
    let gasto = document.getElementById("montoG");
    let categoriaGasto = document.getElementById("categoryG");
    let ingresoGasto = new nuevoGasto(gasto.value, categoriaGasto.value);
    arrayGastos.push(ingresoGasto);
    console.log(arrayGastos);
    mostrarItemG();
    const totalGastos = arrayGastos.reduce(
      (acumulador, item) => acumulador + item.gasto,
      0
    );
    localStorage.setItem("totalGas", totalGastos);
    saldoFinal();
    formGastos.reset();
  });

//Saldo Actual

const divCentral = document.getElementById("divCentral");
const saldoIndex = document.createElement("div");

saldoIndex.innerHTML = `
                   <div>
                      <h2>Saldo Actual</h2>
                   </div>
                   <div>
                      <p id ="sf">$0</p>
                   </div>
                          `;
divCentral.appendChild(saldoIndex);
const parrafo = document.getElementById("sf");

const saldoFinal = () => {
  let valor1 = parseInt(localStorage.getItem("totalIng"));
  let valor2 = parseInt(localStorage.getItem("totalGas"));
  const saldo = (a, b) => a - b;
  let saldoActual = saldo(valor1, valor2);
  console.log(saldoActual);
  parrafo.innerHTML = `$ ${saldoActual}`;
};

//Listas
let listaI = document.getElementById("listaI");
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
  const item = arrayIngresos.find((item) => nuevoIngreso.id === id);
  const indice = arrayIngresos.indexOf(item);
  arrayIngresos.splice(indice, 1);
  mostrarItemI();
  localStorage.setItem("listaIngresos", JSON.stringify(arrayIngresos));
};

  //saldoFinal();


let listaG = document.getElementById("listaG");
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
  const item = arrayGastos.find((item) => nuevoGasto.id === id);
  const indice = arrayGastos.indexOf(item);
  arrayGastos.splice(indice, 1);
  saldoFinal();
  mostrarItemG();
};
