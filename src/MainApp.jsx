import React, { useState, useEffect, useRef } from "react";
import { FaCar, FaCog, FaInfoCircle, FaSearch, FaChevronDown } from 'react-icons/fa';
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "./assets/LOGO.png"

const App = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [placeAdded, setPlaceAdded] = useState(false);
  const [showDirections, setShowDirections] = useState(false);
  const popupRef = useRef();

  const toggleTab = (tab) => setActiveTab(tab);
  const toggleDirections = (e) => {
    e.stopPropagation();
    setShowDirections(!showDirections);
  };

  useEffect(() => {
    const handleClickOutside = () => setShowDirections(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="flex min-h-screen relative font-poppins">
      {/* Sidebar */}
      <aside className="w-120 border-r border-gray-300 flex flex-col p-6 z-10 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
            <img src={logo} alt="Logo" className="w-30" />
            <div className="flex items-center space-x-4 text-black">
              <button><FaCog className="text-lg" /></button>
              <button><FaInfoCircle className="text-lg" /></button>
            </div>
          </div>

        {/* Search Bar */}
        <form className="mb-6 relative">
          <input className="w-full border border-gray-400 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Search" />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <i className="fas fa-search" />
          </span>
        </form>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          {["description", "travelplan"].map((tab) => (
            <button
              key={tab}
              onClick={() => toggleTab(tab)}
              className={`border rounded-md py-1.5 px-4 text-sm ${
                activeTab === tab
                  ? "border-purple-600 bg-purple-500 text-white"
                  : "border-gray-400 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab === "description" ? "Description" : "Travel Plan"}
            </button>
          ))}
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* Content */}
        {activeTab === "description" ? (
          <div className="bg-white rounded-xl shadow-lg p-4 select-none">
            {!placeAdded ? (
              <p className="text-xs text-gray-700 font-semibold text-center">ADD PLACES TO SEE DESCRIPTIONS</p>
            ) : (
              <div>
                <div className="flex items-center justify-center space-x-4 mb-4 relative">
                  <h2 className="text-sm font-semibold">PACIFIC MALL</h2>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-semibold rounded-full px-4 py-1"
                    onClick={toggleDirections}
                    aria-haspopup="true"
                    aria-expanded={showDirections}
                  >
                    Directions
                  </button>
                  {showDirections && (
                    <div ref={popupRef} className="absolute top-full mt-2 right-0 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-3 text-xs text-gray-800 z-20">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Head east on M.L. Tagarao Street, 606</li>
                        <li>Turn left onto M.L. Tagarao Street, 606</li>
                        <li>Turn left</li>
                        <li>Turn left</li>
                      </ul>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-1">A mall residing in Ibabang Iyam</p>
                <p className="text-xs text-gray-700 leading-relaxed">Barangay Ibabang Iyam, Lucena City</p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-3 max-w-[160px] select-none">
            {!placeAdded ? (
              <p className="text-xs text-gray-700 font-semibold text-center">ADD PLACES TO TRAVEL PLANNER</p>
            ) : (
              <div>
                <img className="rounded-lg mb-2" src="https://storage.googleapis.com/a1aa/image/25d7367d-5c75-429d-593e-4959319dfde9.jpg" width="140" height="100" alt="Pacific Mall" />
                <p className="text-center text-xs font-semibold mb-2">PACIFIC MALL</p>
                <div className="flex justify-center space-x-2">
                  <button className="bg-green-500 text-white text-xs rounded-full px-3 py-1" onClick={() => setActiveTab("description")}>Details</button>
                  <button className="bg-red-400 text-white text-xs rounded-full px-3 py-1" onClick={() => setPlaceAdded(false)}>Remove</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Recommendations */}
        <div className="border border-gray-400 rounded-3xl p-4 flex flex-col sticky bottom-0 bg-white z-10 mt-auto">
          <p className="text-xs font-semibold mb-4">RECOMMENDATIONS:</p>
          <div className="flex space-x-6 justify-center mb-6">
            <div className="bg-white rounded-xl shadow-lg p-3 max-w-[140px] select-none">
              <img
                className="rounded-lg mb-2"
                src="https://storage.googleapis.com/a1aa/image/25d7367d-5c75-429d-593e-4959319dfde9.jpg"
                width="140"
                height="90"
                alt="Pacific Mall"
              />
              <p className="text-center text-xs font-semibold mb-2">PACIFIC MALL</p>
              {placeAdded ? (
                <button
                  className="bg-indigo-300 text-indigo-900 text-xs rounded-full px-6 py-1 block mx-auto cursor-not-allowed"
                  disabled
                >
                  Added
                </button>
              ) : (
                <button
                  className="bg-green-500 text-white text-xs rounded-full px-6 py-1 block mx-auto"
                  onClick={() => {
                    setPlaceAdded(true);
                    setActiveTab("description");
                  }}
                >
                  Add
                </button>
              )}
            </div>
          </div>
          <button className="bg-purple-500 text-white text-sm rounded-md py-2 w-full">Start Travel</button>
        </div>
      </aside>

      {/* Map Section */}
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
  );
};

export default App;
