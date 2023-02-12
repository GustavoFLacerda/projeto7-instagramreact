import react from 'react';
import Post from './Post.js'

export default function Posts() {
    const listadeposts = [
        {
            username: "meowed",
            pfp: "images/meowed.svg",
            imagempost: "images/gato-telefone.svg",
            curtidoporpfp: "images/respondeai.svg",
            curtidoporquem: "respondeai",
            likes: 101523,
            curtido: true,
            salvo: false,
        },
        {
            username: "barked",
            pfp: "images/barked.svg",
            imagempost: "images/dog.svg",
            curtidoporpfp: "images/adorable_animals.svg",
            curtidoporquem: "adorable_animals",
            likes: 200541,
            curtido: true,
            salvo: true
        },
        {username: "barked",
            pfp: "images/barked.svg",
            imagempost: "images/dog.svg",
            curtidoporpfp: "images/adorable_animals.svg",
            curtidoporquem: "adorable_animals",
            likes: 200541,
            curtido: true,
            salvo: false}
    ]

    return (
        <div className="posts">
            {listadeposts.map((p) => {return(
                <Post
                    username={p.username}
                    pfp={p.pfp}
                    imagempost={p.imagempost}
                    curtidoporpfp={p.curtidoporpfp}
                    curtidoporquem={p.curtidoporquem}
                    likes={p.likes}
                    curtido={p.curtido}
                    salvo={p.salvo}
                    data-test="post"
                />
            )})}
        </div>
    )
}
