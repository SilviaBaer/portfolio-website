import styles from "./project.module.css"
import {useParams} from "react-router-dom"
import projects from "../data/projectsList"
import ProjectPage from "../components/projectPage/projectPage"

export default function Detail() {
const params = useParams();
console.log(params.id)

const project = projects.find((project) => project.page === params.id)
if (!project) {
    return <p className={styles.p}>No Project Found!</p>
}

    return (
        <section>
            <h1 className={styles.title}>Project in Details</h1>
            <p className={styles.p}>{params.id}</p>
            <div className={styles.projectCard}>
                <ProjectPage title={project.title} deep={project.deep} />
            </div>
        </section>
        
    )
}