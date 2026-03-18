import React, { useEffect, useRef } from 'react';

const ComingSoon = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas size
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        const particles = [];
        const particleCount = 280;

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 300;
                this.speed = 1 + Math.random();
                this.radius = Math.random() * 3;
                this.opacity = (Math.random() * 100) / 1000;
            }

            update() {
                this.y -= this.speed;
                if (this.y <= -10) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'lighter';

            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="relative w-full h-screen bg-[radial-gradient(circle,_#3e3c3c,_#000000)] overflow-hidden flex items-center justify-center">
            {/* Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-20 text-center text-white px-4 max-w-4xl">
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 uppercase italic">
                    Coming Soon
                </h1>

                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-[1px] bg-white w-24 md:w-40 opacity-50" />
                    <div className="flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <div className="h-[1px] bg-white w-24 md:w-40 opacity-50" />
                </div>

                <h3 className="font-light tracking-[0.2em] text-sm md:text-lg opacity-80 uppercase mb-8">
                    In development. Writing, drawing, developing...
                </h3>

                <a
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-white/90 hover:text-white transition-all duration-300 backdrop-blur-md group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:-translate-x-1"
                    >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-medium tracking-wide">Back to Home</span>
                </a>
            </div>

            <style jsx>{`
        h1 {
          font-family: 'Inter', sans-serif;
        }
        h3 {
          font-family: 'Inter', sans-serif;
        }   
      `}</style>
        </section>
    );
};

export default ComingSoon;