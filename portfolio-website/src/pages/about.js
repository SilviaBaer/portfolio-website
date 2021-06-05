//a page is just a regular React component, that conventionally is stored in page folder 
//in order to stress the fact that it is working with router!
import styles from "../pages/about.module.css"

export default function About() {
    return (
        <h1 className={styles.title}>About me</h1>
    )
}
