// o objetivo é criar um jogo em que a máquina escolha um número 
// e o usuário tenta advhnha-lo

//meu objetivo é que o número não se repita
//a solução é a criação de um Array
let listaDeNumerosSorteados = [];

//quantidade maxíma de números
let numeroLimite = 1000;

//quantida de tentativas
tentativa = 1;

//número secreto gerado pela máquina (Lin.50)
let numeroSecreto = numeroAleatorio();


// alterar elementos textuais
function verificarTexto (tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
function mensagemInicial(){
  verificarTexto ('h1','jogo do número secreto');
  verificarTexto ('p', `escolha um número entre 1 a ${numeroLimite}`);
}
mensagemInicial();

// interação do úsuario com a página
function verificarChute(){
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto){
    verificarTexto('h1', 'você acertou!');

    //além de dizer que acertou, eu quero atribuir quantidade de tentativas
    let palavraTentativa = tentativa > 1? 'tentativas': 'tentativa';
    let quantidadeDeTentativas = `você acertou o número em ${tentativa} ${palavraTentativa}`;

    verificarTexto('p', `${quantidadeDeTentativas}`);
    // habilitar o botão de novo jogo
    document.getElementById('reiniciar').removeAttribute('disabled');
    
  } else {
    if (chute < numeroSecreto){
      verificarTexto('h1', 'você errou!');
      verificarTexto('p', `o número secreto é maior que ${chute}`);
    } else {
      verificarTexto('h1', 'você errou!');
      verificarTexto('p', `o numero secreto é menor que ${chute}`);
      
    }tentativa ++;
    limparCampo();

    
  }
  } 

function numeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;
  if (quantidadeDeNumerosSorteados == numeroLimite ){
    listaDeNumerosSorteados = [];
  }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
      return numeroAleatorio();
    } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
  }
}

//função para limpar o campo e resposta quando o usuário responde
function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}
// reiniciando o jogo

function reiniciarJogo(){
  document.getElementById('reiniciar').setAttribute('disabled', true);
  limparCampo();


  //redefinção dos textos iniciais
  mensagemInicial();

  //a tentativa volta a ser um, logo:
  tentativa = 1;
  
  //é necessário gerar um novo número secreto 
  numeroSecreto = numeroAleatorio();


}

reiniciarJogo();

//uma possivél repetição do número secreto
