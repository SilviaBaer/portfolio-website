import styles from "../pro/pro.module.css"

function Pro() {
    return (
        <div className={styles.container}>
            <h2 className={styles.pro}>
            ... a <span className={styles.span}>pro</span>grammer in <span className={styles.span}>pro</span>gress ...
            </h2>
            <h2 className={styles.pro}>
                coffee <span className={styles.owl}>☕</span> and <span className={styles.owl}>🍩</span> donuts
            </h2>
            <h2 className={styles.pro}>
                based in <span className={styles.de}>Germany</span> ⚓
            </h2>
        </div>
        
    )
}

export default Pro