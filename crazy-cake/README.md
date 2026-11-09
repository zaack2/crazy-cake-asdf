# Crazy Cake · sitio web

Para verlo: abre la carpeta en Visual Studio Code y abre `index.html` con Live Server, o haz doble clic en el archivo.

## Páginas

Cada sección del menú es su propio archivo HTML:

| Archivo | Qué tiene |
| --- | --- |
| `index.html` | Inicio: banner, por qué elegirnos y accesos rápidos |
| `nosotros.html` | Quiénes somos, misión y visión |
| `productos.html` | Catálogo de postres con precios |
| `video.html` | Video |
| `contacto.html` | Mapa, datos de contacto y formulario de pedido |

El encabezado (menú) y el pie de página se repiten en cada archivo. Si cambias el menú, cámbialo en las seis páginas.

## Estilos (`css/`)

`css/styles.css` solo junta los demás archivos, en orden. Cada archivo tiene una parte del diseño:

| Archivo | Qué tiene |
| --- | --- |
| `01-variables.css` | Colores y tipografías (y el tema oscuro). Aquí se cambia el look de todo el sitio |
| `02-base.css` | Reinicio, títulos y piezas que se repiten |
| `03-botones.css` | Botones |
| `04-encabezado.css` | Encabezado y menú |
| `05-banner.css` | Banner de inicio |
| `06-inicio.css` | "Por qué elegirnos" y tarjetas de explorar |
| `07-nosotros.css` | Nosotros, misión y visión |
| `08-productos.css` | Tarjetas del catálogo |
| `09-video.css` | Video |
| `10-contacto.css` | Mapa y formulario |
| `11-pie.css` | Pie de página |
| `12-movimiento.css` | Quita animaciones si el usuario lo prefiere |

## Scripts (`js/`)

| Archivo | Qué hace | Páginas |
| --- | --- | --- |
| `config.js` | Los datos que debes editar: número de WhatsApp y enlace del video | todas |
| `whatsapp.js` | Botones de WhatsApp y número en pantalla | todas |
| `video.js` | Incrusta el video de YouTube que está en config.js | video |
| `formulario.js` | Arma el mensaje del pedido | contacto |

## Imágenes

| Carpeta | Qué tiene |
| --- | --- |
| `img/logo.jpg` | El logo |
| `img/productos/` | Una foto por cada postre |
| `img/decoracion/` | Las frutas del banner |

## Lo que debes cambiar

1. En `js/config.js`: tu número de WhatsApp y el enlace de tu video.
2. En `img/productos/`: para cambiar una foto, guarda la nueva en esa carpeta y cambia el `src` de la imagen en `productos.html`. Usa fotos horizontales (proporción 4:3) para que no se recorten.
3. En `productos.html` y `contacto.html`: los precios, el horario y los textos si no coinciden con tu negocio.
