


type props = {
    entity_id : number
}

const Entity:React.FC<props> = (props) => {


    return(
        <>Я сущность {props.entity_id}</>
    )
}
export default Entity;