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

    setIdeias([...ideias, ideia])
    setNovaIdeia('')
    setErro('')
  }

  return (
    <div>
      <h1>Painel de Ideias</h1>

      <form onSubmit={adicionarIdeia}>
        <input
          type="text"
          value={novaIdeia}
          onChange={(event) => setNovaIdeia(event.target.value)}
          placeholder="Digite uma ideia..."
        />

        <button type="submit">Adicionar</button>
      </form>
      

      {erro && <p>{erro}</p>}
    </div>
  )
}

export default App