import { salvarDadosApoio, carregarDadosApoio } from "./armazenamento.js";
export function configurarFormulario() {
    const formulario = document.querySelector("#form-cadastro");
    const telefone = document.querySelector("#telefone");
    const apoio = document.querySelector("#apoio");
    const disponibilidade = document.querySelector("#disponibilidade");
    const mensagem = document.querySelector("#mensagem");

    if (formulario) {

        const dadosApoio = carregarDadosApoio();

    if (dadosApoio) {
        apoio.value = dadosApoio.apoio;
        mensagem.value = dadosApoio.mensagem;
        disponibilidade.value = dadosApoio.disponibilidade;
    }

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();
        console.log("Formulário enviado!");

        const dadosApoio = {
            apoio: apoio.value,
            mensagem: mensagem.value,
            disponibilidade: disponibilidade.value
        };

        salvarDadosApoio(dadosApoio);
        const mensagemSucesso = document.querySelector("#mensagem-sucesso");
        mensagemSucesso.textContent = "Cadastro enviado com sucesso!";
        formulario.reset();
       });
}

   if (telefone) {
       telefone.addEventListener("input", function () {
        let valor = telefone.value.replace(/\D/g, "");
        let ddd = valor.slice(0, 2);
        console.log("DDD:", ddd);
       });   
}

    if (apoio && disponibilidade) {
       function atualizarDisponibilidade() {
          if (apoio.value === "doacao") {
              disponibilidade.required = false;
          } else {
              disponibilidade.required = true;
          }
       }

       apoio.addEventListener("change", atualizarDisponibilidade);

       atualizarDisponibilidade();
}
}
