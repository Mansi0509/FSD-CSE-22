document.getElementById("loginform").addEventListener("submit", function (e) {
  e.preventDefault();

  let Username = document.getElementById("user").value;
  let Password = document.getElementById("pass").value;

  if (Username === "mansi" && Password === "12345") {
    alert("Successful");
  } else {
    alert("Fail");
  }
});
