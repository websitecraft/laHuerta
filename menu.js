document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".menu-section");

  menuData.forEach(category => {
    const section = document.createElement("section");
    section.className = "menu-category-modern";

    section.innerHTML = `
      <h2 class="menu-title-decorated">${category.category}</h2>

      <div class="menu-modern-list">
        ${category.items.map(item => `
          <article class="menu-item-modern">
            <img src="${item.image}" alt="${item.name}" class="item-img"/>

            <div class="item-info">
              <div class="item-top">
                <h3 class="item-name">${item.name}</h3>
               
              </div>

              <p class="item-desc">${item.description}</p>
               <span class="item-price">$${item.price} MXN</span>
            </div>
          </article>
        `).join("")}
      </div>
    `;

    container.appendChild(section);
  });
});