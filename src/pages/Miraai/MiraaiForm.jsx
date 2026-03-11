import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiPackage,
  FiDollarSign,
  FiCheckCircle,
  FiHash,
  FiShield,
} from "react-icons/fi";

const MiraaiForm = () => {
  const [hasGST, setHasGST] = useState(null);
  const [acceptTerms, setAcceptTerms] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasGST !== null && acceptTerms === true) {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    }
  };

  const isButtonEnabled = acceptTerms === true;

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 py-10 font-inter tracking-[1px]">
      {/* Main Card */}
      <div className="bg-[#0A0A0A] p-6 md:p-10 rounded-[7px] shadow-2xl w-full max-w-2xl border border-white/10 relative">
        <div className="text-center mb-10">
          <h2 className="text-white font-bold mb-2 text-[40px]">
            Welcome to Miraai
          </h2>
          <p className="text-white/40 text-[15px]">Checkout Details</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-white/70 font-normal  ml-1 flex items-center gap-2 text-[15px]">
                <FiUser /> First Name
              </label>
              <input
                type="text"
                placeholder="John"
                required
                className="w-full py-[6px] px-[10px] bg-white/[0.03] border border-white/10 rounded-[7px] text-white focus:outline-none focus:border-white/40 transition-all placeholder:text-white/10 text-[15px]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-white/70 font-normal ml-1 text-[15px]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                required
                className="w-full py-[6px] px-[10px] bg-white/[0.03] border border-white/10 rounded-[7px] text-white focus:outline-none focus:border-white/40 transition-all placeholder:text-white/10 text-[15px]"
              />
            </div>
          </div>

          {/* Row 2: Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-white/70 font-normal   ml-1 flex items-center gap-2 text-[15px]">
                <FiPhone /> Phone
              </label>
              <input
                type="tel"
                placeholder="+91 99999 99999"
                required
                className="w-full py-[6px] px-[10px] bg-white/[0.03] border border-white/10 rounded-[7px] text-white focus:outline-none focus:border-white/40 transition-all text-[15px]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-white/70 font-normal   ml-1 flex items-center gap-2 text-[15px]">
                <FiMail /> Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                className="w-full py-[6px] px-[10px] bg-white/[0.03] border border-white/10 rounded-[7px] text-white focus:outline-none focus:border-white/40 transition-all text-[15px]"
              />
            </div>
          </div>

          {/* Row 3: Product Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-white/70 font-normal   ml-1 flex items-center gap-2 text-[15px]">
                <FiDollarSign /> Price
              </label>
              <div className="w-full py-[6px] px-[10px] bg-white/5 border border-white/10 rounded-[7px] text-white font-mono text-[15px]">
                ₹ 1,499.00
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-white/70 font-normal   ml-1 flex items-center gap-2 text-[15px]">
                <FiPackage /> Product
              </label>
              <div className="w-full py-[6px] px-[10px] bg-white/5 border border-white/10 rounded-[7px] text-white truncate text-[15px]">
                Premium AI Bundle
              </div>
            </div>
          </div>

          {/* GST Section */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between py-[6px] px-[10px] bg-white/[0.02] rounded-[7px] border border-white/10">
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-white text-sm" />
                <span className="text-white/80 font-normal  text-[15px]">
                  GST?
                </span>
              </div>
              <button
                type="button"
                onClick={() => setHasGST(!hasGST)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
                  hasGST === true ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    hasGST === true ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <AnimatePresence>
              {hasGST === true && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-1.5">
                    <label className="text-white/70 font-normal   ml-1 flex items-center gap-2 text-[15px]">
                      <FiHash /> GST Number
                    </label>
                    <input
                      type="text"
                      placeholder="22AAAAA0000A1Z5"
                      className="w-full py-[6px] px-[10px] bg-white/5 border border-white/20 rounded-[7px] text-white focus:outline-none focus:border-white transition-all text-[15px]"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Terms Section: Switch */}
            <div className="flex items-center p-2 bg-white/[0.02] rounded-[7px] border border-white/10">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setAcceptTerms(!acceptTerms)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
                    acceptTerms === true ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      acceptTerms === true ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <FiShield className="text-white text-sm flex-shrink-0" />
                <span className="text-white/80 text-[15px]">
                  I accept the Terms and Conditions and the Privacy Policy.
                </span>
              </div>
            </div>
          </div>

          {/* Final Action Button */}
          <button
            type="submit"
            disabled={loading || !isButtonEnabled}
            className={`w-full flex items-center justify-center py-[8px] px-[12px] rounded-[7px] font-normal  tracking-widest transition-all duration-300 active:scale-[0.98] mt-4 text-[15px] ${
              isButtonEnabled
                ? "bg-white text-black hover:bg-white/90 cursor-pointer"
                : "bg-white/5 text-white/10 cursor-not-allowed border border-white/5"
            }`}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            ) : (
              "Proceed to Payment"
            )}
          </button>

          <p className="text-center font-normal tracking-[4px] text-white/20 pt-2 text-[15px]">
            SECURE ENCRYPTED CHECKOUT
          </p>
        </form>
      </div>
    </div>
  );
};

export default MiraaiForm;
