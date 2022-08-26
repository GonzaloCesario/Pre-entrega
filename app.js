
//Ingreso a la plataforma con los productos
let usuario = prompt("Ingrese su usuario")
let pass = prompt("Ingrese su clave")

while(usuario != "Gonzalo" || pass != "1234") {
    alert("Ususario o clave incorrecto")
    usuario = prompt("Ingrese nuevamente el ususario")
    pass = prompt("Ingrese la clave")
}

//constructor de producto
class Producto {
    constructor(nombre,precio,detalle){
    this.nombre = nombre;
    this.precio = Number(precio);
    this.detalle = detalle;
    }
}

//nuevos productos predeterminados
const prod1 = new Producto("Ray Ban", 15000, "Recetados")
const prod2 = new Producto("Armani", 20000, "Lentes de sol")
const prod3 = new Producto("Vouge", 25000, "Clip-on")
const prod4 = new Producto("Lacoste", 10000, "Deportivos" )
const prod5 = new Producto("Vision", 5000, "Ocipacionales")

//Se ingresan los productos a la lista
const listaProductos = []
listaProductos.push(prod1,prod2,prod3,prod4,prod5)

//recorremos los objetos
listaProductos.forEach(elemento => {
    console.log(elemento)
    })
//precio con iva
const precioConIva = listaProductos.map((datos) => {
    return{  
        producto: datos.nombre,      
        conIva: datos.precio * 1.21
    }
})
console.log(precioConIva)
