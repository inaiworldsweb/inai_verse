import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import logoImage from "../../assets/Mirrai.svg";

// Get Started Button Component using Tailwind CSS
const GetStartedButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/MiraaiForm");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group relative w-full inline-flex items-center justify-center overflow-hidden rounded-xl border-none outline-none cursor-pointer transition-all duration-300 active:scale-95 mb-4 min-h-[48px] touch-manipulation md:min-h-[56px]"
      style={{
        background:
          "radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%), linear-gradient(0deg, #7a5af8, #7a5af8)",
      }}
    >
      {/* Folded corner */}
      <span
        className="absolute top-0 right-0 z-10 w-4 h-4 inline-block transition-all duration-500 group-hover:-mt-4 group-hover:-mr-4"
        style={{
          background:
            "radial-gradient(100% 75% at 55%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%)",
          boxShadow: "0 0 3px black",
          borderBottomLeftRadius: "0.5rem",
          borderTopRightRadius: "0.75rem",
        }}
      />
      <span
        className="absolute top-0 right-0 z-10 w-6 h-6 pointer-events-none transition-all duration-500 group-hover:-mt-4 group-hover:-mr-4"
        style={{
          transform: "rotate(45deg) translateX(0%) translateY(-18px)",
          backgroundColor: "#e8e8e8",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-float"
            style={{
              bottom: "-10px",
              left: `${[10, 30, 25, 44, 50, 75, 88, 58, 98, 65][i]}%`,
              opacity: [1, 0.7, 0.8, 0.6, 1, 0.5, 0.9, 0.8, 0.6, 1][i],
              animationDuration: `${[2.35, 2.5, 2.2, 2.05, 1.9, 1.5, 2.2, 2.25, 2.6, 2.5][i]}s`,
              animationDelay: `${[0.2, 0.5, 0.1, 0, 0, 1.5, 0.2, 0.2, 0.1, 0.2][i]}s`,
            }}
          />
        ))}
      </div>

      {/* Button inner */}
      <span
        className="relative z-[2] w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 text-white text-base font-medium"
        style={{ lineHeight: "1.5" }}
      >
        <svg
          className="w-[18px] h-[18px] transition-all duration-100 group-hover:fill-transparent"
          fill="currentColor"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        >
          <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
        </svg>
        Get Started
      </span>
    </button>
  );
};

