let slideIndex = 1;  // Empezamos con la primera imagen activa
let timer;

// Mostrar la primera imagen al cargar la página
showSlides(slideIndex);
autoSlides();

// Función para mostrar las diapositivas
function showSlides(n) {
    const slides = document.getElementsByClassName("slider__item");
    const dots = document.getElementsByClassName("dot");

    // Si slideIndex es mayor que el número de diapositivas, volver a la primera
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Si slideIndex es menor que 1, volver a la última diapositiva
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Ocultar todas las diapositivas
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remover la clase "active" de todos los puntos
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostrar la diapositiva actual y añadir la clase "active" al punto correspondiente
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Función para cambiar a la siguiente diapositiva (manual)
function plusSlides(n) {
    clearInterval(timer);  // Detener el auto-slide cuando el usuario cambia manualmente
    showSlides(slideIndex += n);
    autoSlides();  // Reiniciar el auto-slide después de la interacción manual
}

// Función para ir a una diapositiva específica
function currentSlide(n) {
    clearInterval(timer);  // Detener el auto-slide
    showSlides(slideIndex = n);
    autoSlides();  // Reiniciar el auto-slide después de la interacción manual
}

// Función para cambiar de diapositiva automáticamente cada 5 segundos
function autoSlides() {
    clearInterval(timer);  // Asegurar que no haya otros intervalos activos
    timer = setInterval(function() {
        showSlides(slideIndex += 1);
    }, 5000);  // Cambia cada 5 segundos
}
