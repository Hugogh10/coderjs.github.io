let nombreCliente = prompt("Ingrese su nombre");

//constante con lista de servicios y precio
const servicios = [
    { nombre: "corte" , precio: 1500},
    { nombre: "barba" , precio: 800},
    { nombre: "tintura" , precio: 2000},
    { nombre: "alisado" , precio: 5000},
    { nombre: "keratina" , precio: 3500},

];
// carta de turno final
let finalTurno = [];
// pregunta sobre si quiere un turno para devolvier si o no
let turno = prompt(`Bienvenido ${nombreCliente}, desea solicitar un turno? si / no?`)

while(turno != "si" && turno != "no"){
    alert ("Por favor ingresar si o no")
    turno = prompt("Bienvenido, desea solicitar un turno? si / no?")
}
const diaTurno = prompt("Ingrese dia = 1-lunes 2-martes 3-miercoles 4-jueves 5-viernes 6-sabado");
//seleccion de dia del turno
function getDiaTurno(dia) {
    let fechaTurno = "";
  
    switch(dia) {
      case "lunes":
      case "1":
        fechaTurno = "Lunes";
        break;
      case "martes":
      case "2":
        fechaTurno = "Martes";
        break;
      case "miercoles":
      case "3":
        fechaTurno = "Miercoles";
        break;
      case "jueves":
      case "4":
        fechaTurno = "Jueves";
        break;
      case "viernes":
      case "5":
        fechaTurno = "Viernes";
        break;
      
    }
  
    return fechaTurno;
  }
  

let fecha = getDiaTurno(diaTurno)

let contacto = prompt("Ingrese mail o celular para contacto")
// si la opcion es true devuelve lista de precio sino se despide.
if(turno == "si") {
    alert ("A continuacion nuestra lista de servicios:")
    let todosLosServicios = servicios.map(
        (servicio) => servicio.nombre + " " + servicio.precio + "$\n");
    alert(todosLosServicios.join(" - "))
} else if (turno == "no"){
    alert("Gracias por visitarnos, te esperamos pronto!!..")
}
while(turno != "no"){
    let servicio = prompt("Selecciona el servicio que desees")
    let precio = 0

//diferentes alternatuvas de serivcio y su precio
if (servicio == "corte" || servicio == "barba" || servicio == "tintura" || servicio == "alisado" || servicio == "keratina"){
    switch (servicio) {
    case "corte":
        precio = 1500;
        break;
    case "barba":
        precio = 800;
        break;
    case "tintura":
        precio = 2000;
        break;
     case "alisado":
        precio = 5000;
        break;
    case "keratina":
        precio = 3500;
        break;
    }
    //ingreso del servicio y precio a la confirmacion del turno
finalTurno.push({servicio, precio})
console.log(finalTurno)
} else{
   alert("no tenemos ese servicio")
} 

    turno = prompt("exelente, alguno mas? si / no?")
// ficha final del turno con los datos solicitados
    while (turno === "no"){
        alert("Gracias por elegirnos, un profesional se comunicara para coordinar el horario del servicio a la opcion de contacto seleccionada")
        finalTurno.forEach((confirmacionTurno)=> {
            confirm(` Hola: ${nombreCliente}\n Contacto: ${contacto}\n Servicio/s: ${confirmacionTurno.servicio}\n Dia: ${fecha}\n Total a pagar por servicio: ${ confirmacionTurno.precio}\n\n Aceptar o cancelar el Turno? `)
        })
        break;
    }

}
