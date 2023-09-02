async function consultarCNPJ() {
    const cnpjInput = document.getElementById("cnpj");
    const razaoSocialInput = document.getElementById("corpName");
    const cnpj = cnpjInput.value.replace(/\D/g, ''); // Remova caracteres não numéricos

    if (cnpj.length !== 14) {
      alert("CNPJ deve conter 14 dígitos.");
      return;
    }

    try {
      const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
      const data = await response.json();

      if (data.status === 'ERROR') {
        alert(data.message);
      } else {
        razaoSocialInput.value = data.nome;
      }
    } catch (error) {
      alert('Ocorreu um erro ao consultar o CNPJ:', error);
    }
  }