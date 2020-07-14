// Pega os elementos da dom
var input = document.querySelector('input[type="text"]');
var button = document.querySelector('input[type="button"]');
var lista = document.querySelector('.lista');
var btnClear = document.querySelector('#clear');
var btnHidden = document.querySelector('#hidden');
var btnLuck = document.querySelector('#sorte');
var inputWinner = document.querySelector('#winner');

// Cria um array global para adicionar e remover as tarefas
var listaTarefas = ["ADRIENI SANTOS MASSENSINI FIGUEIREDO", "ALEF SANTOS SOARES", "ALENILDE DA SILVA", "ALICE REGINA PAIVA", "ALINE SILVIA OLIVEIRA ABREU", "ANA MIRIA FERNANDES COSTA DOS SANTOS", "ANDREIA CRISTIANE DE ASSIS PEDROSO", "ANDREIA CRISTINA PATROCINIO", "ANE ELIZA RPDRIGUES PIMENTEL", "ANGELA FORD S CAMPOS", "ANGELA MARIA DOS SANTOS BICALHO", "ANTONIA APARECIDA DOS SANTOS SILVA", "ANY KARINE MAGALHAES GONXAGA", "AURENI FERREIRA SANTOS", "AURENI FERREIRA SANTOS", "BENEDITA DE FATIMA COSTA NUNES", "CELMA RODRIGUES DE OLIVEIRA", "CLAUDIA JOAQUINA DE SOUSA", "CLEBER PAULINO DOS REIS", "CLEIA SIMPLICIO CELESTINO", "CONCEICAO MOREIRA DOS SANTOS", "CONCEICAO SOLEDADE DE ALMEIDA", "DANIELE SANTIAGO DE SA", "DANIELE SANTIAGO DE SA", "DEBORAH ANGELICA FERREIRA SILVA ARAUJO", "DESIANE APARECIDA PAULINO", "DILMA IZABEL DIAS SOARES", "DORILEI ROSA DE OLIVEIRA MOREIRA", "EDNALDA FRANCISCA DOS REIS", "ELAINE CRISTINA PEREIRA SILVA", "ELZA INCENCIO MACHADO DOS SANTOS", "EVANDRO DE CARVALHO ROCHA", "FABIANA DOS SANTOS PINTO", "FABIANA DOS SANTOS PINTO", "FABIANA LEMES RABELO DA SILVA", "FABIANA VIEIRA DO NASCIMENTO", "FERNANDA REZENDE DIOGO", "GENICE JOANA GONCALVES DUTRA", "HELEN LUISA BARBOSA DE OLIVEIRA", "IVANETE FIALHO DE OLIVEIRA", "JACKELINE APARECIDA DE OLIVEIRA HONORATO", "JEANE BATISTA DE LIMA", "JESSICA KELLEN FERREIRA", "JOANA ANGELICA B SILVA", "JOSIANE DE JESUS SIQUEIRA", "JUNIA SANTOS COELHO", "JUSCELIA DE OLIVEIRA FERNANDES", "LAIS GARCIA DO AMARAL", "LEDA MA SILVA", "LILIAN FERREIRA DA SILVA", "LUCAS EDUARDO RODRIGUES", "LUCAS PEREIRA FELIX", "MARCIA RODRIGUES SANTOS", "MARIA APARECIDA DE BRITO ROSA", "MARIA BERNADETE DE PADUA SILVA", "MARIA CLEUSA DA COSTA TOBIAS", "MARIA CRISTINA DE OLIVEIRA SILVA", "MARIA DA CONCEICAO OLIVEIRA", "MARIA DAS DORES GONCALVES", "MARIA DE LOURDES MAIRINQ FARIA SILVA", "MARIA DO CARMO FERREIRA DE ARAUJO OLIVEIRA", "MARIA EDUARDA LOPES", "MARIA ILZA COELHO DE ALMEIDA", "MARIA JULIA DE ALCANTARA NEVES", "MARIA LUCIA PEREIRA VIANA", "MARIA LUIZA DE FATIMA", "MARIA SENHORA ALVES ALMEIDA", "MARIA SILVIA DOS SANTOS MARTINS", "MARIA VIDAL DA CONCEICAO SOARES", "MARLENE GOMES DE BRITO ALVES", "MARRIETE ALVES EVANGELISTA", "NAIANE DOMINGOS DA SILVA LIMA", "OSCARLINA FIDELIS HONORIO DOS SANTOS", "PATRICIA AMANCIO", "PATRICIA PEREIRA DA SILVA", "PEDRO AUGUSTO DA SILVA ALVES", "REGINA APARECIDA SALES", "RICARDO PEREIRA SIMOES", "ROSILENE MARIA PRUDENCIO TEODORO", "SASKIA CARDOSO DA SILVA", "SHENIE FERREIRA", "VITORIA SAMARA LOPES", "ZILDA FRANCISCA"];
// Cria um id para cara elemento criado, possibilitando a remoção do mesmo

