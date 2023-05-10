import "./Campo.css"

const Campo = (props) => {

    const digitado = (event) => {
        props.alterado(event.target.value)
    }

    return (
        <div className={`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input 
                type={props.type} value={props.valor} 
                onChange={digitado} required placeholder={props.placeholder}
            />
        </div>
    )
}

export default Campo