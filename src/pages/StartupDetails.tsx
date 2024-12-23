// import React from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

import y from '../assets/hero.jpg'
import q16 from '../assets/16.jpg';
import q17 from '../assets/17.jpg';
import q18 from '../assets/18.jpg';
import q19 from '../assets/19.jpg';
import q20 from '../assets/20.jpg';
import q21 from '../assets/21.jpg';
import q22 from '../assets/22.jpg';
import q23 from '../assets/23.jpg';
import q24 from '../assets/24.jpg';
// import Registration from './Registration';
// import Registration2 from './Registration2';



// import 16 from ''


const StartupDetails = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const startupDetails = {
    "1": {
      title: "Startup Activities",
      description: "At Startup Cell IIIT Bhagalpur, we actively foster an entrepreneurial mindset through a series of dynamic and engaging activities. These initiatives are designed to inspire innovation, encourage problem-solving, and provide a platform for aspiring entrepreneurs to showcase their ideas and skills.",
      fullDescription: `<b>Expert Talk:</b> Learn from industry experts, innovators, and startup leaders as they share valuable insights and experiences. <br/><br/>
      
      <b>Idea Pitching:</b> A creative brainstorming event where participants pitch groundbreaking ideas to solve real-world challenges. <br/><br/>
      
        <b>Solution Writing:</b> A platform to analyze, articulate, and present innovative solutions to pressing problems. <br/><br/>
        
        <b>Hackathon:</b> A collaborative coding and development marathon to create technological solutions for complex issues.<br /><br/>`,
      images: [
        y,
        q16,
        q17,
        q18,q19,q20
      ]
    },
    "2": {
      title: "Idea submission",
      description: "The Startup Cell IIIT Bhagalpur invites aspiring innovators and problem-solvers to submit their creative and impactful startup ideas. This initiative provides a platform for students to share their entrepreneurial visions, explore solutions to real-world challenges, and receive constructive feedback from mentors and experts.",
      fullDescription: "By submitting your ideas, you take the first step towards transforming concepts into actionable startups, fostering innovation, and contributing to a vibrant entrepreneurial ecosystem. Let your ideas pave the way for change and success!",
      images: [
        q21,
        q22,q23,q24
      ]
    },
    "3": {
      title: "HealthTech",
      description: "Revolutionary healthcare solutions",
      fullDescription: "HealthTech is building the future of healthcare through innovative technology solutions. Our platform connects students with healthcare providers and provides real-time health monitoring.",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
      ]
    }
  };
  
//@ts-ignore
  const startup = startupDetails[id];

  if (!startup) {
    return (
      <div className="pt-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Startup not found</h2>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">{startup.title}</h1>
          <p className="text-xl text-white text-center">{startup.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Image Slider */}
        <div className="mb-12">
          <ImageSlider images={startup.images} />
        </div>

        <div className="prose max-w-none mb-12">
          {/* <h2 className="text-3xl font-bold mb-6">  Event Details</h2> */}
          {  id == "1" ? <h2 className="text-3xl font-bold mb-6">   Event Details</h2> : <h2 className="text-3xl font-bold mb-6">  Submit Your Ideas at IIIT Bhagalpur</h2> }
          <p className="text-lg text-gray-700">{parse(startup.fullDescription)}</p>
        </div>

        {  id == "1" ? '' : <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5Qqc3MdOIDidCW2xJwkbBin84-Lvf99CvoftUoWmKtGNkVg/viewform" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition group"
            >
              Submit
              {/* <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /> */}
            </a>}
      </div>
    </div>
  );
};

export default StartupDetails;