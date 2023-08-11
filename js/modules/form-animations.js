export function toggleForm(){
    const toggleLogin = document.querySelector(".link-login");
    const toggleSignup = document.querySelector(".link-signup"); 
    const boxLogin = document.querySelector(".login");
    const boxSignup = document.querySelector(".register");

    toggleLogin.addEventListener("click", ()=>{
        boxSignup.classList.toggle("remove-register");
        boxLogin.classList.toggle("show-login");
    });
    toggleSignup.addEventListener("click", ()=>{
        boxSignup.classList.toggle("remove-register");
        boxLogin.classList.toggle("show-login");
    });
}