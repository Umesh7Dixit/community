// import { Star, Users, Shield, Zap } from 'lucide-react';

// const TrustSection = () => {
//   return (
//     <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Trust Message Section */}
//         <div className="text-center mb-20">
//           <div className="inline-block mb-6">
//             <span className="bg-gradient-to-r from-violet-500/10 to-red-500/10 px-6 py-2 rounded-full text-sm font-semibold text-gray-600">
//               ESTABLISHED 2013
//             </span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-violet-600 to-red-500 bg-clip-text text-transparent">
//             CREOVIBE IS YOUR TRUSTED BUSINESS PARTNER
//           </h2>
          
//           {/* Trust Points Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
//             {[
//               { icon: Shield, title: "100% Compliant", desc: "Fully verified & secure" },
//               { icon: Zap, title: "Cutting-edge Tech", desc: "Latest web technologies" },
//               { icon: Star, title: "Top Rated", desc: "Recognized excellence" },
//               { icon: Users, title: "Trusted Network", desc: "Thousands of members" }
//             ].map((item, index) => (
//               <div 
//                 key={index}
//                 className="group p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 <div className="mb-4 flex justify-center">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500/10 to-red-500/10 group-hover:from-violet-500/20 group-hover:to-red-500/20 transition-all duration-300">
//                     <item.icon className="w-6 h-6 text-red-500" />
//                   </div>
//                 </div>
//                 <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
//                 <p className="text-sm text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Membership Card */}
//         <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
//           <div className="grid md:grid-cols-2 items-stretch">
//             {/* Left Column - Pattern Background */}
//             <div className="relative h-64 md:h-full min-h-[400px] bg-gradient-to-br from-violet-600 to-red-500 overflow-hidden">
//               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDUwIDAgTCAwIDAgMCA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"/>
//               {/* Animated circles */}
//               <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-pulse" />
//               <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-700" />
//             </div>

//             {/* Right Column - Content */}
//             <div className="p-8 md:p-12 bg-gradient-to-br from-gray-50 to-white">
//               <div className="max-w-lg">
//                 <h3 className="text-2xl font-semibold mb-3 text-gray-800">
//                   The Membership You Truly Need
//                 </h3>
//                 <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-red-500 mb-6 leading-tight">
//                   A Community That Stands by You
//                 </h2>
//                 <p className="text-gray-600 text-lg mb-8">
//                   Become part of something bigger. Join India&apos;s largest business
//                   community and network with like-minded professionals, entrepreneurs, and innovators.
//                 </p>
//                 <button className="group relative px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
//                   <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-red-500 rounded-xl transition-all duration-300 group-hover:from-violet-700 group-hover:to-red-600" />
//                   <span className="relative text-white">JOIN NOW</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrustSection;


// import  { useState } from 'react';
// import { 
//   Rocket, 
//   Globe, 
//   Layers, 
//   Zap, 
//   TrendingUp, 
//   Network 
// } from 'lucide-react';

// const InnovationSection = () => {
//   const [activeCard, setActiveCard] = useState(null);

//   const innovationCards = [
//     {
//       icon: Rocket,
//       title: "Accelerate Growth",
//       description: "Unlock potential through strategic mentorship and rapid scaling techniques.",
//       color: "from-purple-500 to-indigo-600"
//     },
//     {
//       icon: Globe,
//       title: "Global Connections",
//       description: "Build international networks across diverse industries and markets.",
//       color: "from-blue-500 to-cyan-600"
//     },
//     {
//       icon: Layers,
//       title: "Multi-Tier Learning",
//       description: "Access curated resources, workshops, and exclusive knowledge streams.",
//       color: "from-green-500 to-emerald-600"
//     },
//     {
//       icon: Network,
//       title: "Collaborative Ecosystem",
//       description: "Engage in collaborative projects and transform ideas into reality.",
//       color: "from-pink-500 to-rose-600"
//     }
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <span className="inline-block mb-4 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-1 rounded-full text-sm font-medium text-purple-700">
//             Elevate Your Potential
//           </span>
          
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//             Beyond Networking. Real Growth.
//           </h2>
          
//           <p className="max-w-2xl mx-auto text-xl text-gray-600">
//             Transform your professional journey through intelligent community design and strategic engagement.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {innovationCards.map((card, index) => (
//             <div 
//               key={index}
//               className={`
//                 group relative overflow-hidden rounded-3xl p-6 
//                 transform transition-all duration-300
//                 ${activeCard === index 
//                   ? 'scale-105 shadow-2xl' 
//                   : 'hover:scale-105 shadow-lg'}
//               `}
//               onMouseEnter={() => setActiveCard(index)}
//               onMouseLeave={() => setActiveCard(null)}
//             >
//               <div className={`
//                 absolute inset-0 bg-gradient-to-br ${card.color} 
//                 opacity-10 group-hover:opacity-20 transition-opacity
//               `} />
              
//               <div className="relative z-10">
//                 <div className="mb-4 flex items-center justify-between">
//                   <div className={`
//                     p-3 rounded-xl bg-gradient-to-br ${card.color} 
//                     bg-opacity-20 text-white
//                   `}>
//                     <card.icon className="w-6 h-6" />
//                   </div>
                  
//                   {activeCard === index && (
//                     <div className="animate-pulse text-gray-500">
//                       <TrendingUp className="w-5 h-5" />
//                     </div>
//                   )}
//                 </div>
                
//                 <h3 className="text-xl font-bold mb-3 text-gray-800">
//                   {card.title}
//                 </h3>
                
//                 <p className="text-gray-600">
//                   {card.description}
//                 </p>
                
