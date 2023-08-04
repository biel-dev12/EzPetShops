// menu-hamb animation
export function hambAnim() {
  const menuHamb = document.querySelector(".menu-hamb");
  const hambElements = [
    document.querySelector(".line1"),
    document.querySelector(".line2"),
    document.querySelector(".line3"),
  ];
  const navList = document.querySelector("#nav-list");
  menuHamb.addEventListener("click", () => {
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
    arrowIcon.classList.remove("bi-caret-right");
    arrowIcon.classList.add("bi-caret-down-fill");
    isVisible = !isVisible;
    if(isVisible === false){ 
      arrowIcon.classList.remove("bi-caret-down-fill");
      arrowIcon.classList.add("bi-caret-right");
    }
  });
  //verficando se o click foi e qualquer lugar sem ser o dropdown
  document.addEventListener("click", (ev) => {
    const targetEl = ev.target;
    if(targetEl !== elOptionDrop && !elDropdown.contains(targetEl)){
      elDropdown.classList.remove("show");
      // arrowIcon.classList.remove("bi-caret-down-fill");
      arrowIcon.classList.add("bi-caret-right");
      isVisible = false;
    }
    });
}


