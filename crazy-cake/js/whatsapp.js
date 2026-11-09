/* Crazy Cake · WhatsApp
   Se usa en todas las páginas. Los datos vienen de config.js. */

function waLink(texto) {
  return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(texto);
}

/* Número que se muestra en la página de contacto */
var waDisplay = document.getElementById("wa-display");
if (waDisplay) waDisplay.textContent = CONFIG.whatsappTexto;

/* Cada botón con data-wa abre WhatsApp con un mensaje listo.
   Si el botón tiene data-product, el mensaje incluye ese postre. */
document.querySelectorAll("[data-wa]").forEach(function (a) {
  var producto = a.getAttribute("data-product");
  var mensaje = producto
    ? "Hola Crazy Cake, quiero pedir: " + producto + "."
    : "Hola Crazy Cake, quiero hacer un pedido.";
  a.href = waLink(mensaje);
  a.target = "_blank";
  a.rel = "noopener";
});
