// import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: any;
  email: string;
  linkedin: string;
}

const TeamMemberCard = ({ name, role, image, email, linkedin }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-blue-600 mb-4">{role}</p>
        <p className="text-gray-600 mb-4">Email: {email}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;