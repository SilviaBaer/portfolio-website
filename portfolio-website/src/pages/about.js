//a page is just a regular React component, that conventionally is stored in page folder 
//in order to stress the fact that it is working with router!
import styles from "../pages/about.module.css"

export default function About() {
    return (
        <div>
        
          <main className= {styles.main}>
            <div className={styles.imgContainer}>
            <img src="/me.png" className={styles.img} alt=""/>
            </div>

            <div className={styles.text}>
            <h1 className={styles.title}>Moin!</h1>
            <h4 className={styles.p}>My name is Silvia and I enjoy creating web sites and application.</h4>
<p className={styles.p}> 
            My interest in web development started back in 2020 when I decided to try learning Web Design during the pandemic 
            — turns out hacking learning HTML and CSS makes a lot of fun!</p>
            <p className={styles.p}>
            I jumped in cold water when I decided to attend the Web Development Bootcamp at 
            Neue Fische in Hamburg, upgrading from passionate about to pro</p>
            <p className={styles.p}>Still a beginner, I have started swimming, making challenges and building real life projects</p>
            <h4 className={styles.p}>
                Scary? Yes! But so far totally enjoying! 🎉
            </h4>
            <h2 className={styles.title}>Technologies Focus</h2>
            <h4 className={styles.skills}>
                React JavaScript Nextjs CSS3 
            </h4>

            <h2 className={styles.title}>When I am not coding ...</h2>
            <h4 className={styles.p}>
            </h4>
            <div classname={styles.imgRoom}>
                <img className={styles.hobby} src="/lotus.png" alt="yoga"/>
                <img className={styles.hobby} src="/karate.png" alt="karate"/>
                <img className={styles.hobby} src="/bicycle.png" alt="bike"/>
                <img className={styles.hobby} src="/cupcake.png" alt="baking"/>
                <img className={styles.hobby} src="/tea.png" alt="tea"/>
                <img className={styles.hobby} src="/sushi.png" alt="sushi"/>
                <img className={styles.hobby} src="/translation.png" alt="languages"/>
                <img className={styles.hobby} src="/headphones.png" alt="podcast"/>
                <img className={styles.hobby} src="/knitting.png" alt="knitting"/>
            </div>
            </div>
            </main>
            
        </div>
        
    )
}

//
//current location
//When I am not coding
//blog
/* Everything started while I was sitting in isolation in my tiny flat during the lockdown in March 2020. 
Overwhelmed by the events, scared and lonely, like millions of people all over the world. 
With one question mark floating over my head: "What now?". 

2020 ... well, it sucked for so many level, and I am pretty sure many people can relate to this. 
It also gave me an unexpected gift, though: TIME.

Yes because when you work in tourism and hospitality, time is never enough. 
Long hours spent at work (back in the UK I used to work 60 hours per week), mental and physical stress levels and unpredictable rotas. 
Time flies even during days OFF, usually lying in my bed  
 */