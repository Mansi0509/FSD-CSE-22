function register() {
    
    waitfordelay(1000);
    console.log("register here");
    
}
function login() {
    
    waitfordelay(5000);
    console.log("login here");
    
}
function getdata() {
    
    waitfordelay(4000);
    console.log("fetch data");
    
}
function displaydata() {
    waitfordelay(6000);
    console.log("display data");
    
}
function waitfordelay(delay) {
    const mt = Date.now() + delay;
    while (Date.now() < mt) {
        
    }
}
register();
login();
getdata();
displaydata();
console.log("Call Anothe Application");
