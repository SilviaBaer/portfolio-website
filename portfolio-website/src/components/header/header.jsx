import styles from "../header/header.module.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className={styles.header}>
<h3><Link to="/about">About</Link></h3>
<h3><Link to="/projects">Projects</Link></h3>
<h3><Link to="/">Home</Link></h3>

        </div>
        
    )
}

export default Header