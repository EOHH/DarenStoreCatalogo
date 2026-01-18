/**
 * Lógica Principal del Catálogo (Index)
 */

const PHONE_NUMBER = "51953690732"; 
const gridContainer = document.getElementById('product-grid');

const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(precio);
};

const cargarProductos = () => {
    // Verificar si estamos en la página index (si existe el gridContainer)
    if(!gridContainer) return; 

    gridContainer.innerHTML = '';

    if (!productos || productos.length === 0) {
        gridContainer.innerHTML = '<p class="no-products">No hay stock disponible.</p>';
        return;
    }

    const fragment = document.createDocumentFragment();

    productos.forEach(producto => {
        const card = document.createElement('article');
        card.className = 'product-card';

        // Al hacer clic en la tarjeta, vamos al detalle
        card.onclick = () => {
            window.location.href = `producto.html?id=${producto.id}`;
        };

        card.innerHTML = `
            <div class="card-image-container">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="card-image" loading="lazy">
            </div>
            <div class="card-info">
                <h3 class="product-model">${producto.nombre}</h3>
                <p class="product-desc">${producto.descripcion.substring(0, 60)}...</p>
                
                <div class="price-row">
                    <span class="price">${formatearPrecio(producto.precio)}</span>
                </div>

                <a href="producto.html?id=${producto.id}" class="btn-whatsapp">
                    <i class="fa-regular fa-eye"></i> Ver Detalles
                </a>
            </div>
        `;
        fragment.appendChild(card);
    });

    gridContainer.appendChild(fragment);
};

document.addEventListener('DOMContentLoaded', cargarProductos);