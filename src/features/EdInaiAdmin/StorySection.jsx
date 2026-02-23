import React, { useState, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import rolesImg from "../../assets/final/Assign Roles & Permissions.png";
import analyticsImg from "../../assets/final/Access Analytics & Performance Reports.png";
import operationsImg from "../../assets/final/Smart automation for educational institute.png";

const storyItems = [
    {
        id: 1,
        title: "Assign Roles & Permissions",
        description:
            "Admins can define structured roles such as Owner, Principal, Academic Lead, Faculty, Coordinator, or custom positions. Each role can be configured with specific controls, ensuring data protection and smooth governance across departments.",
        image: rolesImg
    },
    {
        id: 2,
        title: "Access AI-Driven Analytics & Reports",
        description:
            "Get real-time insights on student performance, attendance patterns, and learning outcomes. AI-powered dashboards highlight trends and suggest interventions for at-risk learners.",
        image: analyticsImg
    },
    {
        id: 3,
        title: "Automated Academic Operations",
        description:
            "Automate routine tasks like attendance tracking, grade calculations, certificate generation, and parent communication. Save hours of administrative work each week.",
        image: operationsImg
    },
];

const AdminAnimationSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);
    const INTERVAL_TIME = 5000; // 5 seconds per item

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % storyItems.length);
        }, INTERVAL_TIME);

        return () => clearInterval(interval);
    }, [isInView, activeIndex]); // Resets interval when manual click occurs

    return (
        <section
            ref={sectionRef}
            className="bg-black text-white py-12 md:py-24 px-6 md:px-12 flex items-center overflow-hidden"
        >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-12">
                    <SectionHeading
                        title="Expert intelligence "
                        subtitle="for everyone."
                        className="mb-8 md:mb-16"
                    />

                    <div className="space-y-10 relative">
                        {storyItems.map((item, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <div
                                    key={item.id}
                                    className="relative pl-0 group cursor-pointer"
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {/* PROGRESS LINE BASE */}
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-neutral-800" />

                                    <div className="pt-6 space-y-4">
                                        {/* THE MOVING LINE (TIMER) */}
                                        <div
                                            key={`${index}-${isActive}`} // Key forces a clean restart of the transition
                                            className="absolute top-0 left-0 h-[2px] bg-white transition-all ease-linear"
                                            style={{
                                                width: isActive ? "100%" : "0%",
                                                transitionDuration: isActive ? `${INTERVAL_TIME}ms` : "0ms",
                                                opacity: isActive ? 1 : 0
                                            }}
                                        />

                                        <h3
                                            className={`text-[15px] md:text-[25px] font-bold transition-all duration-500 ease-out ${isActive ? "text-white translate-x-2" : "text-neutral-600 hover:text-neutral-400"
                                                }`}
                                        >
                                            {item.title}
                                        </h3>

                                        {/* DESCRIPTION LOAD ANIMATION */}
                                        <div
                                            className={`grid transition-all duration-500 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="text-neutral-400 text-[10px] md:text-[15px] leading-relaxed max-w-lg pt-2 pb-4">
                                                    {item.description}
                                                </p>

                                                {/* MOBILE IMAGE - ONLY VISIBLE ON MOBILE */}
                                                <div className="lg:hidden mt-4 rounded-2xl overflow-hidden border border-white/5 bg-neutral-900 shadow-xl aspect-video relative">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover p-2"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        {/* BOTTOM BORDER FOR LAST ITEM */}
                        <div className="absolute bottom-[-40px] left-0 w-full h-[1px] bg-neutral-800" />
                    </div>
                </div>

                {/* RIGHT VISUALS - HIDDEN ON MOBILE */}
                <div className="hidden lg:block relative h-[400px] md:h-[600px] w-full max-w-[700px] mx-auto">
                    {/* ACCENT GLOW */}
                    <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-[100px] opacity-50" />

                    <div className="relative h-full w-full rounded-[2.5rem] bg-neutral-900 border border-white/5 overflow-hidden shadow-2xl">
                        {storyItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out
                                    ${index === activeIndex
                                        ? "opacity-100 scale-100 translate-y-0"
                                        : "opacity-0 scale-110 translate-y-10"
                                    }
                                `}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover p-4 md:p-8 rounded-[3rem]"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AdminAnimationSection;