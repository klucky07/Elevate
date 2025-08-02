import { useEffect, useState, useRef } from "react";

export const Profile = ({ user, onLogout, isLoading }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center gap-4">
        <div className="animate-pulse">
          <div className="h-8 w-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  const handleLogoutClick = () => {
    setShowDropdown(false); // Close dropdown first
    onLogout(); // Then logout
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-1 hover:cursor-pointer"
        >
          <span>👤</span>
          <span className="hidden sm:block">Profile</span>
          <span className={`text-xs transition-transform ${showDropdown ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        <button
          onClick={handleLogoutClick}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>

      {showDropdown && user && (
        <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64 z-50">
          <div className="space-y-2">
            <div className="border-b pb-2">
              <p className="font-semibold text-gray-800">{user.name || 'User'}</p>
              <p className="text-sm text-gray-600">{user.email || 'No email'}</p>
              <p className="text-xs text-purple-600 uppercase">{user.role || 'User'}</p>
            </div>
            <button
              onClick={() => setShowDropdown(false)}
              className="w-full text-left text-sm text-gray-600 hover:text-purple-600 py-1"
            >
              View Full Profile
            </button>
            <button
              onClick={() => setShowDropdown(false)}
              className="w-full text-left text-sm text-gray-600 hover:text-purple-600 py-1"
            >
              Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};