import styles from "../pro/pro.module.css"

function Pro() {
    return (
        <div className={styles.container}>
            <h2 className={styles.pro}>
            ... a <span className={styles.span}>pro</span>grammer in <span className={styles.span}>pro</span>gress ...
            </h2>
            <h2 className={styles.pro}>
                night owl coffee lover
            </h2>
            <h2 className={styles.pro}>
                based in Germany 
            </h2>
        </div>
        
    )
}

export default Pro