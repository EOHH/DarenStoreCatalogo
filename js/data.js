/*
 * Base de datos extendida DarenStore
 * Incluye tallas, colores y galería para la página de detalle.
 */

const productos = [
    {
        id: 1,
        nombre: "Air Jordan 1 High OG",
        descripcion: "El clásico que lo inició todo. Con su diseño atemporal, el Air Jordan 1 High OG combina cuero premium con la legendaria amortiguación Air-Sole. Perfectas para coleccionistas y uso diario.",
        precio: 180.00,
        imagen: "https://i5.walmartimages.com/seo/Mens-Air-Jordan-1-Retro-High-OG-Bred-Toe-Gym-Red-Black-Summit-White-55_cfcc1a00-895e-453e-8a4d-2b2bf4c99837.d886d33e5172cd91ccf8d1afbbe20b93.jpeg",
        galeria: [
            "https://i5.walmartimages.com/seo/Mens-Air-Jordan-1-Retro-High-OG-Bred-Toe-Gym-Red-Black-Summit-White-55_cfcc1a00-895e-453e-8a4d-2b2bf4c99837.d886d33e5172cd91ccf8d1afbbe20b93.jpeg",
            "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=800",
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800"
        ],
        tallas: ["7 US", "8 US", "9 US", "10 US", "11 US"],
        colores: ["Chicago Red", "Black Toe", "University Blue"]
    },
    {
        id: 2,
        nombre: "Air Jordan 4 Retro",
        descripcion: "Diseño industrial con soporte de malla y las icónicas 'alas' laterales para un ajuste perfecto. La unidad Air visible en el talón ofrece una comodidad duradera.",
        precio: 210.00,
        imagen: "https://www.kershkicks.co.uk/cdn/shop/files/4fb80aa0-5fd7-4db5-bfd8-8cf66ebd5278_jpg.webp?v=1745402395",
        galeria: [
            "https://www.kershkicks.co.uk/cdn/shop/files/4fb80aa0-5fd7-4db5-bfd8-8cf66ebd5278_jpg.webp?v=1745402395",
            "https://images.unsplash.com/photo-1618677831708-0e7fda3148b4?q=80&w=800"
        ],
        tallas: ["8 US", "9 US", "9.5 US", "10.5 US"],
        colores: ["Military Black", "Thunder Yellow"]
    },
    {
        id: 3,
        nombre: "Jordan 11 Retro Low",
        descripcion: "Elegancia en la cancha. Charol brillante y suela translúcida para un look sofisticado que destaca tanto en la pista como en la calle.",
        precio: 190.00,
        imagen: "https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw11c49781/images/hi-res/197863000916_5_20250414-mrtPeru.jpg",
        galeria: [
            "https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw11c49781/images/hi-res/197863000916_5_20250414-mrtPeru.jpg",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800"
        ],
        tallas: ["7.5 US", "8.5 US", "9 US", "10 US"],
        colores: ["Concord", "Space Jam"]
    },
    {
        id: 4,
        nombre: "Air Jordan 1 Mid",
        descripcion: "Versatilidad urbana. La silueta icónica adaptada para el uso diario con colores modernos y materiales duraderos.",
        precio: 125.00,
        imagen: "https://static.wixstatic.com/media/83e615_b928a7e922e542f68a94be00bbe05263~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        galeria: [
            "https://static.wixstatic.com/media/83e615_b928a7e922e542f68a94be00bbe05263~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
        ],
        tallas: ["6 US", "7 US", "8 US", "9 US"],
        colores: ["Triple White", "Bred"]
    },
    {
        id: 5,
        nombre: "Jordan Stay Loyal 2",
        descripcion: "Inspiradas en el legado, construidas para el futuro. Malla transpirable y amortiguación Air Max visible.",
        precio: 115.00,
        imagen: "https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw376d0e29/images/hi-res/196608225980_1_20240207-mrtPeru.jpg",
        galeria: [
            "https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw376d0e29/images/hi-res/196608225980_1_20240207-mrtPeru.jpg"
        ],
        tallas: ["8 US", "9 US", "10 US", "11 US", "12 US"],
        colores: ["Black/Red", "Wolf Grey"]
    },
    {
        id: 6,
        nombre: "Air Jordan 3 Retro",
        descripcion: "Estampado de elefante y cuero suave. La primera Jordan diseñada por Tinker Hatfield que redefinió el calzado deportivo.",
        precio: 200.00,
        imagen: "https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw2e991e9a/images/hi-res/197593801241_1_20240430-mrtPeru.jpg",
        galeria: [
            "https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dw2e991e9a/images/hi-res/197593801241_1_20240430-mrtPeru.jpg"
        ],
        tallas: ["9 US", "9.5 US", "10 US"],
        colores: ["White Cement", "True Blue"]
    }
];