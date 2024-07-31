setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "H:mm:ss:SSS [<small>] A [</small>]"
  );
  let ParisElement = document.querySelector("#paris");
  let ParisDateElement = ParisElement.querySelector(".date");
  let ParisTimeElement = ParisElement.querySelector(".time");
  let ParisTime = moment().tz("Europe/paris");
  ParisDateElement.innerHTML = ParisTime.format("MMMM Do YYYY");
  ParisTimeElement.innerHTML = ParisTime.format(
    "H:mm:ss:SSS [<small>] A [</small>]"
  );
});
