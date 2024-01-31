 
import './CampoTexto.css'     


const CampoTexto = (props) => {


    const placeholderModificate = `${props.placeholder}...` //exemplo de outra forma de construção
    
  
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto"> 
            <label>{props.label}</label>   
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificate}/>             
        </div>
    )
}

export default CampoTexto