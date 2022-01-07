import { data } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  let periodName = "Daily";
  const buttonChangeTime = document.querySelectorAll(".period__button");
  const contentTimesTracking = document.querySelector(".list__timeTracking");

  const renderTimeTracking = (listToRender) => {
    let renderObject = listToRender.map((itemRender) => {
      const previewRender = [
        `<li class="timeTracking card color-${itemRender.title
          .toLowerCase()
          .replace(" ", "-")}">`,
        '<figure class="timeTracking__content">',
        `<img src="./assets/images/icon-${itemRender.title
          .toLowerCase()
          .replace(" ", "-")}.svg" alt="Icon of ${
          itemRender.title
        }" class="timeTracking__image"/>`,
        "</figure>",
        '<section class="timeTracking__info">',
        '<header class="info__header">',
        `<h2 class="header__title">${itemRender.title}</h2>`,
        '<button type="button" class="header__button">&#8226; &#8226; &#8226;</button>',
        "</header>",
        `<h2 class="info__time">${itemRender.timeframes.current}hrs</h2>`,
        '<footer class="info__footer">',
        `<p class="footer__period-timeTracking">Last ${periodName} - ${itemRender.timeframes.previous}hrs</p>`,
        "</footer></section></li>",
      ];

      return previewRender.join("");
    });
    contentTimesTracking.insertAdjacentHTML(
      "afterbegin",
      renderObject.join("")
    );
  };

  const loadTimeTracking = (period) => {
    periodName = period;
    const listTimeTracking = data.map((timetracking) => {
      const timeTrackingFilter = {
        title: timetracking.title,
        timeframes: timetracking.timeframes[period],
      };
      return timeTrackingFilter;
    });

    renderTimeTracking(listTimeTracking);
  };

  buttonChangeTime.forEach((button) => {
    button.addEventListener("click", (element) => {
      const periodName = element.target.getAttribute("data-filter");
      contentTimesTracking.innerHTML = "";
      loadTimeTracking(periodName);
    });
  });

  loadTimeTracking("daily");
});
