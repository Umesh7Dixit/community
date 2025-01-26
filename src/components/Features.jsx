
// const Features = () => {
//   return (
//     <section id="features" className="bg-gray-100 py-20">
//             <section id="events" className="bg-gray-50 py-16 px-6">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-2xl font-bold text-center">Upcoming Events</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//             <div className="p-6 bg-white rounded shadow">
//               <h3 className="font-bold text-lg">Web Development Workshop</h3>
//               <p className="text-gray-700 mt-2">Date: Jan 15, 2024</p>
//               <p className="text-gray-700">Learn the latest in web tech.</p>
//             </div>
//             <div className="p-6 bg-white rounded shadow">
//               <h3 className="font-bold text-lg">Entrepreneurship Meet</h3>
//               <p className="text-gray-700 mt-2">Date: Feb 20, 2024</p>
//               <p className="text-gray-700">Network with top entrepreneurs.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <h2 className="text-3xl font-bold text-center mt-16 mb-8">Meet the Founder</h2>
//       <div className="text-center bg-white shadow-lg p-6 rounded-lg mx-auto w-1/2">
//         <h3 className="text-2xl font-bold">Harshit Pandey</h3>
//         <p className="mt-2 text-gray-600">
//           Founder of CreoVibe. Passionate about coding and creating impactful solutions.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Features;




// import  { useState } from 'react';
// import { Calendar, User, Award, MapPin } from 'lucide-react';

// const Features = () => {
//   const [activeTab, setActiveTab] = useState('events');

//   const events = [
//     {
//       id: 1,
//       title: "Web Development Workshop",
//       date: "Jan 15, 2024",
//       description: "Deep dive into modern web technologies and frameworks.",
//       location: "Tech Hub, Silicon Valley"
//     },
//     {
//       id: 2,
//       title: "Entrepreneurship Meet",
//       date: "Feb 20, 2024",
//       description: "Network with successful entrepreneurs and investors.",
//       location: "Innovation Center, San Francisco"
//     }
//   ];

//   const founderInfo = {
//     name: "Harshit Pandey",
//     role: "Founder of CreoVibe",
//     bio: "Passionate technologist driving innovation through cutting-edge solutions. With a vision to transform ideas into impactful digital experiences.",
//     achievements: [
//       "5+ Years in Tech Innovation",
//       "Multiple Startup Founder",
//       "Speaker at Global Tech Conferences"
//     ]
//   };

//   return (
//     <section id="features" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Tabs */}
//         <div className="flex justify-center mb-10">
//           <div className="bg-white shadow-md rounded-full p-1 flex space-x-2">
//             <button
//               onClick={() => setActiveTab('events')}
//               className={`px-6 py-2 rounded-full transition-all ${
//                 activeTab === 'events' 
//                   ? 'bg-blue-500 text-white' 
//                   : 'text-gray-600 hover:bg-blue-100'
//               }`}
//             >
//               Upcoming Events
//             </button>
//             <button
//               onClick={() => setActiveTab('founder')}
//               className={`px-6 py-2 rounded-full transition-all ${
//                 activeTab === 'founder' 
//                   ? 'bg-blue-500 text-white' 
//                   : 'text-gray-600 hover:bg-blue-100'
//               }`}
//             >
//               Meet the Founder
//             </button>
//           </div>
//         </div>

//         {/* Events Tab */}
//         {activeTab === 'events' && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {events.map(event => (
//               <div 
//                 key={event.id} 
//                 className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-[1.02]"
//               >
//                 <div className="flex items-center mb-4">
//                   <Calendar className="text-blue-500 mr-3" />
//                   <h3 className="text-xl font-bold">{event.title}</h3>
//                 </div>
//                 <div className="space-y-2">
//                   <p className="flex items-center text-gray-600">
//                     <MapPin className="mr-2 text-red-500 w-5 h-5" />
//                     {event.location}
//                   </p>
//                   <p className="text-gray-700">{event.description}</p>
//                   <div className="text-sm text-gray-500 mt-2">{event.date}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Founder Tab */}
//         {activeTab === 'founder' && (
//           <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
//             <div className="flex items-center mb-6">
//               <User className="text-blue-500 mr-3 w-10 h-10" />
//               <div>
//                 <h2 className="text-2xl font-bold">{founderInfo.name}</h2>
//                 <p className="text-gray-600">{founderInfo.role}</p>
//               </div>
//             </div>
//             <p className="text-gray-700 mb-4">{founderInfo.bio}</p>
            
//             <div className="border-t pt-4">
//               <h4 className="font-semibold mb-2 flex items-center">
//                 <Award className="mr-2 text-yellow-500" /> Key Achievements
//               </h4>
//               <ul className="space-y-2">
//                 {founderInfo.achievements.map((achievement, index) => (
//                   <li key={index} className="text-gray-600 before:content-['✓'] before:mr-2 before:text-green-500">
//                     {achievement}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Features;










