import  { useState, useEffect } from 'react';
import { FaXmark, FaBars, FaWhatsapp } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";
import { Check } from 'lucide-react';

// Import images
import image2 from '../assets/newimg.jpg';
import image5 from '../assets/image5.png';
import image4 from '../assets/image4.png';
import TrustSection from './cl/TrustSection';

const CommunityLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeImage, setActiveImage] = useState(0);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Image gallery auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Features", path: "#features" },
    { link: "Contact", path: "#contact" }
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
          <h1 className="text-3xl md:text-4xl font-bold font-rubik">10Xclub</h1>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6">
            {navItems.map(({ link, path }) => (
              <RouterLink
                key={path}
                to={path}
                className="px-4 py-2 rounded-full hover:bg-white/20 transition"
              >
                {link}
              </RouterLink>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white text-2xl focus:outline-none"
            >
              {isMenuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 lg:hidden">
              <ul className="flex flex-col items-center py-4 space-y-4">
                {navItems.map(({ link, path }) => (
                  <RouterLink
                    key={path}
                    to={path}
                    onClick={closeMenu}
                    className="text-white hover:bg-white/20 px-6 py-2 rounded-full transition"
                  >
                    {link}
                  </RouterLink>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 opacity-80"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              INDIA'S LARGEST BUSINESS COMMUNITY
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              Connect with ambitious professionals, entrepreneurs, and innovators
            </p>

            <a 
              href="https://api.whatsapp.com/send/?phone=919119938268&text&type=phone_number&app_absent=0"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition transform hover:-translate-y-1"
            >
              <FaWhatsapp className="text-2xl" />
              Join Community
            </a>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Community Events
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 
                  ${activeImage === index ? 'scale-105 shadow-2xl' : 'opacity-70'}`}
                onClick={() => setActiveImage(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-end p-6 text-white opacity-0 hover:opacity-100 transition-opacity">
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

      {/* Pricing Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <span className="text-purple-600 font-semibold uppercase tracking-wider">
              Special Offer
            </span>
            
            <h2 className="text-4xl font-bold mt-4 mb-6">
              ₹150 <span className="text-gray-600 text-2xl">/one-time</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 bg-gray-50 p-3 rounded-xl hover:bg-purple-50 transition"
                >
                  <Check className="text-purple-500 h-6 w-6" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition transform hover:-translate-y-1">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      <TrustSection/>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">10Xclub</h3>
          <p className="mb-6">Connect. Grow. Succeed.</p>
          {/* <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-200">Terms of Service</a>
            <a href="#" className="hover:text-gray-200">Contact</a>
          </div> */}
          <p className="mt-6 text-sm">&copy; 2024 10Xclub. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CommunityLanding;




















// import { useState } from "react";
// import { FaXmark, FaBars } from "react-icons/fa6";
// import { Link as RouterLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// import WhatsAppCommunity from "./cl/WhatsAppCommunity";
// import Plans from "./cl/Plans";
// import ImageGallery from "./cl/ImageGallery";
// import TrustSection from "./cl/TrustSection";
// import Footer from "./Footer";

// const CommunityLanding = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/");
//   };

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   const navItems = [
//     { link: "Home", path: "/" },
//     { link: "Features", path: "#features" },
//     { link: "Contact Us", path: "#contact" },
//   ];

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sticky top-0 z-50 w-full flex justify-between items-center gap-1 lg:px-16 px-6">
//         <div className="flex items-center">
//           <h1 className="text-white md:text-4xl text-3xl font-bold font-rubik">
//             10Xclub
//           </h1>
//         </div>

//         <ul className="lg:flex justify-center items-center gap-6 hidden">
//           {navItems.map(({ link, path }) => (
//             <RouterLink
//               key={path}
//               className="text-white uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-white hover:text-blue-600 text-[15px] transition"
//               to={path}
//               onClick={path === "/" ? handleClick : null}
//             >
//               {link}
//             </RouterLink>
//           ))}
//         </ul>

//         <div
//           className="flex justify-between items-center lg:hidden"
//           onClick={toggleMenu}
//         >
//           {isMenuOpen ? (
//             <FaXmark className="text-white text-3xl cursor-pointer" />
//           ) : (
//             <FaBars className="text-white text-3xl cursor-pointer" />
//           )}
//         </div>

//         {isMenuOpen && (
//           <div className="w-full h-fit bg-gradient-to-r from-blue-600 to-purple-600 p-4 absolute top-[72px] left-0">
//             <ul className="flex flex-col justify-center items-center gap-2 w-full">
//               {navItems.map(({ link, path }) => (
//                 <RouterLink
//                   key={path}
//                   className="text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-white hover:text-blue-600 w-full text-center transition"
//                   to={path}
//                   onClick={closeMenu}
//                 >
//                   {link}
//                 </RouterLink>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       <WhatsAppCommunity />

//       <ImageGallery />

//       <Plans />

//       {/* <TrustSection /> */}
//       <Footer />
//     </div>
//   );
// };

// export default CommunityLanding;




// import  { useEffect, useState } from 'react';
// // import { MessageCircle } from 'lucide-react';

// export const WhatsAppCommunity = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 2 - 1,
//         y: (e.clientY / window.innerHeight) * 2 - 1
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section className="relative h-[95vh] overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500">
//       {/* Interactive background elements */}
//       <div 
//         className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse"
//         style={{
//           transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
//         }}
//       />
      
//       {/* Animated orbs */}
//       <div className="absolute inset-0">
//         <div 
//           className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl animate-float"
//           style={{
//             transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`
//           }}
//         />
//         <div 
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float-delay"
//           style={{
//             transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
//           }}
//         />
//         <div 
//           className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-float-slow"
//           style={{
//             transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
//           }}
//         />
//       </div>

//       {/* Overlay with noise texture */}
//       <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" 
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//           opacity: 0.015
//         }}
//       />

//       {/* Main content */}
//       <div className="relative z-10 flex items-center justify-center h-full px-4">
//         <div className="max-w-4xl w-full">
//           {/* Floating WhatsApp icon */}
//           <div className="relative -top-12 mb-4">
//             <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-green-500 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
//                 <div className="relative bg-green-500 rounded-full p-6 shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer">
//                   <img
//                     src="https://img.icons8.com/color/48/000000/whatsapp.png"
//                     alt="whatsapp"
//                     className="w-16 h-16 animate-bounce-slow"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Card content with glassmorphism */}
//           <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
//             <div className="space-y-8 text-center">
//               <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
//                 INDIA&apos;S LARGEST BUSINESS
//                 <br />
//                 COMMUNITY ON WHATSAPP
//               </h1>
              
//               <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
//                 Connect with like-minded people in a vibrant community! Join us, where ambitious youngsters,
//                 entrepreneurs, innovators, mentors, investors, leaders, and dynamic professionals come together to
//                 collaborate and grow.
//               </p>

//               <a
//                 // href="https://api.whatsapp.com/send/?phone=918879355057&text&type=phone_number&app_absent=0"
//                    href="https://api.whatsapp.com/send/?phone=919119938268&text&type=phone_number&app_absent=0"
//                 // href="https://api.whatsapp.com/send/?phone=919119938268&text=Harshit+Pandey&type=phone_number&app_absent=0"
//                 className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-semibold py-4 px-8 rounded-full transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
//               >
//                 <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
//                 <img
//                   src="https://img.icons8.com/color/48/000000/whatsapp.png"
//                   alt="whatsapp"
//                   className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <span className="relative">JOIN NOW</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// import image2 from '../assets/image2.png';
// import image5 from '../assets/image5.png';
// import image4 from '../assets/image4.png';

// const ImageGallery = () => {
//   const images = [
//     { src: image2, alt: "Community Event 1", title: "Networking Events", desc: "Connect with industry leaders" },
//     { src: image5, alt: "Community Event 2", title: "Workshop Sessions", desc: "Learn from experts" },
//     { src: image4, alt: "Community Event 3", title: "Community Meetups", desc: "Build lasting relationships" }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Community Events
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Join our vibrant community and participate in exclusive events designed for growth and networking
//           </p>
//         </div>

//         {/* Image Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {images.map((image, index) => (
//             <div key={index} className="group relative overflow-hidden rounded-2xl h-64">
//               {/* Image Container */}
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                   <h3 className="text-xl font-bold mb-2">{image.title}</h3>
//                   <p className="text-sm text-gray-200">{image.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Gradient Decoration */}
//       <div className="mt-16 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
//     </section>
//   );
// };


// import { Check } from 'lucide-react';

// export const Plans = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
//       <section className="py-20 px-4">
//         <div className="max-w-4xl mx-auto text-center mb-16">
//           <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Special Offer</span>
//           <h2 className="mt-3 text-4xl font-bold text-gray-900 mb-4">
//             Join now for ₹150/- 
//             <span className="text-gray-600 text-2xl">(incl. GST)</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Get instant access to exclusive features and high-network offline events.
//           </p>
//         </div>

//         <div className="max-w-lg mx-auto">
//           <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             {/* Popular badge */}
//             <div className="absolute top-6 right-6">
//               <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
//                 Limited Time
//               </span>
//             </div>

//             <div className="p-8">
//               {/* Price section */}
//               <div className="text-center mb-8">
//                 <h3 className="text-6xl font-bold text-gray-900">₹150</h3>
//                 <p className="mt-2 text-lg text-gray-600">One-Time Payment</p>
//               </div>

//               {/* Features list */}
//               <div className="space-y-4 mb-8">
//                 {[
//                   'Access to exclusive events',
//                   'Instant entry to accelerator program',
//                   'Community networking opportunities',
//                   'Special discounted offers for upgrades'
//                 ].map((feature, index) => (
//                   <div key={index} className="flex items-center space-x-3">
//                     <Check className="h-5 w-5 text-purple-500 flex-shrink-0" />
//                     <span className="text-gray-700">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Button */}
//               <div className="text-center">
//                 <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
//                   Enroll Now
//                 </button>
//                 <p className="mt-4 text-sm text-gray-500">
//                   Instant access after payment
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };






























// import { useState } from "react";
// import { FaXmark, FaBars } from "react-icons/fa6";
// import { Link as RouterLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// import WhatsAppCommunity from "./cl/WhatsAppCommunity";
// import Plans from "./cl/Plans";
// import ImageGallery from "./cl/ImageGallery";
// import TrustSection from "./cl/TrustSection";
// import Footer from "./Footer";

// const CommunityLanding = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/");
//   };

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   const navItems = [
//     { link: "Home", path: "/" },
//     { link: "Features", path: "#features" },
//     { link: "Contact Us", path: "#contact" },
//   ];

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sticky top-0 z-50 w-full flex justify-between items-center gap-1 lg:px-16 px-6">
//         <div className="flex items-center">
//           <h1 className="text-white md:text-4xl text-3xl font-bold font-rubik">
//             10Xclub
//           </h1>
//         </div>

//         <ul className="lg:flex justify-center items-center gap-6 hidden">
//           {navItems.map(({ link, path }) => (
//             <RouterLink
//               key={path}
//               className="text-white uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-white hover:text-blue-600 text-[15px] transition"
//               to={path}
//               onClick={path === "/" ? handleClick : null}
//             >
//               {link}
//             </RouterLink>
//           ))}
//         </ul>

//         <div
//           className="flex justify-between items-center lg:hidden"
//           onClick={toggleMenu}
//         >
//           {isMenuOpen ? (
//             <FaXmark className="text-white text-3xl cursor-pointer" />
//           ) : (
//             <FaBars className="text-white text-3xl cursor-pointer" />
//           )}
//         </div>

//         {isMenuOpen && (
//           <div className="w-full h-fit bg-gradient-to-r from-blue-600 to-purple-600 p-4 absolute top-[72px] left-0">
//             <ul className="flex flex-col justify-center items-center gap-2 w-full">
//               {navItems.map(({ link, path }) => (
//                 <RouterLink
//                   key={path}
//                   className="text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-white hover:text-blue-600 w-full text-center transition"
//                   to={path}
//                   onClick={closeMenu}
//                 >
//                   {link}
//                 </RouterLink>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       <WhatsAppCommunity />

//       <ImageGallery />

//       <Plans />

//       <TrustSection />
//       <Footer />
//     </div>
//   );
// };

// export default CommunityLanding;






// import { MessageCircle } from 'lucide-react';
// import { useState } from 'react';
// import { FaXmark, FaBars } from 'react-icons/fa6';
// import { Link as RouterLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// import image2 from '../assets/image2.png';
// import image5 from '../assets/image5.png';
// import image4 from '../assets/image4.png';

// const CommunityLanding = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/');
//   };

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   const navItems = [
//     { link: 'Home', path: '/' }, // Updated to route directly to the home page
//     { link: 'Features', path: '#features' },
//     { link: 'Contact Us', path: '#contact' },
//   ];

//   return (
//     <div>
//       <nav className="bg-gray-700 text-white p-4 sticky top-0 z-50 w-full flex justify-between items-center gap-1 lg:px-16 px-6">
//         {/* Logo */}
//         <div className="flex items-center">
//           <h1 className="text-white md:text-4xl text-3xl font-bold font-rubik">10Xclub</h1>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="lg:flex justify-center items-center gap-6 hidden">
//           {navItems.map(({ link, path }) => (
//             <RouterLink
//               key={path}
//               className="text-white uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-black hover:text-white text-[15px]"
//               to={path}
//               onClick={path === '/' ? handleClick : null} // Trigger handleClick only for home button
//             >
//               {link}
//             </RouterLink>
//           ))}
//         </ul>

//         {/* Mobile Menu Toggle Button */}
//         <div className="flex justify-between items-center lg:hidden" onClick={toggleMenu}>
//           {isMenuOpen ? (
//             <FaXmark className="text-white text-3xl cursor-pointer" />
//           ) : (
//             <FaBars className="text-white text-3xl cursor-pointer" />
//           )}
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="w-full h-fit bg-gray-700 p-4 absolute top-[72px] left-0">
//             <ul className="flex flex-col justify-center items-center gap-2 w-full">
//               {navItems.map(({ link, path }) => (
//                 <RouterLink
//                   key={path}
//                   className="text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center"
//                   to={path}
//                   onClick={closeMenu}
//                 >
//                   {link}
//                 </RouterLink>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* Content sections */}
//       <div className="flex flex-col min-h-screen bg-white">
//         {/* Hero Section */}
//         <section className="relative h-[95vh] bg-gradient-to-br from-blue-400 to-blue-600">
//           <div className="absolute inset-0 bg-black/30" />
//           <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
//             <div className="bg-white rounded-2xl p-8 mb-8 shadow-xl">
//               <div className="inline-block bg-green-500 rounded-full p-4 mb-4">
//                 <MessageCircle className="w-8 h-8 text-white" />
//               </div>
//               <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
//                 JOIN INDIA&apos;S LARGEST BUSINESS
//                 <br />
//                 COMMUNITY ON WHATSAPP
//               </h1>
//               <p className="text-gray-600 mb-8">
//                 Connect with like-minded people in a vibrant community! Join us, where ambitious youngsters,
//                 entrepreneurs, innovators, mentors, investors, leaders, and dynamic professionals come together to
//                 collaborate and grow.
//               </p>
//               <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-all">

//               <a
//     href="https://api.whatsapp.com/send/?phone=918879355057&text&type=phone_number&app_absent=0"
//     className="inline-block mt-6 bg-red-500 text-white py-3 px-6 rounded hover:bg-red-600 transition"
//   >
//                 JOIN NOW
//                 </a>
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Image Grid */}
//         <section className="py-16 bg-white">
//           <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <img src={image2} alt="Community Event 1" className="rounded-lg shadow-md hover:shadow-xl transition-shadow" />
//             <img src={image5} alt="Community Event 2" className="rounded-lg shadow-md hover:shadow-xl transition-shadow" />
//             <img src={image4} alt="Community Event 3" className="rounded-lg shadow-md hover:shadow-xl transition-shadow" />
//           </div>
//         </section>

//         {/* Pricing Plans */}
//         <section className="py-16 bg-gray-50">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl font-semibold">Join now for ₹999/- (including GST) one-time and get instant access.</h2>
//             <p className="mt-4 text-gray-600">
//               You can also choose the quarterly fee plan for ₹999/- per quarter (incl. taxes) and
//               <br /> avail access to the accelerator program.
//             </p>
//             <p className="mt-4 font-semibold">BOTH PLANS INCLUDE HIGH-NETWORK OFFLINE EVENTS</p>
//             <button className="mt-6 bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-all">
//               SELECT PLAN
//             </button>
//           </div>

//           <div className="max-w-6xl mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-8">
//               {/* One-Time Plan */}
//               <div className="bg-pink-50 p-8 rounded-xl shadow-lg">
//                 <div className="text-center mb-8">
//                   <div className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm mb-4">
//                     MOST POPULAR
//                   </div>
//                   <h3 className="text-5xl font-bold">₹999</h3>
//                   <p className="mt-2 text-gray-600">One-Time Fee</p>
//                 </div>
//                 <Features plan="basic" />
//                 <button className="w-full mt-8 bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-all">
//                   Select
//                 </button>
//               </div>

//               {/* Monthly Plan */}
//               <div className="bg-white p-8 rounded-xl shadow-lg">
//                 <div className="text-center mb-8">
//                   <h3 className="text-5xl font-bold">₹999</h3>
//                   <p className="mt-2 text-gray-600">Monthly Fee</p>
//                   <p className="text-sm text-gray-500 mt-1">Valid for one month</p>
//                 </div>
//                 <Features plan="premium" />
//                 <button className="w-full mt-8 bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-all">
//                   Select
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Trust Section */}
//         <section className="py-16 bg-white">
//           <div className="max-w-6xl mx-auto px-4">
//             <div className="text-center mb-16">
//               <h2 className="text-2xl font-bold mb-6">CREOVIBE IS YOUR TRUSTED BUSINESS PARTNER</h2>
//               <p className="text-gray-600">
//                 Founded in 2013, we&apos;re 100% compliant ✅, leveraging cutting-edge
//                 <br /> payment and web technologies 💻 to ensure security and efficiency 🌐.
//                 <br /> Recognized by top organizations 🏆 and trusted by thousands ⭐️, we deliver
//                 <br /> excellence and reliability every step of the way 👍 ✨.
//               </p>
//             </div>

//             <div className="bg-gradient-to-r from-green-600 to-red-500 rounded-2xl overflow-hidden">
//               <div className="grid md:grid-cols-2 items-center">
//                 <div className="bg-gradient-to-br from-green-700 to-green-900 h-64 md:h-full" />
//                 <div className="p-8 md:p-12 bg-pink-50">
//                   <h3 className="text-2xl font-semibold mb-2">The Membership You Truly Need</h3>
//                   <h2 className="text-4xl font-bold text-red-500 mb-6">A Community That
//                     <br /> Stands by You
//                   </h2>
//                   <p className="text-gray-600 mb-8">
//                     Become part of something bigger. Join India&apos;s largest business
//                     community and network with like-minded professionals, entrepreneurs, and innovators.
//                   </p>
//                   <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-all">
//                     JOIN NOW
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// const Features = ({ plan }) => {
//   const basicFeatures = [
//     'Access to community',
//     'Networking opportunities',
//     'Events & workshops',
//     'Exclusive content',
//   ];

//   const premiumFeatures = [
//     'Everything in Basic',
//     'Mentorship from experts',
//     'Priority event access',
//     'Exclusive investor access',
//     'Increased networking opportunities',
//   ];

//   const features = plan === 'premium' ? premiumFeatures : basicFeatures;

//   return (
//     <ul className="space-y-4 mb-8">
//       {features.map((feature, index) => (
//         <li key={index} className="flex items-center gap-3">
//           <div className="text-xl text-green-500">✔</div>
//           <span className="text-gray-700">{feature}</span>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default CommunityLanding;
