import React from 'react';
import { BookOpen } from 'lucide-react';

const caseStudies = [
  {
    title: 'Rajasthan Water Conservation',
    location: 'Rajasthan, India',
    impact: '500,000 people benefited',
    description: 'Implementation of traditional water harvesting techniques combined with modern technology.',
    imageUrl: 'https://images.unsplash.com/photo-1580974928064-f0aeef70895a?auto=format&fit=crop&w=800'
  },
  {
    title: 'Urban Water Management',
    location: 'Mumbai, Maharashtra',
    impact: '30% reduction in water wastage',
    description: 'Smart metering and leak detection system implementation in urban areas.',
    imageUrl: 'https://images.unsplash.com/photo-1601796294260-c6e04156d960?auto=format&fit=crop&w=800'
  },
  {
    title: 'Agricultural Water Efficiency',
    location: 'Punjab, India',
    impact: '40% water savings in irrigation',
    description: 'Drip irrigation and soil moisture sensing technology adoption.',
    imageUrl: 'https://images.unsplash.com/photo-1625401586060-f12bb7b40468?auto=format&fit=crop&w=800'
  }
];

const CaseStudies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {caseStudies.map((study, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={study.imageUrl} alt={study.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-3">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">{study.title}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">{study.location}</p>
            <p className="text-sm font-semibold text-green-600 mb-3">{study.impact}</p>
            <p className="text-gray-700">{study.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudies;