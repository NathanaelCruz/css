const validateSpaceWhite = (text) => {
  if (text === "") return true;
};

const validateEmail = (text) => {
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (text.match(regexEmail) === null) return true;
};

export const validateFormFooter = () => {
  const button = document.querySelector(".form__button");
  const input = document.querySelector(".form__input");
  const alert = document.querySelector(".form__alert");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const email = input.value;

    if (validateSpaceWhite(email) || validateEmail(email)) {
      alert.classList.add("isActive");
      input.classList.add("isError");
    }
  });
};
