//Constructor 1

class nuevoIngreso {
  constructor(ingreso, categoria, id) {
    this.ingreso = parseInt(ingreso);
    this.categoria = categoria;
    this.id = id;
  }
}

let arrayIngresos;
let arrayIngresosJS = JSON.parse(localStorage.getItem("listaIngresos"));
if (arrayIngresosJS) {
  arrayIngresos = arrayIngresosJS;
} else {
  arrayIngresos = [];
}

//Constructos 2

class nuevoGasto {
  constructor(gasto, categoria, id) {
    this.gasto = parseInt(gasto);
    this.categoria = categoria;
    this.id = id;
  }
}

let arrayGastos = [];

if (localStorage.getItem("listaGastos")) {
  arrayGastos = JSON.parse(localStorage.getItem("listaGastos"));
}

//HTML en JS

const section1 = document.getElementById("content");
section1.innerHTML = `
  <div class="container" id="divCentral"></div>
  
  <div class="container forms">
    <div class="container style" id="divIngresos"></div>
    <div class="container style" id="divGastos"></div>
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

  //Div API

 /*  const api = "https://rapidapi.com/ghulam-jalani-ghulam-jalani-default/api/my-money-exchanger";

  const divApi= document.getElementById("content3");
 */

  /* const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b10e278224msh3e6e9b8067e9afbp10bf6fjsnca7d20495d4e',
      'X-RapidAPI-Host': 'my-money-exchanger.p.rapidapi.com'
    }
  };
  
  fetch('https://my-money-exchanger.p.rapidapi.com/convert?from=USD&to=BRL&amount=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
 */

    
    const rutaJson= "quotes.json";

    const frase = document.getElementById("content3");

    fetch(rutaJson)
    .then( respuesta => respuesta.json())
    .then( datos =>{
      setInterval( () =>{
      let indice= Math.floor(Math.random()*datos.length);
      frase.innerHTML= `<p>"${datos[indice]}"</p>`
    },7000)
  })
  .catch(error =>console.log(error))
  .finally(() => console.log("listo"))