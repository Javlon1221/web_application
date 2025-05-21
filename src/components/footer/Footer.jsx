import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 fixed bottom-0 left-0 w-full shadow-inner">
        
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My React App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
