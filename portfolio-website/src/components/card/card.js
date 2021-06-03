import styles from "../card/card.module.css"

function Card() {
    return (
<div className={styles.col}>
            <a href="/"/>
            <img src="" alt="project-1"/>
            <h3 className={styles.title}>Hi!!</h3>
            <p className={styles.what}>Lorem Ipsum lorem</p>
        </div>
    )
}

export default Card