const cuenta = require('../ejercicio3/cuentaBancaria')
const ins = require('../ejercicio3/instituto')
const venta = require("../ejercicio3/mercadoRegistrado")

console.log("ejercicio 3:") +

    console.log("Cuenta bancaria")

cuenta.validarSaldo(400)
    .then((saldo) => {
        console.log("Transferencia realizada".green)
        return cuenta.transferir(150)
    })
    .catch((error) => {
        return console.log(("Error: " + error).red)
    })

console.log("Instituto")

ins.inscripcion(ins.alumno, "Base de datos")
    .then(() => {
        console.log("Inscripto".green);
    })
    .catch((error) => {
        console.log(error);
    });


console.log("Ventas")

venta.validarStock("Mouse", venta.productos)
    .then(producto => {
        console.log("Stock existente".green)
        return venta.realizarVenta(producto, 2)
    })
    .then(producto => {
        console.log("Venta realizada".green)
        return venta.imprimirEtiqueta(producto)
    })
    .then(() => {
        console.log("Etiqueta generada".yellow)
    })
    .catch((error) => {
        console.log(error)
    })