// import { Calendar, User, Award, MapPin } from 'lucide-react';

// const Features = () => {
//   const events = [
//     {
//       id: 1,
//       title: "Web Development Workshop",
//       date: "Jan 15, 2024",
//       description: "Deep dive into modern web technologies and frameworks.",
//       location: "Tech Hub, Silicon Valley"
//     },
//     {
//       id: 2,
//       title: "Entrepreneurship Meet",
//       date: "Feb 20, 2024",
//       description: "Network with successful entrepreneurs and investors.",
//       location: "Innovation Center, San Francisco"
//     }
//   ];

//   const founderInfo = {
//     name: "Harshit Pandey",
//     role: "Founder of CreoVibe",
//     bio: "Passionate technologist driving innovation through cutting-edge solutions. With a vision to transform ideas into impactful digital experiences.",
//     achievements: [
//       "5+ Years in Tech Innovation",
//       "Multiple Startup Founder",
//       "Speaker at Global Tech Conferences"
//     ]
//   };

//   return (
//     <section id="features" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Upcoming Events Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-center mb-10">Upcoming Events</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {events.map(event => (
//               <div 
//                 key={event.id} 
//                 className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-[1.02]"
//               >
//                 <div className="flex items-center mb-4">
//                   <Calendar className="text-blue-500 mr-3" />
//                   <h3 className="text-xl font-bold">{event.title}</h3>
//                 </div>
//                 <div className="space-y-2">
//                   <p className="flex items-center text-gray-600">
//                     <MapPin className="mr-2 text-red-500 w-5 h-5" />
//                     {event.location}
//                   </p>
//                   <p className="text-gray-700">{event.description}</p>
//                   <div className="text-sm text-gray-500 mt-2">{event.date}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Founder Section */}
//         <div>
//           <h2 className="text-3xl font-bold text-center mb-10">Meet the Founder</h2>
//           <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
//             <div className="flex items-center mb-6">
//               <User className="text-blue-500 mr-3 w-10 h-10" />
//               <div>
//                 <h2 className="text-2xl font-bold">{founderInfo.name}</h2>
//                 <p className="text-gray-600">{founderInfo.role}</p>
//               </div>
//             </div>
//             <p className="text-gray-700 mb-4">{founderInfo.bio}</p>
            
//             <div className="border-t pt-4">
//               <h4 className="font-semibold mb-2 flex items-center">
//                 <Award className="mr-2 text-yellow-500" /> Key Achievements
//               </h4>
//               <ul className="space-y-2">
//                 {founderInfo.achievements.map((achievement, index) => (
//                   <li key={index} className="text-gray-600 before:content-['✓'] before:mr-2 before:text-green-500">
//                     {achievement}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;





import { motion } from 'framer-motion';
import { Calendar, User, Award, MapPin } from 'lucide-react';

const Features = () => {
  const events = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "Jan 15, 2024",
      description: "Deep dive into modern web technologies and frameworks.",
      location: "Tech Hub, Silicon Valley"
    },
    {
      id: 2,
      title: "Entrepreneurship Meet",
      date: "Feb 20, 2024",
      description: "Network with successful entrepreneurs and investors.",
      location: "Innovation Center, San Francisco"
    }
  ];

  const founderInfo = {
    name: "Harshit Pandey",
    role: "Founder of CreoVibe",
    bio: "Passionate technologist driving innovation through cutting-edge solutions. With a vision to transform ideas into impactful digital experiences.",
    achievements: [
      "5+ Years in Tech Innovation",
      "Multiple Startup Founder",
      "Speaker at Global Tech Conferences"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Two-Row Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Upcoming Events Column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
              Upcoming Events
            </h2>
            <div className="space-y-6">
              {events.map(event => (
                <motion.div 
                  key={event.id} 
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] group overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Calendar className="text-blue-500 mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                      <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-600">
                        <MapPin className="mr-2 text-red-500 w-5 h-5" />
                        {event.location}
                      </p>
                      <p className="text-gray-700">{event.description}</p>
                      <div className="text-sm text-gray-500 mt-2">{event.date}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Founder Info Column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
              Meet the Founder
            </h2>
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-[1.02] group"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform">
                  <User className="text-blue-500 w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{founderInfo.name}</h2>
                  <p className="text-gray-600">{founderInfo.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">{founderInfo.bio}</p>
              
              <div className="border-t pt-6 border-blue-100">
                <h4 className="font-semibold mb-4 flex items-center text-gray-800">
                  <Award className="mr-2 text-yellow-500 w-6 h-6" /> Key Achievements
                </h4>
                <ul className="space-y-3">
                  {founderInfo.achievements.map((achievement, index) => (
                    <motion.li 
                      key={index} 
                      variants={itemVariants}
                      className="text-gray-600 pl-6 relative before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-green-500 before:rounded-full"
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;