
// // const Hero = () => {
// //   return (
// //     <section id="hero" className="bg-white text-center py-20">
// //       <h1 className="text-5xl font-bold text-red-500">Connect With Like-Minded People!</h1>
// //       <p className="mt-4 text-lg text-gray-700">
// //         A vibrant business community connecting ambitious youngsters, entrepreneurs, and innovators.
// //       </p>
// //       <button className="mt-8 px-6 py-2 bg-red-500 text-white rounded-full">
// //         Join CREOVIBE Community
// //       </button>

 
// //     </section>
// //   );
// // };

// // export default Hero;


// // const Hero = () => {
// //   return (
// //     <section id="hero" className="bg-white text-center py-20 px-4 md:px-8">
// //       <h1 className="text-3xl md:text-5xl font-bold text-red-500">
// //         Connect With Like-Minded People!
// //       </h1>
// //       <p className="mt-4 text-sm md:text-lg text-gray-700">
// //         A vibrant business community connecting ambitious youngsters, entrepreneurs, and innovators.
// //       </p>
// //       <div className="mt-8">
// //         <button className="flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">
// //           <span className="mr-2">→</span> Join CREOVIBE Community
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;


// // const Hero = () => {
// //   return (
// //     <section
// //       id="hero"
// //       className="bg-white text-center py-20 px-4 md:px-8 flex items-center justify-center flex-col h-screen"
// //     >
// //       <h1 className="text-3xl md:text-5xl font-bold text-red-500">
// //         Connect With Like-Minded People!
// //       </h1>
// //       <p className="mt-4 text-sm md:text-lg text-gray-700">
// //         A vibrant business community connecting ambitious youngsters, entrepreneurs, and innovators.
// //       </p>
// //       <div className="mt-8">
// //         <button className="flex items-center justify-center px-6 py-3 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition duration-300">
// //           <span className="mr-2">→</span> Join CREOVIBE Community
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;



// // const Hero = () => {
// //   return (
// //     <section
// //       id="hero"
// //       className="text-center py-20 px-4 md:px-8 flex items-center justify-center flex-col h-screen bg-cover bg-center"
// //       style={{
// //         backgroundImage: `url('/path-to-your-image.png')`, // Replace with the correct path to your image
// //       }}
// //     >
// //       <h1 className="text-3xl md:text-5xl font-bold text-red-500">
// //         Connect With Like-Minded People!
// //       </h1>
// //       <p className="mt-4 text-sm md:text-lg text-gray-700">
// //         A vibrant business community connecting ambitious youngsters, entrepreneurs, and innovators.
// //       </p>
// //       <div className="mt-8">
// //         <button className="flex items-center justify-center px-6 py-3 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition duration-300">
// //           <span className="mr-2">→</span> Join CREOVIBE Community
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;


// // import image from '../assets/image.png';


// // const Hero = () => {
// //   return (
// //     <section
// //       id="hero"
// //       className="text-center py-20 px-4 md:px-8 flex items-center justify-center flex-col h-screen bg-cover bg-center"
// //       style={{
// //         backgroundImage: `url(${image})`,  
// //       }}
// //     >
// //       <h1 className="text-3xl md:text-5xl font-bold text-red-500">
// //         Connect With Like-Minded People!
// //       </h1>
// //       <p className="mt-4 text-sm md:text-lg text-gray-700">
// //         A vibrant business community connecting ambitious youngsters, entrepreneurs, and innovators.
// //       </p>
// //       <div className="mt-8">
// //         <button className="flex items-center justify-center px-6 py-3 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition duration-300">
// //           <span className="mr-2">→</span> Join CREOVIBE Community
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;


// import image from '../assets/image.png';
// import { useNavigate } from 'react-router-dom'; 
// // import CommunityLanding from '../components/CommunityLanding';

// const Hero = () => {


//   const navigate = useNavigate();

  
//   const handleClick = () => {
//     navigate('/community-landing');  
//   };



//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 py-32 overflow-hidden"
//     >
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${image})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto text-center">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
//           Connect With Like-Minded People
//         </h1>
        
