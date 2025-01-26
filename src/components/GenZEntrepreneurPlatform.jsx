// import  { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Rocket, TrendingUp, Globe } from 'lucide-react';

// const GenZEntrepreneurPlatform = () => {
//   const [selectedChallenge, setSelectedChallenge] = useState(null);

//   const challenges = [
//     {
//       id: 1,
//       icon: Rocket,
//       title: "30-Day Startup Challenge",
//       description: "Transform your crazy idea into a real business prototype!",
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       id: 2,
//       icon: TrendingUp,
//       title: "Digital Monetization Hack",
//       description: "Create innovative online income streams",
//       color: "from-blue-500 to-teal-500"
//     },
//     {
//       id: 3,
//       icon: Globe,
//       title: "Global Impact Startup",
//       description: "Design solutions for real-world problems",
//       color: "from-green-500 to-emerald-500"
//     }
//   ];

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="w-full bg-white"
//     >
//       <div className="w-full max-w-7xl mx-auto px-4 py-16">
//         <motion.h1 
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-6xl font-bold text-center mb-12 text-gray-900"
//         >
//           GenZ Entrepreneurship
//         </motion.h1>

//         <div className="grid md:grid-cols-3 gap-8">
//           {challenges.map((challenge) => (
//             <motion.div
//               key={challenge.id}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setSelectedChallenge(challenge)}
//               className={`bg-gradient-to-br ${challenge.color} rounded-3xl p-6 text-white cursor-pointer shadow-2xl`}
//             >
//               <div className="flex items-center mb-4">
//                 <challenge.icon className="mr-4 h-12 w-12" />
//                 <h3 className="text-2xl font-bold">{challenge.title}</h3>
//               </div>
//               <p>{challenge.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {selectedChallenge && (
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
//           onClick={() => setSelectedChallenge(null)}
//         >
//           <motion.div 
//             className={`bg-gradient-to-br ${selectedChallenge.color} rounded-3xl p-8 max-w-md w-full`}
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//           >
//             <h2 className="text-4xl font-bold mb-4">{selectedChallenge.title}</h2>
//             <p className="text-xl mb-6">{selectedChallenge.description}</p>
//           </motion.div>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default GenZEntrepreneurPlatform;




import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Globe, Target } from 'lucide-react';

const GenZEntrepreneurPlatform = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const challenges = [
    {
      id: 1,
      icon: Rocket,
      title: "Startup Accelerator",
      description: "Transform innovative ideas into scalable businesses",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Digital Monetization",
      description: "Create multiple online income streams",
      color: "from-blue-500 to-teal-500"
    },
    {
      id: 3,
      icon: Globe,
      title: "Global Impact",
      description: "Design solutions for world-changing problems",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: Target,
      title: "Growth Hacking",
      description: "Master marketing and rapid business expansion",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="w-[90%] mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">
          GenZ Entrepreneurship Hub
        </h1>

        <div className="grid md:grid-cols-4 gap-6">
          {challenges.map((challenge) => (
            <motion.div
              key={challenge.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedChallenge(challenge)}
              className={`bg-gradient-to-br ${challenge.color} rounded-3xl p-6 text-white cursor-pointer shadow-2xl`}
            >
              <div className="flex items-center mb-4">
                <challenge.icon className="mr-4 h-12 w-12" />
                <h3 className="text-2xl font-bold">{challenge.title}</h3>
              </div>
              <p>{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedChallenge && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedChallenge(null)}
        >
          <motion.div 
            className={`bg-gradient-to-br ${selectedChallenge.color} rounded-3xl p-8 max-w-md w-full`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h2 className="text-4xl font-bold mb-4">{selectedChallenge.title}</h2>
            <p className="text-xl mb-6">{selectedChallenge.description}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default GenZEntrepreneurPlatform;