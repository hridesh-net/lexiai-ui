import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Oops! The page you are looking for does not exist.
                </p>
                <a href="/" className="mt-6 inline-block text-blue-500 hover:underline">
                    Go back to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;