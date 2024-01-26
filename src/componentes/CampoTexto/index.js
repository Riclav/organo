import './CampoTexto.css'     


const CampoTexto = (props) => {


    const placeholderModificate = `${props.placeholder}...` //exemplo de outra forma de construção
    
    let valor = ""
    const aoDigitado = (evento) => {
        valor= evento.target.value
        console.log(valor)
    }

    return(
        <div className="campo-texto"> 
            <label>{props.label}</label>   
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificate}/>             
        </div>
    )
}

export default CampoTexto