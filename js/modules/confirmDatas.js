export function updateDisplayedDatas() {
  const confirmBossName = document.querySelector(".confirm-boss-name");
  const bossNameInput = document.querySelector("input[name='boss-name']");

  const confirmCpf = document.querySelector(".confirm-cpf");
  const cpfInput = document.querySelector("input[name='cpf']");

  const confirmEmail = document.querySelector(".confirm-email");
  const emailInput = document.querySelector("input[name='email']");

  const confirmTel = document.querySelector(".confirm-tel");
  const telInput = document.querySelector("input[name='tel']");

  const confirmFantasyName = document.querySelector(".confirm-fantasy-name");
  const fantasyNameInput = document.querySelector("input[name='fantasy-name']");

  const confirmCnpj = document.querySelector(".confirm-cnpj");
  const cnpjInput = document.querySelector("input[name='cnpj']");

  const confirmAddress = document.querySelector(".confirm-address");
  const streetInput = document.querySelector("input[name='street']");
  const numberInput = document.querySelector("input[name='number']");
  const neighborhInput = document.querySelector("input[name='neighborh']");

  if (confirmBossName && bossNameInput) {
    confirmBossName.innerText = `Nome do responsável: ${bossNameInput.value}`;
  }

  if (confirmCpf && cpfInput) {
    confirmCpf.innerText = `CPF: ${cpfInput.value}`;
  }

  if (confirmEmail && emailInput) {
    confirmEmail.innerText = `E-mail: ${emailInput.value}`;
  }

  if (confirmTel && telInput) {
    confirmTel.innerText = `Telefone: ${telInput.value}`;
  }

  if (confirmFantasyName && fantasyNameInput) {
    confirmFantasyName.innerText = `Nome fantasia: ${fantasyNameInput.value}`;
  }

  if (confirmCnpj && cnpjInput) {
    confirmCnpj.innerText = `CNPJ: ${cnpjInput.value}`;
  }

  if (confirmAddress && streetInput && numberInput && neighborhInput){
    confirmAddress.innerText = `Endereço: ${streetInput.value}, ${numberInput.value} - ${neighborhInput.value}`;
  }
}
