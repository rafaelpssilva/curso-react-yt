function acionarEvento(props) {
    return <button onClick={props.event}>{props.text}</button>
}

export default acionarEvento