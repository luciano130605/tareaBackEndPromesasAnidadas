const producto1 = {
    id: 1,
    nombreProducto: "Teclado",
    precio: 50,
    stock: 100
}

const producto2 = {
    id: 2,
    nombreProducto: "Cargadores",
    precio: 20,
    stock: 300
}
const producto3 = {
    id: 3,
    nombreProducto: "Auriculares",
    precio: 60,
    stock: 70
}
const producto4 = {
    id: 4,
    nombreProducto: "Mouse",
    precio: 45,
    stock: 92
}
const producto5 = {
    id: 5,
    nombreProducto: "Monitor",
    precio: 100,
    stock: 30
}

const productos = [producto1, producto2, producto3, producto4, producto5]


function validarStock(productoBuscar, productos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoEncontrado = productos.find(p => p.nombreProducto === productoBuscar)

            if (!productoEncontrado) {
                reject("Producto no encontrado".red)
            }
            const stock = productoEncontrado.stock;

            if (productoEncontrado.stock > 0) {
                console.log("Producto encontrado".green)
                console.log("Stock de " + productoEncontrado.nombreProducto + ": " + stock)
                resolve(productoEncontrado)
            }
            else {
                reject("Sin stock".red)
            }
        }, 2000)
    }).finally(() => {
        console.log("Stock validado")
    })



}

function realizarVenta(producto, cantComprar) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (producto.stock >= cantComprar) {
                producto.stock -= cantComprar;
                console.log(`${producto.nombreProducto} comprado`.green);
                resolve(producto);
            } else {
                reject("Stock insuficiente");
            }
        }, 1000);

    }).finally(() => console.log("Venta finalizada"));
}

function imprimirEtiqueta(producto) {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log(`Imprimiendo etiqueta de ${producto.nombreProducto}`.yellow);
            resolve();
        }, 4000);

    }).finally(() => console.log("Etiqueta finalizada".green));
}

module.exports = { productos, validarStock, realizarVenta, producto1, imprimirEtiqueta }