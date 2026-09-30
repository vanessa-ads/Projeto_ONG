import { rotas } from "./rotas.js";
import { configurarFormulario } from "./formulario.js";

const app = document.querySelector("#app");

function renderizarRota(rota) {
    console.log("renderizarRota foi chamada. Rota:", rota);

    if (!app) {
        return;
    }
   
    if (rotas[rota]) {
        app.innerHTML = rotas[rota];
        console.log("Rota normal carregada:", rota);

        configurarFormulario();

    } else if(rota === "voluntario" || rota === "doacao" || rota === "denuncia"){
        app.innerHTML = rotas.ajudar;

        console.log("Rota de ajuda carregada:", rota);

        const alvo = document.querySelector("#" + rota);

        console.log("Elemento encontrado:", alvo);
    
        if (alvo) {
        alvo.scrollIntoView({ behavior: "smooth"});
        console.log("Página rolou até:", rota);
    }
    } else {
        app.innerHTML = rotas.sobre;
    }
}

window.addEventListener("hashchange", function () {
    const rota = window.location.hash.substring(1);
    renderizarRota(rota);
});

const rotaInicial = window.location.hash.substring(1) || "sobre";
renderizarRota(rotaInicial);

console.log("Script chegou até aqui!");
