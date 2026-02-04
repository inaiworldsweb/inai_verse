import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [details, setDetails] = useState({
        txnId: '',
        status: '',
        amount: '',
        mode: '',
        bankRef: '',
        error: ''
    });

    useEffect(() => {
        setDetails({
            txnId: searchParams.get('txn_id') || '',
            status: searchParams.get('status') || '',
            amount: searchParams.get('amount') || '',
            mode: searchParams.get('mode') || 'N/A',
            bankRef: searchParams.get('mihpayid') || 'N/A',
            error: searchParams.get('error') || ''
        });
    }, [searchParams]);

    if (details.error) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#f0fdf4] font-sans">
                {/* Re-using success theme for consistency or should specific error page be light too? 
                    The user specifically showed success page. Assuming Failure page should also be light.
                    This block handles error query param on success page (edge case).
                 */}
                <Link to="/payment/failure" className="hidden" />
                {/* Redirecting or showing error layout */}
                <div className="bg-white p-10 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] w-full max-w-sm text-center">
                    <div className="text-6xl text-red-500 mb-4 mx-auto w-fit">✗</div>
                    <h1 className="text-red-700 text-2xl font-bold mb-2">Payment Error</h1>
                    <p className="text-gray-600 mb-6">{details.error}</p>
                    <Link to="/" className="inline-block px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                        Make Another Payment
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center h-screen bg-[#f0fdf4] font-sans">
            <div className="bg-white p-10 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] w-full max-w-[400px] text-center">
                <div className="mx-auto w-fit mb-4">
                    <FiCheck className="text-6xl text-[#22c55e]" />
                </div>
                <h1 className="text-[#15803d] text-2xl font-bold mb-2">Payment Successful</h1>
                <p className="text-[#666] mb-6">Thank you! Your transaction has been completed.</p>

                <div className="bg-[#f9fafb] p-4 rounded-lg text-left mb-6 border border-[#e5e7eb]">
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="text-[#6b7280]">Transaction ID:</span>
                        <span className="font-medium text-[#111827]">{details.txnId}</span>
                    </div>
                    {details.amount && (
                        <div className="flex justify-between mb-2 text-sm">
                            <span className="text-[#6b7280]">Amount:</span>
                            <span className="font-medium text-[#111827]">₹{details.amount}</span>
                        </div>
                    )}
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="text-[#6b7280]">Mode:</span>
                        <span className="font-medium text-[#111827]">{details.mode}</span>
                    </div>
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="text-[#6b7280]">Bank Ref:</span>
                        <span className="font-medium text-[#111827]">{details.bankRef}</span>
                    </div>
                </div>

                <Link to="/" className="inline-block px-6 py-3 bg-[#22c55e] text-white rounded-md hover:bg-[#16a34a] transition-colors font-medium no-underline w-full">
                    Make Another Payment
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;
