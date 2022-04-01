class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
      * {
        margin: 0;
        box-sizing: border-box;
      }

      .header {
        margin-top: var(--mt-header, 24px);
      }

      .header__container {
        width: calc(100% - var(--w-header-container, 48px));
        margin-left: var(--ml-header-container, auto);
        margin-right: var(--mr-header-container, auto);
      }

      .header__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .header__nav {
        position: absolute;
        width: 100%;
        max-width: 250px;
        height: 100%;
        top: var(--top, -100%);
        bottom: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(81.5485px);
        z-index: 3;
      }

      .header__nav--hidden {
        --top: 0;
      }

      .menu {
        list-style: none;
        padding-left: 0;
        display: flex;
        gap: 32px;
        flex-direction: column;
        align-self: flex-start;
        margin-left: 32px;
        margin-top: 118px;
      }

      .menu__link {
        color: var(--color-white);
        font-family: var(--font-family-barlow-condensed);
        font-size: 16px;
        letter-spacing: 2.7px;
        line-height: 19px;
        text-transform: uppercase;
        text-decoration: none;
        display: grid;
        grid-template-columns: 18px auto;
        gap: 11px;
      }

      .menu__link--number {
        font-weight: 700;
      }

      .header__button {
        cursor: pointer;
        width: 24px;
        height: 21px;
        background-image: var(--bgi-button, url(../assets/shared/icon-hamburger.svg));
        background-repeat: no-repeat;
        background-position: center center;
        z-index: 3;
      }

      .header__button--close {
        --bgi-button: url(../assets/shared/icon-close.svg);
      }


      @media screen and (min-width: 768px) {
        .header__container {
          --w-header-container: 38px;
          --ml-header-container: auto;
          --mr-header-container: 0;
        }

        .header__logo {
          width: 48px;
          height: 48px;
        }

        .header__logo img {
          width: 100%;
          height: 100%;
        }

        .header__nav {
          --top: 0;
          height: 96px;
          max-width: 450px;
          background-color: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(81.5485px);
          display: flex;
        }

        .menu {
          align-self: center;
          flex-direction: row;
          justify-content: space-between;
          margin-left: 48px;
          margin-right: 48px;
          margin-top: 0;
          gap: 0;
          align-items: center;
          width: 100%;
        }

        .menu__item {
          position: relative;
        }

        .menu__item::before {
          position: absolute;
          content: '';
          height: 3px;
          width: auto;
          bottom: -38px;
          background-color: var(--bgc-item);
          left: 0;
          right: 0;
        }

        .menu__item:hover::before {
          --bgc-item: var(--color-white);
        }

        .menu__item--active::before {
          --bgc-item: var(--color-white);
        }

        .menu__link {
          font-size: 14px;
          display: inline-block;
        }

        .menu__link--number {
          display: none;
        }

        .header__button {
          display: none;
        }
      }

      @media screen and (min-width: 980px) {
        .header {
          --mt-header: 64px;
        }

        .header__nav {
          --top: 40px;
          max-width: 830px;
        }
        .menu {
          margin-left: 123px;
          margin-right: 165px;
        }
        .menu__link {
          font-size: 16px;
          display: grid;
        }
        .menu__link--number {
          display: unset;
        }

      }

      @media screen and (min-width: 1440px) {
        .line {
          background-color: #979797;
          width: 100%;
          max-width: 473px;
          height: 1px;
          margin-left: 64px;
          margin-right: auto;
          z-index: 10;
        }
      }

    `;
  }

  getPathName() {
    const path = window.location.pathname;
    if (path === "/") return "index.html";

    const paths = path.split("/");
    return paths[paths.length - 1];
  }

  connectedCallback() {
    this.render();
    this.headerButton = this.shadowRoot.querySelector(".header__button");
    this.headerNav = this.shadowRoot.querySelector(".header__nav");
    this.headerButton.addEventListener("click", () => {
      this.headerButton.classList.toggle("header__button--close");
      this.headerNav.classList.toggle("header__nav--hidden");
    });
    this.activePage = this.getPathName();
    this.menuItems = this.shadowRoot.querySelectorAll(".menu__item");
    this.menuItems.forEach((item) => {
      const menuLink = item.querySelector(".menu__link");
      if (menuLink.href.includes(this.activePage)) {
        item.classList.add("menu__item--active");
      }
    });
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${HeaderComponent.styles}</style>
    <header class="header">
      <div class="header__container">
        <div class="header__content">
          <a class="header__logo" href="#">
            <img
              src="./assets/shared/logo.svg"
              alt="logo"
              width="40"
              height="40"
            />
          </a>
          <div class="line"></div>
          <nav class="header__nav">
            <ul class="header__menu menu">
              <li class="menu__item">
                <a class="menu__link" href="index.html">
                  <span class="menu__link--number">00</span>home
                </a>
              </li>
              <li class="menu__item">
                <a class="menu__link" href="destination.html">
                  <span class="menu__link--number">01</span
                  ><span>destination</span>
                </a>
              </li>
              <li class="menu__item">
                <a class="menu__link" href="crew.html">
                  <span class="menu__link--number">02</span>crew
                </a>
              </li>
              <li class="menu__item">
                <a class="menu__link" href="technology-vehicle.html">
                  <span class="menu__link--number">03</span>technology
                </a>
              </li>
            </ul>
          </nav>
          <div class="header__button"></div>
        </div>
      </div>
    </header>
    `;
  }
}

customElements.define("header-component", HeaderComponent);
