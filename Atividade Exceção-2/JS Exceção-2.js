function validarFormularioCompleto(event) {
    // Evita o recarregamento da página
    event.preventDefault();

    // 1. Captura os valores digitados
    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const dataNascimentoInput = document.getElementById('dataNascimento').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    // Captura os containers de resposta visual
    const painelErrosGerais = document.getElementById('erros-gerais');
    const listaErrosGerais = document.getElementById('lista-erros-gerais');
    const painelSucesso = document.getElementById('mensagem-sucesso');

    // 2. Limpa todas as mensagens de erro anteriores da tela
    painelErrosGerais.style.display = "none";
    painelSucesso.style.display = "none";
    listaErrosGerais.innerHTML = "";
    
    // Limpa bordas vermelhas e textos de erros dos campos
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('campo-invalido'));
    
    const spansErro = document.querySelectorAll('.erro-campo');
    spansErro.forEach(span => span.innerText = "");

    // 3. Objeto Coletor de Erros
    // Usamos as IDs dos campos como chaves para mapear onde cada erro aconteceu
    let erros = {};

    // --- EXECUÇÃO DAS REGRAS DE VALIDAÇÃO ---

    // Validação do Nome: Obrigatório
    if (!nome) {
        erros.nome = "O preenchimento do campo Nome é obrigatório.";
    }

    // Validação do CPF: Deve ter exatamente 11 dígitos numéricos
    // O teste !/^\d+$/.test(cpf) garante que só existem números digitados
    if (!cpf) {
        erros.cpf = "O campo CPF é obrigatório.";
    } else if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
        erros.cpf = "O CPF deve conter exatamente 11 dígitos numéricos.";
    }

    // Validação da Data de Nascimento: Não pode ser futura
    if (!dataNascimentoInput) {
        erros.dataNascimento = "A data de nascimento é obrigatória.";
    } else {
        const dataSelecionada = new Date(dataNascimentoInput);
        const dataHoje = new Date();
        
        // Zeramos as horas para comparar apenas o dia, mês e ano
        dataHoje.setHours(0, 0, 0, 0);

        if (dataSelecionada > dataHoje) {
            erros.dataNascimento = "A data de nascimento não pode ser uma data futura.";
        }
    }

    // Validação da Senha: mínimo 6 caracteres
    if (!senha) {
        erros.senha = "O campo Senha é obrigatório.";
    } else if (senha.length < 6) {
        erros.senha = "A senha precisa ter no mínimo 6 caracteres.";
    }

    // Validação do Confirmar Senha: deve ser igual à senha
    if (!confirmarSenha) {
        erros.confirmarSenha = "Você precisa confirmar a sua senha.";
    } else if (senha !== confirmarSenha) {
        erros.confirmarSenha = "As senhas digitadas não são iguais.";
    }

    // --- EXIBIÇÃO DOS RESULTADOS ---

    // Transforma as chaves do objeto em uma lista (Ex: ['nome', 'cpf'])
    const camposComErro = Object.keys(erros);

    if (camposComErro.length > 0) {
        // Significa que existem erros coletados!
        
        // Mostra o painel geral no topo
        painelErrosGerais.style.display = "block";

        // Passa por cada campo que deu erro para exibir na tela
        camposComErro.forEach(campo => {
            // 1. Adiciona a mensagem na lista geral do topo
            const novoItemLista = document.createElement('li');
            novoItemLista.innerText = erros[campo];
            listaErrosGerais.appendChild(novoItemLista);

            // 2. Coloca o erro específico logo abaixo do input correto
            const spanEspecifico = document.getElementById(`erro-${campo}`);
            if (spanEspecifico) {
                spanEspecifico.innerText = erros[campo];
            }

            // 3. Aplica a borda vermelha no input correspondente
            const inputComDefeito = document.getElementById(campo);
            if (inputComDefeito) {
                inputComDefeito.classList.add('campo-invalido');
            }
        });

    } else {
        // Se o objeto 'erros' estiver vazio, o cadastro foi um sucesso!
        painelSucesso.style.display = "block";
        document.getElementById('formAvancado').reset();
    }
}