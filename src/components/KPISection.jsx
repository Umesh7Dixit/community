


// const KPICard = ({ title, value }) => {
//     return (
//       <div className="bg-white shadow-md rounded-lg p-6 text-center">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
//         <p className="text-4xl font-bold text-gray-900">{value}</p>
//       </div>
//     );
//   };
  
//   const KPISection = () => {
//     const kpis = [
//       { title: "Community Members", value: "10,000+" },
//       { title: "Top Institutions Covered", value: "200+" },
//       { title: "Events Hosted", value: "50+" },
//       { title: "Startups Supported", value: "100+" },
//     ];
  
//     return (
//       <section className="bg-gray-100 py-12">
//         <div className="max-w-6xl mx-auto px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Key Performance Indicators</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {kpis.map((kpi, index) => (
//               <KPICard key={index} title={kpi.title} value={kpi.value} />
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default KPISection;


// import PropTypes from "prop-types";

// const KPICard = ({ title, value }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 text-center">
//       <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
//       <p className="text-4xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// };

// KPICard.propTypes = {
//   title: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
// };

// const KPISection = () => {
//   const kpis = [
//     { title: "Community Members", value: "10,000+" },
//     { title: "Top Institutions Covered", value: "200+" },
//     { title: "Events Hosted", value: "50+" },
//     { title: "Startups Supported", value: "100+" },
//   ];

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="max-w-6xl mx-auto px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Milestones That Define Us</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {kpis.map((kpi, index) => (
//             <KPICard key={index} title={kpi.title} value={kpi.value} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KPISection;




// import { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";

// const KPICard = ({ title, value }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 text-center">
//       <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
//       <p className="text-4xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// };

// KPICard.propTypes = {
//   title: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
// };

// const KPISection = () => {
//   const [counts, setCounts] = useState({
//     members: 0,
//     institutions: 0,
//     events: 0,
//     startups: 0,
//   });

//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const kpis = [
//       { key: "members", max: 10000 },
//       { key: "institutions", max: 200 },
//       { key: "events", max: 50 },
//       { key: "startups", max: 100 },
//     ];

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           kpis.forEach(({ key, max }) => {
//             let count = 0;
//             const interval = setInterval(() => {
//               count += Math.ceil(max / 50); // Increase the count incrementally
//               if (count >= max) {
//                 count = max;
//                 clearInterval(interval);
//               }
//               setCounts((prev) => ({
//                 ...prev,
//                 [key]: count,
//               }));
//             }, 30); // Adjust the speed of count-up
//           });
//         }
//       },
//       { threshold: 0.5 } // Trigger when 50% of the section is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section className="bg-gray-100 py-12" ref={sectionRef}>
//       <div className="max-w-6xl mx-auto px-6 lg:px-8">
//         {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Milestones That Define Us</h1> */}
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//         Join the global community. Find<br />
//         Your Perfect Partner.
//       </h1>
      
//       <p className="text-gray-600 mb-6">
//         Our vibrant community produces Top Entrepreneurs, Startups, and Founders all over the world.
//       </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <KPICard title="Community Members" value={`${counts.members}+`} />
//           <KPICard title="Top Institutions Covered" value={`${counts.institutions}+`} />
//           <KPICard title="Events Hosted" value={`${counts.events}+`} />
//           <KPICard title="Startups Supported" value={`${counts.startups}+`} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KPISection;




import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Users, Building2, Rocket } from "lucide-react";

const KPICard = ({ title, value, icon: Icon }) => {
  return (
    <motion.div 
      className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 flex justify-center">
        <Icon className="text-blue-600 w-12 h-12" />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-4xl font-bold text-blue-900">{value}</p>
    </motion.div>
  );
};

const KPISection = () => {
  const [counts, setCounts] = useState({
    members: 0,
    institutions: 0,
    events: 0,
    startups: 0,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const kpis = [
      { key: "members", max: 10000, icon: Users },
      { key: "institutions", max: 200, icon: Building2 },
      { key: "events", max: 50, icon: Star },
      { key: "startups", max: 100, icon: Rocket },
    ];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          kpis.forEach(({ key, max }) => {
            let count = 0;
            const interval = setInterval(() => {
              count += Math.ceil(max / 50);
              if (count >= max) {
                count = max;
                clearInterval(interval);
              }
              setCounts((prev) => ({
                ...prev,
                [key]: count,
              }));
            }, 30);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className="bg-gradient-to-br from-gray-50 to-blue-50 py-16" 
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Join the Global Community
        </motion.h1>
        
        <motion.p 
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Our vibrant community empowers entrepreneurs, startups, and founders worldwide.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <KPICard 
            title="Community Members" 
            value={`${counts.members}+`} 
            icon={Users}
          />
          <KPICard 
            title="Top Institutions" 
            value={`${counts.institutions}+`} 
            icon={Building2}
          />
          <KPICard 
            title="Events Hosted" 
            value={`${counts.events}+`} 
            icon={Star}
          />
          <KPICard 
            title="Startups Supported" 
            value={`${counts.startups}+`} 
            icon={Rocket}
          />
        </div>
      </div>
    </section>
  );
};

export default KPISection;