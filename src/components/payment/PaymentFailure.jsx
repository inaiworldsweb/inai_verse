import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentFailure = () => {
    const [searchParams] = useSearchParams();
    const [details, setDetails] = useState({
        txnId: '',
        status: '',
        error: ''
    });

    useEffect(() => {
        setDetails({
            txnId: searchParams.get('txn_id') || '',
            status: searchParams.get('status') || '',
            error: searchParams.get('error') || ''
        });
    }, [searchParams]);

    return (
        <div className="flex justify-center items-center h-screen bg-[#fef2f2] font-sans">
            <div className="bg-white p-10 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] w-full max-w-[400px] text-center">
                <div className="text-6xl text-[#ef4444] mb-4 mx-auto w-fit">✗</div>
                <h1 className="text-[#991b1b] text-2xl font-bold mb-2">Payment Failed</h1>
                <p className="text-[#666] mb-6">Sorry! Your transaction could not be completed.</p>

                <div className="bg-[#fef2f2] p-4 rounded-lg text-left mb-6 border border-[#fecaca]">
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="text-[#6b7280]">Transaction ID:</span>
                        <span className="font-medium text-[#111827] break-all">{details.txnId}</span>
                    </div>
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="text-[#6b7280]">Status:</span>
                        <span className="font-medium text-[#111827]">{details.status}</span>
                    </div>
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="text-[#6b7280]">Error:</span>
                        <span className="font-medium text-[#111827] break-words">{details.error}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <Link to="/" className="inline-block px-6 py-3 bg-[#ef4444] text-white rounded-md hover:bg-[#dc2626] transition-colors font-medium no-underline w-full">
                        Try Again
                    </Link>
                    <Link to="/" className="inline-block px-6 py-3 bg-[#22c55e] text-white rounded-md hover:bg-[#16a34a] transition-colors font-medium no-underline w-full">
                        Make Another Payment
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentFailure;
