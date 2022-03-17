import { useState } from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Usuário cadastrado com sucesso")
        console.log(name, password)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text"
                     placeholder="Name"
                     id="name"
                     onChange={(e) => setName(e.target.value)}
                     />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                     placeholder="Password"
                     id="password"
                     onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form
