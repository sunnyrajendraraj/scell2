// import React from 'react';
import Hero from '../components/Hero';
import StartupCard from '../components/StartupCard';
import FAQ from '../components/FAQ';
import ContactUs from './ContactUs';
import y from '../assets/y.jpg'
import q17 from '../assets/17.jpg'

const Home = () => {
  const startups = [
    {
      id: "1",
      title: "Startup Activities",
      description: "At Startup Cell IIIT Bhagalpur, we actively foster an entrepreneurial mindset through a series of dynamic and engaging activities. These initiatives are designed to inspire innovation, encourage problem-solving, and provide a platform for aspiring entrepreneurs to showcase their ideas and skills.",
      image: y
    },
    {
      id: "2",
      title: "Idea submission",
      description: "By submitting your ideas, you take the first step towards transforming concepts into actionable startups, fostering innovation, and contributing to a vibrant entrepreneurial ecosystem. Let your ideas pave the way for change and success!",
      image: q17
    },
    // {
    //   id: "3",
    //   title: "HealthTech",
    //   description: "Revolutionary healthcare solutions",
    //   image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
    // }
  ];

  return (
    <div>
      <Hero />
      
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
              At <b>Startup Cell IIIT Bhagalpur</b>, we aim to foster ambition, creativity, and innovation in
 budding entrepreneurs. With the unwavering support of the <b>Government of Bihar</b> and the 
 <b> Department of Industries</b>, we empower students and aspiring innovators to transform their
 ideas into impactful startups.<br/><br/>
 This initiative serves as the cornerstone for aspiring entrepreneurs to embark on a
 transformative journey—one filled with passion, perseverance, and purpose. Through
 mentorship, resources, and guidance, we nurture a thriving ecosystem where dreams are
 shaped into reality, driving innovation and economic growth in Bihar and beyond.<br/><br/>
 Let your entrepreneurial spirit take flight, and be the change that shapes the future!
              </p>
            </div>
            <div>
              <img 
                src={y}
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="startups" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Startup Cell Programs and Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {startups.map((startup) => (
              <StartupCard key={startup.id} {...startup} />
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <section id="contact" className="py-20">
        <ContactUs/>
      </section>
    </div>
  );
};

export default Home;