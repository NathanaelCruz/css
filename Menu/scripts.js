const buttonHamburguer = document.querySelector(".header__button-hamburguer");
const buttonMenuWithSub = document.querySelectorAll(".menu__withSubMenu");
const menu = document.querySelector(".header__navigation");

buttonHamburguer.addEventListener("click", () => {
  const deviceWidth = window.outerWidth;

  if (deviceWidth < 767) {
    menu.classList.toggle("isOpen");
    buttonHamburguer.classList.toggle("isOpen");
  }
});

buttonMenuWithSub.forEach((button) => {
  button.addEventListener("click", () => {
    const subMenu = button.parentElement.querySelector(".menu__sub");

    subMenu.classList.toggle("isOpen");
  });
});