export default function MiraaiPrice() {
  const [billing, setBilling] = useState("monthly");
  const navigate = useNavigate();

  const plans = [
    {
      name: "Regal Vibes",
      bestFor: "Small Brands, Product Tests, and Starter Creatives",
      oldMonthly: "₹5,749",
      monthly: "₹4,999",
      oldYearly: "₹5,749",
      yearly: "₹4,000",
      discount: "30% OFF",
      features: [
        "150 AI-Generated Images (High-Resolution & Ultra-Realistic)",
        "5 Images / Product (Multiple Angles & Styles)",
        "1 Professional Product Catalogue",
        "1 AI-Generated Video (Complimentary)",
      ],
    },
    {
      name: "Heritage Vibes",
      bestFor: "Growing Brands & Digital Marketing Campaigns",
      oldMonthly: "₹24,499",
      monthly: "₹19,999",
      oldYearly: "₹24,999",
      yearly: "₹15,999",
      discount: "35% OFF",
      popular: true,
      features: [
        "10 AI-Generated Videos",
        "30 Images / Video (10 Images / Product × 3 Products)",
        "3 Professional Product Catalogues",
        "Ultra-Realistic Enhancements & Refinements",
        "Priority Support",
      ],
    },
    {
      name: "Imperial Vibes",
      bestFor: "Established Brands & High-Volume Campaigns",
      oldMonthly: "₹38,499",
      monthly: "₹30,000",
      oldYearly: "₹38,999",
      yearly: "₹23,999",
      discount: "38% OFF",
      features: [
        "25 AI-Generated Videos",
        "50 Images / Video (10 Images / Product × 5 Products)",
        "5 Professional Product Catalogues",
        "Ultra-Realistic Enhancements & Refinements",
        "Dedicated Support",
        "Custom Branding Options",
      ],
    },
    {
      name: "Prestige Vibe",
      bestFor: "Premium Brands & Luxury Market",
      oldMonthly: "₹47,999",
      monthly: "₹36,000",
      oldYearly: "₹49,399",
      yearly: "₹28,799",
      discount: "40% OFF",
      features: [
        "40 AI-Generated Videos",
        "100 Images / Video (10 Images / Product × 10 Products)",
        "10 Professional Product Catalogues",
        "Ultra-Realistic Enhancements & Refinements",
        "24/7 Dedicated Support",
        "Custom Branding Options",
        "White Label Solutions",
      ],
    },
    {
      name: "Luxury Vibes",
      bestFor: "Global Enterprises & Large-Scale Operations",
      oldMonthly: "₹67,499",
      monthly: "₹49,999",
      oldYearly: "₹67,499",
      yearly: "₹39,999",
      discount: "41% OFF",
      features: [
        "Unlimited AI-Generated Videos",
        "Unlimited Images / Video",
        "Unlimited Professional Product Catalogues",
        "Ultra-Realistic Enhancements & Refinements",
        "24/7 Dedicated Support",
        "Custom Branding Options",
        "White Label Solutions",
        "Custom AI Models",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-zinc-950 to-black text-white min-h-screen">
      <PageHeader
        logoSrc={logoImage}
        logoClassName="h-[34px] md:h-[44px] w-auto max-w-[130px] object-contain pl-6"
        showBackButton={false}
        showTitleText={false}
        showPriceButton={false}
        showHomeButton={true}
        showMenuButton={true}
        onLogoClick={() => navigate("/miraai")}
        showBorder={false}
      />

      <div className="max-w-7xl mx-auto pt-16 pb-24 px-4">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold">
            AI-Powered Creative Production Services
          </h1>
          <p className="text-gray-400 mt-4 max-w3xl mx-auto">
            All Deliverables Are Created In High Resolution With
            Ultra-Realistic, Premium-Quality Output
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center mt-6">
            <div className="relative bg-zinc-900 border border-zinc-700 rounded-full p-1 w-[260px] flex">
              <div
                className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-white transition-all duration-300 ${
                  billing === "monthly" ? "left-1" : "left-1/2"
                }`}
              />
              <button
                onClick={() => setBilling("monthly")}
                className={`relative z-10 w-1/2 py-2 text-sm font-medium ${
                  billing === "monthly" ? "text-black" : "text-gray-400"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`relative z-10 w-1/2 py-2 text-sm font-medium ${
                  billing === "yearly" ? "text-black" : "text-gray-400"
                }`}
              >
                Annually
              </button>
            </div>
          </div>

          {/* Pricing Cards - Updated for centering */}
          <div className="mt-20 flex flex-wrap justify-center gap-6 md:gap-4 lg:gap-8 max-w-[1200px] mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl p-6 md:p-5 lg:p-8 border-2 border-zinc-700 transition duration-300 hover:scale-105 w-full max-w-[340px] md:max-w-[300px] lg:max-w-[350px] mt-12`}
              >
                <div className="absolute top-4 right-4 bg-white text-black px-3 py-1.5 rounded-full text-xs font-bold">
                  {plan.discount}
                </div>

                <h2 className="text-xl font-bold text-left">{plan.name}</h2>
                <div className="mt-1 mb-4 text-left">
                  <span className="text-sm text-gray-400">Best for: </span>
                  <span className="text-sm text-gray-400">{plan.bestFor}</span>
                </div>

                <div className="mb-4 text-left">
                  <p className="line-through text-gray-500 text-lg">
                    {billing === "monthly" ? plan.oldMonthly : plan.oldYearly}
                  </p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold">
                      {billing === "monthly" ? plan.monthly : plan.yearly}
                    </span>
                  </div>
                </div>

                <GetStartedButton />

                <div className="border-t border-zinc-800 mb-4"></div>

                <div className="text-sm text-left">
                  <p className="font-semibold mb-4 text-white">What You Get:</p>
                  <ul className="space-y-4 text-sm text-gray-300">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 mt-1.5"></span>
                        <div className="flex-1">
                          {feature.includes("(") ? (
                            <>
                              <span className="text-white text-sm">
                                {feature.split("(")[0].trim()}
                              </span>
                              <span className="text-gray-400 text-xs block mt-1">
                                ({feature.split("(")[1]}
                              </span>
                            </>
                          ) : (
                            <span className="text-white text-sm">
                              {feature}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Add-On Section */}
          <div className="mt-20 max-w-4xl mx-auto text-left">
             <h2 className="text-3xl font-bold mb-10 text-center">Customize Your Plan With Add-Ons</h2>
             
             {/* Image Generation Add-On */}
             <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 border-b border-zinc-800">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">Image Generation</h3>
                <p className="text-gray-400 mb-3">₹1,000 / Add-On</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">✔</span>
                    20 High-Resolution Edited Images
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">✔</span>
                    10 Images Per Product
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">✔</span>
                    Ultra-Realistic Enhancements & Refinements
                  </li>
                </ul>
              </div>
              <button className="mt-4 md:mt-0 md:ml-6 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition whitespace-nowrap">
                Add On
              </button>
            </div>

            {/* Video Generation Add-On */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">Video Generation</h3>
                <p className="text-gray-400 mb-3">₹2,500 / Add-On</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">✔</span>5
                    High-Quality Edited Videos
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">✔</span>
                    30-60 Seconds Duration
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 flex-shrink-0">✔</span>
                    Ultra-Realistic Enhancements & Refinements
                  </li>
                </ul>
              </div>
              <button className="mt-4 md:mt-0 md:ml-6 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition whitespace-nowrap">
                Add On
              </button>
            </div>
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-lg font-semibold mb-4">
            Quality Commitment (Applies to All Plans)
          </h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 flex-shrink-0">✔</span>
              Ultra-Realistic Output
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 flex-shrink-0">✔</span>
              High Resolution Delivery
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 flex-shrink-0">✔</span>
              Commercial-Ready Assets
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 flex-shrink-0">✔</span>
              Fully Managed Production Team
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}