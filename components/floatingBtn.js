class FloatingBtn extends HTMLElement {
    constructor() {
        super();

        this.heading = "";
        this.subheading = "";
    }

    connectedCallback() {
        this.heading = this.getAttribute("heading");
        this.subheading = this.getAttribute("subheading");

        this.render();
    }

    render() {
        this.innerHTML = `
      <section id="floatingBtnSection">
      <div class="whatapp"><i class="fab fa-whatsapp fa-2x"></i></div>
      <div class="wechat"><i class="fab fa-weixin fa-2x"></i></div>
      <div class="floatphone"><i class="fas fa-phone fa-2x"></i></div>
      <div class="floatemail"><i class="fas fa-envelope fa-2x"></i></div>
        </section>
        `;
    }
}

customElements.define("floating-btn", FloatingBtn);  