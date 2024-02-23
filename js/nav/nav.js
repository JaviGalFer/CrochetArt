// nav.js
import { updateCartItems } from '../cart/cart.js';
export function initializeHamburger() {
    const hamburgerIcon = document.querySelector('.iconBurger');
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    const closeButton = document.querySelector('.close-button');

    // Función para mostrar/ocultar el menú
    function toggleMobileMenu() {
        mobileMenuContainer.style.display = mobileMenuContainer.style.display === 'none' ? 'block' : 'none';
    }

    // Evento clic en el ícono de hamburguesa
    hamburgerIcon.addEventListener('click', toggleMobileMenu);

    // Evento clic en el botón de cierre
    closeButton.addEventListener('click', toggleMobileMenu);

    // Evento clic en cada enlace del menú
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Cierra el menú cuando se hace clic en un enlace
            toggleMobileMenu();

            // Agrega el código para desplazarse a la sección correspondiente
            // Puedes utilizar la lógica que tengas para desplazarte a la sección
        });
    });
}