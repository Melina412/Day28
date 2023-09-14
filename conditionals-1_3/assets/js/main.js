function adult() {
  let age = parseInt(document.getElementById("input").value);
  console.log("klicktest");
  if (age >= 18) {
    document.getElementById("result").innerHTML =
      "Ja, Du kannst Shisha rauchen.";
  } else if (age < 18) {
    document.getElementById("result").innerHTML =
      "Du darfst noch nicht Shisha rauchen.";
  } else {
    document.getElementById("result").innerHTML = " ";
  }
}
