const termsBtn = document.querySelector(".terms-btn");
const termsBody = document.querySelector(".terms-body");
const termsBtnText = termsBtn.querySelector("p");
const termsBtnArrow = termsBtn.querySelector("svg");

if (termsBtn) {
  termsBtn.addEventListener("click", () => {
    termsBody.classList.toggle("active");
    let lang = localStorage.getItem("preferredLanguage");

    if (termsBody.classList.contains("active")) {
      termsBody.style.maxHeight = termsBody.scrollHeight + "px";
      if (lang === "en") {
        termsBtnText.textContent = "Hide";
      } else if (lang === "fr") {
        termsBtnText.textContent = " Masquer";
      } else if (lang === "es") {
        termsBtnText.textContent = "esconder";
      } else if (lang === "pt") {
        termsBtnText.textContent = "esconder";
      } else if (lang === "ru") {
        termsBtnText.textContent = "Скрыть";
      } else if (lang === "ro") {
        termsBtnText.textContent = "ascunde";
      } else if (lang === "hu") {
        termsBtnText.textContent = "elrejteni";
      } else if (lang === "pl") {
        termsBtnText.textContent = "ukrywać";
      } else if (lang === "cs") {
        termsBtnText.textContent = "skrýt";
      } else if (lang === "si") {
        termsBtnText.textContent = "skriti";
      } else if (lang === "nb") {
        termsBtnText.textContent = "skjule";
      } else if (lang === "se") {
        termsBtnText.textContent = "gömma";
      } else if (lang === "sk") {
        termsBtnText.textContent = "skryť";
      } else if (lang === "el") {
        termsBtnText.textContent = "κρύβω";
      } else if (lang === "de") {
        termsBtnText.textContent = "ausblenden";
      } else {
        termsBtnText.textContent = "Hide";
      }
      termsBtnArrow.style.transform = "rotate(180deg)";
    } else {
      termsBody.style.maxHeight = null;
      if (lang === "en") {
        termsBtnText.textContent = "Terms and conditions";
      } else if (lang === "fr") {
        termsBtnText.textContent = "Conditions générales";
      } else if (lang === "es") {
        termsBtnText.textContent = "términos y condiciones";
      } else if (lang === "pt") {
        termsBtnText.textContent = "esconder";
      } else if (lang === "ru") {
        termsBtnText.textContent = "условия и положения";
      } else if (lang === "ro") {
        termsBtnText.textContent = "termeni și condiții";
      } else if (lang === "hu") {
        termsBtnText.textContent = "feltételek";
      } else if (lang === "pl") {
        termsBtnText.textContent = "warunki i zasady";
      } else if (lang === "cs") {
        termsBtnText.textContent = "podmínky";
      } else if (lang === "si") {
        termsBtnText.textContent = "pogoji in določila";
      } else if (lang === "nb") {
        termsBtnText.textContent = "vilkår og betingelser";
      } else if (lang === "se") {
        termsBtnText.textContent = "villkor och bestämmelser";
      } else if (lang === "sk") {
        termsBtnText.textContent = "podmienky a podmienky";
      } else if (lang === "el") {
        termsBtnText.textContent = "όροι και προϋποθέσεις";
      } else if (lang === "de") {
        termsBtnText.textContent = "Allgemeine Geschäftsbedingungen";
      } else {
        termsBtnText.textContent = "Hide";
      }
      termsBtnArrow.style.transform = "rotate(0deg)";
    }
  });
}
