import styles from "../card/card.module.css"
import {Link} from "react-router-dom"

function Card(props) {
    return (
    <div className={styles.card}>
        <div>
        <img className={styles.img} src={props.img} alt="project-1"/>
        </div>
        <div className={styles.caption}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.what}>{props.what}</p>
        <Link to={`/projects/${props.more}`}><p className={styles.more}>More!</p></Link>
        </div>
    </div>
    )
}

export default Card

{/* <Link to="/projects/p1"><li className={styles.item}>A book</li></Link>
<Link to="/projects/p2"><li className={styles.item}>An Apple</li></Link>
<Link to="/projects/p3"><li className={styles.item}>A Cup</li></Link> */}

//"/products/p1"
//""