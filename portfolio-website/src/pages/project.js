import styles from "./project.module.css"
import {useParams} from "react-router-dom"

export default function Detail() {
const params = useParams();
console.log(params.id)

    return (
        <section>
            <h1 className={styles.title}>Project in Details</h1>
            <p className={styles.p}>{params.id}</p>
        </section>
        
    )
}