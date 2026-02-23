document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".menu-section");

  menuData.forEach(category => {
    const section = document.createElement("section");
    section.className = "menu-category-bistro";

    section.innerHTML = `
      <h2 class="menu-title-bistro">${category.category}</h2>

      <div class="menu-bistro-list">
        ${category.items.map(item => `
          <article class="menu-bistro-item">

            <img src="${item.image}" alt="${item.name}" class="bistro-img">

            <div class="bistro-content">
              <div class="bistro-header">
                <h3>${item.name}</h3>
                <span class="dots"></span>
                <span class="price">$${item.price} MXN</span>
              </div>

              <p>${item.description}</p>
            </div>

          </article>
        `).join("")}
      </div>
    `;

    container.appendChild(section);
  });
});