import './App.css';
import Name from "./components/name/name"
import Pro from "./components/pro/pro"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <Name/>
    <Pro/>
    <Footer/>
    </div>
  );
}

export default App;
