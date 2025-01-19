import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const CommunityStats = () => {
  const [counts, setCounts] = useState({
    members: 0,
    groups: 0,
    countries: 0
  });

  useEffect(() => {
    // Animate counting up
    const duration = 2000; // 2 seconds
    const steps = 50;
    const interval = duration / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      
      setCounts({
        members: Math.min(Math.floor((300 * currentStep) / steps), 300),
        groups: Math.min(Math.floor((10 * currentStep) / steps), 10),
        countries: Math.min(Math.floor((5 * currentStep) / steps), 5)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Join the global community. Find<br />
        Your Perfect Partner.
      </h1>
      
      <p className="text-gray-600 mb-6">
        Our vibrant community produces Top Entrepreneurs, Startups, and Founders all over the world.
      </p>
      
      <button className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-12">
        Learn more
        <ArrowRight className="ml-1 h-4 w-4" />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="text-4xl font-bold text-blue-500 mb-2">
            {counts.members}+
          </div>
          <div className="text-gray-600">
            community members
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="text-4xl font-bold text-blue-500 mb-2">
            {counts.groups}+
          </div>
          <div className="text-gray-600">
            community groups
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="text-4xl font-bold text-blue-500 mb-2">
            {counts.countries}+
          </div>
          <div className="text-gray-600">
            countries represented
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityStats;