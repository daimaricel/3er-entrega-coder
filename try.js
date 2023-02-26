// Control de gastos

class nuevoIngreso{
    constructor(ingreso, categoria){
        this.ingreso= parseInt(ingreso);
        this.categoria= categoria;
    }
}
const sueldo = new nuevoIngreso(50000, "salario");
const plazoFijo = new nuevoIngreso(5000, "intereses");

const arrayIngresos=[sueldo, plazoFijo];

let totalIngresos;
/* = arrayIngresos.reduce((acumulador, item) => acumulador + item.ingreso, 0);
console.log(totalIngresos); 
 */

 
class nuevoGasto{
    constructor(gasto, categoria){
        this.gasto = gasto;
        this.categoria = categoria; 
    }
}
const movistar= new nuevoGasto(1800, "servicios");
const supermercado = new nuevoGasto(8500, "alimentos");

const arrayGastos= [movistar, supermercado];

const totalGastos = arrayGastos.reduce ((acumulador, item) => acumulador + item.gasto, 0);
console.log(totalGastos);

/* const saldo = (a,b) => a-b;
let saldoActual = saldo(totalIngresos, totalGastos);
console.log(saldoActual); */


//Menu inicial

/* function menu(){
    let opcion= parseInt(prompt ("Gestión de dinero personal \nIngrese una de las siguientes opciones:\n1) Ingreso de dinero \n2)Gastos \n3)Consultar saldo \n4)Salir"));
    return opcion
} */
//Opción 2 - Gastos
function ingresoGasto(){
    let gasto = parseFloat(prompt("Ingrese monto:"));
    let categoriaGastos= prompt("¿A qué categoría corresponde este gasto? \nSeleccione una de las siguientes: \n-Alimentos \n-Servicios \n-Tarjeta de crédito \n-Salud \n-Otros");
    let ingresoGasto= new nuevoGasto (gasto, categoriaGastos);
    arrayGastos.push(ingresoGasto);
    console.log(arrayGastos);
    alert("Tu gasto ha sido ingresado");
}


//Index - HTML
  

const divCentral = document.getElementById("divCentral");
const saldoF= () => {
    let totalIngresos= arrayIngresos.reduce((acumulador, item) => acumulador + item.ingreso, 0);
    const totalGastos = arrayGastos.reduce ((acumulador, item) => acumulador + item.gasto, 0);
    const saldo = (a,b) => a-b;
    let saldoActual = saldo(totalIngresos, totalGastos);
    return(saldoActual);
}; 

const saldoIndex= document.createElement("div");
saldoIndex.innerHTML= `
                   <div>
                      <h2>Saldo actual</h2>
                   </div>
                   <div>
                      <p>$ ${saldoF.value}</p>
                   </div>
                          `
divCentral.appendChild(saldoIndex);   

const divIngresos = document.getElementById("divIngresos");
const formIngreso = document. createElement ("form");
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

//Formulario Gastos

const divGastos = document.getElementById("divGastos");
const formGastos= document.createElement("form");
formGastos.innerHTML= `
<fieldset>
<h3>Nuevo gasto</h3>
<label for="monto">Monto $</label>
<input id= "monto" type="text">   
<label for="categoryG">Categoría</label>
<select name="" id="categoryG">
    <option value="">Alimentos</option>
    <option value="">Servicios</option>
    <option value="">Tarjeta de crédito</option>
    <option value="">Salud</option>
    <option value="">Otra</option>
</select> 
<button>Guardar</button> <button>Restablecer</button>
</fieldset>    
`
divGastos.appendChild(formGastos);

let botonIngreso =document.getElementById("ingresoI");
botonIngreso.onclick = ("submit", (e) => {
e.preventDefault();
let ingreso= document.getElementById("montoI");
let categoriaIngreso= document.getElementById("category");
let ingresa= new nuevoIngreso(ingreso.value, categoriaIngreso.value);
arrayIngresos.push(ingresa);
console.log(arrayIngresos)
})