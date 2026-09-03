import { useState } from 'react'
import graficodepiza from './assets/graficodepiza.png'
import './App.css'
 
const topics = [
  {
    heading: 'O que é crescimento populacional?',
    content: (
      <div className="section-content">
        <p>
          O crescimento populacional ocorre quando a taxa de natalidade é
          maior do que a taxa de mortalidade durante um determinado período.
          Esse crescimento também pode ser influenciado pela migração, mas
          esse fator perde relevância quando analisamos a população mundial
          como um todo, já que nesse caso não há "saída" do planeta.
        </p>
        <p>
          A taxa de crescimento é geralmente expressa em porcentagem ao ano e
          é calculada considerando nascimentos, mortes e o fator migratório
          de uma região.
        </p>
      </div>
    ),
  },
  {
    heading: 'Principais causas do crescimento populacional',
    content: (
      <div className="cards">
        <a
          className="card"
          href="https://www.who.int/news/item/24-04-2024-global-immunization-efforts-have-saved-at-least-154-million-lives-over-the-past-50-years"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Avanços na medicina</h3>
          <p>
            Vacinas, antibióticos e melhores condições de saneamento
            reduziram drasticamente a mortalidade infantil e aumentaram a
            expectativa de vida.
          </p>
          <span className="card-link">Leia a reportagem (OMS) →</span>
        </a>
        <a
          className="card"
          href="https://ourworldindata.org/yields-vs-land-use-how-has-the-world-produced-enough-food-for-a-growing-population"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Segurança alimentar</h3>
          <p>
            A Revolução Verde e o avanço da agricultura permitiram produzir
            alimentos em maior escala, reduzindo mortes por fome e
            desnutrição.
          </p>
          <span className="card-link">
            Leia a reportagem (Our World in Data) →
          </span>
        </a>
        <a
          className="card"
          href="https://www.unfpa.org/world-population-trends"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Urbanização</h3>
          <p>
            O acesso a hospitais, saneamento básico e água tratada nas
            cidades contribuiu para a queda da mortalidade em diversas
            regiões do mundo.
          </p>
          <span className="card-link">Leia a reportagem (UNFPA) →</span>
        </a>
        <a
          className="card"
          href="https://www.developmentaid.org/news-stream/post/163665/population-growth-and-sustainable-development"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Taxas de natalidade</h3>
          <p>
            Em países em desenvolvimento, taxas de natalidade ainda elevadas
            mantêm o crescimento populacional acima da média global.
          </p>
          <span className="card-link">
            Leia a reportagem (DevelopmentAid) →
          </span>
        </a>
      </div>
    ),
  },
  {
    heading: 'Dados ao longo dos anos',
    content: (
      <div className="section-content">
        <p>
          A população mundial cresceu de forma acentuada nos últimos dois
          séculos. Enquanto o planeta levou milhares de anos para atingir 1
          bilhão de habitantes (por volta de 1800), o segundo bilhão foi
          alcançado em pouco mais de cem anos, e os bilhões seguintes
          chegaram em intervalos cada vez menores.
        </p>
        <figure className="chart">
          <img
            src={graficodepiza}
            alt="Gráfico de crescimento populacional ao longo dos anos"
          />
          <figcaption>
            Evolução da população mundial por período histórico.
          </figcaption>
        </figure>
      </div>
    ),
  },
  {
    heading: 'A transição demográfica',
    content: (
      <div className="section-content">
        <p>
          A teoria da transição demográfica explica como as taxas de
          natalidade e mortalidade mudam à medida que um país se desenvolve
          economicamente, passando por quatro estágios:
        </p>
        <ol className="steps">
          <li>
            <strong>Estágio pré-industrial:</strong> altas taxas de
            natalidade e mortalidade, crescimento populacional lento.
          </li>
          <li>
            <strong>Estágio inicial de transição:</strong> a mortalidade cai
            por causa de avanços na saúde, mas a natalidade permanece alta,
            gerando crescimento acelerado.
          </li>
          <li>
            <strong>Estágio tardio de transição:</strong> a natalidade também
            começa a cair, e o crescimento populacional desacelera.
          </li>
          <li>
            <strong>Estágio pós-industrial:</strong> natalidade e mortalidade
            se estabilizam em níveis baixos, resultando em crescimento
            populacional lento ou estável.
          </li>
        </ol>
      </div>
    ),
  },
  {
    heading: 'Consequências do crescimento populacional',
    content: (
      <div className="cards">
        <a
          className="card"
          href="https://populationconnection.org/blog/world-environment-day/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Pressão sobre recursos naturais</h3>
          <p>
            Mais pessoas significam maior demanda por água, energia,
            alimentos e terra cultivável.
          </p>
          <span className="card-link">
            Leia a reportagem (Population Connection) →
          </span>
        </a>
        <a
          className="card"
          href="https://www.worldbank.org/en/topic/urbandevelopment/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Urbanização acelerada</h3>
          <p>
            O crescimento das cidades pode gerar desafios como moradia
            precária, trânsito e falta de infraestrutura.
          </p>
          <span className="card-link">Leia a reportagem (Banco Mundial) →</span>
        </a>
        <a
          className="card"
          href="https://www.mdpi.com/2673-8392/5/2/45"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Impactos ambientais</h3>
          <p>
            O aumento populacional está relacionado ao maior consumo de
            energia e à emissão de gases de efeito estufa.
          </p>
          <span className="card-link">Leia a reportagem (MDPI) →</span>
        </a>
        <a
          className="card"
          href="https://blogs.worldbank.org/en/developmenttalk/what-do-demographic-changes-mean-for-labor-supply-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Mudanças no mercado de trabalho</h3>
          <p>
            Populações maiores podem ampliar a força de trabalho, mas também
            exigem mais empregos e serviços públicos.
          </p>
          <span className="card-link">Leia a reportagem (Banco Mundial) →</span>
        </a>
      </div>
    ),
  },
  {
    heading: 'Projeções para o futuro',
    content: (
      <div className="section-content">
        <p>
          Segundo estimativas de organismos internacionais, a população
          mundial deve continuar crescendo nas próximas décadas, embora em
          ritmo cada vez mais lento, com tendência de estabilização ao longo
          do século XXI. Esse desaquecimento está diretamente ligado à queda
          das taxas de natalidade em diversas regiões do mundo, especialmente
          em países desenvolvidos.
        </p>
      </div>
    ),
  },
  {
    heading: 'Conclusão',
    content: (
      <div className="section-content">
        <p>
          O crescimento populacional é um fenômeno complexo, resultado da
          interação entre fatores biológicos, sociais, econômicos e
          tecnológicos. Compreender suas causas e consequências é essencial
          para planejar cidades, políticas públicas e o uso sustentável dos
          recursos naturais nas próximas gerações.
        </p>
      </div>
    ),
  },
]
 
