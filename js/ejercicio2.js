
//array objetos
var producto = [
    { producto: "Coca-cola", precio: "$2.75" },
    { producto: "Churros", precio: "$1.00" },
    { producto: "Jugos", precio: "$3.75" },
    { producto: "Carnes", precio: "$10.00" },
    { producto: "pollo", precio: "$11.75" },
    { producto: "Galletas", precio: "$1.75" },
    { producto: "Yougurt", precio: "$2.00" },
    { producto: "Platos", precio: "$1.00" },
    { producto: "vasos", precio: "$1.00" },
    { producto: "servilletas", precio: "$0.60" },
];

for (var i = 0; i < producto.length; i++) {
    var html = "<tr>";
    html += "     <td>" + producto[i].producto + "</td>";
    html += "     <td>" + producto[i].precio + "</td>";
    html += "</tr>";

    document.getElementById("tbodyProductos").innerHTML += html;
 
}