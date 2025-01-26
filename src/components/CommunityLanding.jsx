import  { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaXmark, FaBars, FaWhatsapp } from "react-icons/fa6";
import { Check } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

import image2 from '../assets/newimg.jpg';
import image5 from '../assets/image5.png';
import image4 from '../assets/image4.png';
import commLogo from '../assets/commLogo.jpg';
import TrustSection from './cl/TrustSection';
// import MembershipCommunity from './cl/MembershipCommunity';
// import TenXClubLandingPage from './cl/TenXClubLandingPage';

const CommunityLanding = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  // Create refs for sections
  const homeRef = useRef(null);
  const eventsRef = useRef(null);
  const enrollRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Scroll to section function
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to home page
  };
  const handlePaymentClick = () => {
    navigate('/payment'); // Navigate to home page
  };

  const navItems = [
    // { link: "Home", path: "home", ref: homeRef },
    { link: "Home", path: "home", ref: homeRef, onClick: handleHomeClick },
    { link: "Events", path: "events", ref: eventsRef },
    { link: "Enroll", path: "enroll", ref: enrollRef }
  ];

  const images = [
    { src: image2, alt: "Community Event 1", title: "Networking Events", desc: "Connect with industry leaders" },
    { src: image5, alt: "Community Event 2", title: "Workshop Sessions", desc: "Learn from experts" },
    { src: image4, alt: "Community Event 3", title: "Community Meetups", desc: "Build lasting relationships" }
  ];

  const features = [
    'Access to exclusive events',
    'Instant entry to accelerator program', 
    'Community networking opportunities',
    'Special discounted offers for upgrades'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <button 
            // onClick={() => scrollToSection(homeRef)}
            onClick={handleHomeClick}
            className="flex items-center space-x-3 focus:outline-none"
          >
            <img 
              src={commLogo} 
              alt="Community Logo" 
              // className="h-16 w-auto object-contain rounded-lg" 
              className="w-32 h-16 object-cover rounded-lg border-2 border-white/20 transition-transform duration-300 ease-in-out hover:scale-105"

            />
          </button>

<ul className="hidden lg:flex space-x-6">
            {navItems.map(({ link, path, ref, onClick }) => (
              <button
                key={path}
                onClick={path === 'home' ? onClick : () => scrollToSection(ref)}
                className="px-4 py-2 rounded-full hover:bg-white/20 transition"
              >
                {link}
              </button>
            ))}
          </ul>

          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white text-2xl focus:outline-none"
            >
              {isMenuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 lg:hidden">
              <ul className="flex flex-col items-center py-4 space-y-4">
                {navItems.map(({ link, path, ref }) => (
                  <button
                    key={path}
                    onClick={() => scrollToSection(ref)}
                    className="text-white hover:bg-white/20 px-6 py-2 rounded-full transition"
                  >
                    {link}
                  </button>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={homeRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Static Background Layer */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500"
          style={{
            backgroundSize: '200% 200%',
            opacity: 0.8
          }}
        />

        {/* Floating Background Elements (Static) */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="absolute bg-white/20 rounded-full animate-float"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent"
            >
              INDIA'S LARGEST BUSINESS COMMUNITY
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-700 mb-8"
            >
              Connect with ambitious professionals, entrepreneurs, and innovators
            </motion.p>

            <motion.a 
              href="https://api.whatsapp.com/send/?phone=919119938268&text&type=phone_number&app_absent=0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition transform hover:-translate-y-1"
            >
              <FaWhatsapp className="text-2xl" />
              Join Community
            </motion.a>
          </div>
        </div>
      </section>



<section 
  ref={eventsRef} 
  id="events" 
  className="py-16 bg-white"
>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Community Events
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 
            ${activeImage === index ? 'scale-105 shadow-2xl' : 'scale-100 opacity-90 hover:scale-105 hover:shadow-lg'}`}
          onClick={() => setActiveImage(index)}
        >
          {/* Image */}
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-64 object-cover"
          />
          
          {/* Overlay Content */}
          <div 
            className="absolute inset-0 bg-black/50 flex items-end p-6 text-white opacity-0 
              hover:opacity-100 transition-opacity duration-300"
          >
            <div>
              <h3 className="text-xl font-bold">{image.title}</h3>
              <p className="text-sm">{image.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



<section  
  ref={enrollRef}  
  id="enroll"  
  className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50"  
>  
  <div className="container mx-auto px-4 max-w-2xl">  
    {/* Headline Section */}
    <div className="text-center mb-12">
      <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
        💥 Elevate Your Entrepreneurial Journey for Just ₹149! 💥
      </h1>
      <p className="text-gray-600 text-lg mt-4">
        Taking the first step is always the hardest—but isn’t ₹149 worth the risk for your dreams?  
        Invest in yourself today and unlock premium content designed to challenge your mindset, sharpen your skills, and give you the edge you need to succeed.
      </p>
      <p className="text-gray-600 text-lg mt-3">
        Opportunities like this don’t come twice—take the leap!
      </p>
    </div>  

    {/* Card Section */}
    <div 
      className="bg-white rounded-3xl shadow-2xl p-8 text-center transform hover:scale-105 transition duration-300"
    >  
      <span className="text-purple-600 font-semibold uppercase tracking-wider text-sm">  
        Limited Time Offer  
      </span>  

      <h2 className="text-4xl font-bold mt-4 mb-4 text-gray-800">  
        ₹149 <span className="text-gray-500 text-2xl">/one-time</span>  
      </h2>  

      <p className="text-gray-500 mb-6 text-sm">  
        Don’t miss out on this special offer! Gain access to handpicked content designed to empower your entrepreneurial mindset and bring your ideas to life.  
      </p>  

      {/* Features List */}
      <div className="space-y-4 mb-8">  
        {features.map((feature, index) => (  
          <div  
            key={index}  
            className="flex items-center space-x-3 bg-gray-50 p-3 rounded-xl hover:bg-purple-50 transition duration-300"
          >  
            <Check className="text-purple-500 h-6 w-6" />  
            <span className="text-gray-700">{feature}</span>  
          </div>  
        ))}  
      </div>  

      {/* Call to Action */}
      <button 
        onClick={handlePaymentClick}

        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full transition transform hover:-translate-y-1"
      >  
        Grab this Deal  
      </button>  

      <p className="text-gray-500 text-sm mt-4">  
        ⏳ Hurry! This offer won’t last long.  
      </p>  
    </div>  
  </div>  
</section>



      <TrustSection/>

      {/* <MembershipCommunity/> */}

      {/* <TenXClubLandingPage/> */}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">CREOVIBE</h3>
          <p className="mb-6">Connect. Grow. Succeed.</p>
          <p className="mt-6 text-sm">&copy; 2025 10Xclub. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CommunityLanding;