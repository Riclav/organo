import './ListaSuspensa.css'



const ListaSuspensa = (props) => {

    console.log(props.itens)

    return (
        <div className="lista-suspensa">
            <label> {props.label}</label> 
            <select required={props.required} >
                 {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                 })} 
            </select>

        </div>
    )
}

export default ListaSuspensa


//foreach: percorre uma lista e faz alguma coisa e retorna VOID (Nada)
//map: percorre uma lista e faz alguma coisa e retorna uma nova lista transformada(mapeadas por uma transformação)
//Sempre que tiver uma interação de uma lista na tela pode utilizar o MAP
//map - para cada item vai retornar uma option
//map - da o item, index, valor
//option tem que ter um Key