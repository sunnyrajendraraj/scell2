// import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import sandeep_sir from '../assets/sandeep_sir.jpg'
import rj from '../assets/rj.jpg'
import sunny_raj from '../assets/sunny_raj.jpg'

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sandeep Raj",
      role: "Faculty Incharge",
      image: sandeep_sir,
      email: "srp@iitp.ac.in",
      linkedin: "https://www.linkedin.com/in/sandeep-raj-a8b93083/"
    },
    {
      name: "Sunny Raj",
      role: "Student Coordinator",
      image: sunny_raj,
      email: "sunny.2201108cs@iiitbh.ac.in",
      linkedin: "https://www.linkedin.com/in/sunnyrajendraraj/"
    },
    {
      name: "Rajnandani Jaiswal",
      role: "Student Coordinator",
      image: rj,
      email: "raj.2201172cs@iiit.bh.ac.in",
      linkedin: "https://www.linkedin.com/in/nandani-jaiswal-b04bb5253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Our Team</h1>
          <p className="text-xl text-white text-center max-w-2xl mx-auto">
            Meet the passionate individuals driving innovation and entrepreneurship at IIIT Bhagalpur
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-4">The Beginning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Started in 2020, the Startup Cell was founded with a vision to create a vibrant entrepreneurial ecosystem at IIIT Bhagalpur.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" 
                  alt="Growth milestone" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-semibold mb-4">Growth & Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Over the years, we've supported numerous student startups, organized successful events, and built strong industry connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;