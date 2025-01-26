import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Features from './components/Features';
import Contact from './components/Contact';
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';
import Featires0 from './components/Featires0';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import CommunityLanding from './components/CommunityLanding'; // Import CommunityLanding component
// import CommunityStats from './components/CommunityStats';
import KPISection from './components/KPISection';
import EventsSection from './components/EventsSection';
import FounderSection from './components/FounderSection';

const App = () => {
  return (
    <Router> 
      <div>
        <Routes> 
          <Route path="/" element={ 
            <>
              <Navbar />
              <Hero />
              <Featires0/>
              {/* <Features /> */}
              
                    <EventsSection />
                    <FounderSection />
              {/* <CommunityStats/> */}
              <KPISection/>
              <Whatsapp />
              <Contact />
              <Footer/>
            </> 
          }/> 
          <Route path="/community-landing" element={<CommunityLanding />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;