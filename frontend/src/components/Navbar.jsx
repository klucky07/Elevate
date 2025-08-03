
import {  TrendingUp } from "lucide-react";
import { Button } from "../components/Button";
import { Auth } from "./Auth";
import { Profile } from "./Profile";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

export const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const authRef = useRef(null);

  // Check authentication status on component mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Close auth dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (authRef.current && !authRef.current.contains(event.target)) {
        setShowAuth(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const checkAuthStatus = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoggedIn(false);
        setUser(null);
        setIsLoading(false);
        return;
      }

      // Fetch user profile
      const response = await axios.get("http://localhost:3000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Auth check failed:", error);
      // Clear invalid token
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    setShowAuth(false);
    checkAuthStatus(); // Refresh user data
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      
      // Optional: Call logout endpoint
      if (token) {
        try {
          await axios.post(
            "http://localhost:3000/api/auth/logout",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        } catch (error) {
          console.warn("Logout endpoint failed:", error);
          // Continue with local logout even if server request fails
        }
      }

      // Clear local storage and state
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      // Force local logout even if there's an error
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-lg">
<Link to={'/'}>
<div className="flex items-center gap-3">
  
        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center pulse-ring neon-glow">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <p className="font-bold text-2xl">Elevate</p>
      </div></Link>

      <div className="hidden sm:flex gap-4">
        <Link to={"/"}>
      
        <span className="text-gray-600 underline-hover hover:text-purple-600 transition-all duration-300 hover:scale-110 relative group cursor-pointer">
          Home
        </span>  </Link>
       <a href="#About" >
        <span  className="text-gray-600 underline-hover hover:text-purple-600 transition-all duration-300 hover:scale-110 relative group cursor-pointer">
          About
        </span></a>
       <a href="#contact">
         <span className="text-gray-600 underline-hover hover:text-purple-600 transition-all duration-300 hover:scale-110 relative group cursor-pointer">
          Contact
        </span>
       </a>
      </div>

      <div className="relative" ref={authRef}>
        {loggedIn ? (
          <Profile 
            user={user} 
            onLogout={handleLogout} 
            isLoading={isLoading && !user}
          />
        ) : (
          <>
            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
              </div>
            ) : (
              <>
                <Button
                  text="Login/Signup"
                  onClick={() => setShowAuth(!showAuth)}
                />
                {showAuth && (
                  <div className="absolute top-16 right-30 z-50">
                    <Auth onSuccess={handleLoginSuccess} />
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};