import "./style.scss"

export function Button(props){
    return(
        <button className="button">{props.name}</button>
    )
}
export default Button