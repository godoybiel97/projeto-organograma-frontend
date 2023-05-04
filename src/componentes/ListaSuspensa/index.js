import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={event => props.alterado(event.target.value)} required value={props.valor}>
                <option value="">Escolha um time</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa