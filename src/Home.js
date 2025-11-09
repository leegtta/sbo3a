import logo from './logo.svg';
import './Home.css';
import HeroSection from './HomeSections/HeroSection';
import ContactSection from './HomeSections/ContactSection';

function Home() {
  return (
    <div className="App">
      <HeroSection />
      <ContactSection />
    </div>
  );
}

export default Home;
