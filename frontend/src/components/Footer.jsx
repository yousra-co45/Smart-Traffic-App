import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-500 py-8 border-t border-slate-900 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2026 Smart City Traffic Management System</p>
        <div className="flex justify-center gap-4 mt-2">
          <span className="text-trafficGreen">● Green: Smooth</span>
          <span className="text-trafficYellow">● Yellow: Moderate</span>
          <span className="text-trafficRed">● Red: Heavy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;