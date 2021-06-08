//a page is just a regular React component, that conventionally is stored in page folder 
//in order to stress the fact that it is working with router!
import styles from "../pages/projects.module.css"
import Cards from "../components/card/cards"//<Cards/>

export default function Projects() {
    return (
        <div>
        <h1 className={styles.title}>My Projects</h1>
            <Cards/>
        </div>
    )
}