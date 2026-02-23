import React, { useEffect, useRef, useState } from "react";

const SectionHeading = ({ title, subtitle, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div ref={ref} className={`mb-12 ${className}`}>
            <h2 className={`text-[25px] md:text-[40px] font-bold tracking-tight leading-tight transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}>
                {title}
                {subtitle && (
                    <span className="block text-neutral-500">{subtitle}</span>
                )}
            </h2>
        </div>
    );
};

export default SectionHeading;