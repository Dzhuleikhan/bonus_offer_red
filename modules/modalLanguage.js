import { modalTranslations } from "../public/modalTranslations";
import { gettingBonusCurrency } from "./setBonusValue";
import { getLocation } from "./geoLocation";

function updateContent(lang) {
  const elements = document.querySelectorAll("[data-modal-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-modal-translate");
    element.innerHTML =
      modalTranslations[lang][key] || modalTranslations["en"][key];
  });
}

export function updateModalContent(lang) {
  const elements = document.querySelectorAll("[data-modal-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-modal-translate");
    element.innerHTML =
      modalTranslations[lang][key] || modalTranslations["en"][key];
  });
}

const preferredLanguage = localStorage.getItem("preferredLanguage");

function changeLanguage(lang) {
  if (preferredLanguage) {
    updateContent(preferredLanguage);
  } else {
    if (modalTranslations[lang]) {
      updateContent(lang);
      gettingBonusCurrency();
    } else {
      updateContent("en");
      gettingBonusCurrency();
    }
  }
}

export function changeModalLanguage(lang) {
  if (modalTranslations[lang]) {
    updateContent(lang);
    gettingBonusCurrency();
  } else {
    updateContent("en");
    gettingBonusCurrency();
  }
}

async function setModalLanguage() {
  try {
    const location = await getLocation();
    const locationCode = location.countryCode.toLowerCase();
    changeLanguage(locationCode);
  } catch (error) {
    console.log(error);
    changeLanguage("en");
  }
}

setModalLanguage();
