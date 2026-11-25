const products = [
  {
    "name": "Sample Product",
    "description": "This is a sample product description.",
    "price": 19.99,
    "category": "sushi",
    "tags": ["spicy"],
    "stock": 100,
    "images": "Categories/Sushi&Rolls.png"
  },
  {
    "name": "Another Sample Product",
    "description": "This is another sample product description.",
    "price": 29.99,
    "category": "ramen",
    "tags": ["vegetarian", "gluten-free"],
    "stock": 50,
    "images": "Categories/Ramen&Wok.png"
  }
]

const categories = [
  "sushi",
  "ramen"
]

// Variables

let menuItems = document.getElementById("menu-items");
let categoryButtonsContainer = document.getElementById("category-buttons");
let categoryButtons = document.querySelectorAll(".category-button");

let params = new URLSearchParams();
let state = {
    category: "all",
}


// 1. Get state from the URL

function getParams(){
    params = new URLSearchParams(window.location.search);
    state.category = params.get("category") ?? "all";
    render()
}


// 2. Render products list

function filterFunc(product){
    if(state.category == "all") return true;
    return product.category == state.category;
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

function buttonTemplate(button){
  `
    <button class="category-button" data-category="all">All</button>
  `
}

function render(){
    categoryButtons.forEach(function(button){
      setPressed(button)
    });

    menuItems.innerHTML = products.filter(filterFunc).map(productTemplate).join("")
}


// 3. Add event listeners to buttons that change state

function setPressed(button){
    let isActive = false;
    button.getAttribute("data-category") == state.category ? isActive = true : isActive = false;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive);
}

categoryButtons.forEach(function(item){
    item.addEventListener("click", function(){
        state.category = item.getAttribute("data-category")
        setParams();
    })
})


// 4. Write state to the URL

function setParams(){
    if(state.category == "all"){
        params.delete("category");  
        history.replaceState(null, "", location.pathname);
    }
    else{
        params.set("category", state.category);
        history.replaceState(null, "", "?" + params.toString());
    }
    render();
}

getParams();
render();