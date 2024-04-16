const cantidad = Number(prompt("¿Cuántos números desea sumar?"));

let sumatoria = 0;

for (let index = 0 ; index < cantidad ; index++) {
    let numero = Number(prompt("Número a sumar"))
    sumatoria = sumatoria + numero
}

console.log(sumatoria);