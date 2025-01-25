// import { Link } from 'react-scroll';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-700  text-white p-4 sticky top-0 z-50">
//       <ul className="flex justify-center space-x-8 cursor-pointer " >
//         <li className='hover:text-black'  ><Link to="hero" smooth={true} duration={500}>Home</Link></li>
//         <li className='hover:text-black'  ><Link to="features" smooth={true} duration={500}>Features</Link></li>
//         <li className='hover:text-black'  ><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




// import { useState } from 'react';
// import { FaXmark, FaBars } from 'react-icons/fa6';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const navItems = [
//     { link: 'Home', path: 'hero' },
//     { link: 'Features', path: 'features' },
//     { link: 'Contact Us', path: 'contact' },
//   ];

//   return (
//     <nav className="bg-gray-700 text-white p-4 sticky top-0 z-50 w-full flex justify-between items-center gap-1 lg:px-16 px-6">
//       {/* Logo */}
//       <div className="flex items-center">
//         <h1 className="text-white md:text-4xl text-3xl font-bold font-rubik">10Xclub</h1>
//       </div>

//       {/* Desktop Navigation */}
//       <ul className="lg:flex justify-center items-center gap-6 hidden">
//         {navItems.map(({ link, path }) => (
//           <Link
//             key={path}
//             className="text-white uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-black hover:text-white text-[15px]"
//             to={path}
//             spy={true}
//             smooth={true}
//             duration={500}
//           >
//             {link}
//           </Link>
//         ))}
//       </ul>

//       {/* Mobile Menu Toggle Button */}
//       <div className="flex justify-between items-center lg:hidden" onClick={toggleMenu}>
//         {isMenuOpen ? (
//           <FaXmark className="text-white text-3xl cursor-pointer" />
//         ) : (
//           <FaBars className="text-white text-3xl cursor-pointer" />
//         )}
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="w-full h-fit bg-gray-700 p-4 absolute top-[72px] left-0">
//           <ul className="flex flex-col justify-center items-center gap-2 w-full">
//             {navItems.map(({ link, path }) => (
//               <Link
//                 key={path}
//                 className="text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center"
//                 to={path}
//                 spy={true}
//                 smooth={true}
//                 duration={500}
//                 onClick={closeMenu}
//               >
//                 {link}
//               </Link>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-scroll';
// import { Menu, X, LogIn } from 'lucide-react';

// const Logo = () => (
//   <motion.div 
//     className="flex items-center"
//     initial={{ opacity: 0, rotate: -10 }}
//     animate={{ opacity: 1, rotate: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     <svg 
//       xmlns="http://www.w3.org/2000/svg" 
//       viewBox="0 0 100 100" 
//       className="w-12 h-12 mr-3"
//     >
//       <circle cx="50" cy="50" r="45" fill="#FF4500" />
//       <text 
//         x="50" 
//         y="60" 
//         textAnchor="middle" 
//         fill="white" 
//         fontSize="40" 
//         fontWeight="bold"
//       >
//         10X
//       </text>
//     </svg>
//     <h1 className="text-white md:text-2xl text-xl font-bold font-rubik">10Xclub</h1>
//   </motion.div>
// );

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { link: 'Home', path: 'hero' },
//     { link: 'Features', path: 'features' },
//     { link: 'Contact Us', path: 'contact' },
//   ];

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <motion.nav 
//       className="bg-gray-900 text-white p-4 sticky top-0 z-50 w-full flex justify-between items-center lg:px-16 px-6"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Logo />

//       {/* Desktop Navigation */}
//       <ul className="lg:flex justify-center items-center gap-6 hidden">
//         {navItems.map(({ link, path }) => (
//           <motion.li
//             key={path}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link
//               className="text-white uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-red-500 hover:text-white text-[15px] transition-all duration-300"
//               to={path}
//               spy={true}
//               smooth={true}
//               duration={500}
//             >
//               {link}
//             </Link>
//           </motion.li>
//         ))}
//         <motion.button
//           className="flex items-center bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition-all"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <LogIn className="mr-2" size={20} />
//           Join Now
//         </motion.button>
//       </ul>

//       {/* Mobile Menu Toggle */}
//       <div 
//         className="flex justify-between items-center lg:hidden" 
//         onClick={toggleMenu}
//       >
//         {isMenuOpen ? (
//           <X className="text-white text-3xl cursor-pointer" />
//         ) : (
//           <Menu className="text-white text-3xl cursor-pointer" />
//         )}
//       </div>

