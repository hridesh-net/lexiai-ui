import React, { useState } from 'react';
import DocumentUpload from '../components/DocumentUpload';
import ProcessingStatus from '../components/ProcessingStatus';
import SearchInterface from '../components/SearchInterface';
import ChatInterface from '../components/ChatInterface';
import NavBar from '../components/NavBar';
import WorkSpace from './WorkSpace';

const Home: React.FC = () => {
    const [status, setStatus] = useState('Idle');
    return (
        <div className="relative h-full w-full dark:bg-slate-950 -z-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_1px)] bg-[size:22px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>
            <NavBar />
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Plan Your Learning over OS</h1>
                <WorkSpace />
                {/* <DocumentUpload />
                <ProcessingStatus status={status} />
                <SearchInterface />
                <ChatInterface /> */}
                <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">

                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
