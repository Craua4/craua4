// --------------------
// COMPONENTE: CartaoAlterEgo
//
// Exibe o resultado final gerado pelo gerador.js
// Recebe via props:
//   - alterEgo  -> objeto com { nome, titulo, descricao, simbolo, cor }
//   - onRecomecar  -> função para reiniciar o quiz
// --------------------
export default function CartaoAlterEgo({ alterEgo, onRecomecar}) {
    return (
        <div className="resultado-container">
            <p className="resultado-label">Seu alter ego é...</p>

            {/* Cartão principal - a cor de fundo vem do gerador */}
            <div className="cartao" style={{ "--cor-ego": alterEgo.cor }}>
                <div className="cartao-simbolo">{alterEgo.simbolo}</div>
                <h2 className="cartao-nome">{alterEgo.nome}</h2>
                <p className="cartao-titulo">{alterEgo.titulo}</p>
                <p className="cartao-descricao">{alterEgo.descricao}</p>
            

                {/* Tags de características} */}
                <div className="cartao-tags">
                    {alterEgo.tags.map((tag) => (
                        <span key={tag} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <button className="btn-recomecar" onClick={onRecomecar}>
                Tentar de novo
            </button>
        </div>
    )
}