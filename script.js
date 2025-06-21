function buscarCEP() {
  const cep = document.getElementById("cepInput").value.replace(/\D/g, '');

  if (!cep || cep.length < 8) {
    alert("CEP inválido. Digite no formato 99999-999.");
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        alert("CEP não encontrado.");
        return;
      }

      document.getElementById("cep").textContent = data.cep || "-";
      document.getElementById("logradouro").textContent = data.logradouro || "-";
      document.getElementById("bairro").textContent = data.bairro || "-";
      document.getElementById("localidade").textContent = data.localidade || "-";
      document.getElementById("uf").textContent = data.uf || "-";
      document.getElementById("ddd").textContent = data.ddd || "-";
    })
    .catch(error => {
      console.error("Erro ao buscar o CEP:", error);
      alert("Erro na consulta. Tente novamente.");
    });
}

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});