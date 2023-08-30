import { updateDisplayedDatas } from "./modules/confirmDatas.js";

const formSteps = Array.from(document.querySelectorAll('.form-step'));
const prevButtons = Array.from(document.querySelectorAll('.prev-button'));
const nextButtons = Array.from(document.querySelectorAll('.next-button'));
const form = document.getElementById('stepForm');
const inputs = document.querySelectorAll(".inps input");

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

      // Adicionar a mensagem de erro acima do input
      let errorMsg = input.parentElement.querySelector(".error-message");
      if (!errorMsg) {
        errorMsg = document.createElement("span");
        errorMsg.classList.add("error-message");
        errorMsg.textContent = "*Esse campo precisa ser preenchido!";
        input.parentElement.insertBefore(errorMsg, input);
      }
    } else {
      input.classList.remove("error");
      // Remover a mensagem de erro se existir
      const errorMsg = input.parentElement.querySelector(".error-message");
      if (errorMsg) {
        errorMsg.remove();
      }
    }
  });

  return isValid;
}

function nextStep() {
  if (currentStep < formSteps.length - 1) {
    if (isStepValid()) {
      currentStep++;
      updateStepVisibility();
    }
  }
}

function previousStep() {
  if (currentStep > 0) {
    currentStep--;
    updateStepVisibility();
  }
}

prevButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    previousStep();
  });
});

nextButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    nextStep();
  });
});

inputs.forEach(input => {
  input.addEventListener('input', () => {
    updateDisplayedDatas();

    if (input.value.trim() !== '') {
      input.classList.remove("error");
      const errorMsg = input.parentElement.querySelector(".error-message");
      if (errorMsg) {
        errorMsg.remove();
      }
    }
  });
});

form.addEventListener('submit', event => {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  } else if (currentStep === formSteps.length - 1) {
    alert('Formulário enviado com sucesso!');
  }
  form.classList.add('was-validated');
});

updateStepVisibility();
