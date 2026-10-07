import { useState } from 'react'
import './App.css'

function App() {
  const [ideias, setIdeias] = useState([])
  const [novaIdeia, setNovaIdeia] = useState('')
  const [erro, setErro] = useState('')

  function adicionarIdeia(event) {
    event.preventDefault()

    if (!novaIdeia.trim()) {
      setErro('Digite uma ideia antes de adicionar.')
      return
    }

    const ideia = {
      id: Date.now(),
      texto: novaIdeia.trim(),
      feita: false
    }

    setIdeias((ideiasAtuais) => [...ideiasAtuais, ideia])
    setNovaIdeia('')
    setErro('')
  }

  function marcarConcluida(id) {
    setIdeias((ideiasAtuais) =>
      ideiasAtuais.map((ideia) =>
        ideia.id === id
          ? { ...ideia, feita: !ideia.feita }
          : ideia
      )
    )
  }

  function removerIdeia(id) {
    setIdeias((ideiasAtuais) =>
      ideiasAtuais.filter((ideia) => ideia.id !== id)
    )
  }

  return (
    <div className="app">
      <main className="painel">
        <h1>Painel de Ideias</h1>

        <p className="subtitulo">
          Organize suas ideias em um só lugar.
        </p>

        <form onSubmit={adicionarIdeia} className="formulario">
          <input
            type="text"
            value={novaIdeia}
            onChange={(event) => {
              setNovaIdeia(event.target.value)
              setErro('')
            }}
            placeholder="Digite uma ideia..."
            className="campo-ideia"
          />

          <button type="submit" className="botao-adicionar">
            Adicionar
          </button>
        </form>

        {erro && <p className="mensagem-erro">{erro}</p>}

        <ul className="lista-ideias">
          {ideias.map((ideia) => (
            <li
              key={ideia.id}
              className={`ideia ${ideia.feita ? 'concluida' : ''}`}
            >
              <input
                type="checkbox"
                checked={ideia.feita}
                onChange={() => marcarConcluida(ideia.id)}
                className="checkbox"
              />

              <span className="texto-ideia">
                {ideia.texto}
              </span>

              <button
                type="button"
                onClick={() => removerIdeia(ideia.id)}
                className="botao-remover"
              >
                X
              </button>
            </li>
          ))}
        </ul>

        <footer>
          {`${ideias.length} ideias no painel · ${ideias.filter((ideia) => ideia.feita).length} concluídas`}
        </footer>
      </main>
    </div>
  )
}

export default App