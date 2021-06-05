import {Route } from "react-router-dom";
import styles from './App.css';
import Name from "./components/name/name"
import Pro from "./components/pro/pro"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Cards from "./components/card/cards"
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    
    <Header/>
    <Name/>
    <Pro/>
    <Cards/>
    <Footer/>
    </div>
  );
}

export default App;

//conditionally rendering components with react router
//{ Route } is a component that allows us to define a certain path and then the react component which will be loaded when the path becomes active in the
//<Route path="/projects"><Route/>