document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".menu-section");

  menuData.forEach(category => {

    const section = document.createElement("section");
    section.className = "menu-category";

    section.innerHTML = `
      <h2 class="category-title">${category.category}</h2>
      <div class="row g-4">
        ${category.items.map(item => `
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card menu-card h-100 shadow-sm">
              <div class="card-img-wrapper">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
              </div>
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-price">$${item.price} MXN</p>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(section);
  });

});