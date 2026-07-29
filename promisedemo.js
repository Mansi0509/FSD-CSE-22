function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register here");
      resolve();
    }, 1000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login here");
      resolve();
    }, 5000);
  });
}

function getdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetch data");
      resolve();
    }, 4000);
  });
}

function displaydata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Display data");
      resolve();
    }, 6000);
  });
}

async function test() {
  try {
    await register();
    await login();
    await getdata();
    await displaydata();

    console.log("Call Another Application");
  } catch (err) {
    console.log("Error:", err);
  }
}

test();
