import styles from "../header/header.module.css"

function Header() {
    return (
        <div className={styles.header}>
<h3><a href="/about">About</a></h3>
<h3><a href="/projects">Projects</a></h3>
<h3><a href="/">Hi!!</a></h3>

        </div>
        
    )
}

export default Header