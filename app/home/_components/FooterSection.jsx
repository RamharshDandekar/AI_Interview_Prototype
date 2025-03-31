import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto text-center">
        <p>© 2025 Vison_Coders Team. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a>
        </p>
        {/* Social Icons - Add your social media icons here */}
      </div>
    </footer>
  );
};

export default FooterSection;