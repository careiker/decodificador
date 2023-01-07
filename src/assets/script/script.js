/*function criptografarVogais() {
  // Obtém o texto do elemento <textarea>
  var texto = document.getElementById('entrada').value;

  // Criptografa o texto
  texto = texto.replace(/a/g, 'ai');
  texto = texto.replace(/e/g, 'enter');
  texto = texto.replace(/i/g, 'imes');
  texto = texto.replace(/o/g, 'ober');
  texto = texto.replace(/u/g, 'ufat');

  // Exibe o texto criptografado no elemento <textarea>
  document.getElementById('mensagem').value = texto;
}

function descriptografarVogais() {
  // Obtém o texto do elemento <textarea>
  var texto = document.getElementById('entrada').value;

  // Descriptografa o texto
  texto = texto.replace(/ai/g, 'a');
  texto = texto.replace(/enter/g, 'e');
  texto = texto.replace(/imes/g, 'i');
  texto = texto.replace(/ober/g, 'o');
  texto = texto.replace(/ufat/g, 'u');

  // Exibe o texto descriptografado no elemento <textarea>
  document.getElementById('mensagem').value = texto;
}*/

const inputTexto = document.querySelector(".input");
const mensagem = document.querySelector(".output");

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