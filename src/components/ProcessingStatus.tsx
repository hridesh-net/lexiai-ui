import React from 'react';

const ProcessingStatus: React.FC<{ status: string }> = ({ status }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Processing Status</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{status}</p>
        </div>
    );
};

export default ProcessingStatus;