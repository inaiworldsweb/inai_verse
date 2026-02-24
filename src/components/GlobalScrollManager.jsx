import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GlobalScrollManager = ({ children }) => {
    const lenisRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothHover: true,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        function update(time) {
            lenis.raf(time * 1000);
        }

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        lenis.on('scroll', ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                return arguments.length ? lenis.scrollTo(value, { immediate: true }) : lenis.scroll;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
        });

        return () => {
            gsap.ticker.remove(update);
            lenis.destroy();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    // Handle Route Changes
    useEffect(() => {
        if (!lenisRef.current) return;

        // 1. Immediate scroll to top
        lenisRef.current.scrollTo(0, { immediate: true });


        const refresh = () => {
            lenisRef.current.resize();
            ScrollTrigger.refresh();
        };

        refresh(); // Immediate

        const timer1 = setTimeout(refresh, 100);
        const timer2 = setTimeout(refresh, 500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [location.pathname]);

    return <>{children}</>;
};

export default GlobalScrollManager;
