import React, { useState } from 'react';
import axios from 'axios'
export const Auth = ({ type = "login",onSuccess }) => {
    const [isLogin, setIsLogin] = useState(true); 
    const[hidden,setHidden]=useState(true);
    // const[name,setName] = useState("")
    // const[password,setPassword]=useState("")
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "", // or "investor"
    });

    console.log(form)
    const handleSignup = async () => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, form);
            console.log("Signup successful", res.data);
            localStorage.setItem("token", res.data.token);
            onSuccess();

        } catch (err) {
            console.error("Signup failed", err.response?.data || err.message);
        }
    };
    const handleLogin = async () => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, form);
            console.log("Login successful", res.data);
            localStorage.setItem("token", res.data.token);
            onSuccess();

        } catch (err) {
            console.error("Signup failed", err.response?.data || err.message);
        }
    };

    return (
        <div className=" rounded-3xl w-3/2  flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-1">
            <div className="bg-white/95 backdrop-blur-sm  rounded-3xl shadow-2xl p-8   ">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        {isLogin ? 'Welcome Back' : 'Join Us'}
                    </h1>
                    <p className="text-gray-600 text-lg">
                        {isLogin ? 'Sign in to your account' : 'Create your account'}
                    </p>
                </div>

                {/* Form */}
                <div className="space-y-6">

                    <div className="relative flex flex-col gap-2 ">
                        {!isLogin && <div className=''>

                            <input
                                type="text"
                                placeholder="name"
                                onChange={(e) => {
                                    setForm((c) => ({
                                        ...c,
                                        name: e.target.value
                                    }));
                                }}
                                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50 hover:bg-white"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                        </div>
                        }

                        {/* Email Input */}
                        <div className=" relative">
                            <input
                                type="text"
                                placeholder="Email address"
                                onChange={(e) => {
                                    setForm((c) => ({
                                        ...c,
                                        email: e.target.value
                                    }));
                                }}
                                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50 hover:bg-white"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(e) => {
                                    setForm((c) => ({
                                        ...c,
                                        password: e.target.value
                                    }));
                                }}
                                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50 hover:bg-white"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                        </div>
                        {!isLogin && <div className=''>

                            <input
                                type="text"
                                placeholder="investor or startup"
                                onChange={(e) => {
                                    setForm((c) => ({
                                        ...c,
                                        name: e.target.value
                                    }));
                                }}
                                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50 hover:bg-white"
                            />
                            <div className="absolute  inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                        </div>
                        }


                        {/* Buttons */}
                        <div className="space-y-4">
                            <button onClick={isLogin ? handleLogin : handleSignup} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl text-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl">
                                {isLogin ? 'Sign In' : 'Create Account'}
                            </button>

                            <div className="flex items-center justify-center space-x-4">
                                <div className="flex-1 h-px bg-gray-300"></div>
                                <span className="text-gray-500 text-sm font-medium">or</span>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>

                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-xl text-lg hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                            >
                                {isLogin ? 'Create Account' : 'Sign In'}
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-8">
                        <p className="text-gray-500 text-sm">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-colors duration-200"
                            >
                                {isLogin ? 'Sign up' : 'Sign in'}
                            </button>
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
                </div>
            </div>
            
            </div>
            );
}