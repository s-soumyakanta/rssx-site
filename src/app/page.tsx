// components/LandingPage.js

import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col justify-center items-center font-sans py-8">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-base font-bold text-orange-500"><span className='text-5xl'>rssx.site</span> <br />RSS Explorer</h1>
        <p className="text-lg mt-4">Discover, curate, and explore the world of RSS feeds with ease.</p>
      </header>

      <div>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-4">Launching Soon</h2>

      </div>
      {/* Footer */}
      <footer className=" py-6 mt-10 text-center">
        <p className="text-gray-400 text-sm">© 2025 RSS Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
