import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * GlobalScrollManager - The "Heartbeat" of site performance
 * 
 * Responsibilities:
 * 1. Initialize Lenis Smooth Scroll.
 * 2. Synchronize GSAP's ticker with Lenis's RAF.
 * 3. Register ScrollTrigger and handle window resize events.
 * 4. Provide a unified scroll experience across all routes.
 */
const GlobalScrollManager = ({ children }) => {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Register GSAP Plugins
        gsap.registerPlugin(ScrollTrigger);

        // 1. Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard expo easing
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothHover: true,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        // 2. Synchronize GSAP Ticker with Lenis RAF
        // This ensures both libraries are firing on the same frame, reducing jitter.
        function update(time) {
            lenis.raf(time * 1000);
        }

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        // 3. Connect ScrollTrigger to Lenis
        lenis.on('scroll', ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                return arguments.length ? lenis.scrollTo(value, { immediate: true }) : lenis.scroll;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
        });

        // 4. Cleanup on Unmount
        return () => {
            gsap.ticker.remove(update);
            lenis.destroy();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return <>{children}</>;
};

export default GlobalScrollManager;
