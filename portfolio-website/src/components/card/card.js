import styles from "../card/card.module.css"
import {Link} from "react-router-dom"

function Card(props) {
    return (
    <div className={styles.card}>
        <div className={styles.caption}>
        <h3 className={styles.title}>{props.title}</h3>
        <img className={styles.img} src={props.img} alt="project-1"/>
        <p className={styles.what}>{props.what}</p>
        <Link to={`/projects/${props.more}`}><p className={styles.more}>More!</p></Link>
        </div>
    </div>
    )
}

export default Card
