function checkAirQuality() {
  let aqiIndex = parseInt(document.getElementById("index").value);
  document.getElementById("label").innerHTML = "AQI: " + aqiIndex;

  if (aqiIndex <= 50) {
    document.getElementById("concern").innerHTML =
      "Level of health concern: Good";
    document.getElementById("effect").innerHTML =
      "Level of health effect: Little or no risk";
    color.style.backgroundColor = "forestgreen";
    //
  } else if (aqiIndex > 50 && aqiIndex <= 100) {
    document.getElementById("concern").innerHTML =
      "Level of health concern: Moderate";
    document.getElementById("effect").innerHTML =
      "Level of health effect: Acceptable quality";
    color.style.backgroundColor = "gold";
    //
  } else if (aqiIndex > 100 && aqiIndex <= 150) {
    document.getElementById("concern").innerHTML =
      "Level of health concern: Unhealthy for sensitive groups";
    document.getElementById("effect").innerHTML =
      "Level of health effect: Generable publics not likely affected";
    color.style.backgroundColor = "darkorange";
  }
}
