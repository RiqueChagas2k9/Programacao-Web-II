const formulario = document.getElementById('meuFormulario');
const divResultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const precoVista = parseFloat(document.getElementById('preco').value);
    const numParcelas = parseInt(document.getElementById('parcelas').value);

    let taxaAcrescimo = 0;

    if (numParcelas === 3) {
        taxaAcrescimo = 0.10;
    } else if (numParcelas === 5) {
        taxaAcrescimo = 0.20;
    }

    const precoTotal = precoVista * (1 + taxaAcrescimo);
    const valorParcela = precoTotal / numParcelas;

    divResultado.style.display = 'block';
    divResultado.innerHTML = `
        <p style="margin: 5px 0;"><strong>Total:</strong> R$ ${precoTotal.toFixed(2)}</p>
        <p style="margin: 5px 0;"><strong>Parcelas:</strong> ${numParcelas}x de R$ ${valorParcela.toFixed(2)}</p>
    `;
});