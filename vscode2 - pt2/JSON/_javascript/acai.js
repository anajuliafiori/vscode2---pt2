function json() {

  let formulario = document.querySelector("#form");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let dados = {};

    dados.Nome = document.querySelector("#nome").value;
    dados.Idade = document.querySelector("#idade").value;
    dados.Telefone = document.querySelector("#telefone").value;
    dados.Endereço = document.querySelector("#endereco").value;
    dados.Planeta = document.querySelector("#planeta").value;
    dados.Universo = document.querySelector("#universo").value;
    dados.Trabalho = document.querySelector("input[name=trabalho]:checked").value;
    dados.Açaí = document.querySelector("input[name=acai]:checked").value;
    dados.Tamanho = document.querySelector("input[name=tam]:checked").value;
    dados.Observações = document.querySelector("#text").value;

    let dadosJSON = JSON.stringify(dados);

    document.write("<h1>Dados de JSON</h1>");
    document.write("<p>Dados validados, obrigado por enviar.</p>");
    document.write(dadosJSON);
  });
  return json();
}
