import styles from "./projectPage.module.css" 

export default function ProjectPage(props) {
    return (
        <div className={styles.main} >
            
            <div className={styles.infoBox}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.deep}>{props.deep}</p>
            <div className={styles.buttons}>
            <a href={props.deploy} className={styles.deploy}>Try it!</a>
            <a href={props.github} className={styles.repo}>Github repo</a>
            </div>
            </div>
            <div className={styles.imgContainer}>
            <img src={props.imgFull} className={styles.img} alt=""/>
            </div>
            
            
        </div>
    )
}