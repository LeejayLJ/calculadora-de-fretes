const inputOrigem = document.getElementById("origem");
const resumoOrigem = document.getElementById("resumo-origem");

inputOrigem.addEventListener("input", () => {
    if (inputOrigem.value.trim() !== "" ) {
        resumoOrigem.innerText = inputOrigem.value;
    } else {
        resumoOrigem.innerText = "-";
    }
});


const inputDistancia = document.getElementById("distancia");

inputDistancia.addEventListener( "input", () => {
    const km = number(inputDistancia.value);

    if ( km > 0 ) {
        const taxaFixa = 50;
        const valorPorKm = 4;
        const total = ( taxaFixa ) + ( km * valorPorKm );

        console.log(`Preço estimado: R$ ${total}`);
    }
})


const formulario = document.getElementById("formulario-frete")

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const itens = document.getElementById("itens").value;

    const mensagem = `Olá Luciano, gostaria de um orçamento!%0A*Retirada:* ${origem}%0A*Entrega:* ${destino}%0A*Itens:* ${itens}`

    const numeroWhats = "5561984184897";
    window.open(`https://wa.me/${numeroWhats}?text=${mensagem}`, "_blank");
});