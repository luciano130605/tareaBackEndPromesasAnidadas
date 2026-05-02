require('colors')

let saldo = 0

function validarSaldo(montoInicial) {

    return new Promise((resolve) => {
        saldo = montoInicial

        setTimeout(() => {
            console.log("Tu saldo es:".yellow + saldo)
            resolve(saldo)
        }, 5000)
    }).finally(() => {
        console.log("Validacion de saldo completa".green)
    })

}

function transferir(monto) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monto <= saldo) {
                saldo -= monto
                console.log("Transferencia completada".green);
                console.log(("Saldo restante: " + saldo).yellow);
                resolve(saldo)
            } else {
                console.log("Transferencia rechazada,".red + " intenta con un monto menor.".yellow + " saldo: ".yellow + saldo);
                reject(saldo)
            }
        }, 10000)
    }).finally (() => {
        console.log("Operación finalizada".green)
    })

}

module.exports = { validarSaldo, transferir };