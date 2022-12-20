export const ButtonBlue = (props) => {
    return(
        <button className={`blue_button py-2 ${props.extra_class}`}>
            {props.text}
        </button>
    )
}