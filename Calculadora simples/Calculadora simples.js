function calcular(operacao) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const displayResultado = document.getElementById('resultado');

    if (isNaN(n1) || isNaN(n2)) {
        displayResultado.innerText = "Por favor, insira os dois números.";
        return;
    }

    let resultado;

    switch (operacao) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            resultado = n2 !== 0 ? n1 / n2 : "Erro: Divisão por 0";
            break;
    }

    displayResultado.innerText = "Resultado: " + resultado;
}