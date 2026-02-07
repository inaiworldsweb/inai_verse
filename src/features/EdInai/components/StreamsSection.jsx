import { useEffect, useRef } from 'react'

const streamRows = [
    {
        id: 'streams-top',
        items: ['Secondary Education', 'Higher Secondary', 'Science', 'Commerce'],
        direction: 'left',
        duration: 30,
    },
    {
        id: 'streams-middle',
        items: ['Arts & Humanities', 'Engineering', 'Medical Preparation'],
        direction: 'right',
        duration: 25,
    },
    {
        id: 'streams-bottom',
        items: ['Technology & Coding', 'Competitive Exams', 'Professional Upskilling', 'Language Learning'],
        direction: 'left',
        duration: 35,
    },
]

const StreamsSection = () => {
    const scrollRefs = useRef([])

    useEffect(() => {
        // Clone content for infinite scroll
        scrollRefs.current.forEach((ref) => {
            if (ref && ref.children.length === 1) {
                const originalContent = ref.children[0]
                const clone = originalContent.cloneNode(true)
                ref.appendChild(clone)
            }
        })

        // Pause on hover functionality
        const handleMouseEnter = () => {
            scrollRefs.current.forEach((ref) => {
                if (ref) {
                    ref.style.animationPlayState = 'paused'
                }
            })
        }

        const handleMouseLeave = () => {
            scrollRefs.current.forEach((ref) => {
                if (ref) {
                    ref.style.animationPlayState = 'running'
                }
            })
        }

        const streamTags = document.querySelectorAll('.stream-tag')
        streamTags.forEach((tag) => {
            tag.addEventListener('mouseenter', handleMouseEnter)
            tag.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            streamTags.forEach((tag) => {
                tag.removeEventListener('mouseenter', handleMouseEnter)
                tag.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <section className="py-10 md:py-16 bg-black" id="streams">
            <div className="max-w-[1200px] mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-center mb-10 md:mb-12 text-white animate-fade-in px-4">
                    Streams We Cover
                </h2>

                <div className="scroll-wrapper">
                    {streamRows.map(({ id, items, direction, duration }, index) => (
                        <div key={id} className="scroll-row">
                            <div
                                ref={(el) => (scrollRefs.current[index] = el)}
                                className={`scroll-content ${direction === 'right' ? 'scroll-right' : 'scroll-left'}`}
                                style={{
                                    animationDuration: `${duration}s`,
                                    '--animation-direction': direction === 'right' ? 'reverse' : 'normal'
                                }}
                            >
                                {items.map((label) => (
                                    <span
                                        key={label}
                                        className="stream-tag"
                                    >
                                        {label}
                                    </span>
                                ))}
                                {/* Duplicate for infinite scroll */}
                                {items.map((label) => (
                                    <span
                                        key={`${label}-duplicate`}
                                        className="stream-tag"
                                    >
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .scroll-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                    position: relative;
                    align-items: center;
                    justify-content: center;
                }

                .scroll-wrapper::before,
                .scroll-wrapper::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 150px;
                    z-index: 10;
                    pointer-events: none;
                }

                .scroll-wrapper::before {
                    left: 0;
                    background: linear-gradient(to right, #000 0%, transparent 100%);
                }

                .scroll-wrapper::after {
                    right: 0;
                    background: linear-gradient(to left, #000 0%, transparent 100%);
                }

                .scroll-row {
                    display: flex;
                    width: 100%;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }

                .scroll-content {
                    display: flex;
                    gap: 20px;
                    padding: 0 10px;
                    justify-content: flex-start;
                    align-items: center;
                    min-width: max-content;
                }

                .scroll-left {
                    animation: scroll-left 30s linear infinite;
                }

                .scroll-right {
                    animation: scroll-right 25s linear infinite;
                }

                .scroll-row:hover .scroll-content {
                    animation-play-state: paused;
                }

                .stream-tag {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1.5px solid rgba(255, 255, 255, 0.1);
                    color: #fff;
                    padding: 16px 32px;
                    border-radius: 50px;
                    font-size: 1rem;
                    font-weight: 500;
                    white-space: nowrap;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                    position: relative;
                    overflow: hidden;
                }

                .stream-tag:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.3);
                    transform: scale(1.05);
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
                }

                .stream-tag::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s;
                }

                .stream-tag:hover::before {
                    left: 100%;
                }

                @keyframes fade-in {
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 1s ease forwards;
                }

                @media (max-width: 768px) {
                    .stream-tag { 
                        padding: 12px 24px; 
                        font-size: 0.9rem;
                    }
                    .scroll-content {
                        gap: 15px;
                    }
                }

                @media (max-width: 480px) {
                    .scroll-content { 
                        animation-duration: 20s !important; 
                    }
                }
            `}</style>
        </section>
    )
}

export default StreamsSection

