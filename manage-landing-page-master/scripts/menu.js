const Menu = () => {
  const button = document.querySelector(".header__button");
  const menu = document.querySelector(".navbar");
  const widthScreen = window.innerWidth;

  if (widthScreen <= 767) {
    button.addEventListener("click", () => {
      menu.classList.toggle("isActive");
    });
  }
};

export default Menu;
