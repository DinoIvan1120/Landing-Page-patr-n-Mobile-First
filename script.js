// Navegación de tablas (Monedas y Comisiones)
const tableNavLeft = document.getElementById('tableNavLeft');
const tableNavRight = document.getElementById('tableNavRight');
const tablesWrapper = document.querySelector('.tables-wrapper');

// Navegación de planes
const planNavLeft = document.getElementById('planNavLeft');
const planNavRight = document.getElementById('planNavRight');
const plansWrapper = document.querySelector('.plans-wrapper');

// Función para navegar en las tablas
function scrollTables(direction) {
    const scrollAmount = tablesWrapper.offsetWidth * 0.8;
    
    if (direction === 'left') {
        tablesWrapper.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        tablesWrapper.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Función para navegar en los planes
function scrollPlans(direction) {
    const scrollAmount = plansWrapper.offsetWidth * 0.8;
    
    if (direction === 'left') {
        plansWrapper.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        plansWrapper.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Event listeners para botones de tablas
tableNavLeft.addEventListener('click', () => scrollTables('left'));
tableNavRight.addEventListener('click', () => scrollTables('right'));

// Event listeners para botones de planes
planNavLeft.addEventListener('click', () => scrollPlans('left'));
planNavRight.addEventListener('click', () => scrollPlans('right'));

// Actualizar estado de botones al hacer scroll (opcional - solo para referencias visuales)
function updateTableNavButtons() {
    // Las flechas siempre están activas
    tableNavLeft.style.opacity = '1';
    tableNavLeft.style.pointerEvents = 'auto';
    tableNavRight.style.opacity = '1';
    tableNavRight.style.pointerEvents = 'auto';
}

function updatePlanNavButtons() {
    // Las flechas siempre están activas
    planNavLeft.style.opacity = '1';
    planNavLeft.style.pointerEvents = 'auto';
    planNavRight.style.opacity = '1';
    planNavRight.style.pointerEvents = 'auto';
}

// Actualizar estado de botones al hacer scroll
tablesWrapper.addEventListener('scroll', updateTableNavButtons);
plansWrapper.addEventListener('scroll', updatePlanNavButtons);

// Inicializar estado de los botones al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    // Inicializar después de un pequeño delay para asegurar que el contenido esté renderizado
    setTimeout(() => {
        updateTableNavButtons();
        updatePlanNavButtons();
    }, 100);
});

// También actualizar cuando la ventana termine de cargar completamente
window.addEventListener('load', () => {
    updateTableNavButtons();
    updatePlanNavButtons();
});

// Touch/swipe support para dispositivos móviles
let tableStartX = 0;
let planStartX = 0;

tablesWrapper.addEventListener('touchstart', (e) => {
    tableStartX = e.touches[0].clientX;
});

tablesWrapper.addEventListener('touchmove', (e) => {
    if (!tableStartX) return;
    
    const currentX = e.touches[0].clientX;
    const diff = tableStartX - currentX;
    
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            scrollTables('right');
        } else {
            scrollTables('left');
        }
        tableStartX = 0;
    }
});

plansWrapper.addEventListener('touchstart', (e) => {
    planStartX = e.touches[0].clientX;
});

plansWrapper.addEventListener('touchmove', (e) => {
    if (!planStartX) return;
    
    const currentX = e.touches[0].clientX;
    const diff = planStartX - currentX;
    
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            scrollPlans('right');
        } else {
            scrollPlans('left');
        }
        planStartX = 0;
    }
});