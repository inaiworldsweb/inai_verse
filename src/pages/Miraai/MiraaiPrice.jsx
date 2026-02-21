import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import logoImage from "../../assets/Inai Verse White Tred mark (1).png";

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Regal Vibes",
      monthlyBestFor: "Small Brands, Product Walls, And Startup Channels",
      annualBestFor: "Small Brands, Fashion Sub, And Startup Channels",
      oldMonthly: "₹ 5,749",
      monthlyValue: "4,999",
      yearlyValue: "4,000",
      tag: "13% OFF",
      monthlyFeatures: [
        "150 AI-Generated Images (High-Resolution & Ultra-Realistic)",
        "3 Images Per Product (Multiple Angles & Styles)",
        "1 Professional Product Catalogue",
        "1 AI-Generated Video (Complimentary)",
      ],
      annualFeatures: [
        "100 AI-Generated Images (High Resolution & Ultra-Realistic)",
        "3 Images Per Product (Multiple Angles & Styles)",
        "1 Professional Product Catalogue",
        "1 AI-Generated Video (Complimentary)",
      ],
    },
    {
      name: "Heritage Vibes",
      monthlyBestFor: "Growing Brands & Digital Marketing Campaigns",
      annualBestFor: "Growing fashion stores and starting campaigns",
      oldMonthly: "₹ 24,499",
      monthlyValue: "19,999",
      yearlyValue: "15,999",
      popular: true,
      tag: "20% OFF",
      monthlyFeatures: [
        "10 AI-Generated Videos",
        "30 Images Per Videos (3 Images Per Video)",
        "20 Product Images (5 Images Per Product)",
        "Total: 150 Ultra-Realistic Images",
        "2 Professional Product Catalogues",
        "Digital Barcode Integration For Catalogues",
      ],
      annualFeatures: [
        "12 AI-Generated Videos",
        "50 Images Per Videos (2 Images Per Video)",
        "20 Product Images (10 Images Per Product)",
        "Total - 350 Ultra-Realistic Images",
        "2 Professional Product Catalogues",
        "Digital barcode integration For Catalogues",
      ],
    },
    {
      name: "Imperial vibe",
      monthlyBestFor: "Scaling Brands & Performance",
      annualBestFor: "Elite brands and high-level campaigns",
      oldMonthly: "₹ 38,499",
      monthlyValue: "30,000",
      yearlyValue: "23,999",
      tag: "22% OFF",
      monthlyFeatures: [
        "20 AI-Generated Videos",
        "50 Images Per Videos (5 Images Per Video)",
        "20 Product Images (5 Images Per Product)",
        "Total: 200 Ultra-Realistic Images",
        "3 Professional Product Catalogues",
        "Digital Barcode Integration For Catalogues",
      ],
      annualFeatures: [
        "25 AI-Generated Videos",
        "150 Images Per Videos (3 Images Per Video)",
        "35 Product Images (15 Images Per Product)",
        "Total - 1000 Ultra-Realistic Images",
        "3 Professional Product Catalogues",
        "Digital barcode integration For Catalogues",
      ],
    },
    {
      name: "Prestige vibe",
      monthlyBestFor: "Established Businesses Looking For High-Impact Creatives",
      annualBestFor: "Global brands and marketing premium campaigns",
      oldMonthly: "₹ 47,399",
      monthlyValue: "36,000",
      yearlyValue: "28,799",
      tag: "24% OFF",
      monthlyFeatures: [
        "30 AI-Generated Videos",
        "90 Images For Videos (3 Images Per Video)",
        "20 Product Images (5 Images Per Product)",
        "Total: 250 Ultra-Realistic Images",
        "4 Professional Product Catalogues",
        "Digital Barcode Integration For Catalogues",
      ],
      annualFeatures: [
        "30 AI-Generated Videos",
        "350 Images Per Videos (1 Image Per Video)",
        "40 Product Images (10 Images Per Product)",
        "Total - 1500 Ultra-Realistic Images",
        "4 Professional Product Catalogues",
        "Digital Barcode Integration For Catalogues",
      ],
    },
    {
      name: "Luxury Vibes",
      monthlyBestFor: "Premium Brands, Large Campaigns & Scale-Ready Businesses",
      annualBestFor: "Premium luxury brands and elite high budget brands",
      oldMonthly: "₹ 67,499",
      monthlyValue: "49,999",
      yearlyValue: "39,999",
      tag: "25% OFF",
      monthlyFeatures: [
        "45 AI-Generated Videos",
        "225 Images For Videos (5 Images Per Video)",
        "15 Product Images (5 Images Per Product)",
        "Total: 300 Ultra-Realistic Images",
        "5 Professional Product Catalogues",
        "Digital Barcode Integration For Catalogues",
      ],
      annualFeatures: [
        "45 AI-Generated Videos",
        "500 Images Per Videos (2 Images Per Video)",
        "15 Product Images (5 Images Per Product)",
        "Total - 2500 Ultra-Realistic Images",
        "5 Professional Product Catalogues",
        "Digital barcode integration For Catalogues",
      ],
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
        showBorder={false}
        headerClassName="py-12 px-8 md:py-16 md:px-12"
        logoClassName="h-[50px] md:h-[75px] w-auto max-w-[280px] object-contain"
        homeIconClassName="w-8 h-8 md:w-10 md:h-10"
        menuIconClassName="w-8 h-8 md:w-10 md:h-10"
      />
      <div className="max-w-6xl mx-auto pt-32 pb-16 px-4">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold">
            AI-Powered Creative Production Services
          </h1>
          <p className="text-zinc-500 mt-4 max-w-2xl mx-auto text-sm">
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
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.slice(0, 3).map((plan, index) => (
              <PricingCard key={index} plan={plan} billing={billing} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto items-stretch">
            {plans.slice(3, 5).map((plan, index) => (
              <PricingCard key={index + 3} plan={plan} billing={billing} />
            ))}
          </div>
        </div>

        {/* Add-On Section */}
        <div className="mt-20 space-y-6">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex-1">
              <h3 className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Image Generation</h3>
              <p className="text-2xl font-semibold mt-1">₹1,000 / Add-On</p>
              <div className="flex items-center gap-2 mt-2 text-zinc-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
                Best for Branding/Social Media
              </div>
            </div>
            <div className="flex-1 mt-4 md:mt-0 md:px-8 border-l border-zinc-800">
              <ul className="text-sm text-zinc-400 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                  40 High-Resolution AI-Generated Images
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                  (10 Images Per Product)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                  Ultra-Realistic Enhancements & Refinements
                </li>
              </ul>
            </div>
            <button className="mt-6 md:mt-0 bg-white text-black px-8 py-2.5 rounded-lg font-bold hover:bg-zinc-200 transition">
              Add On
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex-1">
              <h3 className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Video Generation</h3>
              <p className="text-2xl font-semibold mt-1">₹2,500 / Add-On</p>
              <div className="flex items-center gap-2 mt-2 text-zinc-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
                Best for Ad/Video Campaigns/Promotion/Social Media
              </div>
            </div>
            <div className="flex-1 mt-4 md:mt-0 md:px-8 border-l border-zinc-800">
              <ul className="text-sm text-zinc-400 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                  1 AI-Generated Video & 10 Images
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                  Ultra-Realistic Visuals With A Premium Finish
                </li>
              </ul>
            </div>
            <button className="mt-6 md:mt-0 bg-white text-black px-8 py-2.5 rounded-lg font-bold hover:bg-zinc-200 transition">
              Add On
            </button>
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-10">
          <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">
            Quality Commitment (Applies to All Plans)
          </h2>
          <div className="space-y-4">
            {[
              "Ultra-Realistic Visuals",
              "High-Resolution Outputs",
              "Commercial-Ready Assets",
              "AI-Powered Production With Professional Creative Oversight",
              "Fully Managed Execution By The Verse Team"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-zinc-500 shrink-0"></span>
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function PricingCard({ plan, billing }) {
  const isPopular = plan.popular;

  return (
    <div
      className={`group relative rounded-[32px] transition-all duration-300 flex flex-col h-full ${isPopular
        ? "p-[6px] bg-white scale-[1.05] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] z-10"
        : "p-[1px] bg-zinc-800 shadow-lg hover:p-[2px] hover:bg-white hover:scale-[1.02] hover:z-20"
        }`}
    >
      <div className="relative bg-[#080808] rounded-[26px] h-full flex flex-col overflow-hidden">
        {isPopular && (
          <div className="bg-white text-black py-3 text-center text-[12px] font-extrabold uppercase tracking-[0.2em] border-b border-black/5">
            Most Popular
          </div>
        )}

        <div className="p-8 pb-10 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-[26px] font-bold tracking-tight text-white leading-tight">
              {plan.name}
            </h2>
            {plan.tag && (
              <div className="bg-white text-black text-[10px] font-black px-2.5 py-1 rounded-[6px] uppercase tracking-tighter">
                {plan.tag}
              </div>
            )}
          </div>

          <div className="mb-10">
            <p className="text-[14px] font-bold text-white mb-0.5">Best For:</p>
            <p className="text-[12px] text-zinc-500 leading-snug">
              {billing === "monthly" ? plan.monthlyBestFor : plan.annualBestFor}
            </p>
          </div>

          <div className="flex justify-between items-center mb-10 gap-4">
            <div className="flex flex-col">
              <p className="line-through text-zinc-700 text-[14px] font-medium mb-0.5 ml-1">
                {plan.oldMonthly}
              </p>
              <div className="flex items-center">
                <span className="text-[22px] font-normal text-zinc-400 mr-1 mt-1">₹</span>
                <span className="text-[36px] font-extrabold tracking-tighter text-white">
                  {billing === "monthly" ? plan.monthlyValue : plan.yearlyValue}
                </span>
                <span className="text-[13px] text-zinc-500 self-end mb-2 ml-0.5">
                  /{billing === "monthly" ? "month" : "month*"}
                </span>
              </div>
            </div>
            <button className="bg-transparent border border-zinc-700 text-zinc-200 px-6 py-2.5 rounded-full text-[13px] font-bold hover:border-zinc-400 hover:text-white transition-all whitespace-nowrap">
              Get Started
            </button>
          </div>

          {billing === "yearly" && (
            <p className="text-[10px] text-zinc-600 -mt-8 mb-8 italic">*Billed Annually</p>
          )}

          <div className="flex-1">
            <p className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-6">What You Get:</p>
            <ul className="space-y-4">
              {(billing === "monthly" ? plan.monthlyFeatures : plan.annualFeatures).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <div className="w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <div className="w-[6px] h-[6px] rounded-full bg-black" />
                  </div>
                  <span className="text-[13px] text-zinc-400 font-semibold leading-tight tracking-tight">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
