// import React from 'react';
import { ArrowRight } from 'lucide-react';
// import x from '../assets/hero.jpg'
import HeroImageSlider from './HeroImageSlider';


const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center">
      {/* Background pattern overlay */}
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-10"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-[4rem] leading-none font-bold text-white" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontFamily: "'Anton', sans-serif",
              letterSpacing: '1px',
            }}>
              IGNITING INNOVATION,
              <br />
              <span className="text-blue-500">EMPOWERING </span>
              <br />
              ENTREPRENEURS
            </h1>
            
            <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Fuels innovation and empowers dreamers to transform ideas into impactful ventures. It’s where passion meets action, igniting a journey of creativity and entrepreneurial success.
            </p>
            
            {/* <button  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition group">
              Join Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button> */}
            <a 
              href="/joinus" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition group"
            >
              Join Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* <div className="relative"> */}
            {/* Main image */}
            {/* <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
              <img
                src={x}
                alt="Startup presentation"
                className="w-full h-full object-cover"
              /> */}
              {/* Overlay gradient */}
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent"></div>
            </div> */}
            
            {/* Decorative elements */}
            {/* <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div> */}
            {/* <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div> */}
          {/* </div> */}

          <HeroImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;