//         <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
//         A dynamic business community fostering connections among ambitious entrepreneurs, innovators, and thought leaders from top institutions like IIT and IIM.
//         </p>

//         <button onClick={handleClick} className="group relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-red-500 rounded-full overflow-hidden transition-all duration-300 hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:outline-none">
//           <span className="relative z-10 flex items-center">
//             <span className="mr-3 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
//             Join 10Xclub 
//           </span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;




// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom'; 
// import image from '../assets/image.png';
// import { ArrowRight } from 'lucide-react';

// const Hero = () => {
//   const navigate = useNavigate();
  
//   const handleClick = () => {
//     navigate('/community-landing');  
//   };

//   return (
//     <motion.section
//       id="hero"
//       className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 py-32 overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Dynamic Background with Parallax Effect */}
//       <motion.div 
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${image})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//         initial={{ scale: 1 }}
//         animate={{ 
//           scale: 1.05,
//           transition: { 
//             duration: 5, 
//             repeat: Infinity, 
//             repeatType: "reverse" 
//           }
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//       </motion.div>

//       {/* Content with Animations */}
//       <motion.div 
//         className="relative z-10 max-w-4xl mx-auto text-center"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.7, delay: 0.3 }}
//       >
//         <motion.h1 
//           className="text-4xl md:text-6xl font-bold text-white mb-6"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           Connect With Like-Minded People
//         </motion.h1>
        
//         <motion.p 
//           className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//         >
//           A dynamic business community fostering connections among ambitious entrepreneurs, 
//           innovators, and thought leaders from top institutions like IIT and IIM.
//         </motion.p>

//         <motion.button 
//           onClick={handleClick} 
//           className="group relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-red-500 rounded-full overflow-hidden transition-all duration-300 hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:outline-none"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.7 }}
//         >
//           <span className="relative z-10 flex items-center">
//             <span className="mr-3 transform group-hover:translate-x-1 transition-transform duration-200">
//               <ArrowRight size={24} />
//             </span>
//             Join 10Xclub 
//           </span>
//         </motion.button>
//       </motion.div>
//     </motion.section>
//   );
// };

// export default Hero;




// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom'; 
// import { 
//   Zap, 
//   Users, 
//   TrendingUp, 
//   ArrowRight, 
//   Network 
// } from 'lucide-react';

// const Hero = () => {
//   const navigate = useNavigate();
//   const [activeStatCard, setActiveStatCard] = useState(null);

//   const communityStats = [
//     {
//       icon: Users,
//       number: "5000+",
//       label: "Active Entrepreneurs",
//       color: "text-blue-500",
//       description: "A vibrant network of innovators and business leaders"
//     },
//     {
//       icon: TrendingUp,
//       number: "250+",
//       label: "Successful Startups",
//       color: "text-green-500", 
//       description: "Ventures launched and scaled through our community"
//     },
//     {
//       icon: Network,
//       number: "50+",
//       label: "Industry Verticals",
//       color: "text-purple-500",
//       description: "Diverse sectors represented in our ecosystem"
//     }
//   ];

//   const handleClick = () => {
//     navigate('/community-landing');  
//   };

//   return (
//     <motion.section
//       className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 py-32 bg-gradient-to-br from-blue-50 to-blue-100"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="absolute inset-0 opacity-10 bg-pattern" />
      
//       <div className="relative z-10 max-w-5xl mx-auto text-center">
//         <motion.h1 
//           className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           Unleash Your Entrepreneurial Potential
//         </motion.h1>
        
//         <motion.p 
//           className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           A transformative platform connecting ambitious entrepreneurs, 
//           providing mentorship, networking, and resources to turn innovative ideas into successful ventures.
//         </motion.p>

//         <motion.button 
//           onClick={handleClick} 
//           className="group relative inline-flex items-center px-10 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <span className="flex items-center">
//             Join 10X Entrepreneurs Club 
//             <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
//           </span>
//         </motion.button>

