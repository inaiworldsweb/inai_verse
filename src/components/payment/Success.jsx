import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 max-w-md w-full text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
                <p className="text-gray-400 mb-6">Thank you for your purchase. Your transaction has been completed successfully.</p>
                <Link
                    to="/"
                    className="inline-block bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default Success;
