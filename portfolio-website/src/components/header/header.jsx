import styles from "../header/header.module.css"
import { NavLink } from "react-router-dom"
import classes from "../header/header.module.css"

function Header() {
    return (
        <div className={styles.header}>
<h3><NavLink activeClassName={styles.active} to="/about">About</NavLink></h3>
<h3><NavLink activeClassName={styles.active} to="/projects">Projects</NavLink></h3>
<h3><NavLink activeClassName={styles.active} to="/">Home</NavLink></h3>

        </div>
        
    )
}

export default Header