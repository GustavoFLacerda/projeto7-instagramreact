import { useState } from "react"

export default function Usuario({imagem, username, nome}) {
    const [nomeDoUsuario, setNomeDoUsuario] = useState(nome)
    const [fotoAtual, setFotoAtual] = useState(imagem)

    function mudaNome(){
        const novoNome = prompt("Insira o novo nome")
        if(!novoNome){
            alert("Escreva um nome válido")
        } else {
            setNomeDoUsuario(novoNome)
        }
    }

    function mudaFoto(){
        const novaFoto = prompt("Insira o link da sua foto")
        if(!novaFoto){
            alert("Escreva um link válido")
        } else {
            setFotoAtual(novaFoto)
        }

    }

    return (
        <div className="usuario">
            <img data-test="profile-image" onClick={mudaFoto} src={fotoAtual} />
            <div className="texto">
                <strong>{username}</strong>
                <span data-test="name">
                    {nomeDoUsuario}
                    <ion-icon data-test="edit-name" onClick={mudaNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}