const quiz = [
  {
    question: 'Quando ocorre o crescimento populacional?',
    options: [
      'Quando a taxa de natalidade é maior que a de mortalidade',
      'Quando a taxa de mortalidade é maior que a de natalidade',
      'Apenas quando há migração para o país',
      'Quando a população se estabiliza',
    ],
    correct: 0,
    explanation:
      'O crescimento populacional acontece quando nascem mais pessoas do que morrem em um determinado período.',
  },
  {
    question:
      'Qual das opções abaixo NÃO foi citada como uma das principais causas do crescimento populacional?',
    options: [
      'Avanços na medicina',
      'Segurança alimentar',
      'Redução do desmatamento',
      'Urbanização',
    ],
    correct: 2,
    explanation:
      'As causas citadas foram avanços na medicina, segurança alimentar, urbanização e taxas de natalidade elevadas — não a redução do desmatamento.',
  },
  {
    question:
      'O que caracteriza o "estágio inicial de transição" da transição demográfica?',
    options: [
      'Natalidade e mortalidade altas',
      'A mortalidade cai, mas a natalidade permanece alta',
      'Natalidade e mortalidade caem juntas',
      'Ambas se estabilizam em níveis baixos',
    ],
    correct: 1,
    explanation:
      'Nesse estágio, avanços na saúde reduzem a mortalidade, enquanto a natalidade ainda está alta, gerando crescimento acelerado.',
  },
  {
    question:
      'Qual das opções é uma consequência do crescimento populacional mencionada no conteúdo?',
    options: [
      'Redução do consumo de energia',
      'Pressão sobre recursos naturais',
      'Diminuição da urbanização',
      'Queda automática do PIB',
    ],
    correct: 1,
    explanation:
      'Mais pessoas significam maior demanda por água, energia, alimentos e terra cultivável.',
  },
  {
    question:
      'Segundo as projeções apresentadas, o que se espera para a população mundial no século XXI?',
    options: [
      'Crescimento cada vez mais acelerado, sem previsão de fim',
      'Queda abrupta e imediata',
      'Crescimento cada vez mais lento, com tendência de estabilização',
      'Estagnação total já nos próximos anos',
    ],
    correct: 2,
    explanation:
      'A tendência é de desaceleração do crescimento, ligada à queda das taxas de natalidade em várias regiões.',
  },
  {
    question:
      'Aproximadamente quanto tempo o planeta levou para atingir 1 bilhão de habitantes?',
    options: [
      'Cerca de 100 anos',
      'Cerca de 1000 anos',
      'Cerca de 1800 anos',
      'Cerca de 180 anos',
    ],
    correct: 2,
    explanation:
      'O primeiro bilhão levou milênios para ser atingido; já o segundo bilhão veio em pouco mais de cem anos.',
  },
]
 
