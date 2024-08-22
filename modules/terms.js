const termsBtn = document.querySelector(".terms-btn");
const termsBody = document.querySelector(".terms-body");
const termsBtnText = termsBtn.querySelector("p");
const termsBtnArrow = termsBtn.querySelector("svg");

if (termsBtn) {
  termsBtn.addEventListener("click", () => {
    termsBody.classList.toggle("active");

    if (termsBody.classList.contains("active")) {
      termsBody.style.maxHeight = termsBody.scrollHeight + "px";
      termsBtnText.textContent = "hide";
      termsBtnArrow.style.transform = "rotate(180deg)";
    } else {
      termsBody.style.maxHeight = null;
      termsBtnText.textContent = "terms and conditions";
      termsBtnArrow.style.transform = "rotate(0deg)";
    }
  });
}
