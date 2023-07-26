// declarar variables para capturar el dato 
let rate1 = document.querySelector('.rate1');
let rate2 = document.querySelector('.rate2');
let resultBtn = document.querySelector('.result');
let selects = document.querySelectorAll('.options select');
let sel1 = selects[0];
let sel2 = selects[1];
let inputs = document.querySelectorAll('.input input');
let inpt1 = inputs[0];
let inpt2 = inputs[1];

let rates ={};
let requestUrl = "https://api.exchangerate.host/latest?base=USD";

// función async
/**
 * await dice que hay que esperar que tome la respuesta de la api requestUrl
 */

// fetchRates();

async function fetchRates(){
    let res = await fetch(requestUrl);
    res = await res.json();
    rates = res.rates();
    // utilizar la funcion populateOptions
    populateOptions();
}

// función tradicional
/**
 * funcion para las opciones 
 */
function populateOptions() {
    let val = '';
    Object.keys(rates).forEach(code =>{
        let str =`<option value="${code}">${code}</option>`;
        // incrementar el option
        // val = val + str;
        val += str;
    })
    // mostrar las opciones
    selects.forEach((s)=> (s.innerHTML = val));
    
}
// crear la función para hacer la conversión 
/**
 * 
 * @param {Number} val valor de conversion
 * @param {Number} fromCurr moneda inicial 
 * @param {Number} toCurr   moneda convertir
 */
function convert(val,fromCurr,toCurr) {
    // declarar variables de ambito local
    let v = (val/rates[fromCurr]) * rates[toCurr];
    let v1 = v.toFixed(3);
    // validar con if ternario
    return v1 == 0.0 ? v1.toFixed(5) : v1;

}

// funcion para los select
function displayRate() {
    // declarar variables de ambito local
    let v1 = sel1.value;
    let v2 = sel2.value;

    let val = convert(1,v1, v2);
    // imprimir en elemento html
    
    
}
