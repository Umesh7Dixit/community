


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


import PropTypes from "prop-types";

const KPICard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      <p className="text-4xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

KPICard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const KPISection = () => {
  const kpis = [
    { title: "Community Members", value: "10,000+" },
    { title: "Top Institutions Covered", value: "200+" },
    { title: "Events Hosted", value: "50+" },
    { title: "Startups Supported", value: "100+" },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Milestones That Define Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <KPICard key={index} title={kpi.title} value={kpi.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPISection;
