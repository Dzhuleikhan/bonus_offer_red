import { changeModalLanguage } from "./modalLanguage";
import { translations } from "/public/translations";
import { getLocation } from "./geoLocation";
import gsap from "gsap";

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
    az: "Azərbaycan dili",
    ru: "Русский",
  };
  headerLangBtn.setAttribute(
    "src",
    `./img/flags/${lang}.svg` || `./img/flags/en.svg`,
  );
  headerLangName.innerHTML = languageNames[lang];
  document.querySelector("html").setAttribute("lang", lang);
}

async function determineLanguage() {
  const location = await getLocation();
  const userLang = navigator.language.split("-")[0];

  const countryLangMap = {
    US: "en",
    AZ: "az",
    RU: "ru",
    // Add more country codes and their corresponding languages as needed
  };
  lang = userLang || countryLangMap[location.countryCode] || "en";

  return lang;
}

async function mainFunction() {
  try {
    lang = await determineLanguage();
    changeLanguage("az");
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
  });
});
