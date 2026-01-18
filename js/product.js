/**
 * Lógica de Página de Detalle de Producto
 */

// Configuración Global
const SELLER_PHONE = "51953690732"; // Mismo número que main.js
const container = document.getElementById('product-detail-container');

// Estado local de la selección
let estadoSeleccion = {
    talla: null,
    color: null
};

// 1. Obtener ID de la URL
const obtenerIdProducto = () => {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
};

// 2. Generar Link de WhatsApp Dinámico
const actualizarBotonWhatsApp = (producto) => {
    const btn = document.getElementById('btn-whatsapp-dynamic');
    
    // Valores por defecto si no ha seleccionado
    const talla = estadoSeleccion.talla ? estadoSeleccion.talla : "No especificada";
    const color = estadoSeleccion.color ? estadoSeleccion.color : "No especificado";

    const mensaje = `Hola DarenStore, quiero comprar:
👟 Modelo: ${producto.nombre}
📏 Talla: ${talla}
🎨 Color: ${color}
💲 Precio: $${producto.precio}

¿Cómo procedo con el pago?`;

    const link = `https://wa.me/${SELLER_PHONE}?text=${encodeURIComponent(mensaje)}`;
    btn.href = link;
};

// 3. Renderizar Galería
const renderizarGaleria = (imagenes, nombre) => {
    let thumbsHTML = '';
    
    // Si no hay galería, usar imagen principal
    const listaImagenes = (imagenes && imagenes.length > 0) ? imagenes : ["assets/images/placeholder.jpg"];

    listaImagenes.forEach((img, index) => {
        thumbsHTML += `
            <img src="${img}" 
                 class="thumb ${index === 0 ? 'active' : ''}" 
                 onclick="cambiarImagenMain(this, '${img}')" 
                 alt="Vista ${index + 1}">
        `;
    });

    return `
        <div class="gallery-container">
            <div class="main-image-wrapper">
                <img id="main-img" src="${listaImagenes[0]}" alt="${nombre}" class="main-image">
            </div>
            <div class="thumbnails">
                ${thumbsHTML}
            </div>
        </div>
    `;
};

// 4. Función global para cambiar imagen (necesaria en window)
window.cambiarImagenMain = (elemento, src) => {
    document.getElementById('main-img').src = src;
    
    // Actualizar clases active
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    elemento.classList.add('active');
};

// 5. Manejar clicks en opciones
window.seleccionarOpcion = (tipo, valor, elemento) => {
    // Actualizar estado
    estadoSeleccion[tipo] = valor;
    
    // Actualizar UI visual
    const grupo = elemento.parentElement;
    grupo.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    elemento.classList.add('selected');

    // Actualizar link de WhatsApp
    // Necesitamos el objeto producto de nuevo, lo recuperamos del scope global o lo pasamos
    // Para simplificar, actualizamos el href disparando un evento o accediendo al producto global si fuera SPA
    // Aquí re-calculamos basándonos en el DOM o recargamos el link
    const btn = document.getElementById('btn-whatsapp-dynamic');
    const urlActual = new URL(btn.href);
    const textoBase = decodeURIComponent(urlActual.searchParams.get('text'));
    
    // Es más seguro regenerar el link completo usando el producto actual en memoria
    // Como estamos en vanilla y scope simple, accedemos al productoGlobal
    actualizarBotonWhatsApp(window.productoActual);
};

// 6. Renderizar Pagina Principal
const renderizarDetalle = () => {
    const id = obtenerIdProducto();
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        container.innerHTML = `
            <div style="text-align:center; padding: 4rem;">
                <h2>Producto no encontrado</h2>
                <a href="index.html" class="btn-primary" style="margin-top:1rem;">Volver al catálogo</a>
            </div>`;
        return;
    }

    // Guardar referencia global para actualizar whatsApp
    window.productoActual = producto;

    // Generar HTML de Tallas
    const tallasHTML = producto.tallas.map(t => 
        `<button class="option-btn" onclick="seleccionarOpcion('talla', '${t}', this)">${t}</button>`
    ).join('');

    // Generar HTML de Colores
    const coloresHTML = producto.colores.map(c => 
        `<button class="option-btn" onclick="seleccionarOpcion('color', '${c}', this)">${c}</button>`
    ).join('');

    const htmlContent = `
        ${renderizarGaleria(producto.galeria, producto.nombre)}

        <div class="product-info-col">
            <h1 class="product-title-detail">${producto.nombre}</h1>
            <span class="product-price-detail">$${producto.precio} USD</span>
            <p class="product-description-detail">${producto.descripcion}</p>

            <div class="options-group">
                <label class="options-label">Selecciona tu talla:</label>
                <div class="options-grid">
                    ${tallasHTML}
                </div>
            </div>

            <div class="options-group">
                <label class="options-label">Color disponible:</label>
                <div class="options-grid">
                    ${coloresHTML}
                </div>
            </div>

            <div class="action-area">
                <a href="#" id="btn-whatsapp-dynamic" class="btn-buy-lg" target="_blank">
                    <i class="fa-brands fa-whatsapp"></i> Comprar por WhatsApp
                </a>
                <p style="font-size:0.8rem; color:#888; text-align:center; margin-top:10px;">
                    Serás redirigido a WhatsApp para coordinar pago y envío.
                </p>
            </div>
        </div>
    `;

    container.innerHTML = htmlContent;
    
    // Inicializar botón con valores por defecto
    actualizarBotonWhatsApp(producto);
};

// Iniciar
document.addEventListener('DOMContentLoaded', renderizarDetalle);