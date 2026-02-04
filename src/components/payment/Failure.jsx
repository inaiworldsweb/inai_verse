import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Failure = () => {
    const [searchParams] = useSearchParams();
    const error = searchParams.get('error') || 'Transaction failed';

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 max-w-md w-full text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold mb-2">Payment Failed</h1>
                <p className="text-gray-400 mb-6">{error}. Please try again or contact support.</p>
                <div className="flex gap-4 justify-center">
                    <Link
                        to="/"
                        className="text-gray-400 hover:text-white px-4 py-2 transition-colors"
                    >
                        Go Home
                    </Link>
                    <Link
                        to="/pricing"
                        className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                        Try Again
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Failure;
