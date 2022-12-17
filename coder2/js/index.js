const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalCaja = document.getElementById("modal-caja");
const cantidadCarrito = document.getElementById("cantidadCarrito");
let botonTurno = document.getElementById("botonTurno");
let botonSolicitud = document.getElementById("botonSolicitud");
//llamamos al carrito con agregando localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//boton con sweet alert para la parte sin terminar
botonTurno.addEventListener("click", () =>{
    Swal.fire({
        icon: 'error',
        title: 'Oops..me quede sin tiempo',
        text: 'Tenia preparado un sistema de turnos que no llegue con el tiempo!',
        footer: '<a href="">Aca tenia pensado guardar el turno en Localstorage para que quede guardaro y podes confirmarlo o cancelarlo</a>'
      })

})
//utilizamos FETCH para llamar los archivos JSON y crear los productos en html
fetch("./js/productos.json")
.then ((response) => response.json())
.then((producto) =>{
producto.forEach((item) => {
    let div = document.createElement("div");
    div.className = "cardShop";
    div.innerHTML = `
    <img src="${item.img}" class="card-img-top" alt="${item.id}">
    <div class="card-body">
      <h3 class="card-title">${item.nombre}</h3>
      <p class="card-text price">$${item.precio}</p>
      </div>
    `;
    
    shopContent.append(div);

//creamos boton de comprar
    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    div.append(comprar);

    comprar.addEventListener("click", () => {
        // con el metodo some buscamos id repetidos a agregar en carrito
        const repeat = carrito.some((repeatItem) => repeatItem.id === item.id);

        if (repeat){
            carrito.map((i) => {
                if(i.id === item.id){
                    i.cantidad++;
                }
            });
        } else{
        //pusheamos los item
        carrito.push({
            id: item.id,
            img: item.img,
            nombre: item.nombre,
            precio: item.precio,
            cantidad: item.cantidad,
        });
        }
        //los sacamos por consola y los guardamos en localStorage
        console.log(carrito);
        carritoCounter();
        saveLocal();
    });
});
});
 //setItem (localStorage)
 const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
 };


