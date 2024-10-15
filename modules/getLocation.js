export async function getLocation() {
  // let url = "https://ipinfo.io/json?token=fcd65e5fcfdda1";
  let url =
    "https://apiip.net/api/check?accessKey=e36d20c4-8c27-4d14-a0de-28ad9ccda291";
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
