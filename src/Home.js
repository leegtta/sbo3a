import logo from './logo.svg';
import './Home.css';
import HeroSection from './HomeSections/HeroSection';
import ContactSection from './HomeSections/ContactSection';
import GallerieSection from './HomeSections/GallerieSection';

function Home() {
  return (
    <div className="App">
      <HeroSection />
      <ContactSection />
      <GallerieSection />
    </div>
  );
}

export default Home;
