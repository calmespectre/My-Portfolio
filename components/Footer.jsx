// components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="border-t border-gray-800 py-8 bg-black">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-sm text-gray-400">
        © {new Date().getFullYear()} Gerrad Meitamei. All rights reserved.
      </span>
      <span className="text-xs text-gray-500 font-mono">
        Moringa School · Class of 2025
      </span>
    </div>
  </footer>
);

export default Footer;