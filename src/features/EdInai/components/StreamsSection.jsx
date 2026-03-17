import { useRef } from "react";

const streamRows = [
  {
    id: "streams-top",
    items: ["Secondary Education", "Higher Secondary", "Science", "Commerce"],
    direction: "left",
    duration: 30,
  },
  {
    id: "streams-middle",
    items: ["Arts & Humanities", "Engineering", "Medical Preparation"],
    direction: "right",
    duration: 25,
  },
  {
    id: "streams-bottom",
    items: [
      "Technology & Coding",
      "Competitive Exams",
      "Professional Upskilling",
      "Language Learning",
    ],
    direction: "left",
    duration: 35,
  },
];

const StreamsSection = () => {
 
  const REPEAT_COUNT = 6;

  return (
    <section className="py-9 md:py-12 bg-black" id="streams">
      <div className="max-w-6xl mx-auto">
        <h1 className="h1 text-center mb-10 md:mb-12 text-white animate-fade-in px-4 capitalize tracking-tight">
          Streams We Cover
        </h1>

        <div className="scroll-wrapper">
          {streamRows.map(({ id, items, direction, duration }) => (
            <div key={id} className="scroll-row">
              <div
                className={`scroll-track ${direction === "right" ? "scroll-right" : "scroll-left"}`}
                style={{
                
                  animationDuration: `${duration * REPEAT_COUNT}s`,
                }}
              >
                {/* Segment 1 */}
                <div className="scroll-segment">
                  {Array.from({ length: REPEAT_COUNT }).map((_, i) =>
                    items.map((label, j) => (
                      <span key={`seg1-${i}-${j}`} className="stream-tag">
                        {label}
                      </span>
                    )),
                  )}
                </div>
                {/* Segment 2 (Duplicate for seamless loop) */}
                <div className="scroll-segment">
                  {Array.from({ length: REPEAT_COUNT }).map((_, i) =>
                    items.map((label, j) => (
                      <span key={`seg2-${i}-${j}`} className="stream-tag">
                        {label}
                      </span>
                    )),
                  )}
                </div>
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
          overflow: hidden; /* Hide overflow from the wrapper/rows */
          width: 100%;
        }

        .scroll-wrapper::before,
        .scroll-wrapper::after {
          content: "";
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
          overflow: hidden;
          /* Mask for cleaner edges if gradient isn't enough */
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .scroll-track {
          display: flex;
          width: max-content; /* Allow it to be as wide as needed */
          /* Gap between the two segments */
          /* We put gap inside segments, but need gap between seg 1 end and seg 2 start? 
                       Actually flex gap handles it if we put gap on track? No, standard seamless puts two blocks together.
                       If segments have internal gap/padding, it works.
                    */
        }

        .scroll-segment {
          display: flex;
          gap: 20px; /* Gap between items */
          padding-right: 20px; /* Gap between segments (matches item gap) */
          align-items: center;
          flex-shrink: 0;
        }

        .scroll-left {
          animation: scroll-left linear infinite;
        }

        .scroll-right {
          animation: scroll-right linear infinite;
        }

        .scroll-row:hover .scroll-track {
          animation-play-state: paused;
        }

        .stream-tag {
          background: rgba(255, 255, 255, 0.03);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          padding: 10px 32px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 500;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          user-select: none;
          text-transform: capitalize;
          letter-spacing: 0.025em;
        }

        .stream-tag:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .stream-tag::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
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
            transform: translateX(
              -50%
            ); /* Move half the total width (one segment width) */
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%); /* Start from -50% */
          }
          100% {
            transform: translateX(0); /* Move to 0 */
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
          .scroll-segment {
            gap: 15px;
            padding-right: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default StreamsSection;
