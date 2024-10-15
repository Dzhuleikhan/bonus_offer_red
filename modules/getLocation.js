export async function getLocation() {
  let url = "https://corsproxy.io/?https://ipinfo.io/json?token=fcd65e5fcfdda1";
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
