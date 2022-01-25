import { debounce } from "./utils.js";

export const MenuWithBGWhite = debounce(() => {
  const header = document.querySelector(".header");
  window.onscroll = (e) => {
    let isOversized = window.scrollY > 40;

    if (isOversized) {
      header.classList.add("isBGWhite");
    } else {
      header.classList.remove("isBGWhite");
    }
  };
}, 400);

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
