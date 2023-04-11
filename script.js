function substituteNumbers() {
  var userNumber = document.getElementById("userNumber").value;
  var result = ("");
  for (var i = 0; i < userNumber.length; i++) {
    if (userNumber[i] === "1") {
      result += "beep";
    } else if (userNumber[i] === "2") {
      result += "boop";
    } else if (userNumber[i] === "3") {
      result += "won't you be my neighbor?";
    } else {
      result += userNumber[i];
    }
  }
  document.getElementById("resultBox").style.display = "block";
      document.getElementById("resultBox").querySelector("#result").innerHTML = result;
 
}