import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import Projects from './components/Projects/Projects';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
