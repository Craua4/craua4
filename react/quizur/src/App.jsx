import { useState } from "react";
import Pergunta from ".components/Pergunta";
import CartaoAlterEgo from ".components/CartaoAlterEgo";
import { gerarAlterEgo } from ".components/gerador";
import "./App.css";

// ---------------------------------
// PERGUNTAS DO QUIZ
// Cada pergunta tem um id único, um texto e opções.
// Você pode adicionar, remover ou mudar as perguntas aqui!
// ---------------------------------
const PERGUNTAS = [
  {
    id: "energia",
    texto: "",
    opcoes: ["", ""]
  },
  {
    id: "poder",
    texto: "",
    opcoes: ["", ""]
  },
  {
    id: "estetica",
    texto: "",
    opcoes: ["", ""]
  },
  {
    id: "fraqueza",
    texto: "",
    opcoes: ["", ""]
  }
];

// -------------------------
// COMPONENTE PRINCIPAL (App)
// Aqui controlamos em qual "etapa" o usuário está:
//  -  "quiz"        -> respondendo as perguntas
//  -  "resultado"   -> vendo o alter ego gerado
// -------------------------
export default function App() {
  // 'respostas' guarda o que o usuário escolheu em cada pergunta
  const [respostas, setRespostas] = useState({});

  // 'etapa' controla qual tela está sendo exibida
  const [etapa, setEtapa] = useState("quiz");

  // 'indiceAtual' controla qual pergunta está aparecendo agora
  const [indiceAtual, setIndiceAtual] = useState(0);

  // 'alterEgo' guarda o objeto gerado pelo gerador
  const [alterEgo, setAlterEgo] = useState(null);

  // --- Função chamada quando o usuário escolhe uma opção ---
  function responder(opcao) {
    const perguntaAtual = PERGUNTAS[indiceAtual];

    // Salva a resposta usando o id da pergunta como chave
    const novasRespostas = { ...respostas, [perguntaAtual.id]: opcao };
    setRespostas(novasRespostas);

    if (indiceAtual < PERGUNTAS.length -1) {
      //Ainda tem perguntas -> avança para a próxima
      setIndiceAtual(indiceAtual + 1);
    } else {
      // Acabaram as perguntas -> gera o alter ego e vai para o resultado
      const ego = gerarAlterEgo(novasRespostas);
      setAlterEgo(ego);
      setEtapa("resultado");
    }
  }

  // --- Função para recomeçar tudo do zero ---
  function recomecar() {
    setRespostas({});
    setIndiceAtual(0);
    setAlterEgo(null);
    setEtapa("quiz");
  }

  // --- O que renderizar dependendo da etapa ---
  return (
    <div className="app">
      <header className="app-header">
        <h1>Alter Ego</h1>
        <p>Descubra quem vive dentro de você</p>
      </header>

      <main className="app-main">
        {etapa === "quiz" && (
          <Pergunta
            pergunta={PERGUNTAS[indiceAtual]}
            total={PERGUNTAS.length}
            numero={indiceAtual + 1}
            onResponder={responder}
          />
        )}

        {etapa === "resultado" && alterEgo && (
          <CartaoAlterEgo alterEgo={alterEgo} onRecomecar={recomecar} />
        )}
      </main>
    </div>
  );
}