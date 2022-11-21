import react from 'react';
import { useState } from 'react';


function Post(props) {
    const {
            username,
            pfp,
            imagempost,
            curtidoporpfp,
            curtidoporquem,
            likes,
            curtido,
            salvo,
    } = props


    const [foiSalvo, setFoiSalvo] = useState(salvo)
    const [recebeuLike, setRecebeuLike] = useState(curtido)
    const [contador, setContador] = useState(likes)

    function salvar() {
        setFoiSalvo(!foiSalvo)
    }

    function likenaimagem() {
        if (!recebeuLike) {
            setRecebeuLike(true)
            let plusone = contador + 1;
            setContador(plusone)
        }
        else{
            let minusone = contador - 1;
            setContador(minusone)
        }
        setRecebeuLike(!recebeuLike)
    }

    function darlike() {
        if (!recebeuLike) {
            //ciclo de vida talvez
            let plusone = contador + 1;
            setContador(plusone)
        } else {
            let minusone = contador - 1;
            setContador(minusone)
        }
        setRecebeuLike(!recebeuLike)
    }


    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={pfp} />
                    {username}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo" onClick={likenaimagem}>
                <img src={imagempost} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        {recebeuLike ? (
                            <ion-icon onClick={darlike} className="liked" name="heart"></ion-icon>
                        ) : (
                            <ion-icon onClick={darlike} name="heart-outline"></ion-icon>
                        )}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {foiSalvo ? (
                            <ion-icon onClick={salvar} name="bookmark"></ion-icon>
                        ) : (
                            <ion-icon onClick={salvar} name="bookmark-outline"></ion-icon>
                        )}
                    </div>
                </div>

                <div className="curtidas">
                    <img src={curtidoporpfp} />
                    <div className="texto">
                        Curtido por <strong>{curtidoporquem}</strong> e <strong>outras {contador} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;