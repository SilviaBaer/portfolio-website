//a page is just a regular React component, that conventionally is stored in page folder 
//in order to stress the fact that it is working with router!
import styles from "../pages/about.module.css"

export default function About() {
    return (
        <div>
            <h1 className={styles.title}>About me</h1>
            <p className={styles.p}>Moin! My name is Silvia and I enjoy creating web sites and application. 
            My interest in web development started back in 2020 when I decided to try learning Web Design during the pandemic 
            — turns out hacking learning HTML and CSS makes a lot of fun!

            I jumped in cold water when I decided to attend the Web Development Bootcamp at Neue Fische in Hamburg</p>
        </div>
        
    )
}
