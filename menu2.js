document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".menu-section");
  const navContainer = document.querySelector(".menu-nav");

  const slugify = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");


  navContainer.innerHTML = menuData.map(cat => {
  const id = slugify(cat.category);

  return `
    <a href="#${id}" class="menu-nav-link">
      ${cat.category}
    </a>
  `;
}).join("");

  menuData.forEach(category => {
        const slugify = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

    const id = slugify(category.category);
    const section = document.createElement("section");
    section.className = "menu-category-bistro";
    section.id=id


    let html = `
      <h2 class="menu-title-bistro">${category.category}</h2>
      ${category.description ? `<h5 class="menu-title-bistro-description">${category.description}</h5>` : ""}
    `;

    // 🔥 render reusable
    const renderItems = (items) => `
      <div class="menu-bistro-list">
        ${items.map(item => `
          <article class="menu-bistro-item">

            <img src="${item.image}" alt="${item.name}" class="bistro-img">

            <div class="bistro-content">

              <div class="bistro-header">
                <h3>${item.name}</h3>
                <span class="dots"></span>
                ${item.price ? `<span class="price">$${item.price} MXN</span>` : ""}
              </div>

              ${item.description ? `<p>${item.description}</p>` : ""}

              ${item.note ? `<p class="note">${item.note}</p>` : ""}

              ${item.options ? `
                <ul class="options">
                  ${item.options.map(o => `
                    <li>
                      ${typeof o === "string"
                        ? o
                        : `<span>${o.label}</span> <span>$${o.price} MXN</span>`
                      }
                    </li>
                  `).join("")}
                </ul>
              ` : ""}

              ${item.extras ? `
                <p class="extras">
                  ${item.extras.label || "Extras"} $${item.extras.price}:
                  ${item.extras.items.join(", ")}
                </p>
              ` : ""}

            </div>

          </article>
        `).join("")}
      </div>
    `;

    // 👇 SUBCATEGORÍAS (Molletes)
    if (category.subcategories) {
      html += category.subcategories.map(sub => `
        <h3 class="submenu-title">${sub.name}</h3>
        ${renderItems(sub.items)}
      `).join("");
    } else {
      html += renderItems(category.items);
    }

    section.innerHTML = html;
    container.appendChild(section);
  });


  document.querySelectorAll(".menu-nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("href").replace("#", "");
    const target = document.getElementById(id);

    if (target) {
      const offset = 140; // ajusta según tu header fijo

      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  });
});
});