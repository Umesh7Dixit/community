import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white p-4 sticky top-0 z-50">
      <ul className="flex justify-center space-x-8 cursor-pointer " >
        <li className='hover:text-black'  ><Link to="hero" smooth={true} duration={500}>Home</Link></li>
        <li className='hover:text-black'  ><Link to="features" smooth={true} duration={500}>Features</Link></li>
        <li className='hover:text-black'  ><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
