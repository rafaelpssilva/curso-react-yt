import { useState } from 'react'

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function clearEmail() {
        setUserEmail('')
    }

    return (

        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..." onchange={(e) => setEmail(e.target.value)} />
                <button type="submit" onclick={enviarEmail}>
                    Enviar e-mail
                </button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuario é: {userEmail}</p>
                        <button onclick={clearEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>

    )
}

export default Condicional