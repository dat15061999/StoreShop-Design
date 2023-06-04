var MenuItems = document.getElementById('MenuItems')
MenuItems.style.maxHeight = '0px';
function menutoggle() {
    if (MenuItems.style.maxHeight == '0px') {
        MenuItems.style.maxHeight = '200px';
    } else {
        MenuItems.style.maxHeight = '0px';
    }
}
// ---- account -----
let loginForm = document.getElementById('LoginForm')
let regForm = document.getElementById('RegForm');
let indicator = document.getElementById('Indicator')
function register() {
    regForm.style.transform = 'translateX(0px)';
    loginForm.style.transform = 'translateX(0px)';
    indicator.style.transform = 'translateX(100px)';
}
function login() {
    regForm.style.transform = 'translateX(300px)';
    loginForm.style.transform = 'translateX(300px)';
    indicator.style.transform = 'translateX(0px)';
}

function goLogin() {
    let addLogin = document.getElementById('AddLogin').value;
    let addpassword = document.getElementById('Addpassword').value;
    console.log(addLogin);
    console.log(addpassword);
    if (addLogin == 'admin' && addpassword == '123456') {
        window.location.href = '/admin.html';
    }
}