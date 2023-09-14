function adult() {
  let age = parseInt(document.getElementById("input").value);
  console.log("klicktest");
  if (age >= 18) {
    document.getElementById("result").innerHTML = "Volljährig";
  } else if (age < 18) {
    document.getElementById("result").innerHTML = "Minderjährig";
  } else {
    document.getElementById("result").innerHTML = " ";
    // verhindert, dass bei keiner eingabe volljährig angezeigt wird
  }
}
