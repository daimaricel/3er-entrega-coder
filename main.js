//Ingresos

const divIngresos = document.getElementById("divIngresos");
const formIngreso = document.createElement("form");
formIngreso.innerHTML = `
<fieldset>
    <h3>Nuevo ingreso</h3>
<div><label for="montoI">Monto $</label>
<input id= "montoI" type="number" required></div>  
<div><label for="category">Categoría</label>
<select name="category" id="category">
    <option value="Salario">Salario</option>
    <option value="Horas-extra">Horas Extra</option>
    <option value="Intereses">Intereses</option>
    <option value="Otra">Otra</option>
</select></div> 
<div><label for ="idI">ID</label>
<input id="idI" required type= "text" placeHolder="Ingrese Id a elección"></div> 
<button id="ingresoI" type="submit">Guardar</button>  
</fieldset>  
`;
divIngresos.appendChild(formIngreso);

let botonIngreso = document.getElementById("ingresoI");
botonIngreso.onclick =
  ("submit",
  function (e) {
    e.preventDefault();
    let ingreso = document.getElementById("montoI");
    let categoriaIngreso = document.getElementById("category");
    let idI = document.getElementById("idI");
    let check = arrayIngresos.some((el) => el.id == idI.value);
    console.log(check);
    if (check == true) {
      const myModal = new bootstrap.Modal(document.getElementById("modal-id"));
      myModal.show(myModal);
      return;
    }
    let ingresa = new nuevoIngreso(
      ingreso.value,
      categoriaIngreso.value,
      idI.value
    );
    arrayIngresos.push(ingresa);
    mostrarItemI();
    localStorage.setItem("listaIngresos", JSON.stringify(arrayIngresos));
    saldoFinal();
    formIngreso.reset();
  });

//Gastos

const divGastos = document.getElementById("divGastos");
const formGastos = document.createElement("form");
formGastos.innerHTML = `
<fieldset>
    <h3>Nuevo gasto</h3>
<div><label for="montoG">Monto $</label>
<input id= "montoG" type="number"></div>   
<div><label for="categoryG">Categoría</label>
<select name="categoryG" id="categoryG">
    <option value="Alimentos">Alimentos</option>
    <option value="Servicios">Servicios</option>
    <option value="Salud">Salud</option>
    <option value="Tarjetas">Tarjetas</option>
    <option value="Otra">Otra</option>
</select></div>  
<div><label for ="idG">ID</label>
<input id="idG" required type= "text" placeHolder="Ingrese Id a elección"></div> 
<button id="ingresoG" type="submit">Guardar</button>  
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
    let id = document.getElementById("idG");
    let check = arrayGastos.some((el) => el.id == id.value);
    console.log(check);
    if (check == true) {
      const myModal = new bootstrap.Modal(document.getElementById("modal-id"));
      myModal.show(myModal);
      return;
    }
    let ingresoGasto = new nuevoGasto(
      gasto.value,
      categoriaGasto.value,
      id.value
    );
    arrayGastos.push(ingresoGasto);
    localStorage.setItem("listaGastos", JSON.stringify(arrayGastos));
    mostrarItemG();
    saldoFinal();
    formGastos.reset();
  });

//Saldo Actual
let saldoActual;
let saldoActualLs = localStorage.getItem("saldo");

if (saldoActualLs) {
  saldoActual = saldoActualLs;
} else {
  saldoActual = 0;
}

const divCentral = document.getElementById("divCentral");
const saldoIndex = document.createElement("div");

saldoIndex.innerHTML = `
                   <div>
                      <h2>Saldo Actual</h2>
                   </div>
                   <div>
                      <p id ="sf">$ ${saldoActual}</p>
                   </div>
                          `;
divCentral.appendChild(saldoIndex);
const parrafo = document.getElementById("sf");

function saldoFinal() {
  let totalIngresos = arrayIngresos.reduce(
    (valorAnterior, valorActual) => valorAnterior + valorActual.ingreso,
    0
  );
  let totalGastos = arrayGastos.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual.gasto;
  }, 0);
  const saldo = (a, b) => a - b;
  let saldoActual = saldo(totalIngresos, totalGastos);
  localStorage.setItem("saldo", saldoActual);
  parrafo.innerHTML = `$ ${saldoActual}`;
}
