
// const Whatsapp = () => {
//   return (
//     <div>
//         <section className="bg-gray-100 py-16 px-6">
// <div className="max-w-4xl mx-auto text-center">
//   <div className="flex justify-center">
//     <img
//       src="https://img.icons8.com/color/48/000000/whatsapp.png"
//       alt="whatsapp"
//       className="w-12 h-12"
//     />
//   </div>
//   <h1 className="text-3xl font-bold text-red-600 mt-4">
//     JOIN INDIA&apos;S LARGEST BUSINESS COMMUNITY ON WHATSAPP
//   </h1>
//   <p className="text-gray-700 mt-4 leading-6">
//     Connect with like-minded people in a vibrant community! Join us
//     where ambitious youngsters, entrepreneurs, innovators, mentors,
//     investors, leaders, and dynamic professionals come together to
//     collaborate and grow.
//   </p>
//   <a
//     href="https://api.whatsapp.com/send/?phone=919119938268&text&type=phone_number&app_absent=0"
//     className="inline-block mt-6 bg-red-500 text-white py-3 px-6 rounded hover:bg-red-600 transition"
//   >
//     JOIN NOW
//   </a>
// </div>
// </section>
//     </div>
//   )
// }

// export default Whatsapp




import { motion } from 'framer-motion';
import { WhatsappLogo } from 'phosphor-react';

const Whatsapp = () => {
  return (
    <motion.section 
      className="bg-gradient-to-br from-green-50 to-green-100 py-16 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          className="flex justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <WhatsappLogo 
            size={64} 
            weight="fill" 
            className="text-green-600" 
          />
        </motion.div>

        <motion.h1 
          className="text-4xl font-bold text-green-700 mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          JOIN INDIA&apos;S LARGEST BUSINESS COMMUNITY
        </motion.h1>

        <motion.p 
          className="text-gray-700 mt-4 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Connect with a dynamic network of ambitious entrepreneurs, innovators, mentors, 
          investors, and professionals. Our community is your launchpad for collaboration, 
          learning, and growth.
        </motion.p>

        <motion.a
          href="https://api.whatsapp.com/send/?phone=919119938268&text&type=phone_number&app_absent=0"
          className="inline-block mt-8 bg-green-500 text-white py-3 px-8 rounded-lg 
                     hover:bg-green-600 transition-all duration-300 
                     shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          JOIN COMMUNITY NOW
        </motion.a>
      </div>
    </motion.section>
  )
}

export default Whatsapp;