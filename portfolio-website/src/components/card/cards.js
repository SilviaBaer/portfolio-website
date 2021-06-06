import styles from "../card/card.module.css"
import Card from "../card/card"
import projects from "../../data/projectsList"

function createCard(project) {
    return <Card
    key={project.id}
    img={project.img}
    title={project.title}
    what={project.description}
    more={project.page}
    />
}

function Cards() {
    console.log(projects)
    return (
        <div className={styles.cardsContainer}>
            {projects.map(createCard)}
            
            

        </div>
    )
}

export default  Cards;