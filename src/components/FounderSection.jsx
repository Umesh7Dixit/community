
// import { motion } from "framer-motion";
// import { User, Award } from "lucide-react";

// const FounderSection = () => {
//   const founderInfo = {
//     name: "Harshit Pandey",
//     role: "Founder of CreoVibe",
//     bio: "Passionate technologist driving innovation through cutting-edge solutions. With a vision to transform ideas into impactful digital experiences.",
//     achievements: [
//       "5+ Years in Tech Innovation",
//       "Multiple Startup Founder",
//       "Speaker at Global Tech Conferences",
//     ],
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//       className="py-16 bg-gradient-to-br from-gray-50 to-gray-100"
//     >
//       <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//         Meet the Founder
//       </h2>
//       <motion.div
//         variants={itemVariants}
//         className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition-all transform hover:scale-105 group max-w-3xl mx-auto"
//       >
//         <div className="flex items-center mb-8">
//           <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mr-6 group-hover:rotate-12 transition-transform">
//             <User className="text-purple-600 w-10 h-10" />
//           </div>
//           <div>
//             <h3 className="text-3xl font-semibold text-gray-800">
//               {founderInfo.name}
//             </h3>
//             <p className="text-lg text-gray-600">{founderInfo.role}</p>
//           </div>
//         </div>
//         <p className="text-lg text-gray-700 mb-8">{founderInfo.bio}</p>

//         <div className="border-t pt-6 border-gray-200">
//           <h4 className="font-semibold mb-4 flex items-center text-gray-800">
//             <Award className="mr-2 text-yellow-500 w-6 h-6" /> Key Achievements
//           </h4>
//           <ul className="space-y-3">
//             {founderInfo.achievements.map((achievement, index) => (
//               <motion.li
//                 key={index}
//                 variants={itemVariants}
//                 className="text-lg text-gray-600 pl-8 relative before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-green-500 before:rounded-full"
//               >
//                 {achievement}
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default FounderSection;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { User, Award, Globe, Code } from 'lucide-react';

// const FounderSection = () => {
//   const founderInfo = {
//     name: "Harshit Pandey",
//     role: "Founder of CreoVibe",
//     bio: "Passionate technologist driving innovation through cutting-edge solutions. With a vision to transform ideas into impactful digital experiences.",
//     achievements: [
//       "5+ Years in Tech Innovation",
//       "Multiple Startup Founder",
//       "Speaker at Global Tech Conferences",
//     ],
//     socialLinks: [
//       { icon: Globe, url: "https://api.whatsapp.com/send/?phone=919119938268&text&type=phone_number&app_absent=0" },
//       // { icon: Code, url: "#" }
//     ]
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//       className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16"
//     >
//       <div className="w-[80%] mx-auto">
//         <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//           Meet the Founder
//         </h2>
        
//         <motion.div
//           variants={itemVariants}
//           className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-8 p-8 hover:shadow-2xl transition-all transform hover:scale-105"
//         >
//           <div className="flex flex-col justify-center">
//             <div className="flex items-center mb-6">
//               <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mr-6 transition-transform group-hover:rotate-12">
//                 <User className="text-purple-600 w-12 h-12" />
//               </div>
//               <div>
//                 <h3 className="text-4xl font-bold text-gray-800">
//                   {founderInfo.name}
//                 </h3>
//                 <p className="text-xl text-gray-600">{founderInfo.role}</p>
//               </div>
//             </div>
            
//             <p className="text-lg text-gray-700 mb-6">{founderInfo.bio}</p>
            
//             <div className="flex space-x-4">
//               {founderInfo.socialLinks.map((link, index) => (
//                 <a 
//                   key={index} 
//                   href={link.url} 
//                   className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition"
//                 >
//                   <link.icon className="text-purple-600 w-6 h-6" />
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           <div className="bg-purple-50 rounded-2xl p-6">
//             <h4 className="font-semibold mb-6 flex items-center text-gray-800 text-2xl">
//               <Award className="mr-3 text-yellow-500 w-8 h-8" /> 
//               Key Achievements
//             </h4>
//             <ul className="space-y-4">
//               {founderInfo.achievements.map((achievement, index) => (
//                 <motion.li
//                   key={index}
//                   variants={itemVariants}
//                   className="text-lg text-gray-700 pl-8 relative before:absolute before:left-0 before:top-2 before:w-5 before:h-5 before:bg-green-500 before:rounded-full"
//                 >
//                   {achievement}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default FounderSection;




// import React from 'react';
// import { motion } from 'framer-motion';
// import { User, Award, Globe, Code } from 'lucide-react';

