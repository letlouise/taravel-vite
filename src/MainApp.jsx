import { useState } from 'react';
import './App.css';
import './scrollbar.css';
import { FaCar, FaCog, FaInfoCircle, FaSearch, FaChevronDown } from 'react-icons/fa';
import logo from './assets/LOGO.png';
import destiny from './assets/mall-front.jpg';

function MainApp() {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="bg-white font-montserrat">
      <div className="flex min-h-screen mx-auto border border-black rounded-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-[400px] bg-white flex flex-col p-4 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <img src={logo} alt="Logo" className="w-30" />
            <div className="flex items-center space-x-4 text-black">
              <button><FaCog className="text-lg" /></button>
              <button><FaInfoCircle className="text-lg" /></button>
            </div>
          </div>

          {/* Search */}
          <form className="relative">
            <input type="search" placeholder="Search"
              className="w-full border border-gray-300 rounded-full py-1.5 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          </form>

          {/* Dropdown */}
          <div className="flex items-center space-x-3">
            <button className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-200 text-blue-900 border border-blue-400">
              <FaCar className="text-lg" />
            </button>
            <select className="flex-1 border border-gray-300 rounded-md py-1.5 px-2 text-m text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-600">
              {[1, 2, 3, 4, 5].map(i => <option key={i}>{i}</option>)}
            </select>
            <p className="text-m text-gray-500 max-w-[500px]">How many places would you like to visit? <span className="italic">(optional)</span></p>
          </div>

          <button className="text-[10px] text-blue-700 border border-blue-400 rounded-full px-2 py-[2px] w-max">Profile Vehicle</button>

          {/* Route Details */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-between w-full text-sm text-lg font-semibold text-gray-700 border-b border-gray-300 pb-1"
          >
            <span>Descriptions</span>
            <p className={`text-xs transition-transform ${!showDetails ? 'rotate-180' : ''}`}>Directions</p>
          </button>

          {showDetails && (
            <div className="border border-gray-300 rounded-md p-3 max-h-[120px] overflow-y-auto scrollbar-thin">
              <p className="text-sm font-semibold mb-1">Route 1</p>
              <p className="text-xs mb-1">Distance: <span className="font-bold">1.0 km</span></p>
              <p className="text-xs mb-1">Duration: <span className="font-bold">3 mins 51 s</span></p>
              <p className="text-xs font-semibold mb-1">Instructions</p>
              <ul className="list-disc list-inside text-xs space-y-0.5">
                <li>Head east on <b>M.L. Tagarao Street, 606</b></li>
                <li>Turn left onto <b>M.L. Tagarao Street, 606</b></li>
                <li>Turn left</li>
                <li>Turn left</li>
              </ul>
            </div>
          )}

          <p className="text-[9px] font-semibold text-gray-500 mt-2">RECOMMENDATIONS:</p>
          <div className="flex justify-center items-center w-full max-w-[600px] rounded-lg overflow-hidden shadow-lg border border-gray-200 aspect-[4/3]">
            <img src={destiny} alt="Shopping mall" className="w-auto h-full" />
          </div>
          <p className="text-[9px] text-center text-gray-600 mt-1 select-none">SHOW DETAILS</p>

          <div className="flex justify-center space-x-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-blue-700"></span>
            <span className="w-3 h-3 rounded-full bg-blue-300"></span>
            <span className="w-3 h-3 rounded-full bg-blue-300"></span>
            <span className="w-3 h-3 rounded-full bg-blue-300"></span>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 relative">
          <iframe
            className="w-full h-full"
            src="https://www.openstreetmap.org/export/embed.html?bbox=121.073%2C14.555%2C121.075%2C14.557&layer=mapnik&marker=14.556%2C121.074"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MainApp;
