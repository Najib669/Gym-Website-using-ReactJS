import About from "./components/About";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Offer from "./components/Offer";
import './index.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header/>
      <Feature/>
      <Offer/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
