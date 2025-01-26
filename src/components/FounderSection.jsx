// // import React from 'react';
// import { motion } from 'framer-motion';
// import { User, Award } from 'lucide-react';

// const FounderSection = () => {
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

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <motion.div 
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//       className="w-full"
//     >
//       <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
//         Meet the Founder
//       </h2>
//       <motion.div 
//         variants={itemVariants}
//         className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-[1.02] group"
//       >
//         <div className="flex items-center mb-6">
//           <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform">
//             <User className="text-blue-500 w-8 h-8" />
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">{founderInfo.name}</h2>
//             <p className="text-gray-600">{founderInfo.role}</p>
//           </div>
//         </div>
//         <p className="text-gray-700 mb-6 italic">{founderInfo.bio}</p>
        
//         <div className="border-t pt-6 border-blue-100">
//           <h4 className="font-semibold mb-4 flex items-center text-gray-800">
//             <Award className="mr-2 text-yellow-500 w-6 h-6" /> Key Achievements
//           </h4>
//           <ul className="space-y-3">
//             {founderInfo.achievements.map((achievement, index) => (
//               <motion.li 
//                 key={index} 
//                 variants={itemVariants}
//                 className="text-gray-600 pl-6 relative before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-green-500 before:rounded-full"
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






import { motion } from "framer-motion";
import { User, Award } from "lucide-react";

const FounderSection = () => {
  const founderInfo = {
    name: "Harshit Pandey",
    role: "Founder of CreoVibe",
    bio: "Passionate technologist driving innovation through cutting-edge solutions. With a vision to transform ideas into impactful digital experiences.",
    achievements: [
      "5+ Years in Tech Innovation",
      "Multiple Startup Founder",
      "Speaker at Global Tech Conferences",
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
        Meet the Founder
      </h2>
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition-all transform hover:scale-105 group max-w-3xl mx-auto"
      >
        <div className="flex items-center mb-8">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mr-6 group-hover:rotate-12 transition-transform">
            <User className="text-purple-600 w-10 h-10" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">
              {founderInfo.name}
            </h3>
            <p className="text-lg text-gray-600">{founderInfo.role}</p>
          </div>
        </div>
        <p className="text-lg text-gray-700 mb-8">{founderInfo.bio}</p>

        <div className="border-t pt-6 border-gray-200">
          <h4 className="font-semibold mb-4 flex items-center text-gray-800">
            <Award className="mr-2 text-yellow-500 w-6 h-6" /> Key Achievements
          </h4>
          <ul className="space-y-3">
            {founderInfo.achievements.map((achievement, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="text-lg text-gray-600 pl-8 relative before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-green-500 before:rounded-full"
              >
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FounderSection;

