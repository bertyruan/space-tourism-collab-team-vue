class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = HeaderTemplate;
    }
}

//I'm using the es6-string-html vscode extension to get this string formatted like html
const HeaderTemplate = /*html*/
`
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
    <nav class="header__nav">
      <ul class="header__menu menu">
        <li class="menu__item menu__item--active">
          <a class="menu__link" href="#">
            <span class="menu__link--number">00</span>home
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            <span class="menu__link--number">01</span
            ><span>destination</span>
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            <span class="menu__link--number">02</span>crew
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            <span class="menu__link--number">03</span>technology
          </a>
        </li>
      </ul>
    </nav>
    <div class="header__button"></div>
  </div>
</div>
</header>
`

customElements.define('header-component', HeaderComponent);