//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div 
//             className="w-full h-fit bg-gray-900 p-4 absolute top-full left-0"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ul className="flex flex-col justify-center items-center gap-4 w-full">
//               {navItems.map(({ link, path }) => (
//                 <motion.li 
//                   key={path}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Link
//                     className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-500 hover:text-white w-full text-center block"
//                     to={path}
//                     spy={true}
//                     smooth={true}
//                     duration={500}
//                     onClick={closeMenu}
//                   >
//                     {link}
//                   </Link>
//                 </motion.li>
//               ))}
//               <motion.button
//                 className="flex items-center bg-red-500 px-6 py-3 rounded-full hover:bg-red-600 transition-all"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <LogIn className="mr-2" size={20} />
//                 Join Now
//               </motion.button>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;



// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-scroll';
// import { Menu, X, LogIn } from 'lucide-react';
// import commLogo from '../assets/commLogo.jpg';

// const Logo = () => (
//   <motion.div 
//     className="flex items-center"
//     initial={{ opacity: 0, rotate: -10 }}
//     animate={{ opacity: 1, rotate: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     <img 
//       src={commLogo} 
//       alt="10X Club Logo" 
//       className="w-12 h-12 mr-3 rounded-full object-cover"
//     />
//     <h1 className="text-white md:text-2xl text-xl font-bold font-rubik">10Xclub</h1>
//   </motion.div>
// );

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { link: 'Home', path: 'hero' },
//     { link: 'Features', path: 'features' },
//     { link: 'Contact Us', path: 'contact' },
//   ];

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <motion.nav 
//       className="bg-blue-600 text-white p-4 sticky top-0 z-50 w-full flex justify-between items-center lg:px-16 px-6"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Logo />

//       {/* Desktop Navigation */}
//       <ul className="lg:flex justify-center items-center gap-6 hidden">
//         {navItems.map(({ link, path }) => (
//           <motion.li
//             key={path}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link
//               className="text-white uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-blue-700 hover:text-white text-[15px] transition-all duration-300"
//               to={path}
//               spy={true}
//               smooth={true}
//               duration={500}
//             >
//               {link}
//             </Link>
//           </motion.li>
//         ))}
//         <motion.button
//           className="flex items-center bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <LogIn className="mr-2" size={20} />
//           Join Now
//         </motion.button>
//       </ul>

//       {/* Mobile Menu Toggle */}
//       <div 
//         className="flex justify-between items-center lg:hidden" 
//         onClick={toggleMenu}
//       >
//         {isMenuOpen ? (
//           <X className="text-white text-3xl cursor-pointer" />
//         ) : (
//           <Menu className="text-white text-3xl cursor-pointer" />
//         )}
//       </div>

//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div 
//             className="w-full h-fit bg-blue-600 p-4 absolute top-full left-0"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ul className="flex flex-col justify-center items-center gap-4 w-full">
//               {navItems.map(({ link, path }) => (
//                 <motion.li 
//                   key={path}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Link
//                     className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-blue-700 hover:text-white w-full text-center block"
//                     to={path}
//                     spy={true}
//                     smooth={true}
//                     duration={500}
//                     onClick={closeMenu}
//                   >
//                     {link}
//                   </Link>
//                 </motion.li>
//               ))}
//               <motion.button
//                 className="flex items-center bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition-all"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <LogIn className="mr-2" size={20} />
//                 Join Now
//               </motion.button>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;





// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-scroll';
// import { Menu, X, Users } from 'lucide-react';
// import commLogo from '../assets/commLogo.jpg';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { link: 'Home', path: 'hero' },
//     { link: 'Features', path: 'features' },
//     { link: 'Contact', path: 'contact' },
//   ];

//   return (
//     <motion.nav 
//       className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-4 sticky top-0 z-50 w-full flex justify-between items-center lg:px-16 px-6"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.div 
//         className="flex items-center"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.4 }}
//       >
//         <img 
//           src={commLogo} 
//           alt="Community Logo" 
//           className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-white/20"
//         />
//       </motion.div>

//       {/* Desktop Navigation */}
//       <ul className="lg:flex justify-center items-center gap-6 hidden">
//         {navItems.map(({ link, path }) => (
//           <motion.li
//             key={path}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link
//               className="text-white/80 hover:text-white uppercase tracking-wider font-medium cursor-pointer px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300"
//               to={path}
//               spy={true}
//               smooth={true}
//               duration={500}
//             >
//               {link}
//             </Link>
//           </motion.li>
//         ))}
//         <motion.button
//           className="flex items-center bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full transition-all group"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Users className="mr-2 group-hover:rotate-6 transition-transform" size={18} />
//           Join Community
//         </motion.button>
//       </ul>

