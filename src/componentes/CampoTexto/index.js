import "./CampoTexto.css"

const CampoTexto = (props) => {

    const digitado = (event) => {
        props.alterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={digitado} required placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto