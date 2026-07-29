function register() {
  setTimeout(() => {
    console.log("Register here");
  }, 1000);
}

function login() {
  setTimeout(() => {
    console.log("Login here");
  }, 5000);
}

function getdata() {
  setTimeout(() => {
    console.log("Fetch data");
  }, 4000);
}

function displaydata() {
  setTimeout(() => {
    console.log("Display data");
  }, 6000);
}

register();
login();
getdata();
displaydata();

console.log("Call Another Application");
