
const inputTexto = document.querySelector(".input");
const mensagem = document.querySelector(".output");

/*FUNÇÃO PARA CRIPTOGRAFAR*/
  function btnCrypt() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    /*mensagem.style.backgroundImage = "none"*/
  }

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

  /*FUNÇÃO PARA DESCRIPTOGRAFAR*/
  function btnDescrypt() {
    const textoDescriptado = descriptar(inputTexto.value)
    mensagem.value = textoDescriptado
    /*mensagem.style.backgroundImage = "none"*/
  }

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