// const FounderSection = () => {
//   const founderInfo = {
//     name: "Harshit Pandey",
//     role: "Founder of CreoVibe",
//     bio: "Passionate technologist driving innovation through cutting-edge solutions. With a vision to transform ideas into impactful digital experiences.",
//     achievements: [
//       "5+ Years in Tech Innovation",
//       "Multiple Startup Founder",
//       "Speaker at Global Tech Conferences",
//     ],
//     socialLinks: [
//       { icon: Globe, url: "https://api.whatsapp.com/send/?phone=919119938268&text&type=phone_number&app_absent=0" }
//     ]
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//       className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16"
//     >
//       <div className="w-[80%] mx-auto">
//         <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//           Meet the Founder
//         </h2>
        
//         <motion.div
//           variants={itemVariants}
//           className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-8 p-8 hover:shadow-2xl transition-all transform hover:scale-105"
//         >
//           <div className="flex flex-col justify-center">
//             <div className="flex items-center mb-6">
//               <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mr-6 transition-transform group-hover:rotate-12">
//                 <User className="text-purple-600 w-12 h-12" />
//               </div>
//               <div>
//                 <h3 className="text-4xl font-bold text-gray-800">
//                   {founderInfo.name}
//                 </h3>
//                 <p className="text-xl text-gray-600">{founderInfo.role}</p>
//               </div>
//             </div>
            
//             <p className="text-lg text-gray-700 mb-6">{founderInfo.bio}</p>
            
//             <div className="flex space-x-4">
//               {founderInfo.socialLinks.map((link, index) => (
//                 <a 
//                   key={index} 
//                   href={link.url} 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition"
//                 >
//                   <link.icon className="text-purple-600 w-6 h-6" />
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           <div className="bg-purple-50 rounded-2xl p-6">
//             <h4 className="font-semibold mb-6 flex items-center text-gray-800 text-2xl">
//               <Award className="mr-3 text-yellow-500 w-8 h-8" /> 
//               Key Achievements
//             </h4>
//             <ul className="space-y-4">
//               {founderInfo.achievements.map((achievement, index) => (
//                 <motion.li
//                   key={index}
//                   variants={itemVariants}
//                   className="text-lg text-gray-700 pl-8 relative before:absolute before:left-0 before:top-2 before:w-5 before:h-5 before:bg-green-500 before:rounded-full"
//                 >
//                   {achievement}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default FounderSection;




// import { motion } from 'framer-motion';
// import { User, Award, Globe, Code } from 'lucide-react';
// import founder2 from '../assets/founder4.png';

// const FounderSection = () => {
//   const founderInfo = {
//     name: "Harshit Pandey",
//     role: "Founder of CreoVibe",
//     bio: "Passionate technologist driving innovation through cutting-edge solutions. With a vision to transform ideas into impactful digital experiences.",
//     achievements: [
//       "5+ Years in Tech Innovation",
//       "Multiple Startup Founder",
//       "Speaker at Global Tech Conferences",
//     ],
//     socialLinks: [
//       { icon: Globe, url: "https://api.whatsapp.com/send/?phone=919119938268&text&type=phone_number&app_absent=0" }
//     ]
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//       className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16"
//     >
//       <div className="w-[80%] mx-auto">
//         <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//           Meet the Founder
//         </h2>
        
//         <motion.div
//           variants={itemVariants}
//           className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-8 p-8 hover:shadow-2xl transition-all transform hover:scale-105"
//         >
//           <div className="flex flex-col justify-center">
//             <div className="flex items-center mb-6">
//               {/* <img 
//                 src={founder2} 
//                 alt="Harshit Pandey" 
//                 className="w-24 h-24 rounded-full object-cover mr-6"
//               /> */}

// <img 
//   src={founder2} 
//   alt="Harshit Pandey" 
//   className="w-48 h-48 rounded-full object-cover mr-6"
// />
//               <div>
//                 <h3 className="text-4xl font-bold text-gray-800">
//                   {founderInfo.name}
//                 </h3>
//                 <p className="text-xl text-gray-600">{founderInfo.role}</p>
//               </div>
//             </div>
            
//             <p className="text-lg text-gray-700 mb-6">{founderInfo.bio}</p>
            
//             <div className="flex space-x-4">
//               {founderInfo.socialLinks.map((link, index) => (
//                 <a 
//                   key={index} 
//                   href={link.url} 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition"
//                 >
//                   <link.icon className="text-purple-600 w-6 h-6" />
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           <div className="bg-purple-50 rounded-2xl p-6">
//             <h4 className="font-semibold mb-6 flex items-center text-gray-800 text-2xl">
//               <Award className="mr-3 text-yellow-500 w-8 h-8" /> 
//               Key Achievements
//             </h4>
//             <ul className="space-y-4">
//               {founderInfo.achievements.map((achievement, index) => (
//                 <motion.li
//                   key={index}
//                   variants={itemVariants}
//                   className="text-lg text-gray-700 pl-8 relative before:absolute before:left-0 before:top-2 before:w-5 before:h-5 before:bg-green-500 before:rounded-full"
//                 >
//                   {achievement}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default FounderSection;


