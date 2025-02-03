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
      if (lang === "fr") {
        termsBtnText.textContent = "Masquer";
      } else if (lang === "en") {
        termsBtnText.textContent = "Hide";
      } else {
        termsBtnText.textContent = "Hide";
      }
      termsBtnArrow.style.transform = "rotate(180deg)";
    } else {
      termsBody.style.maxHeight = null;
      if (lang === "fr") {
        termsBtnText.textContent = "Termes et conditions";
      } else if (lang === "en") {
        termsBtnText.textContent = "Terms and Conditions";
      } else {
        termsBtnText.textContent = "terms and conditions";
      }
      termsBtnArrow.style.transform = "rotate(0deg)";
    }
  });
}
