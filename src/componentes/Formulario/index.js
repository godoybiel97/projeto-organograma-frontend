import Botao from "../Botao"
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"
import { useState } from "react"

const Formulario = (props) => {

    const [nome, setNome] = useState("")

    const [cargo, setCargo] = useState("")

    const [imagem, setImagem] = useState("")

    const [time, setTime] = useState("")

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

  return (
    <section className="formulario">
      <img src="/imagens/fundo.png"/>
      <form onSubmit={salvar}>
        <h2>Preencha os campos para criar o card do colaborador</h2>
        <CampoTexto 
          label="Nome" placeholder="Digite seu nome" 
          valor={nome} alterado={valor => setNome(valor)} 
        />
        <CampoTexto 
          label="Cargo" placeholder="Digite seu cargo" 
          valor={cargo} alterado={valor => setCargo(valor)} 
        />
        <CampoTexto 
          label="Imagem" placeholder="Digite o endereço da imagem" 
          valor={imagem} alterado={valor => setImagem(valor)} 
        />
        <ListaSuspensa 
          label="Time" itens={props.times}
          valor={time} alterado={valor => setTime(valor)}
        />
        <Botao texto="Criar card"/>
      </form>
    </section>
  )
}

export default Formulario;
