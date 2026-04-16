function calcularCirculo() {
    const raio = document.getElementById('raio').value;
    const display = document.getElementById('resCirculo');

    if (raio > 0) {
        const area = Math.PI * Math.pow(raio, 2);
        display.innerText = `Resultado: ${area.toFixed(2)} cm²`;
    } else {
        display.innerText = "Insira um valor maior que zero.";
    }
}

function calcularQuadrado() {
    const lado = document.getElementById('lado').value;
    const display = document.getElementById('resQuadrado');

    if (lado > 0) {
        const area = lado * lado;
        display.innerText = `Resultado: ${area} cm²`;
    } else {
        display.innerText = "Insira um valor maior que zero.";
    }
}

function calcularRetangulo() {
    const base = document.getElementById('base').value;
    const altura = document.getElementById('altura').value;
    const display = document.getElementById('resRetangulo');

    if (base > 0 && altura > 0) {
        const area = base * altura;
        display.innerText = `Resultado: ${area} cm²`;
    } else {
        display.innerText = "Preencha os dois campos corretamente.";
    }
}