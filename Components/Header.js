class SiteHeader extends HTMLElement {
    connectedCallback(){
        const root = this.getAttribute("root") ?? "";
        this.innerHTML = `
        <header>
            <a id="logo">
                <img src="${root}Icons/logo.svg" alt="umochi logo" width="24">
                <span>umochi</span>
            </a>
            <button id="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="menu-dropdown">
                <img src="${root}Icons/menu.svg" alt="" width="24">
            </button>
            <div id="menu-dropdown">
                <nav>
                    <ul id="nav-links">
                        <li><a href="${root}index.html">Home</a></li>
                        <li><a href="${root}Pages/menu.html">Menu</a></li>
                        <li><a href="${root}Pages/about.html">About</a></li>
                    </ul>
                </nav>
                <a id="cart">
                    <span>Basket(0)</span>
                    <img src="${root}Icons/basket.svg" alt="shopping basket" width="36">
                </a>
            </div>
        </header>
        `;

        const normalize = path => path.replace(/index\.html$/, "");
        this.querySelectorAll("#nav-links a").forEach(link => {
            if (normalize(link.pathname) === normalize(location.pathname)) {
                link.setAttribute("aria-current", "page");
            }
        });
    }
}

customElements.define("site-header", SiteHeader);
