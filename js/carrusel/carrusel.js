// carrusel.js
export function initializeCarrusel() {
    console.log('Carousel initialized');
    const carrusel = document.querySelector(".carrusel");
    const slides = carrusel.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const btnLeft = carrusel.querySelector(".btn--left");
    const btnRight = carrusel.querySelector(".btn--right");
    const dots = carrusel.querySelectorAll(".dot");
    let currentSlide = 0;

    // Función para actualizar la visualización del carrusel
    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? "block" : "none";
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle("dot--fill", index === currentSlide);
        });
    }

    // Llama a updateCarousel al iniciar
    updateCarousel();

    // Función para manejar el clic en el botón izquierdo
    btnLeft.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    // Función para manejar el clic en el botón derecho
    btnRight.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    });

    // Función para manejar el clic en los dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Configurar el auto avance cada 5 segundos
    setInterval(function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 5000);

    // Función para manejar las teclas de flecha izquierda/derecha
    document.addEventListener('keydown', handleKeySlider);

    function handleKeySlider(e){
        if (e.key === 'ArrowLeft'){
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        } else if (e.key === 'ArrowRight'){
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }
    }

    // Exportar la función updateCarousel
    return { updateCarousel };
}
