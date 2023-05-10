import Colaborador from "../Colaborador"
import "./Time.css"
import hexToRgba from 'hex-to-rgba'

const Time = (props) => {

  return (
    (props.colaboradores.length > 0) &&
    <section className="time" style={{ backgroundColor: hexToRgba(props.cor, "0.6") }}>
      <input value={props.cor} onChange={event => props.alterarCor(event.target.value, props.nome)} type="color" className="input-color"/>
      <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => {
          return ( 
            <Colaborador
              cor={props.cor}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              deletar={props.deletar}
            />
          )
        })}
        
      </div>
    </section>
  );
};

export default Time
