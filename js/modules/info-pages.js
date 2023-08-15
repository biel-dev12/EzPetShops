export function activeLabel(){
    const input = document.querySelectorAll(".inps input");
    const label = document.querySelectorAll(".inps label");

    if(input.value !== null){
        input.classList.add("active-focus");
    }
    else{
        input.classList.remove("active-focus");
    }
}