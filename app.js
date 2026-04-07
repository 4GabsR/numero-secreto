let ListadeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do número Secreto')
    exibirTextoNaTela ('p' , 'Digite um número de 1 a 10');
}

exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1' , 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else 
        if (chute > numeroAleatorio) {
        exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
        exibirTextoNaTela ('p' , 'O número secreto é maior');
    } 
    tentativas++
    limparCampo()
    }
        


function gerarNumeroAleatorio() {
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = ListadeNumerosSorteados.length

   if (quantidadeDeElementosNaLista == numeroLimite) {
    ListadeNumerosSorteados = []; 
   }
   if (ListadeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
   } else {
    ListadeNumerosSorteados.push(numeroEscolhido);
    console.log(ListadeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo()
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}