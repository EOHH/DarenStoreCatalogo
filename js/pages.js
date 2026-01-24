/**
 * Lógica para Páginas Auxiliares (Lanzamientos y Contacto)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DE LANZAMIENTOS (Countdown) ---
    const countdowns = document.querySelectorAll('.countdown');

    if (countdowns.length > 0) {
        countdowns.forEach(counter => {
            const targetDate = new Date(counter.dataset.date).getTime();

            const updateTimer = () => {
                const now = new Date().getTime();
                const distance = targetDate - now;

                if (distance < 0) {
                    counter.innerHTML = "<div style='color:var(--color-accent); font-weight:bold;'>¡YA DISPONIBLE!</div>";
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                counter.querySelector('.days').innerText = days.toString().padStart(2, '0');
                counter.querySelector('.hours').innerText = hours.toString().padStart(2, '0');
                counter.querySelector('.minutes').innerText = minutes.toString().padStart(2, '0');
                counter.querySelector('.seconds').innerText = seconds.toString().padStart(2, '0');
            };

            updateTimer(); // Ejecutar inmediatamente
            setInterval(updateTimer, 1000); // Actualizar cada segundo
        });
    }

    // Botones de Notificación (Simulación)
    const notifyBtns = document.querySelectorAll('.btn-notify');
    notifyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("¡Listo! Te avisaremos a tu correo cuando este par esté disponible.");
            btn.innerHTML = "<i class='fa-solid fa-check'></i> Activado";
            btn.style.background = "#111";
            btn.style.color = "white";
        });
    });

    // --- 2. LÓGICA DE CONTACTO (Acordeón) ---
    const accordionItems = document.querySelectorAll('.accordion-item');

    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            
            header.addEventListener('click', () => {
                // Cerrar otros abiertos (opcional, estilo exclusivo)
                accordionItems.forEach(i => {
                    if (i !== item) i.classList.remove('active');
                });

                // Toggle actual
                item.classList.toggle('active');
            });
        });
    }

    // Validación simple formulario
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aquí iría la lógica real de envío (backend)
            // Simulación:
            alert("Mensaje enviado correctamente. El equipo de DarenStore te contactará pronto.");
            contactForm.reset();
        });
    }
});