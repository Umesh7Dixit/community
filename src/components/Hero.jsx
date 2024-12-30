
// const Hero = () => {
//   return (
//     <section id="hero" className="bg-white text-center py-20">
//       <h1 className="text-5xl font-bold text-red-500">Connect With Like-Minded People!</h1>
//       <p className="mt-4 text-lg text-gray-700">
//         A vibrant business community connecting ambitious youngsters, entrepreneurs, and innovators.
//       </p>
//       <button className="mt-8 px-6 py-2 bg-red-500 text-white rounded-full">
//         Join CREOVIBE Community
//       </button>

 
//     </section>
//   );
// };

// export default Hero;


// const Hero = () => {
//   return (
//     <section id="hero" className="bg-white text-center py-20 px-4 md:px-8">
//       <h1 className="text-3xl md:text-5xl font-bold text-red-500">
//         Connect With Like-Minded People!
//       </h1>
//       <p className="mt-4 text-sm md:text-lg text-gray-700">
//         A vibrant business community connecting ambitious youngsters, entrepreneurs, and innovators.
//       </p>
//       <div className="mt-8">
//         <button className="flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">
//           <span className="mr-2">→</span> Join CREOVIBE Community
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="bg-white text-center py-20 px-4 md:px-8 flex items-center justify-center flex-col h-screen"
//     >
//       <h1 className="text-3xl md:text-5xl font-bold text-red-500">
//         Connect With Like-Minded People!
//       </h1>
//       <p className="mt-4 text-sm md:text-lg text-gray-700">
//         A vibrant business community connecting ambitious youngsters, entrepreneurs, and innovators.
//       </p>
//       <div className="mt-8">
//         <button className="flex items-center justify-center px-6 py-3 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition duration-300">
//           <span className="mr-2">→</span> Join CREOVIBE Community
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="text-center py-20 px-4 md:px-8 flex items-center justify-center flex-col h-screen bg-cover bg-center"
//       style={{
//         backgroundImage: `url('/path-to-your-image.png')`, // Replace with the correct path to your image
//       }}
//     >
//       <h1 className="text-3xl md:text-5xl font-bold text-red-500">
//         Connect With Like-Minded People!
//       </h1>
//       <p className="mt-4 text-sm md:text-lg text-gray-700">
//         A vibrant business community connecting ambitious youngsters, entrepreneurs, and innovators.
//       </p>
//       <div className="mt-8">
//         <button className="flex items-center justify-center px-6 py-3 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition duration-300">
//           <span className="mr-2">→</span> Join CREOVIBE Community
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import image from '../assets/image.png';


// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="text-center py-20 px-4 md:px-8 flex items-center justify-center flex-col h-screen bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${image})`,  
//       }}
//     >
//       <h1 className="text-3xl md:text-5xl font-bold text-red-500">
//         Connect With Like-Minded People!
//       </h1>
//       <p className="mt-4 text-sm md:text-lg text-gray-700">
//         A vibrant business community connecting ambitious youngsters, entrepreneurs, and innovators.
//       </p>
//       <div className="mt-8">
//         <button className="flex items-center justify-center px-6 py-3 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition duration-300">
//           <span className="mr-2">→</span> Join CREOVIBE Community
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import image from '../assets/image.png';
import { useNavigate } from 'react-router-dom'; 
// import CommunityLanding from '../components/CommunityLanding';

const Hero = () => {


  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(<CommunityLanding/>); // Replace with your desired route
  // };
  const handleClick = () => {
    navigate('/community-landing'); // Replace with your desired route
  };



  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 py-32 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Connect With Like-Minded People!
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          A vibrant business community connecting ambitious youngsters, 
          entrepreneurs, and innovators.
        </p>

        <button onClick={handleClick} className="group relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-red-500 rounded-full overflow-hidden transition-all duration-300 hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:outline-none">
          <span className="relative z-10 flex items-center">
            <span className="mr-3 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            Join CREOVIBE Community
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;