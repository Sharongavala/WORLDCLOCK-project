function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "H:mm:ss [<small>] A [</small>]"
    );
  }
  let ParisElement = document.querySelector("#paris");
  if (ParisElement) {
    let ParisDateElement = ParisElement.querySelector(".date");
    let ParisTimeElement = ParisElement.querySelector(".time");
    let ParisTime = moment().tz("Europe/paris");
    ParisDateElement.innerHTML = ParisTime.format("MMMM Do YYYY");
    ParisTimeElement.innerHTML = ParisTime.format(
      "H:mm:ss [<small>] A [</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone == "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY ")}</div>
      </div>
      <div class="time">
        ${cityTime.format("H:mm:ss [<small>] A [</small>]")}
      </div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesElement = document.querySelector("#city");
citiesElement.addEventListener("change", updateCity);
