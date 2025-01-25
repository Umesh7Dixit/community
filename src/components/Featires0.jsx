
// const Featires0 = () => {
//   return (
//     <section id="features" className="py-16 px-6">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-2xl font-bold text-center">Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
//             <div className="p-6 bg-white rounded shadow">
//               <h3 className="font-bold text-lg">Connect with community</h3>
//               <p className="text-gray-700 mt-2">Build relationships with professionals.</p>
//             </div>
//             <div className="p-6 bg-white rounded shadow">
//               <h3 className="font-bold text-lg">Jobs/Internships</h3>
//               <p className="text-gray-700 mt-2">Work together on exciting projects.</p>
//             </div>
//             <div className="p-6 bg-white rounded shadow">
//               <h3 className="font-bold text-lg">Events</h3>
//               <p className="text-gray-700 mt-2">Gain knowledge through events and sessions.</p>
//             </div>
//             <div className="p-6 bg-white rounded shadow">
//               <h3 className="font-bold text-lg">Resource for start-up</h3>
//               <p className="text-gray-700 mt-2"> Access tools, guides and mentorship to launch your business.  </p>
//             </div>
//             <div className="p-6 bg-white rounded shadow">
//               <h3 className="font-bold text-lg">Product-Hunt</h3>
//               <p className="text-gray-700 mt-2">Launch and discover innovative tech products with the global maker community.</p>
//             </div>
            
//           </div>
//         </div>
//       </section>
//   )
// }

// export default Featires0



import { motion } from 'framer-motion';
import { 
  Network, 
  Briefcase, 
  CalendarCheck, 
  Rocket, 
  Award 
} from 'lucide-react';

const featureData = [
  {
    icon: Network,
    title: "Connect with Community",
    description: "Build meaningful relationships with professionals across diverse domains.",
    color: "text-blue-500"
  },
  {
    icon: Briefcase,
    title: "Jobs & Internships",
    description: "Discover exciting opportunities and collaborate on innovative projects.",
    color: "text-green-500"
  },
  {
    icon: CalendarCheck,
    title: "Events",
    description: "Gain insights through curated workshops, webinars, and networking sessions.",
    color: "text-purple-500"
  },
  {
    icon: Rocket,
    title: "Startup Resources",
    description: "Access comprehensive tools, guides, and mentorship to launch your venture.",
    color: "text-red-500"
  },
  {
    icon: Award,
    title: "Product Hunt",
    description: "Launch and discover cutting-edge tech products with a global maker community.",
    color: "text-orange-500"
  }
];

const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <motion.div 
    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.3 }
    }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className={`mb-4 ${color}`}>
      <Icon className="w-12 h-12 mx-auto group-hover:scale-110 transition-transform" />
    </div>
    <h3 className="font-bold text-lg text-center mb-2">{title}</h3>
    <p className="text-gray-700 text-center">{description}</p>
  </motion.div>
);

const Features0 = () => {
  return (
    <section id="features" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Unleash Your Potential
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {featureData.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features0;