//         {/* Community Stats Section */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//         >
//           {communityStats.map((stat, index) => (
//             <motion.div 
//               key={index}
//               className={`
//                 p-6 bg-white rounded-xl shadow-lg transition-all duration-300
//                 ${activeStatCard === index 
//                   ? 'scale-105 shadow-2xl' 
//                   : 'hover:scale-105 hover:shadow-xl'}
//               `}
//               onMouseEnter={() => setActiveStatCard(index)}
//               onMouseLeave={() => setActiveStatCard(null)}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="flex justify-center mb-4">
//                 <stat.icon className={`w-12 h-12 ${stat.color}`} />
//               </div>
//               <h3 className="text-3xl font-bold text-gray-800 mb-2">
//                 {stat.number}
//               </h3>
//               <p className="text-gray-600 font-medium mb-2">{stat.label}</p>
//               {activeStatCard === index && (
//                 <motion.p 
//                   className="text-sm text-gray-500"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                 >
//                   {stat.description}
//                 </motion.p>
//               )}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;


// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom'; 
// import { 
//   Users, 
//   TrendingUp, 
//   ArrowRight, 
//   Network 
// } from 'lucide-react';

// const Hero = () => {
//   const navigate = useNavigate();
//   const [selectedCard, setSelectedCard] = useState(null);

//   const communityStats = [
//     {
//       icon: Users,
//       number: "5000+",
//       label: "Active Entrepreneurs",
//       color: "bg-blue-100 text-blue-600",
//       description: "A vibrant network of innovators and business leaders connecting across industries and geographies."
//     },
//     {
//       icon: TrendingUp,
//       number: "250+",
//       label: "Successful Startups",
//       color: "bg-green-100 text-green-600", 
//       description: "Innovative ventures launched, funded, and scaled through our comprehensive ecosystem and support."
//     },
//     {
//       icon: Network,
//       number: "50+",
//       label: "Industry Verticals",
//       color: "bg-purple-100 text-purple-600",
//       description: "Diverse sectors represented, from tech and finance to healthcare and sustainable solutions."
//     }
//   ];

//   const handleClick = () => {
//     navigate('/community-landing');  
//   };

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 py-16 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
//       <div className="absolute inset-0 opacity-5 bg-pattern" />
      
//       <div className="relative z-10 max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
//             Unleash Your <br />Entrepreneurial Potential
//           </h1>
          
//           <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
//             A transformative platform connecting ambitious entrepreneurs, providing mentorship, 
//             networking, and resources to turn innovative ideas into successful ventures.
//           </p>

