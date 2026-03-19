const frutas = ["Maçã", "Banana", "Uva", "Laranja", "Kiwi", "Abacaxi"];
// maneira correta de adicionar:
frutas.push('Caqui'); // adiciona no final, sem buracos

const lista = document.getElementById("lista");

function mostrarParte1() {
  lista.innerHTML = "<strong>Parte 1:</strong> " + frutas.join(" - ");
}

function mostrarParte2() {
  const filtradas = frutas.filter(f => typeof f === 'string' && f.length > 4);
  lista.innerHTML = "<strong>Parte 2:</strong> " + filtradas.join(" - ");
}

function mostrarParte3() {
  const maiusculas = frutas
    .filter(f => typeof f === 'string')
    .map(f => f.toUpperCase())
    .join(" - ");
  lista.innerHTML = "<strong>Parte 3:</strong> " + maiusculas +
                    "<br><br><em>(As frutas foram transformadas em letras maiúsculas usando repetição!)</em>";
}

mostrarParte1();
