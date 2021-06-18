import { Route, Switch, Redirect } from "react-router-dom";
import styles from './App.css';
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Welcome from "./pages/welcome"
import About from "./pages/about"
import Projects from "./pages/projects"
import Project from "./pages/project"
import NotFound from "./pages/notFound"
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className={styles.mainDiv}>
      <header>
      <Header/>
      </header>
       <main className={styles.main}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome"/>
        </Route>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/projects" exact>
        <Projects/>
      </Route>
      <Route path="/projects/:id">
        <Project/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
      </Switch>
    </main>
      </div>
      
    <footer className={styles.footer}>
    <Footer/>
    </footer>
    
    </div>
  );
}

export default App;


//trying if it works!
//conditionally rendering components with react router
//{ Route } is a component that allows us to define a certain path and then the react component which will be loaded when the path becomes active in the
//<Route path="/projects"><Route/>

//Switch will prevent React Router to render multiple pages simultaneously,
//rendering in fact just the specific route
//when the server hits the line of code that contains a match
//switch is going to make it stop immediately, ignoring whatever follows 
//no matter how specific it is

//OPTION 1. SWAPPING CODE LINES POSITION
//That is why the position must be swapped!!
//thze first line is a match and it is going to ignore what follows

//OPTION 2. USING EXACT PROP
//using the exact prop will make React Router stop when only the EXACT match is found!
//no need to swap positions

//THE POWER OF EXACT! (#redirect)
//exact in this case prevent an infinite loop!!

//* means all
//if after all the provided routes there are no matches, 
//every other route is going to render 404