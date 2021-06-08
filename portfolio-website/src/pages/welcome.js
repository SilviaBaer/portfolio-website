import Name from "../components/name/name"
import Pro from "../components/pro/pro"
import styles from "./welcome.module.css"

export default function Welcome() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}><Name/></div>
            <div className={styles.pro}><Pro/></div>
        </div>
    )
} 

//it is possible to nest a route inside a component 
//giving access to this specific route to new users only, for example!!