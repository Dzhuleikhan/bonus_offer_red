import { countryFlags } from "../public/data";
import { getLocation } from "./getLocation";

export function settingGeoLocation(countryInput, className) {
  let flagSet = false;

  countryFlags.forEach((location) => {
    if (location.slug.includes(countryInput)) {
      document.querySelector(`.${className}`);
      document
        .querySelector(`.${className}`)
        .setAttribute("src", `./img/flags/${countryInput}.svg`);
      document
        .querySelector(`.${className}`)
        .setAttribute("alt", location.name);
      flagSet = true;
      setTimeout(() => {
        document.querySelector(`.${className}`).classList.remove("hidden");
      }, 1000);
    }
  });

  if (!flagSet) {
    document.querySelector(`.${className}`).setAttribute("src", "");
    document.querySelector(`.${className}`).setAttribute("alt", "");
  }
}

async function settingLocation() {
  try {
    let locationData = await getLocation();
    const countryInput = locationData.country.toLowerCase();
    settingGeoLocation(countryInput, "header-country-flag");
  } catch (error) {
    console.error("Error fetching location data:", error);
  }
}
settingLocation();