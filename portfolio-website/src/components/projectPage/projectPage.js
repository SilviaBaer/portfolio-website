import styles from "./projectPage.module.css" 

export default function ProjectPage(props) {
    return (
        <div>
            <h3 className={styles.title}>{props.title}</h3>
            <p>{props.deep}</p>
        </div>
    )
}