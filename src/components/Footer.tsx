// // import React from 'react';
// import { Link } from 'react-router-dom';
// import {   Instagram, Linkedin } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">Startup Cell IIIT-BH </h3>
//             <p className="text-gray-400">Empowering innovation and entrepreneurship at IIIT Bhagalpur.</p>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
//               <li><a href="#startups" className="text-gray-400 hover:text-white">Events</a></li>
//               <li><Link to="/team" className="text-gray-400 hover:text-white">Team</Link></li>
//               <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact</h4>
//             <address className="text-gray-400 not-italic">
//               IIIT Bhagalpur<br />
//               Bihar, India<br />
//               <a href="mailto:startup@iiitbh.ac.in" className="hover:text-white">startupcell@iiitbh.ac.in</a>
//             </address>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
//             <div className="flex space-x-4">
//               {/* <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a> */}
//               {/* <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a> */}
//               <Link to="https://www.instagram.com/startupcelliiitbhagalpur?igsh=MXUyYTRkcWljbGx0eg==" className="text-gray-400 hover:text-white"><Instagram /></Link>
//               <Link to="https://www.linkedin.com/in/start-up-cell-iiit-bhagalpur-641054305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white"><Linkedin /></Link>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} IIIT Bhagalpur Startup Cell. All rights reserved.</p>
//           <p>Created by Subham Mahato</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle smooth scrolling for section-based links
  const scrollToSection = (path: string) => {
    if (path.startsWith('#')) {
      // If the user is on the homepage, scroll to the section
      if (location.pathname === '/') {
        const sectionId = path.replace('#', '');
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If the user is not on the homepage, navigate to it and scroll
        navigate('/');
        setTimeout(() => {
          const sectionId = path.replace('#', '');
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Wait for the homepage to load before scrolling
      }
    } else {
      navigate(path); // For regular routes, use the navigate function
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Startup Cell IIIT-BH</h3>
            <p className="text-gray-400">Empowering innovation and entrepreneurship at IIIT Bhagalpur.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><a href="#startups" className="text-gray-400 hover:text-white" onClick={() => scrollToSection('#startups')}>Events</a></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white">Team</Link></li>
              <li><a href="#about" className="text-gray-400 hover:text-white" onClick={() => scrollToSection('#about')}>About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              IIIT Bhagalpur<br />
              Bihar, India<br />
              <a href="mailto:startup@iiitbh.ac.in" className="hover:text-white">startupcell@iiitbh.ac.in</a>
            </address>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link to="https://www.instagram.com/startupcelliiitbhagalpur?igsh=MXUyYTRkcWljbGx0eg==" className="text-gray-400 hover:text-white">
                <Instagram />
              </Link>
              <Link to="https://www.linkedin.com/in/start-up-cell-iiit-bhagalpur-641054305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IIIT Bhagalpur Startup Cell. All rights reserved.</p>
          <p>Created by Subham Mahato and Sunny Raj</p>
        </div> */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
  <p>&copy; {new Date().getFullYear()} IIIT Bhagalpur Startup Cell. All rights reserved.</p>
  <p>
    Created by &nbsp;  
    <a 
      href="https://www.linkedin.com/in/subham-mahato-b26879257/" 
      className="text-gray-400 hover:text-white" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <b>Subham Mahato</b> 
    </a> 
    &nbsp; and  &nbsp;
    <a 
      href="https://www.linkedin.com/in/sunnyrajendraraj/" 
      className="text-gray-400 hover:text-white" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <b>Sunny Raj</b>
    </a>
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
