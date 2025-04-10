// Puedes añadir animaciones extra aquí
console.log("Landing page dinámica cargada.");

// ===== SLIDESHOW (protegido) =====
const slides = document.querySelectorAll(".slide");
let indiceSlide = 0;

if (slides.length > 0) {
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

  setInterval(siguienteSlide, 4000); // cada 4 segundos
  mostrarSlide(indiceSlide);
}

// ===== SIDEBAR =====
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("closeSidebar");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      sidebar.classList.add("show");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("show");
    });
  }

  const links = document.querySelectorAll(".sidebar-links a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("show");
    });
  });
});