function mostrar() {
    var id = 0;
    listaTarefas.forEach((valor) => {
        var elemento = document.createElement('div');
        elemento.className = 'nomes';
        elemento.id = id;
        elemento.innerHTML = valor;
        var deletar = document.createElement('button');
        deletar.innerHTML = 'apagar';
        deletar.className = 'delete';
        deletar.id = id;
        lista.appendChild(elemento);
        elemento.appendChild(deletar)
        id++;
        elemento.oncontextmenu = function (e) {
            e.preventDefault();
        }

        elemento.onauxclick = function (e) {
            e.preventDefault();
            deletar.style.display = 'none';
        }

        elemento.onmouseclick = function () {
            deletar.style.display = 'flex';
        }
    })
}

function criarElemento() {
    // Limpa a lista assim que for clicado no botão
    lista.innerHTML = '';
    // Cria um novo elemento div e button
    mostrar()
}

// Essa função cria um elemento 
function cadastrar() {
    // Verifica se o input esta vazio
    if (input.value != '') {
        // Pega o valor do input
        var text = input.value;
        // Adiciona o texto dentro do array Listatarefas
        listaTarefas.push(`${text}`);
        listaTarefas.sort();
        // Cria um novo elemento para cada elemento presente no vetor listaTarefas
        criarElemento();
        // Limpa o valor do input para possibilitar adicionar uma nova tarefa
        input.value = '';
        id++;
    }
}

function limpar() {
    lista.innerHTML = '';
    listaTarefas = [];
    mostrar();
}

function ocultar() {
    lista.innerHTML = '';
}

function sortear() {
    var cont = 0;
    inputWinner.style.display = 'flex';
    inputWinner.style.border = '1px solid black';

    var interval = setInterval(() => {
        var random = (Math.random() * ((listaTarefas.length - 1) - 0) + 0).toFixed();
        document.querySelector('#winner').value = listaTarefas[random];
    }, 300)
    
    setTimeout(() => {
        clearInterval(interval);
        inputWinner.style.border = '2px solid green';
    }, 20000)
    console.log(listaTarefas[random], random);
}


setInterval(() => {
    // Seleciona a dom da classe delete
    var del = document.querySelectorAll('.delete');
    // Para cada elemento do array adiciona um evento de click
    del.forEach((valor, index) => {
        valor.onclick = function () {
            listaTarefas.splice(listaTarefas.indexOf(listaTarefas[valor.id]), 1);
            console.log(listaTarefas[valor.id])
            lista.innerHTML = '';
            // Cria um novo elemento para cada elemento presente no vetor listaTarefas
            mostrar();
        }
    })
}, 500);


// Adiciona o evento de click para o botão cadastrar
button.addEventListener('click', cadastrar);

// Adiciona o evento de click para o Limpar
btnClear.addEventListener('click', limpar);

// Adiciona o evento de click para o Limpar
btnHidden.addEventListener('click', ocultar);

// Adiciona o evento de click para o Limpar
btnLuck.addEventListener('click', sortear);

mostrar();