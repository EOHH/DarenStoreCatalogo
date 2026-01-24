/**
 * Lógica Principal DarenStore
 * Filtros, Búsqueda, Menú Móvil y Renderizado
 * Actualizado: Soporta colores personalizados y Menú Hamburguesa
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

// Elementos Menú Hamburguesa (NUEVO)
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
    // Solo iniciar si estamos en la página index (donde existe el grid)
    if (gridContainer) {
        generarFiltrosDinamicos();
        aplicarFiltros(); // Render inicial
        setupEventListeners();
    } else {
        // Si estamos en otra página (ej. contacto), solo iniciamos el menú
        setupNavigationEvents();
    }
};

// --- 2. Generar UI de Filtros desde Datos ---
const generarFiltrosDinamicos = () => {
    // Extraer tallas únicas y ordenarlas
    const todasTallas = [...new Set(productos.flatMap(p => p.tallas))].sort();
    
    // Extraer colores únicos
    const todosColores = [...new Set(productos.flatMap(p => p.colores))].sort();

    // Renderizar Chips de Tallas
    sizeFilterContainer.innerHTML = todasTallas.map(talla => `
        <div class="filter-chip" data-value="${talla}">${talla.replace(' US', '')}</div>
    `).join('');

    // Mapa de Colores (Tu configuración personalizada)
    const colorMap = {
        'Chicago Red': '#CE1126',
        'Black Toe': '#111111',
        'University Blue': '#89CFF0',
        'Military Black': '#222222',
        'Thunder Yellow': '#FFD700',
        'Concord': '#333333',
        'Space Jam': '#1A1A1A',
        'Triple White': '#F5F5F5',
        'Bred': '#8B0000',
        'Black/Red': '#570000',
        'Wolf Grey': '#A9A9A9',
        'White Cement': '#E0E0E0',
        'True Blue': '#0047AB',
        // Fallbacks básicos
        'Rojo': '#CE1126', 'Blanco': '#FFFFFF', 'Negro': '#000000', 'Azul': '#0051BA'
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

        // C. Filtro Tallas
        let coincideTalla = true;
        if (activeFilters.sizes.length > 0) {
            coincideTalla = activeFilters.sizes.some(s => producto.tallas.includes(s));
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

// --- 5. Event Listeners (Filtros + Navegación) ---
const setupEventListeners = () => {
    
    // --- Lógica de Filtros (Inputs) ---
    if(searchInput) searchInput.addEventListener('input', (e) => { activeFilters.search = e.target.value; aplicarFiltros(); });
    if(sortSelect) sortSelect.addEventListener('change', (e) => { activeFilters.sort = e.target.value; aplicarFiltros(); });
    
    document.querySelectorAll('input[name="price"]').forEach(radio => {
        radio.addEventListener('change', (e) => { activeFilters.price = e.target.value; aplicarFiltros(); });
    });

    // Tallas
    sizeFilterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-chip')) {
            const val = e.target.dataset.value;
            e.target.classList.toggle('active');
            activeFilters.sizes.includes(val) ? activeFilters.sizes = activeFilters.sizes.filter(s => s !== val) : activeFilters.sizes.push(val);
            aplicarFiltros();
        }
    });

    // Colores
    colorFilterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('color-btn')) {
            const val = e.target.dataset.value;
            e.target.classList.toggle('active');
            activeFilters.colors.includes(val) ? activeFilters.colors = activeFilters.colors.filter(c => c !== val) : activeFilters.colors.push(val);
            aplicarFiltros();
        }
    });

    // Limpiar Filtros
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

    // --- Iniciar Eventos de Navegación ---
    setupNavigationEvents();
};

// --- 6. Lógica de Navegación (Menú Hamburguesa & Sidebar) ---
const setupNavigationEvents = () => {
    
    // Función: Abrir/Cerrar Barra de Filtros (Móvil)
    const toggleSidebarFiltros = () => {
        if(sidebar) sidebar.classList.toggle('active');
        if(overlay) overlay.classList.toggle('active');
        // Si abro filtros, aseguro que el menú de navegación esté cerrado
        if(navMenu) navMenu.classList.remove('show-menu');
    };

    // Función: Abrir/Cerrar Menú de Navegación
    const toggleNavMenu = () => {
        if(navMenu) navMenu.classList.toggle('show-menu');
        if(overlay) overlay.classList.toggle('active');
        // Si abro menú, aseguro que los filtros estén cerrados
        if(sidebar) sidebar.classList.remove('active');
    };

    // Función: Cerrar Todo (Al hacer click en overlay o X)
    const closeAll = () => {
        if(sidebar) sidebar.classList.remove('active');
        if(navMenu) navMenu.classList.remove('show-menu');
        if(overlay) overlay.classList.remove('active');
    };

    // Listeners Filtros (Solo si existen en esta página)
    if(mobileFilterBtn) mobileFilterBtn.addEventListener('click', toggleSidebarFiltros);
    if(closeFilterBtn) closeFilterBtn.addEventListener('click', closeAll);

    // Listeners Menú Navegación (NUEVO)
    if(navToggle) navToggle.addEventListener('click', toggleNavMenu);
    if(navClose) navClose.addEventListener('click', closeAll);

    // Overlay cierra todo
    if(overlay) overlay.addEventListener('click', closeAll);

    // Cerrar menú al hacer clic en un enlace (Mejora UX)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeAll);
    });
};

// Arrancar app cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);