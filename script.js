function buscarCep() {
  const cep = document.getElementById('cep').value;

  if (cep.length !== 8 || isNaN(cep)) {
    alert("Digite um CEP válido com 8 números.");
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        alert("CEP não encontrado!");
        limparCampos();
      } else {
        document.getElementById('logradouro').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('uf').value = data.uf;
      }
    })
    .catch(error => {
      console.error("Erro na requisição:", error);
      alert("Erro ao buscar o CEP.");
    });
}

function limparCampos() {
  document.getElementById('logradouro').value = "";
  document.getElementById('bairro').value = "";
  document.getElementById('cidade').value = "";
  document.getElementById('uf').value = "";
}
