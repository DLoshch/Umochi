let menuItems = document.getElementById("menu-items");
let menuButtons = document.querySelectorAll(".menu-button");
let searchBar = document.getElementById("search-bar");
let categories = ["sushi", "ramen", "desserts", "drinks"];
let summary = document.getElementById("menu-summary");
let orderBar = document.getElementById("order-bar");
let closeButton = document.getElementById("order-close");

let params = new URLSearchParams();
let state = {
    category: "all",
    filters: [],
    search: "",
}


function getParams(){
    params = new URLSearchParams(window.location.search);
    state.category = params.get("category") ?? "all";
    const rawFilter = params.get("filter");
    state.filters = rawFilter ? rawFilter.split(",").filter(Boolean) : [];
    state.search = params.get("search") ?? "";
    searchBar.value = state.search;
    render()
}


function filterFunc(product) {
    const matchesCategory =
        state.category === "all" || state.category === product.category;

    const productTags = Array.isArray(product.tags) ? product.tags : [];
    const matchesFilters = state.filters.every((filter) =>
        productTags.includes(filter)
    );

    const searchText = state.search.toLowerCase().trim();
    const productText = (product.name + " " + product.description).toLowerCase();
    const matchesSearch = productText.includes(searchText);

    return matchesCategory && matchesFilters && matchesSearch;
}


function productTemplate(product){
  return `
    <div class="menu-item">
        <div class="menu-item-media">
            <picture>
            <source srcset="../Images/${product.images.replace(/\.[^.]+$/, "")}.webp" type="image/webp">
            <img src="../Images/${product.images}" alt="${product.name}" loading="lazy">
            </picture>
        </div>
        <div class="menu-item-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        </div>
        <div class="menu-item-actions">
            <span>€${product.price.toFixed(2)}</span>
            <button class="add-button" type="button" aria-label="Add ${product.name} to order">
            <img src="../Icons/plus.svg" alt="" width="16">
            </button>
        </div>
    </div>
  `
}


function sectionTemplate(category, items){
  return `
    <section class="menu-section">
        <h2>${category}</h2>
        <div class="menu-section-items">
            ${items.map(productTemplate).join("")}
        </div>
    </section>
  `
}


function buttonTemplate(button){
  `
    <button class="category-button" data-category="all">All</button>
  `
}


function render(){
    menuButtons.forEach(function(button){
        setPressed(button)
    });

    const visible = products.filter(filterFunc);

    menuItems.innerHTML = categories.map(function(category){
        const items = visible.filter(function(product){
            return product.category === category;
        });
        return items.length ? sectionTemplate(category, items) : "";
    }).join("")
}


function setPressed(button){
    if (button.getAttribute("data-category") != null){
        let isActive = false;
        button.getAttribute("data-category") == state.category ? isActive = true : isActive = false;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive);
    }
    else if (button.getAttribute("data-filter")){
        let isActive = false;
        state.filters.includes(button.getAttribute("data-filter")) ? isActive = true : isActive = false;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive);
    }
}


menuButtons.forEach(function (item) {
  if (item.getAttribute("data-category") != null) {
        item.addEventListener("click", function () {
            state.category = item.getAttribute("data-category");
            setParams();
        });
  } else if (item.getAttribute("data-filter")) {
    item.addEventListener("click", function () {
        const filter = item.getAttribute("data-filter");
        if (!filter) return;

        const index = state.filters.indexOf(filter);
        if (index === -1) {
            state.filters.push(filter);
        } else {
            state.filters.splice(index, 1);
        }
        setParams();
    });
  }
});


orderBar.addEventListener("click", function () {
    summary.showModal();
});


closeButton.addEventListener("click", function () {
    summary.close();
});


searchBar.addEventListener("input", function () {
    state.search = searchBar.value;
    setParams();
});


function setParams(){
    params.set("category", state.category);
    params.set("filter", state.filters)
    if (state.search) {
        params.set("search", state.search);
    } else {
        params.delete("search");
    }
    console.log(params.get("filter"));
    history.replaceState(null, "", "?" + params.toString());
    render();
}

getParams();
render();