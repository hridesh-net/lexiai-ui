import React, { useState } from 'react';

const DocumentUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
            setError(null);
        } else {
            setError('Please upload a valid PDF document.');
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:8000/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Upload failed');
            }

            // Handle successful upload (e.g., update state, notify user)
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="mb-4"
            />
            <button
                onClick={handleUpload}
                disabled={uploading || !file}
                className={`px-4 py-2 text-white ${uploading ? 'bg-gray-400' : 'bg-blue-500'} rounded`}
            >
                {uploading ? 'Uploading...' : 'Upload PDF'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default DocumentUpload;