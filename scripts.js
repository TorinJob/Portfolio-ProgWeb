/* Funcão para escrever Nome */
function Escrever(str, el) {
  var char = str.split("");
  var typer = setInterval(function () {
    if (!char.length) {
      clearInterval(typer);
      return;
    }
    var next = char.shift();
    el.innerHTML += next;
  }, 100);
}

var elemento = document.getElementById("user-name");
var texto = "João Augusto Lima Carvalho";

Escrever(texto, elemento);

/* Função para abrir e fechar description do projeto */
function toggleDescription(element) {
  const description = element.querySelector(".project-description");
  if (description.style.display === 'none' || description.style.display === '') {
    description.style.display = 'block';
  } else {
    description.style.display = 'none';
  }
}
