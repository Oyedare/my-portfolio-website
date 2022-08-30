// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { About } from './pages/About';
import { Header } from './pages/Header';
import { Skills } from './pages/Skills';
function App() {
  return (
    <div className='container'>
      <Navbar />
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
