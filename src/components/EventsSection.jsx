// import { motion } from 'framer-motion';
// import { Calendar, MapPin } from 'lucide-react';

// const EventsSection = () => {
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
//         Upcoming Events
//       </h2>
//       <div className="space-y-6">
//         {events.map(event => (
//           <motion.div 
//             key={event.id} 
//             variants={itemVariants}
//             className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] group overflow-hidden"
//           >
//             <div className="p-6">
//               <div className="flex items-center mb-4">
//                 <Calendar className="text-blue-500 mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
//                 <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
//               </div>
//               <div className="space-y-2">
//                 <p className="flex items-center text-gray-600">
//                   <MapPin className="mr-2 text-red-500 w-5 h-5" />
//                   {event.location}
//                 </p>
//                 <p className="text-gray-700">{event.description}</p>
//                 <div className="text-sm text-gray-500 mt-2">{event.date}</div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default EventsSection;



// import { motion } from "framer-motion";
// import { Calendar, MapPin } from "lucide-react";

// const EventsSection = () => {
//   const events = [
//     {
//       id: 1,
//       title: "Web Development Workshop",
//       date: "Jan 15, 2024",
//       description: "Deep dive into modern web technologies and frameworks.",
//       location: "Tech Hub, Silicon Valley",
//     },
//     {
//       id: 2,
//       title: "Entrepreneurship Meet",
//       date: "Feb 20, 2024",
//       description: "Network with successful entrepreneurs and investors.",
//       location: "Innovation Center, San Francisco",
//     },
//   ];

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
//       className="py-16 bg-gradient-to-br from-white to-gray-100"
//     >
//       <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
//         Upcoming Events
//       </h2>
//       <div className="space-y-8 max-w-4xl mx-auto">
//         {events.map((event) => (
//           <motion.div
//             key={event.id}
//             variants={itemVariants}
//             className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 group overflow-hidden"
//           >
//             <div className="p-8">
//               <div className="flex items-center mb-6">
//                 <Calendar className="text-blue-500 mr-4 w-8 h-8 group-hover:rotate-12 transition-transform" />
//                 <h3 className="text-2xl font-semibold text-gray-800">
//                   {event.title}
//                 </h3>
//               </div>
//               <div className="space-y-4">
//                 <p className="flex items-center text-gray-600">
//                   <MapPin className="mr-2 text-red-500 w-6 h-6" />
//                   {event.location}
//                 </p>
//                 <p className="text-gray-700 text-lg">{event.description}</p>
//                 <div className="text-sm text-gray-500 mt-2">
//                   <span className="font-medium text-blue-600">{event.date}</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default EventsSection;








// import { motion } from "framer-motion";
// import { Calendar, MapPin } from "lucide-react";

// const EventsSection = () => {
//   const events = [
//     {
//       id: 1,
//       title: "Web Development Workshop",
//       date: "Jan 15, 2024",
//       description: "Deep dive into modern web technologies and frameworks.",
//       location: "Tech Hub, Silicon Valley",
//     },
//     {
//       id: 2,
//       title: "Entrepreneurship Meet",
//       date: "Feb 20, 2024",
//       description: "Network with successful entrepreneurs and investors.",
//       location: "Innovation Center, San Francisco",
//     },
//   ];

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
//     hidden: { 
//       x: -50, // Initial position off-screen (fly in from the left)
//       opacity: 0 
//     },
//     visible: {
//       x: 0, // Final position
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
//       className="py-16 bg-gradient-to-br from-white to-gray-100"
//     >
//       <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
//         Upcoming Events
//       </h2>
//       <div className="space-y-8 max-w-4xl mx-auto">
//         {events.map((event) => (
//           <motion.div
//             key={event.id}
//             variants={itemVariants}
//             className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 group overflow-hidden"
//           >
//             <div className="p-8">
//               <div className="flex items-center mb-6">
//                 <Calendar className="text-blue-500 mr-4 w-8 h-8 group-hover:rotate-12 transition-transform" />
//                 <h3 className="text-2xl font-semibold text-gray-800">
//                   {event.title}
//                 </h3>
//               </div>
//               <div className="space-y-4">
//                 <p className="flex items-center text-gray-600">
//                   <MapPin className="mr-2 text-red-500 w-6 h-6" />
//                   {event.location}
//                 </p>
//                 <p className="text-gray-700 text-lg">{event.description}</p>
//                 <div className="text-sm text-gray-500 mt-2">
//                   <span className="font-medium text-blue-600">{event.date}</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default EventsSection;

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "Jan 15, 2024",
      description: "Deep dive into modern web technologies and frameworks.",
      location: "Tech Hub, Silicon Valley",
    },
    {
      id: 2,
      title: "Entrepreneurship Meet",
      date: "Feb 20, 2024",
      description: "Network with successful entrepreneurs and investors.",
      location: "Innovation Center, San Francisco",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Adds a delay between each child's animation
      },
    },
  };

  const itemVariants = {
    hidden: { 
      x: -50, // Start off-screen to the left
      opacity: 0,
    },
    visible: {
      x: 0, // Slide into place
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
      viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% of the section is visible
      variants={containerVariants}
      className="py-16 bg-gradient-to-br from-white to-gray-100"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
        Upcoming Events
      </h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {events.map((event) => (
          <motion.div
            key={event.id}
            variants={itemVariants}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 group overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Calendar className="text-blue-500 mr-4 w-8 h-8 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  {event.title}
                </h3>
              </div>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <MapPin className="mr-2 text-red-500 w-6 h-6" />
                  {event.location}
                </p>
                <p className="text-gray-700 text-lg">{event.description}</p>
                <div className="text-sm text-gray-500 mt-2">
                  <span className="font-medium text-blue-600">{event.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EventsSection;

