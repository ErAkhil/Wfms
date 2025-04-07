// components/LoginPage.jsx
import React from 'react';
import Image from 'next/image';

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex w-screen h-screen">
                {/* Left Side - Image and Company Name */}
                <div className="w-1/2 bg-purple-700 p-8 flex flex-col justify-center items-center text-white">
                    {/* Replace with your own image path */}
                    <Image
                        src="/images/image.png"
                        alt="Trading Dashboard"
                        width={300}
                        height={300}
                        className="mb-6 rounded-lg"
                    />
                    <h1 className="text-4xl font-bold">Atvantiq</h1>
                    <p className="mt-2 text-lg">Workflow Management System</p>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-1/2 bg-white p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-300"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;