import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Projects from './pages/Projects';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
      <Projects />
      <ContactPage />
    </>
  );
}

export default App;