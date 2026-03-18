import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../../../assets/edInai_imgs/EdinaiKeyFeatureImg1.png";
import img2 from "../../../assets/edInai_imgs/EdinaiKeyFeatureImg2.png";
import img3 from "../../../assets/edInai_imgs/EdinaiKeyFeatureImg3.png";
import img4 from "../../../assets/edInai_imgs/EdinaiKeyFeatureImg4.png";
import img5 from "../../../assets/edInai_imgs/EdinaiKeyFeatureImg5.png";
import img6 from "../../../assets/edInai_imgs/EdinaiKeyFeatureImg6.png";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    number: "01",
    title: "Upload & Organize Curriculum",
    description: "Upload yearly plans, subjects, chapters, worksheets, assignments, and resources. The system converts them into structured learning modules automatically.",
    image: img1,
  },
  {
    id: 2,
    number: "02",
    title: "Schedule AI-Led Lectures",
    description: "Plan topics, timings, delivery mode, and batches. Ed-INAI handles notifications, recordings, and session flow.",
    image: img2,
  },
  {
    id: 3,
    number: "03",
    title: "Manage Students & Staff",
    description: "Create batches, onboard faculty, import students, and track attendance and participation. Each user gets a role-based interface.",
    image: img3,
  },
  {
    id: 4,
    number: "04",
    title: "Assign Roles & Permissions",
    description: "Define roles such as Owner, Principal, Academic Lead, Faculty, or Coordinator. Configure access rights for secure governance.",
    image: img4,
  },
  {
    id: 5,
    number: "05",
    title: "AI-Driven Analytics & Reports",
    description: "View engagement trends, attendance, assessments, and topic completion in real time. Use insights for academic improvement.",
    image: img5,
  },
  {
    id: 6,
    number: "06",
    title: "Automated Academic Operations",
    description: "Ed-INAI automates session flow, doubt handling, summaries, evaluations, and reminders — reducing manual workload.",
    image: img6,
  },
];

const EdinaiKeyFeature = ({ id }) => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Pinned Header
        ScrollTrigger.create({
          trigger: headerRef.current,
          start: "top 120px",
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });

        cardsRef.current.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: `top 280px`,
            endTrigger: containerRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
              if (index < cardsRef.current.length - 1) {
                gsap.set(card, {
                  scale: 1 - self.progress * 0.05,
                  opacity: 1 - self.progress * 0.5,
                });
              }
            },
          });
        });
      });

      mm.add("(max-width: 767px)", () => {
        cardsRef.current.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: `top 140px`,
            endTrigger: containerRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
              if (index < cardsRef.current.length - 1) {
                gsap.set(card, {
                  scale: 1 - self.progress * 0.03,
                  opacity: 1 - self.progress * 0.3,
                });
              }
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id={id}
      className="w-full bg-black py-9 md:py-12 px-4 md:px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center z-10 relative mb-12">
          <h1 className="h1 mb-3 text-white">Powerful Tools for Education Management</h1>
          <p className="h2 text-gray-400">Automate operations. Simplify administration. Enhance outcomes.</p>
        </div>

        {/* Cards Container */}
        <div className="relative flex flex-col items-center gap-[10vh] md:gap-32">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full rounded-[10px] md:rounded-[10px] border border-white/10 overflow-hidden bg-[#0c0c0c] will-change-transform"
              style={{ zIndex: index + 20 }}
            >
              <div className={`bg-gradient-to-br from-[#151515] to-black flex flex-col md:flex-row items-stretch min-h-[350px] md:h-[400px] ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`w-full md:w-[45%] p-5 md:p-8 lg:p-12 flex flex-col justify-center order-2 md:order-1`}>
                  <div className="inline-block w-fit px-4 py-1 mb-4 bg-white/5 border border-white/10 rounded-[10px]">
                    <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Feature {feature.number}</span>
                  </div>
                  <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">{feature.title}</h2>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{feature.description}</p>
                </div>

                {/* Spacing for Desktop */}
                <div className="hidden md:block md:w-[5%]" />

                {/* Image */}
                <div className="w-full md:w-[50%] relative overflow-hidden order-1 md:order-2 h-56 md:h-auto flex items-center justify-center">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-contain transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${index % 2 === 0 ? 'from-black/60' : 'to-black/60'} via-transparent pointer-events-none hidden md:block`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Spacer */}
        <div className="h-[30vh] md:h-[50vh]" />
      </div>
    </section>
  );
};

export default EdinaiKeyFeature;
