import React from 'react';

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-4">{icon}</div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-teal-100">{description}</p>
  </div>
);

export default FeatureItem;