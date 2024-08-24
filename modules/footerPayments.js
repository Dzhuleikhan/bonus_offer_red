import { getLocation } from "./getLocation";
import { paymentCountries } from "../public/data";
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

function setPaymentMethods(countries, location) {
  countries.forEach((country) => {
    if (country.name === location) {
      // Loop through the payment methods and limit to a maximum of 4
      for (let i = 0; i < country.payments.length; i++) {
        const paymentName = country.payments[i];

        // Create a new list item and icon for each element
        let item = document.createElement("div");
        item.classList.add("swiper-slide");
        let itemIcon = document.createElement("img");
        item.appendChild(itemIcon);

        // Set the src and alt attributes of the icon
        itemIcon.setAttribute("src", paymentName);
        itemIcon.setAttribute("alt", "Payment icon");

        document.querySelector(".payments-footer").appendChild(item);
      }
    }
  });
}

async function setPayments() {
  try {
    let locationData = await getLocation();
    setPaymentMethods(paymentCountries, locationData.country);
    initSlider();
  } catch (error) {
    console.error("Error fetching location data:", error);
  }
}

document.addEventListener("DOMContentLoaded", setPayments);
