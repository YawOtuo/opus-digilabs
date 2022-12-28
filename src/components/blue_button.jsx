export const ButtonBlue = (props) => {
    return(
        <button className={`blue_button py-2 ${props.extra_class}`}
        onClick={(e) => props.onClick(e)}>
            {props.text}
        </button>
    )
}