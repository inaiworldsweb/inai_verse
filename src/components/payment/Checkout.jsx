import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './PaymentStyles.css';

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    amount: '100.00',
    product_info: 'Test Product',
    customer_name: 'John Doe',
    customer_email: 'john@example.com',
    customer_phone: '9999999999',
  });

  // Get plan and amount from URL params
  useEffect(() => {
    const plan = searchParams.get('plan');
    const amount = searchParams.get('amount');

    if (plan || amount) {
      setFormData(prev => ({
        ...prev,
        product_info: plan || prev.product_info,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Dynamically get the current frontend origin (e.g., http://localhost:5173 or http://192.168.1.15:5173)
    const origin = window.location.origin;
    const successUrl = `${origin}/payment/success`;
    const failureUrl = `${origin}/payment/failure`;

    console.log("Using Return URLs:", successUrl, failureUrl);

    // Prepare robust payload attempting to override backend defaults with multiple parameter naming conventions
    const basePayload = {
      ...formData,
      amount: parseFloat(formData.amount),
      surl: successUrl,
      SURL: successUrl,
      success_url: successUrl,
      successUrl: successUrl,
      callback_url: successUrl,
      furl: failureUrl,
      FURL: failureUrl,
      failure_url: failureUrl,
      failureUrl: failureUrl
    };

    try {
      // 1. Create Order
      const orderRes = await fetch('https://api.inaiverse.com/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(basePayload)
      });
      if (!orderRes.ok) throw new Error('Failed to create order');
      const orderData = await orderRes.json();
      console.log("Order created:", orderData);

      // 2. Initiate Payment Parameters
      const paymentRes = await fetch('https://api.inaiverse.com/api/payment/payu-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...basePayload,
          order_id: orderData.order_id
        })
      });

      if (!paymentRes.ok) throw new Error('Failed to initiate payment');
      const paymentData = await paymentRes.json();
      console.log("Payment initiated:", paymentData);

      // 3. Submit PayU Form
      submitPayUForm(paymentData, successUrl, failureUrl);
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred');
      setIsLoading(false);
    }
  };

  const submitPayUForm = (data, successUrl, failureUrl) => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = data.payment_url || 'https://secure.payu.in/_payment';
    form.style.display = 'none';

    // Add all payment parameters from backend
    // IMPORTANT: Filter out any backend-provided 'surl' or 'furl' to prevent incorrect redirection to localhost:2522
    Object.entries(data.payment_params || {}).forEach(([key, value]) => {
      const lowerKey = key.toLowerCase();
      if (lowerKey !== 'surl' && lowerKey !== 'furl' && value !== null && value !== undefined) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      }
    });

    // Force strict frontend-based success/failure URLs
    const surlInput = document.createElement('input');
    surlInput.type = 'hidden';
    surlInput.name = 'surl';
    surlInput.value = successUrl;
    form.appendChild(surlInput);

    const furlInput = document.createElement('input');
    furlInput.type = 'hidden';
    furlInput.name = 'furl';
    furlInput.value = failureUrl;
    form.appendChild(furlInput);

    console.log("Submitting PayU form with Forced URLs:", { surl: successUrl, furl: failureUrl });

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="payment-container checkout">
      <div className="payment-content">
        <h2 className="payment-title">PayU Checkout</h2>
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label htmlFor="amount">Amount (INR)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="form-control"
              value={formData.amount}
              onChange={handleChange}
              step="0.01"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product_info">Product Info</label>
            <input
              type="text"
              id="product_info"
              name="product_info"
              className="form-control"
              value={formData.product_info}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="customer_name">Name</label>
            <input
              type="text"
              id="customer_name"
              name="customer_name"
              className="form-control"
              value={formData.customer_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="customer_email">Email</label>
            <input
              type="email"
              id="customer_email"
              name="customer_email"
              className="form-control"
              value={formData.customer_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="customer_phone">Phone</label>
            <input
              type="tel"
              id="customer_phone"
              name="customer_phone"
              className="form-control"
              value={formData.customer_phone}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="payment-button primary"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Pay Now'}
          </button>
          <div className={`error-message ${error ? 'show' : ''}`}>
            {error}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
