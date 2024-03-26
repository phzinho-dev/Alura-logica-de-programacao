function sortear() {
  let quatidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  let numero = numeroAleatorio(de, ate);
  alert(numero);
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}