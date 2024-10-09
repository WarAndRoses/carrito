
let productos = ["Pan de molde",
    "Queso Crema",
    "Mermelada",
    "Palta Hass",
    "Tomates cherry"];


    let totalCompra = 0;


let precios = [ 1000 , 1200 , 1300 , 1400 , 1500];

function showList(){
    let list = document.getElementById("showMenu");
    list.innerHTML = "";

    productos.forEach((itemCreado, ) =>{
        let li = document.createElement("li");
        li.textContent = itemCreado;
        list.appendChild(li);
    });

    let price = document.getElementById("precios");
    price.innerHTML = "";

    precios.forEach(itemPrecio =>{
        let li = document.createElement("li");
        li.textContent = `$${itemPrecio}`
        price.appendChild(li);
    });
}

function addItem(index){
    let cantidad = document.getElementById(`cantidad${index}`).value;
    cantidad = parseInt(cantidad) || 0;
    let precio = precios[index];
    let total = precio * cantidad;
    
    totalCompra += total;

   let preview = document.getElementById("preview");
   preview.value = `Total Acumulado: $${totalCompra}`;

}



function removeItem(index){
    let cantidad = document.getElementById(`cantidad${index}`).value;
    cantidad = parseInt(cantidad) || 0;
    let precio = precios[index];
    let total = precio * cantidad;

    totalCompra -= total;

    let preview = document.getElementById("preview");
    preview.value = `Total Acumulado: $${totalCompra}`;

    document.getElementById(`cantidad${index}`).value= "";
}

function cancelOrder(){
    for (let i = 0; i < productos.length; i++) {
        document.getElementById(`cantidad${i}`).value = "";
    }
    totalCompra = 0;

    let preview = document.getElementById("preview");
    preview.value = "";

    let final = document.getElementById("total");
    final.value = "";
}

function confirmOrder(){
   let msjFinal = document.getElementById("total");
   msjFinal.value = `Compra total : $${totalCompra} Gracias por su compra `;
}