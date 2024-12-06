import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

function initSlider() {
  new Swiper(".payments-slider", {
    modules: [Autoplay, EffectFade],
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 500,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
  });
}

export function setPaymentMethods(countries, location) {
  // Find the country by name, or default to 'all'
  let country = countries.find((country) => country.name === location);

  // If the country isn't found, default to 'all'
  if (!country) {
    country = countries.find((country) => country.name === "all");
  }

  // Sticky footer payments
  const paymentFooter = document.querySelector(".payments-footer");
  paymentFooter.innerHTML = ""; // Clears the container before adding new payment methods

  // Loop through the payment methods, limit to a maximum of 4
  country.payments.slice(0, 4).forEach((paymentName) => {
    // Create a new list item and icon for each element
    let item = document.createElement("div");
    item.classList.add("swiper-slide");
    let itemIcon = document.createElement("img");
    item.appendChild(itemIcon);

    // Set the src and alt attributes of the icon
    itemIcon.setAttribute("src", paymentName);
    itemIcon.setAttribute("alt", "Payment icon");

    // Append the item to the container
    paymentFooter.appendChild(item);
  });

  // Main footer payments
  const paymentFooter2 = document.querySelector(".main-payments-list");
  paymentFooter2.innerHTML = ""; // Clears the container before adding new payment methods

  // Loop through the payment methods, limit to a maximum of 4
  country.payments.slice(0, 6).forEach((paymentName) => {
    // Create a new list item and icon for each element
    let item = document.createElement("div");
    item.classList.add("main-footer-payments-item");
    let itemIcon = document.createElement("img");
    item.appendChild(itemIcon);

    // Set the src and alt attributes of the icon
    itemIcon.setAttribute("src", paymentName);
    itemIcon.setAttribute("alt", "Payment icon");

    // Append the item to the container
    paymentFooter2.appendChild(item);
  });
  // Main footer payments slider
  const paymentFooter3 = document.querySelector(".main-payments-list-slider");
  paymentFooter3.innerHTML = ""; // Clears the container before adding new payment methods

  // Loop through the payment methods, limit to a maximum of 4
  country.payments.slice(0, 6).forEach((paymentName) => {
    // Create a new list item and icon for each element
    let item = document.createElement("div");
    item.classList.add("main-footer-payments-item");
    let itemIcon = document.createElement("img");
    item.appendChild(itemIcon);

    // Set the src and alt attributes of the icon
    itemIcon.setAttribute("src", paymentName);
    itemIcon.setAttribute("alt", "Payment icon");

    // Append the item to the container
    paymentFooter3.appendChild(item);
  });

  const modalPaymentsList = document.querySelectorAll(".payments-list-modal");
  modalPaymentsList.forEach((list) => {
    list.innerHTML = ""; // Clears the container before adding new payment methods
    country.payments.slice(0, 4).forEach((paymentName) => {
      // Create a new list item and icon for each element
      let item = document.createElement("div");
      // item.classList.add("main-footer-payments-item");
      let itemIcon = document.createElement("img");
      item.appendChild(itemIcon);

      // Set the src and alt attributes of the icon
      itemIcon.setAttribute("src", paymentName);
      itemIcon.setAttribute("alt", "Payment icon");

      // Append the item to the container
      list.appendChild(item);
    });
  });

  initSlider();
}
