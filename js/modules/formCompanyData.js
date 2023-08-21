export function animateInput(){
    const inputs = document.querySelectorAll(".inps > input");

    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            if (!input.value) {
                input.classList.remove("active-inp");
            } else {
                input.classList.add("active-inp");
            }
        });
    });
    

}