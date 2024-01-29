// LINKING PAGES
const login = document.querySelector('.button-login');
const signup = document.querySelector('.button-register');
const signupPage = document.querySelector(".reg-btn");

login.addEventListener("click", ()=>{
    window.location.href = '/Login';
})
signup.addEventListener("click", ()=>{
    window.location.href = '/Signup';
})



signupPage.addEventListener("click", ()=>{
    window.location.href = '/Home';
})