// import { motion } from 'framer-motion';
// import { Award, Globe } from 'lucide-react';
// import founder2 from '../assets/founder4.png';

// const FounderSection = () => {
//   const founderInfo = {
//     name: "Harshit Pandey",
//     role: "Founder of CreoVibe ( IIM Mumbai Alumni )",
//     bio: "Innovator and entrepreneur, Harshit combines tech expertise with leadership. Founder of CreoVibe and Reput.ai, he's driven to empower communities and build impactful solutions.",
//     achievements: [
//       "Founder of CreoVibe, inspiring Gen Z.",
//       "IIM Mumbai alumnus with strategic expertise.",
//       "Raised $1M for Reput.ai startup.",
//       "Worked with Vedanta, Fractal, L&T.",
//       "Building impactful solutions, empowering communities."
//     ],
//     socialLinks: [
//       { icon: Globe, url: "https://api.whatsapp.com/send/?phone=919119938268&text&type=phone_number&app_absent=0" }
//     ]
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//       className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16"
//     >
//       <div className="w-[80%] mx-auto">
//         <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//           Meet the Founder
//         </h2>
        
//         <motion.div
//           variants={itemVariants}
//           className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-8 p-8 hover:shadow-2xl transition-all transform hover:scale-105"
//         >
//           <div className="flex flex-col justify-center">
//             <img 
//               src={founder2} 
//               alt="Harshit Pandey" 
//               className="w-48 h-48 rounded-full object-cover mr-6"
//             />
//             <div>
//               <h3 className="text-4xl font-bold text-gray-800">{founderInfo.name}</h3>
//               <p className="text-xl text-gray-600">{founderInfo.role}</p>
//             </div>
//             <p className="text-lg text-gray-700 mb-6">{founderInfo.bio}</p>
            
//             <div className="flex space-x-4">
//               {founderInfo.socialLinks.map((link, index) => (
//                 <a 
//                   key={index} 
//                   href={link.url} 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition"
//                 >
//                   <link.icon className="text-purple-600 w-6 h-6" />
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           <div className="bg-purple-50 rounded-2xl p-6">
//             <h4 className="font-semibold mb-6 flex items-center text-gray-800 text-2xl">
//               <Award className="mr-3 text-yellow-500 w-8 h-8" /> 
//               Key Achievements
//             </h4>
//             <ul className="space-y-4">
//               {founderInfo.achievements.map((achievement, index) => (
//                 <motion.li
//                   key={index}
//                   variants={itemVariants}
//                   className="text-lg text-gray-700 pl-8 relative before:absolute before:left-0 before:top-2 before:w-5 before:h-5 before:bg-green-500 before:rounded-full"
//                 >
//                   {achievement}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default FounderSection;




// import { motion } from 'framer-motion';
// import { Award, Globe } from 'lucide-react';
// import founder2 from '../assets/founder4.png';

// const FounderSection = () => {
//   const founderInfo = {
//     name: "Harshit Pandey",
//     role: "Founder of CreoVibe | IIM Mumbai Alumnus",
//     bio: "Harshit is a trailblazing entrepreneur, innovator, and thought leader, passionately driven to inspire and empower others. As the Founder of CreoVibe and an alumnus of IIM Mumbai, Harshit combines a rich educational foundation with extensive professional experience.\n\nHis career spans across renowned organizations like Vedanta, Fractal, and L&T, where he honed his skills in strategy, leadership, and innovation. Beyond the corporate world, Harshit co-founded Reput.ai, a cutting-edge platform that revolutionizes supply chain traceability in the digital age and have raised around $1 Mn Funding from top VC's and Angle investors.\n\nThrough every endeavor, Harshit remains committed to nurturing talent and building impactful solutions that empower individuals and communities alike.",
//     achievements: [
//       "Founder of CreoVibe, inspiring Gen Z.",
//       "IIM Mumbai alumnus with strategic expertise.",
//       "Raised $1M for Reput.ai startup.",
//       "Worked with Vedanta, Fractal, L&T.",
//       "Building impactful solutions, empowering communities."
//     ],
//     socialLinks: [
//       { icon: Globe, url: "https://api.whatsapp.com/send/?phone=919119938268&text&type=phone_number&app_absent=0" }
//     ]
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//       className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16"
//     >
//       <div className="w-[80%] mx-auto">
//         <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//           Meet the Founder
//         </h2>
        
