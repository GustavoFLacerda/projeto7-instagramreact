function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.image} />
            </div>
            <div className="usuario">
                {props.name}
            </div>
        </div>
    )
}

export default function Stories() {
    const stories = [
        { name: "9gag", image: "images/9gag.svg" },
        { name: "meowed", image: "images/meowed.svg" },
        { name: "barked", image: "images/barked.svg" },
        { name: "nathanwpylestrangeplanet", image: "images/nathanwpylestrangeplanet.svg" },
        { name: "wawawicomics", image: "images/wawawicomics.svg" },
        { name: "respondeai", image: "images/respondeai.svg" },
        { name: "filomoderna", image: "images/filomoderna.svg" },
        { name: "memeriagourmet", image: "images/memeriagourmet.svg" }
    ]

    return (
        <div className="stories">
            {stories.map((s) => {return(<Story name={s.name} image={s.image}/>)})}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}