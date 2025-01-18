import React, { useState } from 'react';
import DocumentUpload from '../components/DocumentUpload';
import ProcessingStatus from '../components/ProcessingStatus';
import SearchInterface from '../components/SearchInterface';
import ChatInterface from '../components/ChatInterface';

const Home: React.FC = () => {
    const [status, setStatus] = useState('Idle');
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Document Processing System</h1>
            <DocumentUpload />
            <ProcessingStatus status={status} />
            <SearchInterface />
            <ChatInterface />
        </div>
    );
};

export default Home;