//                 {activeCard === index && (
//                   <div className="mt-4 animate-fade-in-up">
//                     <button className="
//                       w-full py-2 rounded-lg 
//                       bg-white text-gray-800 
//                       hover:bg-gray-100 
//                       transition-colors
//                     ">
//                       Explore More
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <a 
//             href="#join" 
//             className="
//               inline-block px-8 py-4 
//               bg-gradient-to-r from-purple-600 to-pink-600 
//               text-white font-semibold rounded-full 
//               hover:from-purple-700 hover:to-pink-700 
//               transition-transform transform hover:-translate-y-1
//               shadow-lg hover:shadow-xl
//             "
//           >
//             Start Your Journey
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InnovationSection;



// ____________________________main_________________________________________

// import  { useState } from 'react';
// import { 
//   Rocket, 
//   Globe, 
//   Layers, 
//   Network 
// } from 'lucide-react';

// const InnovationSection = () => {
//   const [activeCard, setActiveCard] = useState(null);

//   const innovationCards = [
//     {
//       icon: Rocket,
//       title: "Accelerate Growth",
//       description: "Unlock potential through strategic mentorship and rapid scaling techniques.",
//       color: "from-purple-500 to-indigo-600"
//     },
//     {
//       icon: Globe,
//       title: "Global Connections",
//       description: "Build international networks across diverse industries and markets.",
//       color: "from-blue-500 to-cyan-600"
//     },
//     {
//       icon: Layers,
//       title: "Multi-Tier Learning",
//       description: "Access curated resources, workshops, and exclusive knowledge streams.",
//       color: "from-green-500 to-emerald-600"
//     },
//     {
//       icon: Network,
//       title: "Collaborative Ecosystem",
//       description: "Engage in collaborative projects and transform ideas into reality.",
//       color: "from-pink-500 to-rose-600"
//     }
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <span className="inline-block mb-4 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-1 rounded-full text-sm font-medium text-purple-700">
//             Elevate Your Potential
//           </span>
          
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//             Transform Your Professional Journey
//           </h2>
          
//           <p className="max-w-2xl mx-auto text-xl text-gray-600">
//             Strategic networking and growth through an intelligent, dynamic community.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {innovationCards.map((card, index) => (
//             <div 
//               key={index}
//               className={`
//                 group relative overflow-hidden rounded-3xl p-6 
//                 transform transition-all duration-300
//                 ${activeCard === index 
//                   ? 'scale-105 shadow-2xl' 
//                   : 'hover:scale-105 shadow-lg'}
//               `}
//               onMouseEnter={() => setActiveCard(index)}
//               onMouseLeave={() => setActiveCard(null)}
//             >
//               <div className={`
//                 absolute inset-0 bg-gradient-to-br ${card.color} 
//                 opacity-10 group-hover:opacity-20 transition-opacity
//               `} />
              
//               <div className="relative z-10">
//                 <div className="mb-4 flex items-center justify-between">
//                   <div className={`
//                     p-3 rounded-xl bg-gradient-to-br ${card.color} 
//                     bg-opacity-20 text-white
//                   `}>
//                     <card.icon className="w-6 h-6" />
//                   </div>
//                 </div>
                
//                 <h3 className="text-xl font-bold mb-3 text-gray-800">
//                   {card.title}
//                 </h3>
                
//                 <p className="text-gray-600 h-24 overflow-hidden">
//                   {card.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

        
//       </div>
//     </section>
//   );
// };

// export default InnovationSection;




import { useState } from 'react';
import { 
  Banknote, 
  Briefcase, 
  CalendarDays, 
  GraduationCap 
} from 'lucide-react';

const InnovationSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const innovationCards = [
    {
      icon: Banknote,
      title: "Investment Opportunities",
      description: "Discover exciting investment ventures to grow your wealth strategically.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Briefcase,
      title: "Genuine Leads for Jobs",
      description: "Connect with verified job leads tailored to your skills and expertise.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: CalendarDays,
      title: "Access to Monthly Free Events",
      description: "Attend exclusive monthly events to expand your network and learn from experts.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: GraduationCap,
      title: "Skill Development Workshops",
      description: "Participate in hands-on workshops to enhance your professional skillset.",
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-1 rounded-full text-sm font-medium text-purple-700">
            Elevate Your Potential
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Transform Your Professional Journey
          </h2>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Strategic networking and growth through an intelligent, dynamic community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {innovationCards.map((card, index) => (
            <div 
              key={index}
              className={`
                group relative overflow-hidden rounded-3xl p-6 
                transform transition-all duration-300
                ${activeCard === index 
                  ? 'scale-105 shadow-2xl' 
                  : 'hover:scale-105 shadow-lg'}
              `}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`
                absolute inset-0 bg-gradient-to-br ${card.color} 
                opacity-10 group-hover:opacity-20 transition-opacity
              `} />
              
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <div className={`
                    p-3 rounded-xl bg-gradient-to-br ${card.color} 
                    bg-opacity-20 text-white
                  `}>
                    <card.icon className="w-6 h-6" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 h-24 overflow-hidden">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;






// ___________________________________________________________________________________



{/* <div className="mt-16 text-center">
          <a 
            href="#join" 
            className="
              inline-block px-8 py-4 
              bg-gradient-to-r from-purple-600 to-pink-600 
              text-white font-semibold rounded-full 
              hover:from-purple-700 hover:to-pink-700 
              transition-transform transform hover:-translate-y-1
              shadow-lg hover:shadow-xl
            "
          >
            Join Community
          </a>
        </div> */}