//       {/* Mobile Menu Toggle */}
//       <div 
//         className="lg:hidden cursor-pointer" 
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         {isMenuOpen ? (
//           <X className="text-white text-2xl" />
//         ) : (
//           <Menu className="text-white text-2xl" />
//         )}
//       </div>

//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div 
//             className="absolute top-full left-0 w-full bg-slate-900"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ul className="flex flex-col items-center py-4 space-y-4">
//               {navItems.map(({ link, path }) => (
//                 <li key={path} className="w-full text-center">
//                   <Link
//                     className="block px-4 py-3 hover:bg-white/10 transition-colors"
//                     to={path}
//                     spy={true}
//                     smooth={true}
//                     duration={500}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//               <motion.button
//                 className="flex items-center bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Users className="mr-2" size={20} />
//                 Join Community
//               </motion.button>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;



// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-scroll';
// import { Menu, X, Users } from 'lucide-react';
// import commLogo from '../assets/commLogo.jpg';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { link: 'Home', path: 'hero' },
//     { link: 'Features', path: 'features' },
//     { link: 'Contact', path: 'contact' },
//   ];

//   return (
//     <motion.nav 
//       className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-3 sticky top-0 z-50 w-full flex justify-between items-center lg:px-16 px-6"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.div 
//         className="flex items-center"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.4 }}
//       >
//         <img 
//           src={commLogo} 
//           alt="Community Logo" 
//           className="w-24 h-12 object-cover rounded-lg border-2 border-white/20"
//         />
//       </motion.div>

//       {/* Desktop Navigation */}
//       <ul className="lg:flex justify-center items-center gap-6 hidden">
//         {navItems.map(({ link, path }) => (
//           <motion.li
//             key={path}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link
//               className="text-white/80 hover:text-white uppercase tracking-wider font-medium cursor-pointer px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300"
//               to={path}
//               spy={true}
//               smooth={true}
//               duration={500}
//             >
//               {link}
//             </Link>
//           </motion.li>
//         ))}
//         <motion.button
//           className="flex items-center bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full transition-all group"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Users className="mr-2 group-hover:rotate-6 transition-transform" size={18} />
//           Join Community
//         </motion.button>
//       </ul>

//       {/* Mobile Menu Toggle */}
//       <div 
//         className="lg:hidden cursor-pointer" 
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         {isMenuOpen ? (
//           <X className="text-white text-2xl" />
//         ) : (
//           <Menu className="text-white text-2xl" />
//         )}
//       </div>

//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div 
//             className="absolute top-full left-0 w-full bg-slate-900"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ul className="flex flex-col items-center py-4 space-y-4">
//               {navItems.map(({ link, path }) => (
//                 <li key={path} className="w-full text-center">
//                   <Link
//                     className="block px-4 py-3 hover:bg-white/10 transition-colors"
//                     to={path}
//                     spy={true}
//                     smooth={true}
//                     duration={500}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//               <motion.button
//                 className="flex items-center bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Users className="mr-2" size={20} />
//                 Join Community
//               </motion.button>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;



import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Users } from 'lucide-react';
import commLogo from '../assets/commLogo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { link: 'Home', path: 'hero' },
    { link: 'Features', path: 'features' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <motion.nav 
      className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-3 sticky top-0 z-50 w-full flex justify-between items-center lg:px-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <img 
          src={commLogo} 
          alt="Community Logo" 
          className="w-32 h-16 object-cover rounded-lg border-2 border-white/20 transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </motion.div>

      {/* Desktop Navigation */}
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map(({ link, path }) => (
          <motion.li
            key={path}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              className="text-white/80 hover:text-white uppercase tracking-wider font-medium cursor-pointer px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300"
              to={path}
              spy={true}
              smooth={true}
              duration={500}
            >
              {link}
            </Link>
          </motion.li>
        ))}
        <motion.button
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full transition-all group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Users className="mr-2 group-hover:rotate-6 transition-transform" size={18} />
          Join Community
        </motion.button>
      </ul>

      {/* Mobile Menu Toggle */}
      <div 
        className="lg:hidden cursor-pointer" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="text-white text-2xl" />
        ) : (
          <Menu className="text-white text-2xl" />
        )}
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 w-full bg-slate-900"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navItems.map(({ link, path }) => (
                <li key={path} className="w-full text-center">
                  <Link
                    className="block px-4 py-3 hover:bg-white/10 transition-colors"
                    to={path}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link}
                  </Link>
                </li>
              ))}
              <motion.button
                className="flex items-center bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="mr-2" size={20} />
                Join Community
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
