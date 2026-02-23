import { useState, useEffect, useRef } from "react";
import SideMenu from "../../components/SideMenu";
import { HiChevronRight, HiMenu, HiX, HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import liveLecturesImg from "../../assets/final/Attend Live & Recorded Lectures.png";
import trackProgressImg from "../../assets/final/Smart dashboard and real time feedback.png";
import aboutImg from "../../assets/final/Future-Ready Education.jfif";
import logoImage from "../../assets/Inai Verse White Tred mark (1).png";
import FeatureScroll from "./FeatureScroll";
import DualImageSection from "./DualImageSection";

const carouselSlides = [
  {
    title: "Attend Live & Recorded Lectures",
    description:
      "Students can join scheduled sessions or revisit recordings with clear explanations, visuals, and concept breakdowns — ideal for reinforcement or missed classes. ",
    image: liveLecturesImg,
  },
];

const menuItems = ["Student view", "Track Progress with Visual Dashboards"];

const EdInaiStudentPage = () => {
  const navigate = useNavigate();
  const mainRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSideMenuClick = (item) => {
    const sectionMap = {
      "Student view": "student-view",
      "Track Progress with Visual Dashboards": "track-progress",
    };

    const sectionId = sectionMap[item];
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-screen w-full bg-black text-white overflow-hidden">
      
      {/* Sidebar */}
      <div className="hidden lg:block w-64 bg-black border-r border-gray-800 flex-shrink-0">
        <SideMenu
          items={menuItems}
          logoSrc={logoImage}
          onSelectItem={handleSideMenuClick}
        />
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <aside
            className="w-64 h-full bg-black border-r border-gray-800 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white"
              >
                <HiX size={24} />
              </button>
            </div>
            <SideMenu
              items={menuItems}
              logoSrc={logoImage}
              onSelectItem={handleSideMenuClick}
            />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main ref={mainRef} className="flex-1 overflow-y-auto relative">

        {/* TOP BAR */}
        <div className="sticky top-0 z-[100] bg-black/80 backdrop-blur-md border-b border-gray-800 px-6 py-4 flex items-start justify-between">
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-3 text-gray-300">
              <span onClick={() => navigate("/edinai")} className="cursor-pointer hover:text-white transition">Edinai</span>
              <HiChevronRight className="text-gray-500" />
              <span className="text-white font-medium">Inside the Ed-INAI Portal</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span onClick={() => navigate("/edinai-admin")} className="cursor-pointer hover:text-white transition">Admin view</span>
              <HiChevronRight className="text-gray-600" />
              <span className="text-white">Student view</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/edinai")} className="p-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"><HiHome /></button>
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition lg:hidden"><HiMenu /></button>
          </div>
        </div>

        <div className="px-4 md:px-8 pb-4 md:pb-8 pt-0">
          
          {/* About Section */}
          <section className="pt-4 pb-16 md:pb-24">
            <div className="max-w-5xl mx-auto text-center">
              <div className="mb-12">
                <div className="relative group block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl opacity-60"></div>

                  {/* ❌ Removed rounded from wrapper */}
                  <div className="relative bg-black">
                    {/* ✅ Rounded only on image */}
                    <img
                      src={aboutImg}
                      alt="Ed-INAI"
                      className="w-full min-h-[260px] md:h-[500px] object-cover rounded-[32px] border border-white/20"
                    />
                  </div>
                </div>
              </div>

              <p className="text-[15px] md:text-[25px] text-white leading-relaxed max-w-5xl mx-auto">
                The Student View is designed for easy navigation, interactive study, and self-paced growth.
                Each learner receives guidance based on their progress pattern and preferred learning style.
              </p>
            </div>
          </section>

          {/* Student View Section */}
          <section id="student-view" className="py-16">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-[25px] md:text-[40px] font-bold mb-6">Student view</h2>

              <div className="bg-[#191919] rounded-[40px] border border-white/10 px-12 py-14">
                <h3 className="text-[25px] md:text-[40px] font-semibold mb-4">
                  {carouselSlides[currentSlide].title}
                </h3>

                <p className="text-[15px] md:text-[25px] text-gray-100">
                  {carouselSlides[currentSlide].description}
                </p>

                {/* ❌ Removed rounded from wrapper */}
                <div className="mt-10">
                  {/* ✅ Rounded on image only */}
                  <img
                    src={carouselSlides[currentSlide].image}
                    alt=""
                    className="w-full min-h-[260px] md:h-[420px] object-cover  rounded-[24px] border border-white/10"
                  />
                </div>
              </div>
            </div>
          </section>

          <FeatureScroll scrollContainer={mainRef} />

          {/* Track Progress Section */}
          <section id="track-progress" className="py-16">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-25px md:text-[40px] font-bold mb-6">
                Track Progress with Visual Dashboards
              </h2>

              <div className="rounded-[40px] px-12 py-6">
                <p className="text-[15px] md:text-[25px] text-gray-100">
                  Personal progress boards show completed lessons, time spent, quiz outcomes,
                  weak areas, and recommended improvements to support strategic studying.
                </p>

                {/* ❌ Removed rounded from wrapper */}
                <div className="mt-10">
                  {/* ✅ Rounded only on image */}
                  <img
                    src={trackProgressImg}
                    alt="Track Progress"
                    className="w-full min-h-[260px] md:h-[420px] object-cover  rounded-[28px] border border-white/10"
                  />
                </div>
              </div>
            </div>
          </section>

          <DualImageSection />
        </div>
      </main>
    </div>
  );
};

export default EdInaiStudentPage;