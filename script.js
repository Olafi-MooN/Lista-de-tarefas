// Pega os elementos da dom
var input = document.querySelector('input[type="text"]');
var button = document.querySelector('input[type="button"]');
var lista = document.querySelector('.lista');

// Cria um array global para adicionar e remover as tarefas
var listaTarefas = [];
// Cria um id para cara elemento criado, possibilitando a remoção do mesmo
var id = 0;

function criarElemento() {
    // Limpa a lista assim que for clicado no botão
    lista.innerHTML = '';
    // Cria um novo elemento div e button
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

        elemento.oncontextmenu = function(e) {
            e.preventDefault();
        }

        elemento.onauxclick = function (e){
            e.preventDefault();
            deletar.style.display = 'flex';
        }

        // elemento.onmouseout = function (){
        //     deletar.style.display = 'none';
        // }
    })
}

// Essa função cria um elemento 
function cadastrar() {
    // Verifica se o input esta vazio
    if (input.value != '') {
        // Pega o valor do input
        var text = input.value;
        // Adiciona o texto dentro do array Listatarefas
        listaTarefas.push(`${text}`);
        // Cria um novo elemento para cada elemento presente no vetor listaTarefas
        criarElemento();
        // Limpa o valor do input para possibilitar adicionar uma nova tarefa
        input.value = '';
        id++;
    }
}

// Adiciona o evento de click para o botão cadastrar
button.addEventListener('click', cadastrar)


setInterval(() => {
    // Seleciona a dom da classe delete
    var del = document.querySelectorAll('.delete');
    // Para cada elemento do array adiciona um evento de click
    del.forEach((valor, index) => {
        valor.onclick = function () {
            listaTarefas.splice(listaTarefas.indexOf(listaTarefas[valor.id]));

            lista.innerHTML = '';
            // Cria um novo elemento para cada elemento presente no vetor listaTarefas
            criarElemento();

        }
    })
}, 500);