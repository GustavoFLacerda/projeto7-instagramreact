import Body from "./Body"
import Navbar from "./Navbar"
import react from 'react';


export default function App() {
    return (
        <div>
                <Navbar />
                <Body />
                <div className="fundo-mobile">
                    <ion-icon name="home"></ion-icon>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
        </div>
    )
}