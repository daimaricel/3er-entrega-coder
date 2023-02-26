class nuevoIngreso{
    constructor(ingreso, categoria){
        this.ingreso= parseInt(ingreso);
        this.categoria= categoria;
    }
}
const arrayIngresos=[];

localStorage.setItem("totalIng", 0);

class nuevoGasto{
    constructor(gasto, categoria){
        this.gasto = parseInt(gasto);
        this.categoria = categoria; 
    }
}

const arrayGastos= [];

localStorage.setItem("totalGas", 0);

//Ingresos

const divIngresos = document.getElementById("divIngresos");
const formIngreso = document.createElement ("form");
formIngreso.innerHTML = `
<fieldset>
    <h3>Nuevo ingreso</h3>
<label for="montoI">Monto $</label>
<input id= "montoI" type="text">   
<label for="category">Categoría</label>
<select name="category" id="category">
    <option value="Salario">Salario</option>
    <option value="Horas extras">Horas Extra</option>
    <option value="Intereses">Intereses</option>
    <option value="Otra">Otra</option>
</select>  
<button id="ingresoI">Guardar</button> <button>Restablecer</button> 
</fieldset>  
`
divIngresos.appendChild(formIngreso);


 let botonIngreso =document.getElementById("ingresoI");
botonIngreso.onclick= ("submit", (e) => {
e.preventDefault();
let ingreso= document.getElementById("montoI");
let categoriaIngreso= document.getElementById("category");
let ingresa= new nuevoIngreso(ingreso.value, categoriaIngreso.value);
arrayIngresos.push(ingresa);
console.log(arrayIngresos);
totalIngresos= arrayIngresos.reduce((acumulador, item) => acumulador + item.ingreso, 0);
localStorage.setItem("totalIng", totalIngresos)
saldoFinal();
formIngreso.reset();
})

//Gastos

const divGastos= document.getElementById("divGastos");
const formGastos = document.createElement("form");
formGastos.innerHTML= `
<fieldset>
    <h3>Nuevo gasto</h3>
<label for="montoG">Monto $</label>
<input id= "montoG" type="text">   
<label for="categoryG">Categoría</label>
<select name="categoryG" id="categoryG">
    <option value="Alimentos">Alimentos</option>
    <option value="Servicios">Servicios</option>
    <option value="Salud">Salud</option>
    <option value="Tarjeta de crédito">Tarjeta de crédito</option>
    <option value="Otra">Otra</option>
</select>  
<button id="ingresoG">Guardar</button> <button>Restablecer</button> 
</fieldset>  
`
divGastos.appendChild(formGastos);

let botonGastos =document.getElementById("ingresoG");
botonGastos.onclick= ("submit", (e) => {
e.preventDefault();
let gasto= document.getElementById("montoG");
let categoriaGasto= document.getElementById("categoryG");
let ingresoGasto= new nuevoGasto(gasto.value, categoriaGasto.value);
arrayGastos.push(ingresoGasto);
console.log(arrayGastos);
const totalGastos = arrayGastos.reduce ((acumulador, item) => acumulador + item.gasto, 0);
localStorage.setItem("totalGas", totalGastos);
saldoFinal();
formGastos.reset();
})

//Saldo Actual

const divCentral = document.getElementById("divCentral");
const saldoIndex= document.createElement("div");

saldoIndex.innerHTML= `
                   <div>
                      <h2>Saldo Actual</h2>
                   </div>
                   <div>
                      <p id ="sf">$0</p>
                   </div>
                          `
divCentral.appendChild(saldoIndex);
const parrafo = document.getElementById("sf");

const saldoFinal = () =>{
    let valor1= parseInt(localStorage.getItem("totalIng"));
    let valor2 = parseInt(localStorage.getItem("totalGas"));
    const saldo = (a,b) => a-b;
    let saldoActual = saldo (valor1, valor2);
    console.log(saldoActual);
    parrafo.innerHTML= `$ ${saldoActual}`
}
 
