import React from "react";

const WorkSpace: React.FC = () => {
    return (
        <div className="relative p-8 flex items-center justify-center min-h-[200px] w-[400px] sm:w-[500px]">
            {/* Glassmorphic Card */}
            <div className="relative flex flex-col justify-center items-center gap-4 bg-white/20 dark:bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/30 dark:border-white/20 w-full overflow-hidden">

                {/* Blurred Shiny Circular Background - Inside the Card */}
                <div className="absolute inset-0 w-full h-full flex justify-center items-center">
                    <div className="w-60 h-60 bg-gradient-to-r from-blue-400 to-cyan-500 dark:from-pink-600 dark:to-purple-800 rounded-full blur-3xl opacity-50"></div>
                </div>

                <h1 className="font-mono font-normal text-black dark:text-white z-10">Plan Your New Skill</h1>

                {/* Search Bar */}
                <div className="flex items-center bg-white/30 dark:bg-white/10 p-2 rounded-lg border border-white/40 dark:border-white/30 shadow-md backdrop-blur-lg z-10">
                    {/* Search Icon */}
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 mx-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="7"></circle>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"></path>
                    </svg>

                    {/* Search Input with Smooth Focus Animation */}
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="bg-transparent outline-none text-black dark:text-white w-full placeholder-gray-500 dark:placeholder-gray-400 
                           focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 transition-all duration-300 ease-in-out transform focus:scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default WorkSpace;