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
    confirmBossName.innerHTML = `<u>Nome do responsável:</u> ${bossNameInput.value}`;
  }

  if (confirmCpf && cpfInput) {
    confirmCpf.innerHTML = `<u>CPF:</u> ${cpfInput.value}`;
  }

  if (confirmEmail && emailInput) {
    confirmEmail.innerHTML = `<u>E-mail:</u> ${emailInput.value}`;
  }

  if (confirmTel && telInput) {
    confirmTel.innerHTML = `<u>Telefone:</u> ${telInput.value}`;
  }

  if (confirmFantasyName && fantasyNameInput) {
    confirmFantasyName.innerHTML = `<u>Nome fantasia:</u> ${fantasyNameInput.value}`;
  }

  if (confirmCnpj && cnpjInput) {
    confirmCnpj.innerHTML = `<u>CNPJ:</u> ${cnpjInput.value}`;
  }

  if (confirmAddress && streetInput && numberInput && neighborhInput){
    confirmAddress.innerHTML = `<u>Endereço:</u> ${streetInput.value}, ${numberInput.value} - ${neighborhInput.value}`;
  }
}
