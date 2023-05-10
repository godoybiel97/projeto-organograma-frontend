import { useState } from "react"
import Banner from "./componentes/Banner"
import Formulario from "./componentes/Formulario"
import Time from "./componentes/Time"
import Rodape from "./componentes/Rodape"

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Back-End",
      cor: "#57C278",
    },
    {
      nome: "Front-End",
      cor: "#B2CFFA",
    },
    {
      nome: "Data-Science",
      cor: "#A6D157",
    },
    {
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      nome: "UX & Design",
      cor: "#DB6EBF",
    },
    {
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      nome: "Inovação & Gestão",
      cor: "#FF8A29",
    },
  ])

  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(nome) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.nome !== nome))
  }

  function alterarCorTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.cor = cor
      }

      return time
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, nome: novoTime.nome}])
  }

  return (
    <div>
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        colaboradorCadastrado={(colaborador) => novoColaborador(colaborador)}
        cadastrarTime={cadastrarTime}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          deletar={deletarColaborador}
          alterarCor={alterarCorTime}
        />
      ))}
      <Rodape />
    </div>
  )
}

export default App
