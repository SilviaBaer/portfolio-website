//a page is just a regular React component, that conventionally is stored in page folder 
//in order to stress the fact that it is working with router!
import styles from "../pages/projects.module.css"
import Cards from "../components/card/cards"//<Cards/>
import {Link} from "react-router-dom"

export default function Projects() {
    return (
        <div>
        <h1 className={styles.title}>My Projects</h1>
            <Cards/>
        </div>
    )
}


{/* <Link to="/projects/p1"><li className={styles.item}>A book</li></Link>
<Link to="/projects/p2"><li className={styles.item}>An Apple</li></Link>
<Link to="/projects/p3"><li className={styles.item}>A Cup</li></Link> */}