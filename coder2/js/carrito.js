//creamos el modal del carrito, header, boton y contenido
const pintarCarrito = () => {
    modalCaja.innerHTML = "";
    modalCaja.style.display = "flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML =`
    <h1 class="modal-header-titulo">Carrito</h1>
    `;
    modalCaja.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalCaja.style.display = "none";
    })

    modalHeader.append(modalbutton);
//recorremos el carrito para el modal
    carrito.forEach((item) => {
    let carritoContenido = document.createElement("div");
    carritoContenido.className = "modal-contenido"
    carritoContenido.innerHTML = `
    <img src = "${item.img}">
    <h3> ${item.nombre}</h3>
    <p>${item.precio}$</p>
    <p>${item.cantidad}u.</p>
    <p>Total: $${item.cantidad * item.precio}</p>
    <i class="fa-solid fa-xmark delete-producto"></i>
    
    `;
    //<span class="delete-producto"> </span>
//contamos con length la cantidad de articulos en el loca
    modalCaja.append(carritoContenido);
    console.log(carrito.length);  

    let eliminar = carritoContenido.querySelector(".delete-producto");
//creamos boton para eliminar producto del modal
    eliminar.addEventListener("click", () => {
        eliminarProduto(item.id);
    })

    });
//algoritmo para modificar la cantidad reflejada precio x cantidad
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalPago = document.createElement("div");
    totalPago.className = "total-contenido";
    totalPago.innerHTML = `Total a pagar: ${total}$`;
    modalCaja.append(totalPago);
};

verCarrito.addEventListener("click", pintarCarrito);
    

const eliminarProduto = (id) => {
    const fundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== fundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

const carritoLength = carrito.length;

localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
};

carritoCounter();


