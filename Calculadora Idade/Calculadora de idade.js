function calcularIdade() {
    const inputDia = document.getElementById('dia');
    const inputMes = document.getElementById('mes');
    const inputAno = document.getElementById('ano');
    const displayResultado = document.getElementById('resultado');

    const diaNasc = parseInt(inputDia.value);
    const mesNasc = parseInt(inputMes.value);
    const anoNasc = parseInt(inputAno.value);

    if (!diaNasc || !mesNasc || !anoNasc) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth() + 1;
    const anoAtual = hoje.getFullYear();

    let idade = anoAtual - anoNasc;

    const mesAindaNaoPassou = mesAtual < mesNasc;
    const diaAindaNaoPassouNoMesAtual = (mesAtual === mesNasc && diaAtual < diaNasc);

    if (mesAindaNaoPassou || diaAindaNaoPassouNoMesAtual) {
        idade--;
    }

    if (idade < 0) {
        displayResultado.innerText = "Data inválida (no futuro)";
        displayResultado.style.color = "red";
    } else {
        displayResultado.innerText = "Idade: " + idade + " anos";
        displayResultado.style.color = "#333";
    }
}