export function toggleForm() {
  const toggleLogin = document.querySelector(".link-login");
  const toggleSignup = document.querySelector(".link-signup");
  const boxLogin = document.querySelector(".login");
  const boxSignup = document.querySelector(".register");
  const btnLogin = document.querySelector(".btn-login");
  const btnSignup = document.querySelector(".btn-signup");
  const navList = document.querySelector("#nav-list");
  const cardContainer = document.querySelector(".card-container");
  const hambElements = [
    document.querySelector(".line1"),
    document.querySelector(".line2"),
    document.querySelector(".line3"),
  ];

  toggleLogin.addEventListener("click", () => {
    boxSignup.classList.toggle("remove-register");
    boxLogin.classList.toggle("show-login");
  });
  toggleSignup.addEventListener("click", () => {
    boxSignup.classList.toggle("remove-register");
    boxLogin.classList.toggle("show-login");
  });
  btnSignup.addEventListener("click", () => {
    boxSignup.classList.remove("remove-register");
    boxLogin.classList.remove("show-login");
    navList.classList.remove("show-nav");
    cardContainer.classList.add("show-card");
    hambElements.forEach((el) => {
      el.classList.remove("anim");
    });
  });
  btnLogin.addEventListener("click", () => {
    boxLogin.classList.add("show-login");
    boxSignup.classList.add("remove-register");
    navList.classList.remove("show-nav");
    cardContainer.classList.add("show-card");
    hambElements.forEach((el) => {
      el.classList.remove("anim");
    });
  });
}
