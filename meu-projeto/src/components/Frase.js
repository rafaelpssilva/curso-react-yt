import style from './Frase.module.css'

function Frase() {
    return (
        <div className={style.fraseContainer}>
            <p className={style.fraseContent}>Esté componente é uma frase</p>
        </div>
    )
}

export default Frase