function App() {
  // 'intro' -> 'topic' -> 'quiz' -> 'result'
  const [phase, setPhase] = useState('intro')
  const [topicIndex, setTopicIndex] = useState(0)
  const [quizIndex, setQuizIndex] = useState(0)
  const [answers, setAnswers] = useState({})
 
  const totalTopics = topics.length
  const totalQuiz = quiz.length
  const totalSteps = totalTopics + totalQuiz
 
  const currentStepNumber =
    phase === 'intro'
      ? 0
      : phase === 'topic'
        ? topicIndex + 1
        : phase === 'quiz'
          ? totalTopics + quizIndex + 1
          : totalSteps
 
  const goStart = () => setPhase('topic')
 
  const nextTopic = () => {
    if (topicIndex < totalTopics - 1) {
      setTopicIndex((i) => i + 1)
    } else {
      setPhase('quiz')
    }
  }
  const prevTopic = () => {
    if (topicIndex > 0) {
      setTopicIndex((i) => i - 1)
    } else {
      setPhase('intro')
    }
  }
 
  const selectAnswer = (optionIndex) => {
    if (answers[quizIndex] !== undefined) return
    setAnswers((a) => ({ ...a, [quizIndex]: optionIndex }))
  }
  const nextQuestion = () => {
    if (quizIndex < totalQuiz - 1) {
      setQuizIndex((i) => i + 1)
    } else {
      setPhase('result')
    }
  }
  const prevQuestion = () => {
    if (quizIndex > 0) {
      setQuizIndex((i) => i - 1)
    } else {
      setTopicIndex(totalTopics - 1)
      setPhase('topic')
    }
  }
 
  const restart = () => {
    setPhase('intro')
    setTopicIndex(0)
    setQuizIndex(0)
    setAnswers({})
  }
 
  const score = quiz.reduce(
    (acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0),
    0,
  )
 
  return (
    <div className="page">
      {phase !== 'intro' && (
        <div className="progress" aria-hidden="true">
          <div
            className="progress-bar"
            style={{ width: `${(currentStepNumber / totalSteps) * 100}%` }}
          />
        </div>
      )}
 
      <main className="stage">
        {phase === 'intro' && (
          <section className="slide intro-slide" key="intro">
            <span className="eyebrow">Trabalho de Conclusão de Curso</span>
            <h1>Crescimento Populacional</h1>
            <p className="subtitle">
              Como a população mundial mudou ao longo do tempo, por que isso
              acontece e o que esperar para o futuro.
            </p>
            <button className="btn" onClick={goStart}>
              Começar →
            </button>
          </section>
        )}
 
        {phase === 'topic' && (
          <section className="slide topic-slide" key={`topic-${topicIndex}`}>
            <span className="step-count">
              Tópico {topicIndex + 1} de {totalTopics}
            </span>
            <h2>{topics[topicIndex].heading}</h2>
            {topics[topicIndex].content}
            <div className="slide-nav">
              <button className="btn ghost" onClick={prevTopic}>
                ← Voltar
              </button>
              <button className="btn" onClick={nextTopic}>
                {topicIndex === totalTopics - 1 ? 'Ir para o quiz' : 'Continuar'} →
              </button>
            </div>
          </section>
        )}
 
        {phase === 'quiz' && (
          <section className="slide quiz-slide" key={`quiz-${quizIndex}`}>
            <span className="step-count">
              Pergunta {quizIndex + 1} de {totalQuiz}
            </span>
            <h2>{quiz[quizIndex].question}</h2>
            <div className="quiz-options">
              {quiz[quizIndex].options.map((option, i) => {
                const answered = answers[quizIndex] !== undefined
                const isSelected = answers[quizIndex] === i
                const isCorrect = i === quiz[quizIndex].correct
                let optionClass = 'quiz-option'
                if (answered && isCorrect) optionClass += ' correct'
                if (answered && isSelected && !isCorrect)
                  optionClass += ' incorrect'
                return (
                  <button
                    key={i}
                    className={optionClass}
                    onClick={() => selectAnswer(i)}
                    disabled={answered}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
 
            {answers[quizIndex] !== undefined && (
              <p
                className={
                  answers[quizIndex] === quiz[quizIndex].correct
                    ? 'quiz-feedback correct'
                    : 'quiz-feedback incorrect'
                }
              >
                {answers[quizIndex] === quiz[quizIndex].correct
                  ? 'Certa resposta! '
                  : 'Não foi dessa vez. '}
                {quiz[quizIndex].explanation}
              </p>
            )}
 
            <div className="slide-nav">
              <button className="btn ghost" onClick={prevQuestion}>
                ← Voltar
              </button>
              <button
                className="btn"
                onClick={nextQuestion}
                disabled={answers[quizIndex] === undefined}
              >
                {quizIndex === totalQuiz - 1 ? 'Ver resultado' : 'Próxima pergunta'} →
              </button>
            </div>
          </section>
        )}
 
        {phase === 'result' && (
          <section className="slide end-slide result-slide" key="result">
            <span className="eyebrow">Quiz finalizado</span>
            <h2>Você acertou {score} de {totalQuiz}</h2>
            <p className="subtitle">
              {score === totalQuiz
                ? 'Mandou muito bem! Você absorveu todo o conteúdo.'
                : score >= totalQuiz / 2
                  ? 'Bom resultado! Revise os pontos abaixo para fixar o conteúdo.'
                  : 'Vale a pena revisar os tópicos e tentar de novo.'}
            </p>
 
            <ul className="result-list">
              {quiz.map((q, i) => {
                const isRight = answers[i] === q.correct
                return (
                  <li
                    key={i}
                    className={
                      isRight ? 'result-item correct' : 'result-item incorrect'
                    }
                  >
                    <span className="result-icon">{isRight ? '✓' : '✕'}</span>
                    <div>
                      <p className="result-question">{q.question}</p>
                      <p className="result-answer">
                        Resposta correta: {q.options[q.correct]}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
 
            <div className="slide-nav center">
              <button className="btn ghost" onClick={restart}>
                Recomeçar
              </button>
            </div>
          </section>
        )}
      </main>
 
      <footer className="footer">
        <p>Trabalho de Conclusão de Curso — Crescimento Populacional</p>
      </footer>
    </div>
  )
}
 
export default App
 