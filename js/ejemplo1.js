var frutas = ["Manzana", "Uva", "Fresa", "Pera", "Sandia", "Papaya"];

for (var i = 0; i < frutas.length; i++) {

   document.getElementById("listaFrutas").innerHTML += "<li>" + frutas[i] + "</li>";
}


//objetos
var persona = { nombre: "juan", telefono: "12345678" };

//array objetos
var contactos = [
    { nombre: "juan", telefono: "12345678" },
    { nombre: "carmen", telefono: "87654321" }, 

];

console.log(contactos);
for(var i = 0; i < contactos.length; i++) {
    document.getElementById("listaContactos").innerHTML += "<li>";
    document.getElementById("listaContactos").innerHTML += contactos[i].nombre + ":" + contactos[i].telefono;
    document.getElementById("listaContactos").innerHTML += "</li>";
    
}
