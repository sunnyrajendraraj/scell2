// import   { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import startup_logo from '../assets/startup-logo.png'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const isActive = (path: string) => {
//     if (path.startsWith('#')) {
//       return location.hash === path;
//     }
//     return location.pathname === path;
//   };

//   const navLinks = [
//     { path: '/', label: 'Home' },
//     { path: '#startups', label: 'Events' },
//     { path: '/team', label: 'Team' },
//     { path: '#about', label: 'About' },
//     { path: '#faq', label: 'FAQ' },
//     { path: '#contact', label: 'Contact' }
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/80 backdrop-blur-sm'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link 
//             to="/" 
//             className="flex items-center space-x-2 group"
//           >
//             {/* <Rocket className="h-8 w-8 text-blue-600 transform group-hover:rotate-12 transition-transform" /> */}
//             <img src={startup_logo} style={{width:'58px'}} />
//             <span className="font-bold text-m bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               Startup Cell IIIT Bhagalpur 
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-1">
//             {/* {navLinks.map((link) => ( */}
//               <Link
//                 key={navLinks[0].path}
//                 to={navLinks[0].path}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   isActive(navLinks[0].path)
//                     ? 'text-blue-600 bg-blue-50'
//                     : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
//                 }`}
//               >
//                 {navLinks[0].label}
//               </Link>
//               <a
//                 key={navLinks[1].path}
//                 href={navLinks[1].path}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   isActive(navLinks[1].path)
//                     ? 'text-blue-600 bg-blue-50'
//                     : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
//                 }`}
//               >
//                 {navLinks[1].label}
//               </a>
//               <Link
//                 key={navLinks[2].path}
//                 to={navLinks[2].path}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   isActive(navLinks[2].path)
//                     ? 'text-blue-600 bg-blue-50'
//                     : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
//                 }`}
//               >
//                 {navLinks[2].label}
//               </Link>
//               <a
//                 key={navLinks[3].path}
//                 href={navLinks[3].path}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   isActive(navLinks[3].path)
//                     ? 'text-blue-600 bg-blue-50'
//                     : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
//                 }`}
//               >
//                 {navLinks[3].label}
//               </a>
//               <a
//                 key={navLinks[4].path}
//                 href={navLinks[4].path}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   isActive(navLinks[4].path)
//                     ? 'text-blue-600 bg-blue-50'
//                     : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
//                 }`}
//               >
//                 {navLinks[4].label}
//               </a>
//               <a
//                 key={navLinks[5].path}
//                 href={navLinks[5].path}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   isActive(navLinks[5].path)
//                     ? 'text-blue-600 bg-blue-50'
//                     : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
//                 }`}
//               >
//                 {navLinks[5].label}
//               </a>
//             {/* ))} */}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`md:hidden transition-all duration-300 ease-in-out ${
//             isOpen
//               ? 'max-h-96 opacity-100 py-4'
//               : 'max-h-0 opacity-0 overflow-hidden'
//           }`}
//         >
//           <div className="flex flex-col space-y-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   isActive(link.path)
//                     ? 'text-blue-600 bg-blue-50'
//                     : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import startup_logo from '../assets/startup-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define isActive to check if the current path matches the link
  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return location.hash === path; // check if the hash matches
    }
    return location.pathname === path; // check if the full path matches
  };

  // Scroll to section or navigate to home
  const scrollToSection = (path:any) => {
    if (path.startsWith('#')) {
      // If already on the homepage, scroll to the section
      if (location.pathname === '/') {
        const sectionId = path.replace('#', '');
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home and then scroll to the section
        navigate('/');
        setTimeout(() => {
          const sectionId = path.replace('#', '');
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Wait for the homepage to load
      }
    } else {
      navigate(path);
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '#startups', label: 'Events' },
    { path: '/team', label: 'Team' },
    { path: '#about', label: 'About' },
    { path: '#faq', label: 'FAQ' },
    { path: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={startup_logo} style={{ width: '58px' }} />
            <span className="font-bold text-m bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Startup Cell IIIT Bhagalpur
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => scrollToSection(link.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection(link.path);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
