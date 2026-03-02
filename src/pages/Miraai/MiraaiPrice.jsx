import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

import logoImage from '../../assets/Mirrai.svg'


export default function MiraaiPrice() {
  const [billing, setBilling] = useState("monthly");
  const navigate = useNavigate();


  const plans = [
    {
      name: "Regal Vibes",
      oldMonthly: "₹ 5,749",
      monthly: "₹ 4,999",
      oldYearly: "₹ 57,999",
      yearly: "₹ 49,999",
      discount: "13% OFF",
    },
    {
      name: "Heritage Vibes",
      oldMonthly: "₹ 24,999",
      monthly: "₹ 19,999",
      oldYearly: "₹ 2,49,999",
      yearly: "₹ 1,99,999",
      discount: "20% OFF",
      popular: true,
    },
    {
      name: "Luxury Vibes",
      oldMonthly: "₹ 67,499",
      monthly: "₹ 49,999",
      oldYearly: "₹ 6,74,999",
      yearly: "₹ 4,99,999",
      discount: "26% OFF",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <PageHeader
        logoSrc={logoImage}
        showBackButton={false}
        showTitleText={false}
        showPriceButton={false}
        showHomeButton={true}
        showMenuButton={true}
        onLogoClick={() => navigate('/miraai')}
        showBorder={false}
        headerClassName="bg-gradient-to-r from-[#141414]/90 via-white/5 to-[#141414]/90 backdrop-blur-xl px-4 md:px-10"
        logoClassName="h-[30px] md:h-[40px] w-auto max-w-[280px] object-contain"
        homeIconClassName="w-6 h-6 md:w-7 md:h-7"
        menuIconClassName="w-6 h-6 md:w-7 md:h-7"
      />
      <div className="max-w-6xl mx-auto pt-8 pb-16 px-4">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold">
            AI-Powered Creative Production Services
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            All Deliverables Are Created In High Resolution With
            Ultra-Realistic, Premium-Quality Output
          </p>

          {/* Toggle */}
          <div className="flex justify-center mt-8">
            <div className="relative bg-zinc-900 border border-zinc-700 rounded-full p-1 w-[260px] flex">
              <div
                className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-white transition-all duration-300 ${billing === "monthly" ? "left-1" : "left-1/2"
                  }`}
              />
              <button
                onClick={() => setBilling("monthly")}
                className={`relative z-10 w-1/2 py-2 text-sm font-medium ${billing === "monthly"
                  ? "text-black"
                  : "text-gray-400"
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`relative z-10 w-1/2 py-2 text-sm font-medium ${billing === "yearly"
                  ? "text-black"
                  : "text-gray-400"
                  }`}
              >
                Annually
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-zinc-900 rounded-2xl p-8 border transition-all duration-300 ${plan.popular
                ? "border-white scale-105 shadow-2xl"
                : "border-zinc-700"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="absolute top-4 right-4 text-xs bg-zinc-800 px-3 py-1 rounded-full">
                {plan.discount}
              </div>

              <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>

              <p className="line-through text-gray-500 text-sm">
                {billing === "monthly"
                  ? plan.oldMonthly
                  : plan.oldYearly}
              </p>

              <p className="text-3xl font-bold mb-6">
                {billing === "monthly"
                  ? plan.monthly
                  : plan.yearly}
                <span className="text-sm text-gray-400">
                  {billing === "monthly" ? " / month" : " / year"}
                </span>
              </p>

              <button className="w-full bg-white text-black py-2 rounded-full font-medium hover:bg-gray-200 transition">
                Get Started
              </button>

              <ul className="mt-6 space-y-2 text-sm text-gray-300">
                <li>• Ultra Realistic Content</li>
                <li>• Professional Catalogue</li>
                <li>• Premium Assets</li>
                <li>• Dedicated Support</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Add-On Section */}
        <div className="mt-20 bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-zinc-700 pb-6">
            <div>
              <h3 className="text-lg font-semibold">Image Generation</h3>
              <p className="text-gray-400">₹1,000 / Add-On</p>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-black px-6 py-2 rounded-full">
              Add On
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between md:items-center pt-6">
            <div>
              <h3 className="text-lg font-semibold">Video Generation</h3>
              <p className="text-gray-400">₹2,500 / Add-On</p>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-black px-6 py-2 rounded-full">
              Add On
            </button>
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="mt-12 bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-6">
            Quality Commitment (Applies to All Plans)
          </h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>• Ultra Realistic Output</li>
            <li>• High Resolution Delivery</li>
            <li>• Commercial-Ready Assets</li>
            <li>• Fully Managed Production Team</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
