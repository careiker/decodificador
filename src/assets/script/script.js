

const inputTexto = document.querySelector(".input");
const mensagem = document.querySelector(".output");

  /*FUNÇÕES DE CRIPTOGRAFIA*/
/*FUNÇÃO PARA BOTÃO DE CRIPTOGRAFAR*/
  function btnCrypt() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none"

    /*DISPLAY PARA APARECER BOTÃO DE COPIAR */
    document.querySelector('.botao-copiar').style.display = 'block';
  }

  /*FUNÇÃO PARA CRIPTOGRAFAR*/
  function encriptar(stringEncriptada) {
    let matriz = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matriz.length; i++) {
      if(stringEncriptada.includes(matriz[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1])
      }
    }

    return stringEncriptada;
  }

 /*FUNÇÃO PARA BOTÃO DE DESCRIPTOGRAFAR*/
  function btnDescrypt() {
    const textoDescriptado = descriptar(inputTexto.value)
    mensagem.value = textoDescriptado
    mensagem.style.backgroundImage = "none"
    
    /*DISPLAY PARA APARECER BOTÃO DE COPIAR */
    document.querySelector('.botao-copiar').style.display = 'block';
  }
 
  /*FUNÇÃO PARA DESCRIPTOGRAFAR*/
  function descriptar(stringDescriptada) {
    let matriz = [["enter", "e"],["imes", "i"], ["ai", "a"], ["ober", "o"],["ufat", "u"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i = 0; i < matriz.length; i++) {
      if(stringDescriptada.includes(matriz[i][0])) {
        stringDescriptada = stringDescriptada.replaceAll(matriz[i][0], matriz[i][1])
      }
    }

    return stringDescriptada;
  }

/*FUNÇÃO PARA BOTÃO COPIAR*/
const botaoCopiar = document.querySelector('.botao-copiar');
const alvoCopia = document.querySelector('.output');

  botaoCopiar.addEventListener('click', () => {
    alvoCopia.select();
    document.execCommand('copy');
});

    