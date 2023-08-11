// menu-hamb animation
export function hambAnim() {
  const menuHamb = document.querySelector(".menu-hamb");
  const hambElements = [
    document.querySelector(".line1"),
    document.querySelector(".line2"),
    document.querySelector(".line3"),
  ];
  const card = document.querySelector(".card-container");
  const navList = document.querySelector("#nav-list");
  menuHamb.addEventListener("click", () => {
    card.classList.toggle("show-card");
    hambElements.forEach((el) => {
      el.classList.toggle("anim");
    });

    navList.classList.toggle("show-nav");
  });
}

//Dropdown animation
export function dropdownAnim() {
  const elDropdown = document.querySelector(".dropdown");
  const elOptionDrop = document.querySelector(".li-drop>span");
  const arrowIcon = document.querySelector(".arrow");

  let isVisible = false;
  elOptionDrop.addEventListener("click", () => {
    elDropdown.classList.toggle("show");
    if (arrowIcon.classList.contains("right")) {
      arrowIcon.src = "./imgs/caret-down-fill.svg";
      arrowIcon.classList.remove("right");
      arrowIcon.classList.add("down");
    } else if (arrowIcon.classList.contains("down")) {
      arrowIcon.src = "./imgs/caret-right.svg";
      arrowIcon.classList.remove("down");
      arrowIcon.classList.add("right");
    }
    isVisible = !isVisible;
  });
  //verficando se o click foi e qualquer lugar sem ser o dropdown
  document.addEventListener("click", (ev) => {
    const targetEl = ev.target;
    if (targetEl !== elOptionDrop && !elDropdown.contains(targetEl)) {
      elDropdown.classList.remove("show");
      arrowIcon.classList.add("right");
      arrowIcon.src = "./imgs/caret-right.svg";
      isVisible = false;
    }
  });
}