function validarFormulario(event) {
    // Impede o formulário de recarregar a página antes da validação terminar
    event.preventDefault();

    // 1. Captura os campos e o elemento de mensagem da tela
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const idadeInput = document.getElementById('idade').value; // Pegamos o texto puro primeiro
    const senha = document.getElementById('senha').value;
    
    const msgDiv = document.getElementById('status-mensagem');

    // Iniciamos limpando o estilo da mensagem da tela
    msgDiv.style.display = "none";
    msgDiv.innerText = "";

    try {
        // --- REGRAS DE VALIDAÇÃO ---

        // Validação do Nome: obrigatório e mínimo 3 caracteres
        if (!nome) {
            throw "O campo Nome é obrigatório.";
        }
        if (nome.length < 3) {
            throw "O Nome deve ter pelo menos 3 caracteres.";
        }

        // Validação do E-mail: deve conter “@”
        if (!email.includes("@")) {
            throw "E-mail inválido. O endereço deve conter o caractere '@'.";
        }

        // Validação da Idade: deve ser número e maior ou igual a 18
        if (idadeInput === "") {
            throw "O campo Idade é obrigatório.";
        }
        
        const idadeNum = Number(idadeInput); // Converte para número de fato
        if (isNaN(idadeNum)) {
            throw "A idade fornecida precisa ser um número válido.";
        }
        if (idadeNum < 18) {
            throw "Cadastro permitido apenas para maiores de 18 anos.";
        }

        // Validação da Senha: mínimo 6 caracteres
        if (senha.length < 6) {
            throw "A Senha deve conter no mínimo 6 caracteres.";
        }

        // Se o código chegou até aqui sem disparar nenhum throw, significa que está tudo correto!
        msgDiv.innerText = "🎉 Cadastro realizado com sucesso!";
        msgDiv.style.backgroundColor = "#d4edda"; // Verde claro
        msgDiv.style.color = "#155724";
        msgDiv.style.display = "block";

        // Aqui você poderia, por exemplo, limpar os campos do formulário:
        document.getElementById('formCadastro').reset();

    } catch (erroPersonalizado) {
        // 3 e 4. O bloco catch "captura" o texto do throw que falhou e exibe na tela
        msgDiv.innerText = `⚠️ Erro: ${erroPersonalizado}`;
        msgDiv.style.backgroundColor = "#f8d7da"; // Vermelho claro
        msgDiv.style.color = "#721c24";
        msgDiv.style.display = "block";
    }
}