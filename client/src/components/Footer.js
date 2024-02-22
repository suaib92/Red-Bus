import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 px-8 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 h-8 w-8">
            <path d="M8 6v6"></path>
            <path d="M15 6v6"></path>
            <path d="M2 12h19.6"></path>
            <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path>
            <circle cx="7" cy="18" r="2"></circle>
            <path d="M9 18h5"></path>
            <circle cx="16" cy="18" r="2"></circle>
          </svg>
          <h3 className="text-2xl font-bold mt-2">RESERVE</h3>
          <p className="mt-4 text-sm text-gray-600">
            When you have a choice. Choose Reserve.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Reserve offers bus tickets booking through its website, iOS, and android mobile apps for all major cities.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            reserve.bus@reserve.com
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">About</h4>
          <ul className="mt-4 space-y-2">
            <li><a className="text-sm text-gray-600" href="#">About Us</a></li>
            <li><a className="text-sm text-gray-600" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Useful Link</h4>
          <ul className="mt-4 space-y-2">
            <li><a className="text-sm text-gray-600" href="#">Careers</a></li>
            <li><a className="text-sm text-gray-600" href="#">FAQ</a></li>
            <li><a className="text-sm text-gray-600" href="#">T &amp; C</a></li>
            <li><a className="text-sm text-gray-600" href="#">Privacy Policy</a></li>
            <li><a className="text-sm text-gray-600" href="#">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex mt-4 space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 h-6 w-6">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 h-6 w-6">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 h-6 w-6">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-gray-300 text-center text-sm text-gray-600">
        All rights reserved - 2022
      </div>
    </footer>
  );
}

export default Footer;
