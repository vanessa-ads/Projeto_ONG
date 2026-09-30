export function salvarDadosApoio(dadosApoio) {
    const dadosJSON = JSON.stringify(dadosApoio);
    localStorage.setItem("dadosApoio", dadosJSON);
}

export function carregarDadosApoio() {
    const dadosSalvos = localStorage.getItem("dadosApoio");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return null;
}