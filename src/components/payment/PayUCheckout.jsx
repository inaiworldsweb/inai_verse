import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PAYMENT_ENDPOINTS, FRONTEND_URL } from '../../services/paymentService';

const PayUCheckout = () => {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        amount: '100.00',
        product_info: 'Test Product',
        customer_name: 'John Doe',
        customer_email: 'john@example.com',
        customer_phone: '9999999999'
    });

    useEffect(() => {
        // Pre-fill from URL params if available
        const planName = searchParams.get('plan');
        const amount = searchParams.get('amount');

        if (planName || amount) {
            setFormData(prev => ({
                ...prev,
                product_info: planName || prev.product_info,
                amount: amount || prev.amount
            }));
        }
    }, [searchParams]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const submitPayUForm = (data) => {
        console.log("data:pay form", data)
        const payuForm = document.createElement('form');
        payuForm.action = data.payment_url;
        payuForm.method = 'POST';
        payuForm.style.display = 'none';

        for (const [key, value] of Object.entries(data.payment_params)) {
            if (value !== null && value !== undefined) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                payuForm.appendChild(input);
            }
        }

        document.body.appendChild(payuForm);
        payuForm.submit();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // 1. Create Order
            const orderRes = await fetch(PAYMENT_ENDPOINTS.CREATE_ORDER, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: parseFloat(formData.amount),
                    product_info: formData.product_info,
                    customer_name: formData.customer_name,
                    customer_email: formData.customer_email,
                    customer_phone: formData.customer_phone
                })
            });

            if (!orderRes.ok) throw new Error('Failed to create order');
            const orderData = await orderRes.json();
            console.log("Order created:", orderData);

            // 2. Initiate Payment Parameters
            const paymentRes = await fetch(PAYMENT_ENDPOINTS.PAYU_PAYMENT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    order_id: orderData.order_id,
                    surl: `${FRONTEND_URL}/payment/success`,
                    furl: `${FRONTEND_URL}/payment/failure`
                })
            });

            if (!paymentRes.ok) throw new Error('Failed to initiate payment');
            const paymentData = await paymentRes.json();
            console.log("Payment initiated:", paymentData);

            // 3. Submit PayU Form
            submitPayUForm(paymentData);

        } catch (err) {
            console.error(err);
            setError(err.message || 'An error occurred');
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-black font-sans">
            <div className="bg-[#111] p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-800">
                <h2 className="text-center text-white mb-6 text-2xl font-bold">PayU Checkout</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="amount" className="block mb-2 text-gray-300 text-sm">Amount (INR)</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            step="0.01"
                            required
                            className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-base text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="product_info" className="block mb-2 text-gray-300 text-sm">Product Info</label>
                        <input
                            type="text"
                            id="product_info"
                            name="product_info"
                            value={formData.product_info}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-base text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="customer_name" className="block mb-2 text-gray-300 text-sm">Name</label>
                        <input
                            type="text"
                            id="customer_name"
                            name="customer_name"
                            value={formData.customer_name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-base text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="customer_email" className="block mb-2 text-gray-300 text-sm">Email</label>
                        <input
                            type="email"
                            id="customer_email"
                            name="customer_email"
                            value={formData.customer_email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-base text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="customer_phone" className="block mb-2 text-gray-300 text-sm">Phone</label>
                        <input
                            type="tel"
                            id="customer_phone"
                            name="customer_phone"
                            value={formData.customer_phone}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-base text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full p-3 bg-blue-600 text-white border-none rounded text-base font-semibold cursor-pointer transition-colors duration-300 hover:bg-blue-700 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Processing...' : 'Pay Now'}
                    </button>
                    {error && (
                        <div className="text-red-500 text-sm mt-2 text-center block">
                            {error}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default PayUCheckout;
