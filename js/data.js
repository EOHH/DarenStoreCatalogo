/*
 * Base de datos extendida DarenStore
 * Actualizado con 22 productos reales y URLs limpias.
 */

const productos = [
  {
    id: 1,
    nombre: "Air Jordan 1 Travis Scott Black Phantom",
    descripcion: "Zapatillas low-top con diseño negro phantom exclusivo de Travis Scott, nubuck premium y Swoosh invertido característico.",
    precio: 1200,
    imagen: "https://images.stockx.com/images/Air-Jordan-1-Retro-Low-OG-SP-Travis-Scott-Black-Phantom-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Air-Jordan-1-Retro-Low-OG-SP-Travis-Scott-Black-Phantom-Product-2.jpg?fit=fill&w=768&h=500",
      "https://images.stockx.com/images/Air-Jordan-1-Retro-Low-OG-SP-Travis-Scott-Black-Phantom-Product-3.jpg?fit=fill&w=768&h=500"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Black Phantom"]
  },
  {
    id: 2,
    nombre: "Air Jordan 1 Low Travis Scott Reverse Mocha",
    descripcion: "Versión reverse mocha del AJ1 Low con suede marrón, Swoosh oversized invertido y detalles en rojo.",
    precio: 1100,
    imagen: "https://images.goat.com/products/cd4487-162_1.jpg?io=getty-cq&fit=fill&w=768&h=500",
    galeria: [
      "https://images.goat.com/products/dm7866-162_2.jpg",
      "https://images.goat.com/products/dm7866-162_3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Reverse Mocha"]
  },
  {
    id: 3,
    nombre: "Air Jordan 1 Travis Scott Fragment",
    descripcion: "Colaboración Fragment x Travis Scott con upper blanco-azul, Swoosh invertido y logos co-brandeados.",
    precio: 1500,
    imagen: "https://images.stockx.com/images/Air-Jordan-1-High-OG-SP-Fragment-Design-x-Travis-Scott-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Air-Jordan-1-High-OG-SP-Fragment-Design-x-Travis-Scott-Product-2.jpg",
      "https://images.stockx.com/images/Air-Jordan-1-High-OG-SP-Fragment-Design-x-Travis-Scott-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Fragment"]
  },
  {
    id: 4,
    nombre: "Air Jordan 1 Retro High Travis Scott",
    descripcion: "Clásico high-top Travis Scott mocha con Swoosh backward, suede café y branding Cactus Jack.",
    precio: 1400,
    imagen: "https://images.goat.com/products/cd4487-100_1.jpg?io=getty-cq&fit=fill&w=768&h=500",
    galeria: [
      "https://images.goat.com/products/cd4487-100_2.jpg",
      "https://images.goat.com/products/cd4487-100_3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Mocha"]
  },
  {
    id: 5,
    nombre: "Air Jordan 3 Retro Black Cat",
    descripcion: "Edición 2025 Black Cat toda en nubuck negro con elephant print y unidad Air visible.",
    precio: 1000,
    imagen: "https://images.stockx.com/images/Air-Jordan-3-Retro-Black-Cat-2025-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Air-Jordan-3-Retro-Black-Cat-2025-Product-2.jpg",
      "https://images.stockx.com/images/Air-Jordan-3-Retro-Black-Cat-2025-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Black Cat"]
  },
  {
    id: 6,
    nombre: "Air Jordan 3 Retro Pure Money",
    descripcion: "Pure Money 2025 en white/silver con elephant print clásico y Nike Air en el talón.",
    precio: 950,
    imagen: "https://images.goat.com/products/ct8532-111_1.jpg?io=getty-cq&fit=fill&w=768&h=500",
    galeria: [
      "https://images.goat.com/products/ct8532-111_2.jpg",
      "https://images.goat.com/products/ct8532-111_3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Pure Money"]
  },
  {
    id: 7,
    nombre: "Air Jordan 3 J Balvin Sunset",
    descripcion: "Colaboración J Balvin Medellín Sunset con gradient orange y elephant print gris.",
    precio: 1100,
    imagen: "https://images.stockx.com/images/Air-Jordan-3-Retro-SP-J-Balvin-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Air-Jordan-3-Retro-SP-J-Balvin-Product-2.jpg",
      "https://images.stockx.com/images/Air-Jordan-3-Retro-SP-J-Balvin-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Sunset"]
  },
  {
    id: 8,
    nombre: "Air Jordan 3 J Balvin Rio",
    descripcion: "J Balvin Rio con upper negro, gradient solar flare y smiley face logo.",
    precio: 1050,
    imagen: "https://images.stockx.com/images/Air-Jordan-3-Retro-J-Balvin-Rio-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Air-Jordan-3-Retro-J-Balvin-Rio-Product-2.jpg",
      "https://images.stockx.com/images/Air-Jordan-3-Retro-J-Balvin-Rio-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Rio"]
  },
  {
    id: 9,
    nombre: "Air Jordan 4 Black Cat",
    descripcion: "Black Cat 2025 con nubuck negro premium, mesh y detalles reflectantes.",
    precio: 1150,
    imagen: "https://images.stockx.com/images/Air-Jordan-4-Retro-Black-Cat-2025-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Air-Jordan-4-Retro-Black-Cat-2025-Product-2.jpg",
      "https://images.stockx.com/images/Air-Jordan-4-Retro-Black-Cat-2025-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Black Cat"]
  },
  {
    id: 10,
    nombre: "Air Jordan 4 Fear",
    descripcion: "Packers Fear 2024 en black/white con suede y platinum accents.",
    precio: 1250,
    imagen: "https://images.goat.com/products/fq8138-002_1.jpg?io=getty-cq&fit=fill&w=768&h=500",
    galeria: [
      "https://images.goat.com/products/fq8138-002_2.jpg",
      "https://images.goat.com/products/fq8138-002_3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Fear"]
  },
  {
    id: 11,
    nombre: "Air Jordan 4 Frozen Moments",
    descripcion: "Women's exclusive Frozen Moments en greyscale con silver metallic accents.",
    precio: 1300,
    imagen: "https://images.stockx.com/images/Air-Jordan-4-Retro-Frozen-Moments-Womens-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Air-Jordan-4-Retro-Frozen-Moments-Womens-Product-2.jpg",
      "https://images.stockx.com/images/Air-Jordan-4-Retro-Frozen-Moments-Womens-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Frozen Moments"]
  },
  {
    id: 12,
    nombre: "Air Jordan 4 Military Black",
    descripcion: "Military Black con suede negro, elephant print y netting lateral.",
    precio: 1100,
    imagen: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product-2.jpg",
      "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Military Black"]
  },
  {
    id: 13,
    nombre: "Air Jordan 4 Military Blue",
    descripcion: "Clásico Military Blue con durabuck azul y Jumpman woven.",
    precio: 1200,
    imagen: "https://images.goat.com/images/Air-Jordan-4-Retro-Military-Blue-Product.jpg",
    galeria: [
      "https://images.goat.com/images/Air-Jordan-4-Retro-Military-Blue-2.jpg",
      "https://images.goat.com/images/Air-Jordan-4-Retro-Military-Blue-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Military Blue"]
  },
  {
    id: 14,
    nombre: "Air Jordan 4 Red Thunder",
    descripcion: "Red Thunder con black/red suede y cement speckle.",
    precio: 1350,
    imagen: "https://images.stockx.com/images/Air-Jordan-4-Retro-Red-Thunder-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Air-Jordan-4-Retro-Red-Thunder-Product-2.jpg",
      "https://images.stockx.com/images/Air-Jordan-4-Retro-Red-Thunder-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Red Thunder"]
  },
  {
    id: 15,
    nombre: "Air Jordan 4 White Thunder",
    descripcion: "White Thunder variante con base blanca y accents negros.",
    precio: 1280,
    imagen: "https://images.stockx.com/images/Air-Jordan-4-Retro-White-Thunder-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Air-Jordan-4-Retro-White-Thunder-Product-2.jpg",
      "https://images.stockx.com/images/Air-Jordan-4-Retro-White-Thunder-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["White Thunder"]
  },
  {
    id: 16,
    nombre: "Air Jordan 4 Off White",
    descripcion: "Colaboración Off-White con deconstructed design y zip tie.",
    precio: 2500,
    imagen: "https://images.stockx.com/images/Air-Jordan-4-Retro-Off-White-Sail-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Air-Jordan-4-Retro-Off-White-Sail-Product-2.jpg",
      "https://images.stockx.com/images/Air-Jordan-4-Retro-Off-White-Sail-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Off White"]
  },
  {
    id: 17,
    nombre: "Nike Air Force 1 Supreme Blanco",
    descripcion: "Air Force 1 Supreme collaboration en blanco puro con box logo.",
    precio: 900,
    imagen: "https://images.stockx.com/images/Nike-Air-Force-1-Supreme-White-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Nike-Air-Force-1-Supreme-White-Product-2.jpg",
      "https://images.stockx.com/images/Nike-Air-Force-1-Supreme-White-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Blanco"]
  },
  {
    id: 18,
    nombre: "Nike Air Force 1 Supreme Negro",
    descripcion: "Air Force 1 Supreme negro con detalles premium y branding Supreme.",
    precio: 950,
    imagen: "https://images.stockx.com/images/Nike-Air-Force-1-Supreme-Black-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Nike-Air-Force-1-Supreme-Black-Product-2.jpg",
      "https://images.stockx.com/images/Nike-Air-Force-1-Supreme-Black-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Negro"]
  },
  {
    id: 19,
    nombre: "Nike Air Force 1 Drake NOCTA",
    descripcion: "NOCTA x AF1 de Drake con diseño minimalista y suela chunky.",
    precio: 1100,
    imagen: "https://images.goat.com/products/nocta-air-force-1_1.jpg?io=getty-cq&fit=fill&w=768&h=500",
    galeria: [
      "https://images.goat.com/products/nocta-air-force-1_2.jpg",
      "https://images.goat.com/products/nocta-air-force-1_3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["NOCTA"]
  },
  {
    id: 20,
    nombre: "Louis Vuitton LV Skate Grey",
    descripcion: "LV Skate en grey monogram canvas con rubber sole chunky.",
    precio: 3500,
    imagen: "https://images.stockx.com/images/Louis-Vuitton-LV-Skate-Grey-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Louis-Vuitton-LV-Skate-Grey-Product-2.jpg",
      "https://images.stockx.com/images/Louis-Vuitton-LV-Skate-Grey-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Grey"]
  },
  {
    id: 21,
    nombre: "Louis Vuitton LV Skate Black White",
    descripcion: "LV Skate black/white monogram con diseño skate-inspired.",
    precio: 3600,
    imagen: "https://images.stockx.com/images/Louis-Vuitton-LV-Skate-Black-White-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Louis-Vuitton-LV-Skate-Black-White-Product-2.jpg",
      "https://images.stockx.com/images/Louis-Vuitton-LV-Skate-Black-White-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Black White"]
  },
  {
    id: 22,
    nombre: "Louis Vuitton LV Skate Beige White",
    descripcion: "LV Skate beige/white clásico monogram signature.",
    precio: 3550,
    imagen: "https://images.stockx.com/images/Louis-Vuitton-LV-Skate-Beige-White-Product.jpg?fit=fill&w=768&h=500",
    galeria: [
      "https://images.stockx.com/images/Louis-Vuitton-LV-Skate-Beige-White-Product-2.jpg",
      "https://images.stockx.com/images/Louis-Vuitton-LV-Skate-Beige-White-Product-3.jpg"
    ],
    tallas: ["40", "41", "42", "43", "44"],
    colores: ["Beige White"]
  }
];