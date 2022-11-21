import react from 'react';

function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.image} />
                <div className="texto">
                    <div className="nome">{props.name}</div>
                    <div className="razao">{props.reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {
    const suggestions = [
        { name: "bad.vibes.memes", image: "images/bad.vibes.memes.svg", reason: "Segue você" },
        { name: "chibirdart", image: "images/chibirdart.svg", reason: "Segue você" },
        { name: "razoesparaacreditar", image: "images/razoesparaacreditar.svg", reason: "Novo no Instagram" },
        { name: "adorable_animals", image: "images/adorable_animals.svg", reason: "Segue você" },
        { name: "smallcutecats", image: "images/smallcutecats.svg", reason: "Segue você" }
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            
            {suggestions.map((s) => {return(<Sugestao name={s.name} image={s.image} reason={s.reason}/>)})}
            
        </div>
    )
}