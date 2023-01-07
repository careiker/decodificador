/*function encryptVowels(string) {
    let encryptedString = '';
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] === 'a') {
        encryptedString += '1';
      } else if (string[i] === 'e') {
        encryptedString += '2';
      } else if (string[i] === 'i') {
        encryptedString += '3';
      } else if (string[i] === 'o') {
        encryptedString += '4';
      } else if (string[i] === 'u') {
        encryptedString += '5';
      } else {
        encryptedString += string[i];
      }
    }
  
    return encryptedString;
  }
  
  // Exemplo de uso:
  const originalString = 'hello world';
  const encryptedString = encryptVowels(originalString);
  console.log(encryptedString); // 'h2ll4 w4rld'*/

function substituirVogais() {
  var texto = document.getElementById("entrada").value;

  texto = texto.replace(/a/gi, "1");
  texto = texto.replace(/e/gi, "2");
  texto = texto.replace(/i/gi, "3");
  texto = texto.replace(/o/gi, "4");
  texto = texto.replace(/u/gi, "5");

  document.getElementById("mensagem").value = texto;
}