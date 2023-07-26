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

async function fetchRates(){
    let res = await fetch(requestUrl);
    res = await res.json();
    rates = res.rates();
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
    
}