//         <motion.div
//           variants={itemVariants}
//           className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-8 p-8 hover:shadow-2xl transition-all transform hover:scale-105"
//         >
//           <div className="flex flex-col justify-center">
//             <img 
//               src={founder2} 
//               alt="Harshit Pandey" 
//               className="w-48 h-48 rounded-full object-cover mr-6 mb-4 self-center"
//             />
//             <div className="text-center mb-4">
//               <h3 className="text-4xl font-bold text-gray-800">{founderInfo.name}</h3>
//               <p className="text-xl text-gray-600">{founderInfo.role}</p>
//             </div>
//             <p className="text-lg text-gray-700 mb-6 whitespace-pre-line">{founderInfo.bio}</p>
            
//             <div className="flex justify-center space-x-4">
//               {founderInfo.socialLinks.map((link, index) => (
//                 <a 
//                   key={index} 
//                   href={link.url} 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition"
//                 >
//                   <link.icon className="text-purple-600 w-6 h-6" />
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           <div className="bg-purple-50 rounded-2xl p-6">
//             <h4 className="font-semibold mb-6 flex items-center text-gray-800 text-2xl">
//               <Award className="mr-3 text-yellow-500 w-8 h-8" /> 
//               Key Achievements
//             </h4>
//             <ul className="space-y-4">
//               {founderInfo.achievements.map((achievement, index) => (
//                 <motion.li
//                   key={index}
//                   variants={itemVariants}
//                   className="text-lg text-gray-700 pl-8 relative before:absolute before:left-0 before:top-2 before:w-5 before:h-5 before:bg-green-500 before:rounded-full"
//                 >
//                   {achievement}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default FounderSection;


















import { motion } from 'framer-motion';
import { Award, Linkedin, MessageCircle   } from 'lucide-react';
import founder2 from '../assets/founder4.png';

const FounderSection = () => {
  const founderInfo = {
    name: "Harshit Pandey",
    role: "Founder of CreoVibe | IIM Mumbai Alumnus",
    bio: "A strategic innovator transforming ideas into impactful solutions, bridging corporate expertise with entrepreneurial vision.",
    fullBio: "Harshit is a trailblazing entrepreneur, innovator, and thought leader, passionately driven to inspire and empower others. As the Founder of CreoVibe and an alumnus of IIM Mumbai, he combines a rich educational foundation with extensive professional experience.\n\nHis career spans across renowned organizations like Vedanta, Fractal, and L&T, where he honed his skills in strategy, leadership, and innovation. Beyond the corporate world, Harshit co-founded Reput.ai, a cutting-edge platform that revolutionizes supply chain traceability in the digital age.",
    achievements: [
      "Founded CreoVibe, inspiring Gen Z",
      "Raised $1M for Reput.ai startup",
      "Ex-strategist at Vedanta, Fractal, L&T"
    ],
    socialLinks: [
      // { icon: Linkedin, url: "https://www.linkedin.com/in/harshitpandey" },
      { icon: MessageCircle , url: "https://api.whatsapp.com/send/?phone=919119938268" }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="w-full bg-gradient-to-br from-purple-50 to-purple-100 py-16"
    >
      <div className="w-[80%] mx-auto">
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-8 p-8 hover:shadow-2xl transition-all transform hover:scale-105"
        >
          <div className="flex flex-col justify-center">
            <img 
              src={founder2} 
              alt="Harshit Pandey" 
              className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg ring-4 ring-purple-200"
            />
            <div className="text-center mb-4">
              <h3 className="text-3xl font-bold text-purple-800">{founderInfo.name}</h3>
              <p className="text-xl text-purple-600">{founderInfo.role}</p>
            </div>
            <p className="text-lg text-gray-700 mb-6 text-center">{founderInfo.bio}</p>
            
            <div className="flex justify-center space-x-4">
              {founderInfo.socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition"
                >
                  <link.icon className="text-purple-600 w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-2xl p-6">
            <h4 className="flex items-center text-2xl font-semibold text-purple-800 mb-6">
              <Award className="mr-3 text-yellow-500 w-8 h-8" /> 
              Key Achievements
            </h4>
            <div className="space-y-4">
              {founderInfo.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-lg text-gray-700"
                >
                  <span className="mr-3 text-green-500">✦</span>
                  {achievement}
                </motion.div>
              ))}
            </div>
            <div className="mt-6 border-t pt-4">
              <p className="text-gray-700 italic">{founderInfo.fullBio}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FounderSection;




