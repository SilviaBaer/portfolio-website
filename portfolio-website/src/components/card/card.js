import styles from "../card/card.module.css"
import {Link} from "react-router-dom"

function Card() {
    return (
<div className={styles.card}>
    <div>
            <img className={styles.img}  src="https://images.unsplash.com/photo-1581798459219-318e76aecc7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGllc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="project-1"/>
            
    </div>
            <div className={styles.caption}>
            <h3 className={styles.title}>Hi!!</h3>
            <p className={styles.what}>Lorem Ipsum lorem</p>
            <Link className={styles.try} to="/products/p1">Try it!</Link>
            </div>
        </div>
    )
}

export default Card

{/* <Link to="/projects/p1"><li className={styles.item}>A book</li></Link>
<Link to="/projects/p2"><li className={styles.item}>An Apple</li></Link>
<Link to="/projects/p3"><li className={styles.item}>A Cup</li></Link> */}