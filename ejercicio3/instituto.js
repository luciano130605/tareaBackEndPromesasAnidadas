const alumno = {
    nombre: "Juan",
    edad: 21,
    inscriptoAMaterias: ["Nube", "BackEnd", "FrontEnd"],
    debeCorrelativa: false
};

let materia = ""

function validarCorrelativa(alumno) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (alumno.debeCorrelativa) {
                console.log("Debe correlativa".red)
                reject("Debe correlativa")
            } else {
                console.log("No debe correlativa".green)
                resolve("Ok")
            }
        }, 2000)

    }).finally(() => {
        console.log("Validacion finalizada")
    })

}

function inscripcion(alumno, materia) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            validarCorrelativa(alumno)
                .then(() => {
                    alumno.inscriptoAMaterias.push(materia);
                    console.log(("Inscripción exitosa a: " + materia).green);
                    console.log("Materias actuales: ".yellow + alumno.inscriptoAMaterias);
                    resolve(materia);
                })
                .catch((err) => {
                    console.log(("No se puede inscribir a " + materia).red);
                    reject(err);
                });
        }, 5000);
    }).finally(() => {
        console.log("Inscripción finalizada")
    })


}

module.exports = { alumno, inscripcion }