//           <button 
//             onClick={handleClick} 
//             className="group relative inline-flex items-center px-10 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300"
//           >
//             <span className="flex items-center">
//               Join 10X Entrepreneurs Club 
//               <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
//             </span>
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {communityStats.map((stat, index) => (
//             <motion.div 
//               key={index}
//               className={`
//                 relative p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300
//                 ${selectedCard === index 
//                   ? 'ring-4 ring-blue-500 scale-105' 
//                   : 'hover:shadow-xl hover:scale-105'}
//                 ${stat.color}
//               `}
//               onClick={() => setSelectedCard(selectedCard === index ? null : index)}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//             >
//               <div className="flex justify-center mb-4">
//                 <div className={`p-3 rounded-full ${stat.color} bg-opacity-50`}>
//                   <stat.icon className="w-10 h-10" />
//                 </div>
//               </div>
//               <h3 className="text-3xl font-bold text-gray-800 mb-2 text-center">
//                 {stat.number}
//               </h3>
//               <p className="text-center font-medium mb-2">{stat.label}</p>
              
//               <AnimatePresence>
//                 {selectedCard === index && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="mt-4 text-center overflow-hidden"
//                   >
//                     <p className="text-sm text-gray-700">
//                       {stat.description}
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



// import  { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom'; 
// import { 
//   Users, 
//   TrendingUp, 
//   Network 
// } from 'lucide-react';

// const Hero = () => {
//   const navigate = useNavigate();
//   const [activeCard, setActiveCard] = useState(null);

//   const communityStats = [
//     {
//       icon: Users,
//       number: "5000+",
//       label: "Active Entrepreneurs",
//       iconColor: "text-blue-500",
//       bgColor: "bg-blue-50",
//       description: "A vibrant network of innovators and business leaders."
//     },
//     {
//       icon: TrendingUp,
//       number: "250+",
//       label: "Successful Startups",
//       iconColor: "text-green-500",
//       bgColor: "bg-green-50",
//       description: "Ventures launched and scaled through our community."
//     },
//     {
//       icon: Network,
//       number: "50+",
//       label: "Industry Verticals",
//       iconColor: "text-purple-500",
//       bgColor: "bg-purple-50",
//       description: "Diverse sectors represented in our ecosystem."
//     }
//   ];

//   const handleClick = () => {
//     navigate('/community-landing');  
//   };

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 py-16 bg-gradient-to-br from-blue-50 to-blue-100">
//       <div className="max-w-6xl mx-auto text-center">
//         <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
//           Unleash Your Entrepreneurial Potential
//         </h1>
        
//         <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
//           A transformative platform connecting ambitious entrepreneurs, providing mentorship, 
//           networking, and resources to turn innovative ideas into successful ventures.
//         </p>

//         <button 
//           onClick={handleClick} 
//           className="group relative inline-flex items-center px-10 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 mb-16"
//         >
//           Join 10X Entrepreneurs Club
//         </button>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {communityStats.map((stat, index) => (
//             <div 
//               key={index}
//               className={`
//                 relative p-6 rounded-2xl shadow-lg transition-all duration-300
//                 ${activeCard === index ? 'ring-4 ring-blue-400' : 'hover:shadow-xl'}
//                 ${stat.bgColor}
//               `}
//               onMouseEnter={() => setActiveCard(index)}
//               onMouseLeave={() => setActiveCard(null)}
//             >
//               <div className="flex justify-center mb-4">
//                 <div className={`p-4 rounded-full ${stat.bgColor}`}>
//                   <stat.icon className={`w-12 h-12 ${stat.iconColor}`} />
//                 </div>
//               </div>
              
//               <h3 className="text-4xl font-bold text-gray-800 mb-2 text-center">
//                 {stat.number}
//               </h3>
//               <p className="text-lg font-medium text-gray-600 text-center mb-4">
//                 {stat.label}
//               </p>
              
//               {activeCard === index && (
//                 <p className="text-sm text-gray-700 text-center mt-4">
//                   {stat.description}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



import  { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, 
  Rocket, 
  Award 
} from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  const communityHighlights = [
    {
      icon: Rocket,
      title: "Startup Ecosystem",
      description: "A launchpad for innovative entrepreneurs to transform ideas into global ventures.",
      details: [
        "250+ Successful Startups",
        "Multi-industry Innovation",
        "Seed Funding Connections"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connecting ambitious minds across continents and industries.",
      details: [
        "5000+ Active Entrepreneurs",
        "International Mentorship",
        "Cross-border Collaborations"
      ],
      color: "from-green-500 to-green-700"
    },
    {
      icon: Award,
      title: "Growth Accelerator",
      description: "Transforming potential into extraordinary entrepreneurial success.",
      details: [
        "50+ Industry Verticals",
        "Advanced Skill Workshops",
        "Strategic Partnerships"
      ],
      color: "from-purple-500 to-purple-700"
    }
  ];

  const handleClick = () => {
    navigate('/community-landing');
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 py-16 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Unleash Your Entrepreneurial Potential
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          A transformative platform connecting ambitious entrepreneurs, providing mentorship, 
          networking, and resources to turn innovative ideas into successful ventures.
        </p>

        <button 
          onClick={handleClick} 
          className="group relative inline-flex items-center px-10 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 mb-16"
        >
          Join 10X Entrepreneurs Club
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityHighlights.map((section, index) => (
            <div 
              key={index}
              className={`
                relative p-6 rounded-2xl shadow-lg transition-all duration-300 group
                ${activeSection === index 
                  ? 'ring-4 ring-blue-400 scale-105' 
                  : 'hover:shadow-xl'}
                bg-gradient-to-br ${section.color} text-white
              `}
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-white/20">
                  <section.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-center">
                {section.title}
              </h3>
              
              <p className="text-sm text-white/80 text-center mb-4">
                {section.description}
              </p>
              
              {activeSection === index && (
                <ul className="space-y-2 mt-4 text-center text-sm">
                  {section.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-white/90">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;