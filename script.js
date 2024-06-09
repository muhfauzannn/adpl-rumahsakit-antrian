document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.querySelector(".search input");
    searchInput.addEventListener("focus", () => {
        searchInput.parentElement.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    });
    searchInput.addEventListener("blur", () => {
        searchInput.parentElement.style.boxShadow = "none";
    });

    const lihatSemuaLink = document.querySelector(".lihat-semua a");
    const categoryList = document.querySelector(".category-list");
    let categoriesVisible = true;
    lihatSemuaLink.addEventListener("click", (event) => {
        event.preventDefault();
        categoriesVisible = !categoriesVisible;
        categoryList.style.display = categoriesVisible ? "grid" : "none";
        lihatSemuaLink.textContent = categoriesVisible ? "Lihat Lebih Sedikit" : "Lihat Semua";
    });    

    const categoryItems = document.querySelectorAll(".category-list .item");
    categoryItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s ease";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    const itemHospital = document.querySelectorAll(".container-content .item-hospital");
    itemHospital.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s ease";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    

    const footerItems = document.querySelectorAll(".footer .item-footer");
    footerItems.forEach(item => {
        item.addEventListener("click", () => {
            footerItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        });
    });
});
