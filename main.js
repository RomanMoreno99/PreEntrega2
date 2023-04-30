class Socio {
    constructor(nombre, apellido, edad, dni, ingresos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;  
        this.dni = dni;
        this.ingresos = ingresos;
    }
}

let sociosBanco = [];

function serSocio(){
    let nombre = prompt("Por favor, ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let edad = prompt("Ingrese su edad:");
    let dni = prompt("Ingrese su número de dni:");
    let ingresos = prompt("Coloque sus ingresos economicos: ")
    let nuevoSocio = new Socio(nombre, apellido, edad, dni, ingresos);
    sociosBanco.push(nuevoSocio);
}
function modificarSocio(){
    let dni = prompt("Ingrese su número de documento para ser indentificado:");
    let encontrado = false;
    for (let i = 0; i < sociosBanco.length; i++) {
        if (sociosBanco[i].dni == dni) {
            let nombre = prompt(`Ingrese su nuevo nombre (${sociosBanco[i].nombre}):`);
            let apellido = prompt(`Ingrese el nuevo apellido(${sociosBanco[i].apellido}):`);
            let edad = prompt(`Ingrese su edad (${sociosBanco[i].edad}):`);
            let ingresos = prompt(`Coloque sus ingresos (${sociosBanco[i].ingresos}):`);
            sociosBanco[i].nombre = nombre || sociosBanco[i].nombre;
            sociosBanco[i].apellido = apellido || sociosBanco[i].apellido;
            sociosBanco[i].edad = edad || sociosBanco[i].edad;
            sociosBanco[i].ingresos = ingresos || sociosBanco[i].ingresos;
            encontrado = true;
            break;
        }
    }
    if (!encontrado){
        alert("No tenemos ningun socio con ese número de Documento.");
    }
}

function eliminarSocio(){
    let dni = prompt("Ingrese su número de documento para darse de baja:");
    let encontrado = false;
    for (let i = 0; i < sociosBanco.length; i++) {
        if (sociosBanco[i].dni == dni) {
            sociosBanco.splice(i, 1);
            encontrado = true;
            break;
        }
    }
    if (!encontrado){
        alert("No tenemos ningun socio con ese número de Documento.");
    }
}

function listaSocios() {
    let mensaje = "\nNuestros Socios:\n\n";
    for (let i = 0; i < sociosBanco.length; i++) {
        mensaje += `Nombre: ${sociosBanco[i].nombre} ${sociosBanco[i].apellido}\n`;
        mensaje += `Edad: ${sociosBanco[i].edad}\n`;
        mensaje += `Número de dni: ${sociosBanco[i].dni}\n\n`;
        mensaje += `Ingresos: ${sociosBanco[i].ingresos}\n`
    }
    alert(mensaje);
}

function menuPrincipal() {
    let opcion = "";
    while (opcion !== "5") {
        opcion = prompt(`Bienvenidos al BancoRO.srl, ¿Que desea hacer?:
    1. Quiero ser socio
    2. Modificar socio
    3. Darme de baja
    4. Lista de Socios
    5. Salir`);
        switch (opcion) {
            case "1":
                serSocio();
                break;
            case "2":
                modificarSocio();
                break;
            case "3":
                eliminarSocio();
                break;
            case "4":
                listaSocios();
                break;
            case "5":
                alert("Muchas gracias por visitar nuestro Banco, lo esperamos de vuelta!");
                break;
            default:
                alert("Opción no válida.");
                break;
        }
    }
}

