import AboutMe from './AboutMe';
import './App.css';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Intro from './Intro';
import Navbar from './Navbar';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';
import Technologies from './Technologies';

function App() {
  return (
    <div id='aps' className="bg-color">
      <Navbar />
      <Intro />
      <AboutMe />
      <Technologies />
      <Projects />
      <Skills />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
