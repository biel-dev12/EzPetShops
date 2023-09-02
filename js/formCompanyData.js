import { updateDisplayedDatas } from "./modules/confirmDatas.js";

const formSteps = Array.from(document.querySelectorAll('.form-step'));
const prevButtons = Array.from(document.querySelectorAll('.prev-button'));
const nextButtons = Array.from(document.querySelectorAll('.next-button'));
const form = document.getElementById('stepForm');
const inputs = document.querySelectorAll(".inps input");
const modalFormSubmitted = document.querySelector(".form-submitted");

let currentStep = 0;

function updateStepVisibility() {
  formSteps.forEach((step, index) => {
    step.style.display = index === currentStep ? 'flex' : 'none';
  });
}

function isStepValid() {
  const stepInputs = formSteps[currentStep].querySelectorAll('input');
  let isValid = true;

  stepInputs.forEach(input => {
    if (input.value.trim() === '') {
      input.classList.add("error");
      isValid = false;

      let errorMsg = input.parentElement.querySelector(".error-message");
      if (!errorMsg) {
        errorMsg = document.createElement("span");
        errorMsg.classList.add("error-message");
        errorMsg.textContent = "*Esse campo precisa ser preenchido!";
        input.parentElement.insertBefore(errorMsg, input);
      }
    } else {
      input.classList.remove("error");
      const errorMsg = input.parentElement.querySelector(".error-message");
      if (errorMsg) {
        errorMsg.remove();
      }
    }
  });

  return isValid;
}

inputs.forEach(input => {
  input.addEventListener('input', () => {
    updateDisplayedDatas(); // Chama a função para atualizar os dados em tempo real
  });
});

function goToStep(step) {
  if (step >= 0 && step < formSteps.length) {
    currentStep = step;
    updateStepVisibility();
  }
}

prevButtons.forEach((button, index) => {
  button.addEventListener('click', event => {
    event.preventDefault();
    goToStep(currentStep - 1); // Vá para a etapa anterior
  });
});

nextButtons.forEach((button, index) => {
  button.addEventListener('click', event => {
    event.preventDefault();
    if (isStepValid()) {
      goToStep(index + 1);
    }
  });
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!form.checkValidity()) {
    event.stopPropagation();
  } else {
    // Mostrar o modal após o envio bem-sucedido
    const petshopName = document.querySelector(".form-submitted h1 span");
    const inpPetshopName = document.querySelector("input[name='fantasy-name']").value;
    const mainAndHeader = [document.querySelector("#main-section2"), document.querySelector("#header")]
    modalFormSubmitted.style.display = "flex";
    petshopName.innerText = inpPetshopName;
    mainAndHeader.forEach( el => el.style = "filter: blur(5px);");
    setTimeout(() => {
      modalFormSubmitted.style.display = "none";
      form.reset();
      goToStep(0);
      location.href = "../signUp.html";
    }, 10000);
  }

  form.classList.add('was-validated');
});

updateStepVisibility();
