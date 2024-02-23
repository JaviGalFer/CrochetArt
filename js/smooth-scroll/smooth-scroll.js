// smooth-scroll.js
export function initializeSmoothScroll() {
    //SCROLL SMOOTH
    const btnScrollTos = document.querySelectorAll('.btn--scroll-to');

    // Iterar sobre cada botón y agregar el evento de clic
    btnScrollTos.forEach(btnScrollTo => {
        btnScrollTo.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtener el identificador del objetivo desde el atributo href
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Verificar si el elemento objetivo existe
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}
