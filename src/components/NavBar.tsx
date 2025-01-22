import React from "react";

const NavBar: React.FC = () => {
    return (
        <nav className="sticky top-0 backdrop-filter backdrop-blur bg-opacity-30 bg-white/30 dark:bg-black/20 shadow-lg">
            <div className="mx-auto py-2">
                <div className="flex flex-row items-center justify-around text-gray-800 dark:text-white">
                    <h1 className="text-2xl font-bold">LexiAI</h1>
                    <div className="flex flex-row items-center justify-between px-4">
                        <button className="px-3">Home</button>
                        <button className="px-3">Learner Modules</button>
                        <button className="px-3">Sign In</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;