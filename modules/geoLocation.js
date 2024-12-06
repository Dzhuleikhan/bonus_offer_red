export async function getLocation() {
  let url = "api/geoip";
  let response = await fetch(url);
  let data = await response.json();
  localStorage.setItem("preferredLanguage", data.countryCode.toLowerCase());

  return data;
}

export const geoData = await getLocation();
console.log(geoData);
