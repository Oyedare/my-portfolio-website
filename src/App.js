// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Header } from './pages/Header';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
