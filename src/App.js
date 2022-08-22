// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { About } from './pages/About';
import { Header } from './pages/Header';
function App() {
  return (
    <div className='container'>
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
