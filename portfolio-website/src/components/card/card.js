import styles from "../card/card.module.css"

function Card() {
    return (
<div className={styles.card}>
    <div>
    <a href="/"/>
            <img className={styles.img}  src="https://images.unsplash.com/photo-1581798459219-318e76aecc7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGllc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="project-1"/>
            
    </div>
            <div className={styles.caption}>
            <h3 className={styles.title}>Hi!!</h3>
            <p className={styles.what}>Lorem Ipsum lorem</p>
            <a className={styles.try} href="/">Try it!</a>
            </div>
        </div>
    )
}

export default Card