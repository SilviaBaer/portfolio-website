import { Route, Switch } from "react-router-dom";
import styles from './App.css';
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Welcome from "./pages/welcome"
import About from "./pages/about"
import Projects from "./pages/projects"
import Project from "./pages/project"
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <main>
      <Switch>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/projects">
        <Projects/>
      </Route>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/projects/:id">
        <Project/>
      </Route>
      </Switch>
    </main>
    <Footer/>
    </div>
  );
}

export default App;

//conditionally rendering components with react router
//{ Route } is a component that allows us to define a certain path and then the react component which will be loaded when the path becomes active in the
//<Route path="/projects"><Route/>

//