/**
 * Lógica Principal DarenStore
 * Filtros, Búsqueda, Menú Móvil y Renderizado
 * Actualizado: Soporta todos los colores de la nueva BD y tallas seguras
 */

// CONFIGURACIÓN
const SELLER_PHONE = "51953690732";

// Referencias al DOM (Elementos Principales)
const gridContainer = document.getElementById('product-grid');
const resultsCount = document.getElementById('results-count');

// Referencias Filtros
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const sizeFilterContainer = document.getElementById('size-filters');
const colorFilterContainer = document.getElementById('color-filters');
const clearBtn = document.getElementById('clear-filters');

// Elementos Filtros Móvil (Sidebar)
const mobileFilterBtn = document.getElementById('mobile-filter-btn');
const closeFilterBtn = document.getElementById('close-filters');
const sidebar = document.getElementById('filters-sidebar');
const overlay = document.getElementById('filter-overlay');

// Elementos Menú Hamburguesa
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Estado Global de Filtros
let activeFilters = {
    search: '',
    price: 'all',
    sizes: [], 
    colors: [], 
    sort: 'default'
};

// --- 1. Inicialización ---
const init = () => {
    if (gridContainer) {
        generarFiltrosDinamicos();
        aplicarFiltros(); 
        setupEventListeners();
    } else {
        setupNavigationEvents();
    }
};

// --- 2. Generar UI de Filtros desde Datos ---
const generarFiltrosDinamicos = () => {
    // Extraer tallas únicas y ordenarlas (Protegido usando String() por si vienen números)
    const todasTallas = [...new Set(productos.flatMap(p => p.tallas))].sort((a, b) => Number(a) - Number(b));
    
    // Extraer colores únicos
    const todosColores = [...new Set(productos.flatMap(p => p.colores))].sort();

    // Renderizar Chips de Tallas (Quitando ' US' si existe, si no, imprime el número)
    sizeFilterContainer.innerHTML = todasTallas.map(talla => `
        <div class="filter-chip" data-value="${talla}">${String(talla).replace(' US', '')}</div>
    `).join('');

    // Mapa de Colores Ampliado para la nueva Base de Datos
    const colorMap = {
        'Black Phantom': '#1b1b1b',
        'Reverse Mocha': '#6a4e42',
        'Fragment': '#0033a0',
        'Mocha': '#5c4033',
        'Black Cat': '#111111',
        'Pure Money': '#ffffff',
        'Sunset': '#ff8c00',
        'Rio': '#ff4500',
        'Fear': '#4a4a4a',
        'Frozen Moments': '#e0e0e0',
        'Military Black': '#2b2b2b',
        'Military Blue': '#0055a4',
        'Red Thunder': '#aa0000',
        'White Thunder': '#f4f4f4',
        'Off White': '#fdf5e6',
        'Blanco': '#ffffff',
        'Negro': '#000000',
        'NOCTA': '#ffffff', 
        'Grey': '#808080',
        'Black White': '#000000', 
        'Beige White': '#f5f5dc',
        // Fallbacks básicos antiguos
        'Chicago Red': '#CE1126', 'Black Toe': '#111111', 'University Blue': '#89CFF0',
        'Rojo': '#CE1126', 'Azul': '#0051BA'
    };

    colorFilterContainer.innerHTML = todosColores.map(color => {
        const background = colorMap[color] || '#cccccc'; 
        return `
            <div class="color-btn" 
                 style="background-color: ${background}" 
                 title="${color}" 
                 data-value="${color}">
            </div>
        `;
    }).join('');
};

