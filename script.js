// Puedes añadir animaciones extra aquí
console.log("Landing page dinámica cargada.");

let indiceSlide = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("activa");
    if (i === index) slide.classList.add("activa");
  });
}

function siguienteSlide() {
  indiceSlide = (indiceSlide + 1) % slides.length;
  mostrarSlide(indiceSlide);
}

function anteriorSlide() {
  indiceSlide = (indiceSlide - 1 + slides.length) % slides.length;
  mostrarSlide(indiceSlide);
}

setInterval(siguienteSlide, 4000); // automático cada 4 segundos
mostrarSlide(indiceSlide);
