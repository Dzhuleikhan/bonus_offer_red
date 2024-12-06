import { apiUrl } from "./fetchingDomain";

export async function getLocation() {
  let url = apiUrl + "/geoip";
  let response = await fetch(url);
  let data = await response.json();
  localStorage.setItem("preferredLanguage", data.countryCode.toLowerCase());

  return data;
}

export const geoData = await getLocation();
console.log(geoData);
