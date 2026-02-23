document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.createElement("nav");
  navbar.className = "navbar navbar-expand-lg bg-white fixed-top border-bottom";

  navbar.innerHTML = `
    <div class="container">

      <a class="navbar-brand fw-semibold" href="index.html">La Huerta</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="mainNavbar">
        <ul class="navbar-nav gap-3">
          <li class="nav-item">
            <a class="nav-link" href="menu.html">Menú</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="menu2.html">Menú 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contacto</a>
          </li>
        </ul>
      </div>

    </div>
  `;

  document.getElementById("navbar-container").appendChild(navbar);

  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
      link.classList.add("disabled");
    }
  });

// Crear footer
  const footer = document.createElement("footer");
  footer.className = "footer";

  // Contenido del footer
  footer.innerHTML = `
    <div>© 2026 La Huerta</div>
    <div class="social-icons">
      <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
      <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
    </div>
  `;

  // Insertar al final del body
  document.body.appendChild(footer);

});