// --- 3. Motor de Filtrado ---
const aplicarFiltros = () => {
    let filtrados = productos.filter(producto => {
        // A. Búsqueda Texto
        const textoBusqueda = activeFilters.search.toLowerCase();
        const coincideTexto = producto.nombre.toLowerCase().includes(textoBusqueda) || 
                              producto.descripcion.toLowerCase().includes(textoBusqueda);

        // B. Filtro Precio
        let coincidePrecio = true;
        if (activeFilters.price !== 'all') {
            const [min, max] = activeFilters.price.split('-').map(Number);
            if (activeFilters.price === '200-999') {
                coincidePrecio = producto.precio >= 200;
            } else {
                coincidePrecio = producto.precio >= min && producto.precio < max;
            }
        }

        // C. Filtro Tallas (usando String para comparar siempre texto)
        let coincideTalla = true;
        if (activeFilters.sizes.length > 0) {
            coincideTalla = activeFilters.sizes.some(s => producto.tallas.map(String).includes(s));
        }

        // D. Filtro Colores
        let coincideColor = true;
        if (activeFilters.colors.length > 0) {
            coincideColor = activeFilters.colors.some(c => producto.colores.includes(c));
        }

        return coincideTexto && coincidePrecio && coincideTalla && coincideColor;
    });

    // E. Ordenamiento
    if (activeFilters.sort === 'price-asc') {
        filtrados.sort((a, b) => a.precio - b.precio);
    } else if (activeFilters.sort === 'price-desc') {
        filtrados.sort((a, b) => b.precio - a.precio);
    } else if (activeFilters.sort === 'name-asc') {
        filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    renderizarGrid(filtrados);
};

// --- 4. Renderizado ---
const renderizarGrid = (listaProductos) => {
    if(resultsCount) resultsCount.textContent = `${listaProductos.length} productos encontrados`;

    if (listaProductos.length === 0) {
        gridContainer.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-magnifying-glass"></i>
                <h3>No encontramos resultados</h3>
                <p>Intenta ajustar tus filtros o buscar otra cosa.</p>
            </div>`;
        return;
    }

    gridContainer.innerHTML = listaProductos.map(producto => `
        <article class="product-card" onclick="window.location.href='producto.html?id=${producto.id}'">
            <div class="card-image-container">
                 <img src="${producto.imagen}" alt="${producto.nombre}" class="card-image" loading="lazy">
            </div>
            <div class="card-info">
                <h3 class="product-model">${producto.nombre}</h3>
                <p class="product-desc">${producto.descripcion.substring(0, 40)}...</p>
                <span class="product-price">$${producto.precio}</span>
                <a href="producto.html?id=${producto.id}" class="btn-details">Ver Detalles</a>
            </div>
        </article>
    `).join('');
};

// --- 5. Event Listeners ---
const setupEventListeners = () => {
    
    if(searchInput) searchInput.addEventListener('input', (e) => { activeFilters.search = e.target.value; aplicarFiltros(); });
    if(sortSelect) sortSelect.addEventListener('change', (e) => { activeFilters.sort = e.target.value; aplicarFiltros(); });
    
    document.querySelectorAll('input[name="price"]').forEach(radio => {
        radio.addEventListener('change', (e) => { activeFilters.price = e.target.value; aplicarFiltros(); });
    });

    sizeFilterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-chip')) {
            const val = e.target.dataset.value;
            e.target.classList.toggle('active');
            activeFilters.sizes.includes(val) ? activeFilters.sizes = activeFilters.sizes.filter(s => s !== val) : activeFilters.sizes.push(val);
            aplicarFiltros();
        }
    });

    colorFilterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('color-btn')) {
            const val = e.target.dataset.value;
            e.target.classList.toggle('active');
            activeFilters.colors.includes(val) ? activeFilters.colors = activeFilters.colors.filter(c => c !== val) : activeFilters.colors.push(val);
            aplicarFiltros();
        }
    });

    if(clearBtn) {
        clearBtn.addEventListener('click', () => {
            activeFilters = { search: '', price: 'all', sizes: [], colors: [], sort: 'default' };
            if(searchInput) searchInput.value = '';
            if(sortSelect) sortSelect.value = 'default';
            const radioAll = document.querySelector('input[name="price"][value="all"]');
            if(radioAll) radioAll.checked = true;
            document.querySelectorAll('.filter-chip, .color-btn').forEach(el => el.classList.remove('active'));
            aplicarFiltros();
        });
    }

    setupNavigationEvents();
};

// --- 6. Lógica de Navegación ---
const setupNavigationEvents = () => {
    const toggleSidebarFiltros = () => {
        if(sidebar) sidebar.classList.toggle('active');
        if(overlay) overlay.classList.toggle('active');
        if(navMenu) navMenu.classList.remove('show-menu');
    };

    const toggleNavMenu = () => {
        if(navMenu) navMenu.classList.toggle('show-menu');
        if(overlay) overlay.classList.toggle('active');
        if(sidebar) sidebar.classList.remove('active');
    };

    const closeAll = () => {
        if(sidebar) sidebar.classList.remove('active');
        if(navMenu) navMenu.classList.remove('show-menu');
        if(overlay) overlay.classList.remove('active');
    };

    if(mobileFilterBtn) mobileFilterBtn.addEventListener('click', toggleSidebarFiltros);
    if(closeFilterBtn) closeFilterBtn.addEventListener('click', closeAll);

    if(navToggle) navToggle.addEventListener('click', toggleNavMenu);
    if(navClose) navClose.addEventListener('click', closeAll);

    if(overlay) overlay.addEventListener('click', closeAll);

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeAll);
    });
};

document.addEventListener('DOMContentLoaded', init);