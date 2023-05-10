import Botao from "../Botao"
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"
import { useState } from "react"

const Formulario = (props) => {

    const [nome, setNome] = useState("")

    const [cargo, setCargo] = useState("")

    const [imagem, setImagem] = useState("")

    const [time, setTime] = useState("")

    const [nomeTime, setNomeTime] = useState("")

    const [corTime, setCorTime] = useState("#000000")

    const salvar = (event) => {
        event.preventDefault()
        props.colaboradorCadastrado({
          nome,
          cargo,
          imagem,
          time
        })

        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    const cadastrarTime = (event) => {
      event.preventDefault()
      props.cadastrarTime({
        nome: nomeTime,
        cor: corTime
      })

      setNomeTime("")
      setCorTime("")
    }

  return (
    <section className="formulario">
      <img src="/imagens/fundo.png"/>
      <form onSubmit={salvar}>
        <h2>Preencha os campos para criar o card do colaborador</h2>
        <Campo 
          label="Nome:" placeholder="Digite seu nome" 
          valor={nome} alterado={valor => setNome(valor)} 
        />
        <Campo 
          label="Cargo:" placeholder="Digite seu cargo" 
          valor={cargo} alterado={valor => setCargo(valor)} 
        />
        <Campo
          label="Imagem:" placeholder="Digite o endereço da imagem" 
          valor={imagem} alterado={valor => setImagem(valor)} 
        />
        <ListaSuspensa 
          label="Time:" itens={props.times}
          valor={time} alterado={valor => setTime(valor)}
        />
        <Botao texto="Criar Card"/>
      </form>
      <form onSubmit={cadastrarTime}>
        <h2>Preencha os campos para criar uma nova opção de time</h2>
        <Campo
          label="Nome:" placeholder="Digite o nome do time" 
          valor={nomeTime} alterado={valor => setNomeTime(valor)} 
        />
        <Campo
          type="color"
          label="Cor:" placeholder="Digite o valor hexadecimal da cor" 
          valor={corTime} alterado={valor => setCorTime(valor)} 
        />
        <Botao texto="Criar Time"/>
      </form>
    </section>
  )
}

export default Formulario;
