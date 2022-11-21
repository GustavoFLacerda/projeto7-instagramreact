import Posts from "./Posts"
import Sidebar from "./Sidebar"
import Stories from "./Stories"

function Body () {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    )
}

export default Body;