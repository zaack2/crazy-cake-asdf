/* Crazy Cake · formulario de pedido (página de contacto)
   Arma el mensaje y entrega un botón para enviarlo por WhatsApp.
   Usa waLink(), que está en whatsapp.js. */

var formulario = document.getElementById("pedido");
var resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  var nombre = formulario.nombre.value.trim();
  var producto = formulario.producto.value;
  var fecha = formulario.fecha.value;
  var detalles = formulario.mensaje.value.trim();

  var lineas = [
    "Hola Crazy Cake, soy " + nombre + ".",
    "Quiero pedir: " + producto + "."
  ];
  if (fecha) {
    var d = new Date(fecha + "T00:00:00");
    lineas.push("Fecha del evento: " + d.toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" }) + ".");
  }
  if (detalles) lineas.push("Detalles: " + detalles);

  var texto = lineas.join("\n");
  document.getElementById("res-titulo").textContent = "Listo, " + nombre.split(" ")[0] + ". Tu pedido está preparado";
  document.getElementById("res-texto").textContent = texto;
  document.getElementById("res-wa").href = waLink(texto);

  formulario.hidden = true;
  resultado.hidden = false;
});

document.getElementById("res-editar").addEventListener("click", function () {
  resultado.hidden = true;
  formulario.hidden = false;
});
