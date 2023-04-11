function substituteNumbers() {
  var userNumber = document.getElementById("userNumber").value;
  var resultArray = [];
  for (var i = 0; i <= userNumber; i++) {
    if (i.toString().includes("3")) {
      resultArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      resultArray.push("Boop!");
    } else if (i.toString().includes("1")) {
      resultArray.push("Beep");
    } else {
      resultArray.push(i);
    }
  }
  document.getElementById("result").innerHTML = resultArray.join(", ");
  document.getElementById("resultBox").style.display = "block";}