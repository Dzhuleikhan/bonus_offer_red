import { changeModalLanguage } from "./modalLanguage";
import { translations } from "/public/translations";
import { getLocation } from "./geoLocation";
import { setPaymentMethods } from "./footerPayments";
import { paymentCountries } from "../public/payments";
import gsap from "gsap";
import { settingBonusValueAndAmount } from "./settingBonusValue";
import { settingModalCurrencyAfterlanguageChange } from "./modalCurrency";
import { getSupportedLanguage } from "./geoLocation";

const headerLangBtn = document.querySelector(".header-lang-btn");
const headerLangList = document.querySelector(".header-lang-list");
const languageLinks = document.querySelectorAll(".language-link");

let lang;

if (headerLangBtn) {
  headerLangBtn.addEventListener("click", () => {
    headerLangList.classList.toggle("is-open");
  });
}

languageLinks.forEach((link) => {
  if (link) {
    link.addEventListener("click", () => {
      headerLangList.classList.remove("is-open");
    });
  }
});

function updateContent(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.innerHTML = translations[lang][key];
  });
}

function changeLanguage(lang) {
  updateContent(lang);
  updateButtonText(lang);
  setActiveLanguageBtn(lang);
  changeModalLanguage(lang);
}

function setActiveLanguageBtn(currentLang) {
  document.querySelectorAll(".language-link").forEach((el) => {
    if (el.getAttribute("data-lang") === currentLang) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

function updateButtonText(lang) {
  const headerLangBtn = document.querySelector(".header-lang-btn img");
  const headerLangName = document.querySelector(".header-lang-btn span");

  const languageNames = {
    en: "English",
    es: "Español",
    fr: "Français",
    az: "Azərbaycan dili",
    uz: "Oʻzbekcha",
    ua: "Українська",
    ru: "Русский",
    bd: "বাংলা",
    tr: "Türkçe",
    id: "Bahasa Indonesia",
    pt: "Português",
    de: "Deutsch",
    kz: "Қазақ",
    kg: "Кыргыз тили",
  };
  headerLangBtn.setAttribute(
    "src",
    `./img/flags/${lang}.svg` || `./img/flags/en.svg`,
  );
  headerLangName.innerHTML = languageNames[lang];
  document.querySelector("html").setAttribute("lang", lang);
}

export const availableLang = [
  "en",
  "es",
  "fr",
  "az",
  "uz",
  "ua",
  "ru",
  "bd",
  "tr",
  "id",
  "pt",
  "de",
  "kz",
  "kg",
];

async function determineLanguage() {
  const location = await getLocation();

  const countryLangMap = {
    EN: "en",
    ES: "es",
    FR: "fr",
    AZ: "az",
    UZ: "uz",
    UA: "ua",
    RU: "ru",
    BD: "bd",
    TR: "tr",
    ID: "id",
    PT: "pt",
    DE: "de",
    KZ: "kz",
    KG: "kg",
    // Add more country codes and their corresponding languages as needed
  };
  lang = countryLangMap[location.countryCode] || "en";

  return lang;
}

async function mainFunction() {
  try {
    lang = await determineLanguage();
    let actualCountry = await getLocation();

    changeLanguage(lang);
    settingBonusValueAndAmount(actualCountry.countryCode);
    gsap.to(".preloader", { opacity: 0, duration: 0.5 });
    document.querySelector(".wrapper").classList.remove("hidden");
  } catch (error) {
    console.error("Error determining language:", error);
  }
}
mainFunction();

document.querySelectorAll(".language-link").forEach((langBtn) => {
  langBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const targetLang = e.target.getAttribute("data-lang");
    changeLanguage(targetLang);
    changeModalLanguage(targetLang);
    setPaymentMethods(paymentCountries, targetLang);
    localStorage.setItem(
      "preferredLanguage",
      getSupportedLanguage(targetLang.toUpperCase()),
    );
    settingBonusValueAndAmount(targetLang);
    settingModalCurrencyAfterlanguageChange(targetLang.toUpperCase());
  });
});
