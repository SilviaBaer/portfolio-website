import styles from "../card/card.module.css"
import Card from "../card/card"

function Cards() {
    return (
        <div className={styles.cardsContainer}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </div>
    )
}

export default  Cards;