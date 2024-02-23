// main.js
import { initializeCarrusel } from './carrusel/carrusel.js';
import { initializeModal } from './modal/modal.js';
import { initializeSmoothScroll } from './smooth-scroll/smooth-scroll.js';
import { initializeStickyNavigation } from './sticky-navigation/sticky-navigation.js';
import { initializeAcordeon } from './acordeon/acordeon.js';
import { initializeFilter } from './filter/filter.js';
import { initializeCardContainer } from './card-container/card-container.js';
import { initializeHamburger } from './nav/nav.js';
import { initializeCart } from './cart/cart.js';

document.addEventListener('DOMContentLoaded', function () {
    initializeHamburger(); 
    initializeStickyNavigation();
    initializeCart(); 
    initializeCarrusel();
    initializeModal();
    initializeSmoothScroll();
    initializeAcordeon();
    initializeFilter();
    initializeCardContainer();
    
});
