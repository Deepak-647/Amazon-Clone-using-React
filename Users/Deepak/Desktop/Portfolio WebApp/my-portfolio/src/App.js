 import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
 import Contacts from "./components/Contacts";
import Skills from "./components/Skills";
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contacts/>
      <SocialLinks/>
    </div>
  );
}

export default App;
