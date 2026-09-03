import { useState } from 'react'
import graficodepiza from './assets/graficodepiza.png'
import './App.css'
 
function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>Crescimento Populacional</h1>
        <p className="subtitle">
          Como a população mundial mudou ao longo do tempo, por que isso
          acontece e o que esperar para o futuro.
        </p>
      </header>
 
      <main>
        <section className="section">
          <h2>O que é crescimento populacional?</h2>
          <div className="section-content">
            <p>
              O crescimento populacional ocorre quando a taxa de natalidade 
              é maior do que a taxa de mortalidade durante 
              um determinado período. Esse crescimento também pode ser
              influenciado pela migração, mas esse fator perde relevância
              quando analisamos a população mundial como um todo, já que
              nesse caso não há "saída" do planeta.
            </p>
            <p>
              A taxa de crescimento é geralmente expressa em porcentagem ao
              ano e é calculada considerando nascimentos, mortes e o fator
              migratório de uma região.
            </p>
          </div>
        </section>
 
        <section className="section alt">
          <h2>Principais causas do crescimento populacional</h2>
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
                A Revolução Verde e o avanço da agricultura permitiram
                produzir alimentos em maior escala, reduzindo mortes por fome
                e desnutrição.
              </p>
              <span className="card-link">Leia a reportagem (Our World in Data) →</span>
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
                Em países em desenvolvimento, taxas de natalidade ainda
                elevadas mantêm o crescimento populacional acima da média
                global.
              </p>
              <span className="card-link">Leia a reportagem (DevelopmentAid) →</span>
            </a>
          </div>
        </section>
 
        <section className="section">
          <h2>Dados ao longo dos anos</h2>
          <div className="section-content">
            <p>
              A população mundial cresceu de forma acentuada nos últimos dois
              séculos. Enquanto o planeta levou milhares de anos para atingir
              1 bilhão de habitantes (por volta de 1800), o segundo bilhão
              foi alcançado em pouco mais de cem anos, e os bilhões seguintes
              chegaram em intervalos cada vez menores.
            </p>
            <figure className="chart">
              <img src={graficodepiza} alt="Gráfico de crescimento populacional ao longo dos anos" />
              <figcaption>
                Evolução da população mundial por período histórico.
              </figcaption>
            </figure>
          </div>
        </section>
 
        <section className="section alt">
          <h2>A transição demográfica</h2>
          <div className="section-content">
            <p>
              A teoria da transição demográfica explica como as taxas de
              natalidade e mortalidade mudam à medida que um país se
              desenvolve economicamente, passando por quatro estágios:
            </p>
            <ol className="steps">
              <li>
                <strong>Estágio pré-industrial:</strong> altas taxas de
                natalidade e mortalidade, crescimento populacional lento.
              </li>
              <li>
                <strong>Estágio inicial de transição:</strong> a mortalidade
                cai por causa de avanços na saúde, mas a natalidade
                permanece alta, gerando crescimento acelerado.
              </li>
              <li>
                <strong>Estágio tardio de transição:</strong> a natalidade
                também começa a cair, e o crescimento populacional
                desacelera.
              </li>
              <li>
                <strong>Estágio pós-industrial:</strong> natalidade e
                mortalidade se estabilizam em níveis baixos, resultando em
                crescimento populacional lento ou estável.
              </li>
            </ol>
          </div>
        </section>
 
        <section className="section">
          <h2>Consequências do crescimento populacional</h2>
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
              <span className="card-link">Leia a reportagem (Population Connection) →</span>
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
                Populações maiores podem ampliar a força de trabalho, mas
                também exigem mais empregos e serviços públicos.
              </p>
              <span className="card-link">Leia a reportagem (Banco Mundial) →</span>
            </a>
          </div>
        </section>
 
        <section className="section alt">
          <h2>Projeções para o futuro</h2>
          <div className="section-content">
            <p>
              Segundo estimativas de organismos internacionais, a população
              mundial deve continuar crescendo nas próximas décadas, embora
              em ritmo cada vez mais lento, com tendência de estabilização ao
              longo do século XXI. Esse desaquecimento está diretamente
              ligado à queda das taxas de natalidade em diversas regiões do
              mundo, especialmente em países desenvolvidos.
            </p>
          </div>
        </section>
 
        <section className="section">
          <h2>Conclusão</h2>
          <div className="section-content">
            <p>
              O crescimento populacional é um fenômeno complexo, resultado da
              interação entre fatores biológicos, sociais, econômicos e
              tecnológicos. Compreender suas causas e consequências é
              essencial para planejar cidades, políticas públicas e o uso
              sustentável dos recursos naturais nas próximas gerações.
            </p>
          </div>
        </section>
      </main>
 
      <footer className="footer">
        <p>Trabalho de Conclusão de Curso — Crescimento Populacional</p>
      </footer>
    </div>
  )
}
 
export default App