let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let plus = document.querySelector(`.plus`)
let minus = document.querySelector(`.minus`);
let multiply = document.querySelector(`.umnoj`)
let delenie = document.querySelector(`.bolish`)
let result = document.querySelector(`.h1`)


plus.addEventListener(`click`, ()=>{
    let inp11 = Number(inp1.value);
let inp22 = Number(inp2.value);
    result.innerHTML = inp11 + inp22
})
minus.addEventListener(`click`, ()=>{
    let inp11 = Number(inp1.value);
let inp22 = Number(inp2.value);
    result.innerHTML = inp11 - inp22
})
multiply.addEventListener(`click`, ()=>{
    let inp11 = Number(inp1.value);
let inp22 = Number(inp2.value);
    result.innerHTML = inp11 * inp22
})
delenie.addEventListener(`click`, ()=>{
    let inp11 = Number(inp1.value);
let inp22 = Number(inp2.value);
    result.innerHTML = inp11 / inp22
})