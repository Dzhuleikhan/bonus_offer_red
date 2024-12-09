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
      if (lang === "az") {
        termsBtnText.textContent = "Gizlət";
      } else if (lang === "uz") {
        termsBtnText.textContent = "Yashirish";
      } else {
        termsBtnText.textContent = "Hide";
      }
      termsBtnArrow.style.transform = "rotate(180deg)";
    } else {
      termsBody.style.maxHeight = null;
      if (lang === "az") {
        termsBtnText.textContent = "Şərtlər və Qaydalar";
      } else if (lang === "uz") {
        termsBtnText.textContent = "Shartlar va sharoitlar";
      } else {
        termsBtnText.textContent = "terms and conditions";
      }
      termsBtnArrow.style.transform = "rotate(0deg)";
    }
  });
}
