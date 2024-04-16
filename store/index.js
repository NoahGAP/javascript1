let totalApagar = 0;

for(let index = 0 ; index < 3 ; index++) {
    let nombreDelProducto = prompt("Nombre del Producto: ")
    let cantidadComprada = Number(prompt("Cantidad Comprada de " + nombreDelProducto))
    let precioDelProducto = Number(prompt("Precio del Producto: " + nombreDelProducto))
    let subTotalApagar = cantidadComprada * precioDelProducto
    totalApagar = subTotalApagar + totalApagar
}

console.log(totalApagar);
