// sticky-navigation.js
export function initializeStickyNavigation() {
    // STICKY NAVIGATION
    console.log('initializeStickyNavigation');
    // Obtén el elemento del nav
    const nav = document.querySelector('.nav');

    // Obtén la posición inicial del nav
    const navOffsetTop = nav.offsetTop;

    // Establece la cantidad de scroll requerida para que el nav se vuelva sticky
    const scrollThreshold = 150; // Ajusta según sea necesario

    // Agrega un event listener para el evento scroll
    window.addEventListener('scroll', () => {
        // Obtén la posición actual de la ventana
        const scrollY = window.scrollY || window.pageYOffset;

        // Calcula la opacidad en función del desplazamiento
        const opacity = Math.min(1, (scrollY - navOffsetTop) / scrollThreshold);

        // Aplica la opacidad al nav
        nav.style.opacity = opacity;

        // Verifica si la posición de desplazamiento es mayor o igual a la posición inicial del nav más el umbral
        if (scrollY >= navOffsetTop + scrollThreshold) {
            // Si es así, agrega la clase 'sticky' al nav
            nav.classList.add('sticky');
        } else {
            // Si no, elimina la clase 'sticky'
            nav.classList.remove('sticky');
            nav.style.opacity = 1; // Restablece la opacidad cuando vuelves hacia arriba
        }
    });
}
