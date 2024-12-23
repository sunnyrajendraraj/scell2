// import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface StartupCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const StartupCard = ({ id, title, description, image }: StartupCardProps) => {
  return (
    <Link to={`/startup/${id}`} className="group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <ArrowUpRight className="h-5 w-5 text-blue-600 opacity-0 group-hover:opacity-100 transition" />
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default StartupCard;