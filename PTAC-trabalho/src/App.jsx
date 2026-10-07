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

    function marcarConcluida(id) {
  setIdeias(
    ideias.map((ideia) =>
      ideia.id === id
        ? { ...ideia, feita: !ideia.feita }
        : ideia
    )
  )
}
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
      function removerIdeia(id) {
  setIdeias(ideias.filter(ideia => ideia.id !== id));
}

  return (
    <div>
      <h1>Painel de Ideias</h1>

      <form onSubmit={adicionarIdeia}>
        <input
          type="text"
          value={novaIdeia}
          onChange={(event) => {setNovaIdeia(event.target.value);
                              setErro("");
          }}
          placeholder="Digite uma ideia..."
        />

        <button type="submit">Adicionar</button>
      </form>
      
      {erro && <p>{erro}</p>}

      <ul>
  {ideias.map((ideia) => (
    <li key={ideia.id}>
      <input
        type="checkbox" //cria uma caixinha de marcar
        checked={ideia.feita}
        onChange={() => marcarConcluida(ideia.id)}// quando clicar na caixinha, chama essa funcao para essa ideia
      />

      <span
        style={{
          textDecoration: ideia.feita ? 'line-through' : 'none' // nesse passo o texto vai aparecer riscado quando concluido
        }}
      >
        {ideia.texto}
      </span>
      <button
  type="button"
  onClick={() => removerIdeia(ideia.id)}
>
  X
</button>
    </li>
  ))}
</ul>  
   <footer> 
  {`${ideias.length} ideias no painel · ${ideias.filter(ideia => ideia.feita).length} concluídas`} 
</footer>  


      {erro && <p>{erro}</p>}
    </div>
  )
}

export default App