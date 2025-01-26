
// const Footer = () => {
//   return (
//      <footer className="bg-gray-800 text-white py-6">
//      <div className="text-center">&copy; 2024 Your Brand. All rights reserved.</div>
//         </footer>
//   )
// }



import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaInstagram />, url: "https://www.instagram.com" },
    { icon: <FaTwitter />, url: "https://www.twitter.com" },
    // { icon: <FaYoutube />, url: "https://www.youtube.com" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com" },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white py-8">
    <h1 className="text-4xl font-bold mb-6">CREOVIBE</h1>
    <div className="flex space-x-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <span className="text-3xl">{link.icon}</span>
        </a>
      ))}
    </div>
  </div>
  );
};

export default Footer;
