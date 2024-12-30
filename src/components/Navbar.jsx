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




import { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: 'Home', path: 'hero' },
    { link: 'Features', path: 'features' },
    { link: 'Contact Us', path: 'contact' },
  ];

  return (
    <nav className="bg-gray-700 text-white p-4 sticky top-0 z-50 w-full flex justify-between items-center gap-1 lg:px-16 px-6">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-white md:text-4xl text-3xl font-bold font-rubik">CREOVIBE</h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-white uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-black hover:text-white text-[15px]"
            to={path}
            spy={true}
            smooth={true}
            duration={500}
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="flex justify-between items-center lg:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaXmark className="text-white text-3xl cursor-pointer" />
        ) : (
          <FaBars className="text-white text-3xl cursor-pointer" />
        )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="w-full h-fit bg-gray-700 p-4 absolute top-[72px] left-0">
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                className="text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center"
                to={path}
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
