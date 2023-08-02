// menu-hamb animation
export function hambAnim() {
  const elMenu = document.querySelector(".menu-hamb");
  const hambElements = [
    document.querySelector("span.hamb-top"),
    document.querySelector("span.hamb-middle"),
    document.querySelector("span.hamb-bottom"),
  ];
  elMenu.addEventListener("click", () => {
    hambElements.forEach((el) => {
      el.classList.toggle("anim");
    });
  });
}

//Dropdown animation
export function dropdownAnim() {
  const elDropdown = document.querySelector(".dropdown");
  const elOptionDrop = document.querySelector(".drop");
  let isVisible = false;
  elOptionDrop.addEventListener("click", () => {
    elDropdown.classList.toggle("show");
    isVisible = !isVisible;
  });
}
