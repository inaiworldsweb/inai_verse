import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);


const useMiraaiAnimation = (servicesData = []) => {
    const consoleRef = useRef(null);
    const previewRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        const containerEl = containerRef.current;
        const consoleEl = consoleRef.current;
        const previewEl = previewRef.current;

        if (!containerEl || !consoleEl || !previewEl) return;

        const titleTextEl = consoleEl.querySelector('.title-text');
        const titleCursorEl = consoleEl.querySelector('.title-cursor');
        const descTextEl = consoleEl.querySelector('.desc-text');
        const descPillEl = consoleEl.querySelector('.desc-pill');
        const progressContainer = consoleEl.querySelector('.progress-container');
        const progressFill = consoleEl.querySelector('.progress-fill');
        const statusContainer = consoleEl.querySelector('.status-container');

        const consoleIcons = [
            consoleEl.querySelector('.icon-0'),
            consoleEl.querySelector('.icon-1'),
            consoleEl.querySelector('.icon-2'),
            consoleEl.querySelector('.icon-3'),
            consoleEl.querySelector('.icon-4'),
        ];

        const previewIcons = [
            previewEl.querySelector('.icon-0'),
            previewEl.querySelector('.icon-1'),
            previewEl.querySelector('.icon-2'),
            previewEl.querySelector('.icon-3'),
            previewEl.querySelector('.icon-4'),
        ];

        const serviceImages = previewEl.querySelectorAll('.service-image');

        if (!titleTextEl || !titleCursorEl || !descTextEl || !descPillEl || !progressContainer || !progressFill || !statusContainer) return;

        const services = Array.isArray(servicesData) ? servicesData : [];
        if (!services.length) return;

        // --- INITIAL STATE SETUP ---
        gsap.set([progressContainer, statusContainer, descPillEl], { opacity: 0 });
        gsap.set(progressFill, { scaleX: 0, transformOrigin: "left center" });
        gsap.set([titleTextEl, descTextEl], { text: '' });
        gsap.set(titleCursorEl, { opacity: 0 });
        gsap.set([descTextEl, titleTextEl, serviceImages], { willChange: "transform, opacity" });

        // Reset Tool Rail Icons
        [...consoleIcons, ...previewIcons].forEach((btn) => {
            if (btn) {
                gsap.set(btn, {
                    backgroundColor: '#2b2b2b',
                    borderColor: 'rgba(255,255,255,0.05)',
                    color: '#9ca3af',
                    boxShadow: '0 0 0 rgba(47, 124, 255, 0)',
                    force3D: true
                });
            }
        });

        if (serviceImages?.length) {
            gsap.set(serviceImages, { opacity: 0 });
            gsap.set(serviceImages[0], { opacity: 1 });
        }

        // --- MAIN TIMELINE ---
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerEl,
                start: 'top top',
                end: '+=6000',
                scrub: 1,
                pin: containerEl.querySelector('.miraai-pin'),
                anticipatePin: 1,
                pinSpacing: true,
                toggleActions: "play pause resume reverse", // Kill background CPU
            },
        });

        services.forEach((svc, i) => {
            const phaseStart = i * 20;

            // 1. Phase Reset
            tl.set([descPillEl, progressContainer, statusContainer], { opacity: 0 }, `${phaseStart}%`);
            tl.set([descTextEl, titleTextEl], { text: '' }, `${phaseStart}%`);
            tl.set(progressFill, { scaleX: 0 }, `${phaseStart}%`);

            // 2. Icon Transition
            const activeIcons = [consoleIcons[i], previewIcons[i]];
            const inactiveIcons = [
                ...consoleIcons.filter((_, idx) => idx !== i),
                ...previewIcons.filter((_, idx) => idx !== i)
            ];

            activeIcons.forEach(btn => {
                if (btn) {
                    tl.to(btn, {
                        backgroundColor: '#2f7cff',
                        borderColor: '#3b82f6',
                        color: '#ffffff',
                        boxShadow: '0 0 20px rgba(47, 124, 255, 0.4)',
                        duration: 0.3,
                        force3D: true
                    }, `${phaseStart}%`);
                }
            });

            inactiveIcons.forEach(btn => {
                if (btn) {
                    tl.to(btn, {
                        backgroundColor: '#2b2b2b',
                        borderColor: 'rgba(255,255,255,0.05)',
                        color: '#9ca3af',
                        boxShadow: '0 0 0 rgba(47, 124, 255, 0)',
                        duration: 0.3,
                        force3D: true
                    }, `${phaseStart}%`);
                }
            });

            // 3. Typing Title
            tl.set(titleCursorEl, { opacity: 1 }, `${phaseStart}%`);
            tl.to(titleTextEl, {
                text: svc.title,
                duration: 1,
                ease: 'none',
            }, `${phaseStart}%`);

            // 4. Show Description Pill
            tl.to(descPillEl, { opacity: 1, duration: 0.4 }, `${phaseStart + 5}%`);
            tl.to(descTextEl, {
                text: svc.description || '',
                duration: 0.8,
                ease: 'none'
            }, `${phaseStart + 5}%`);

            // 5. Progress Bar (Using scaleX for GPU performance)
            tl.to(progressContainer, { opacity: 1, duration: 0.2 }, `${phaseStart + 8}%`);
            tl.to(progressFill, {
                scaleX: 1,
                duration: 1.2,
                ease: 'power1.inOut',
                force3D: true
            }, `${phaseStart + 9}%`);
            tl.to(progressContainer, { opacity: 0, duration: 0.2 }, `${phaseStart + 14}%`);

            // 6. Status Badge
            tl.to(statusContainer, { opacity: 1, duration: 0.3 }, `${phaseStart + 14}%`);
            tl.to(statusContainer, { opacity: 0, duration: 0.3 }, `${phaseStart + 17}%`);

            // 7. Preview Image Swap
            if (serviceImages?.length) {
                tl.to(serviceImages, {
                    opacity: (idx) => (idx === i ? 1 : 0),
                    duration: 0.6,
                    ease: 'power2.inOut',
                    force3D: true
                }, `${phaseStart + 16}%`);
            }

            tl.to(titleCursorEl, { opacity: 0, duration: 0.2 }, `${phaseStart + 18}%`);
        });

    }, { dependencies: [servicesData], scope: containerRef });

    return { consoleRef, previewRef, containerRef };
};

export default useMiraaiAnimation;
