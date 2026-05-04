const cuenta = require('../ejercicio3/cuentaBancaria')
const ins = require('../ejercicio3/instituto')
const venta = require("../ejercicio3/mercadoRegistrado")

function ejecutarCuenta() {
    console.log("Cuenta bancaria")

    return cuenta.validarSaldo(400)
        .then(() => {
            console.log("Saldo válido".green)
            return cuenta.transferir(150)
        })
        .then(() => {
            console.log("Transferencia realizada".green)
        })
        .catch((error) => {
            console.log(("Error: " + error).red)
        })
}

function ejecutarInstituto() {
    console.log("Instituto")

    return ins.inscripcion(ins.alumno, "Base de datos")
        .then(() => {
            console.log("Inscripto".green)
        })
        .catch((error) => {
            console.log(("Error: " + error).red)
        })
}

function ejecutarVentas() {
    console.log("Ventas")

    return venta.validarStock("Mouse", venta.productos)
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
            console.log(("Error: " + error).red)
        })
}

module.exports = {
    ejecutarCuenta,
    ejecutarInstituto,
    ejecutarVentas
}