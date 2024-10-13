// Clase para representar un producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Clase para manejar el carrito de compras
class Carrito {
    constructor() {
        this.items = [];
        this.totalCompra = 0;
    }

    agregarProducto(producto, cantidad) {
        let total = producto.precio * cantidad;
        this.items.push({ producto, cantidad });
        this.totalCompra += total;
    }

    quitarProducto(index) {
        if (this.items[index]) {
            let { producto, cantidad } = this.items[index];
            let total = producto.precio * cantidad;
            if(this.totalCompra - total >= 0){
            this.totalCompra -= total;
            this.items.splice(index, 1);
            }
        }
    }

    cancelarOrden() {
        this.items = [];
        this.totalCompra = 0;
    }

    mostrarTotal() {
        return this.totalCompra;
    }
}

// Productos disponibles
let productos = [
    new Producto("Pan de molde", 1000),
    new Producto("Queso Crema", 1200),
    new Producto("Mermelada", 1300),
    new Producto("Palta Hass", 1400),
    new Producto("Tomates cherry", 1500)
];

let carrito = new Carrito();

// Muestra la lista de productos y precios en la página
function showList() {
    let list = document.getElementById("showMenu");
    list.innerHTML = "";

    productos.forEach((producto) => {
        let li = document.createElement("li");
        li.textContent = producto.nombre;
        list.appendChild(li);
    });

    let price = document.getElementById("precios");
    price.innerHTML = "";

    productos.forEach(producto => {
        let li = document.createElement("li");
        li.textContent = `$${producto.precio}`;
        price.appendChild(li);
    });
}

// Agregar un item al carrito
function addItem(index) {
    let cantidad = document.getElementById(`cantidad${index}`).value;
    cantidad = parseInt(cantidad) || 0;

    carrito.agregarProducto(productos[index], cantidad);

    let preview = document.getElementById("preview");
    preview.value = `Total Acumulado: $${carrito.mostrarTotal()}`;
}

// Quitar items del carrito
function removeItem(index) {
    carrito.quitarProducto(index);

    let preview = document.getElementById("preview");
    preview.value = `Total Acumulado: $${carrito.mostrarTotal()}`;

    document.getElementById(`cantidad${index}`).value = "";
}

// Cancelar la orden y limpiar el carrito
function cancelOrder() {
    carrito.cancelarOrden();

    for (let i = 0; i < productos.length; i++) {
        document.getElementById(`cantidad${i}`).value = "";
    }

    let preview = document.getElementById("preview");
    preview.value = "";

    let final = document.getElementById("total");
    final.value = "";
}

// Confirmar la orden
function confirmOrder() {
    let msjFinal = document.getElementById("total");
    msjFinal.value = `Compra total : $${carrito.mostrarTotal()} Gracias por su compra`;
}
