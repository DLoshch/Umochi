class SiteFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer>
            <span id="footer-logo">umochi</span>

            <div id="footer-contact">
                <h3>Contact</h3>
                <address>
                    <a href="mailto:support@umochi.ie">support@umochi.ie</a>
                    <a href="tel:+15550123456">+1 (555) 012-3456</a>
                </address>
            </div>

            <div id="footer-hours">
                <h3>Opening hours</h3>
                <p><span>Mon – Thu</span> 12:00 – 22:00</p>
                <p><span>Fri – Sat</span> 12:00 – 23:00</p>
                <p><span>Sunday</span> 13:00 – 21:00</p>
            </div>

            <p id="footer-copyright">&copy; 2026 Umochi. All rights reserved.</p>
        </footer>
        `;
    }
}

customElements.define("site-footer", SiteFooter);
