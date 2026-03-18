import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const productSections = [
  {
    title: "Inaiworld",
    items: [
      { label: "Home", link: "https://inaiworlds.com/#/" },
      { label: "About", link: "https://inaiworlds.com/#/about" },
      { label: "Blog", link: "https://inaiworlds.com/#/blog" },
      { label: "Team", link: "https://inaiworlds.com/#/team" },
      { label: "Career", link: "https://career.inaiworlds.com/" },
    ],
  },
  {
    title: "edInai",
    items: [
      { label: "Overview", link: "/overview" },
      { label: "Features", link: "/features" },
      { label: "Pricing", link: "/pricing" },
      { label: "Faculty tools", link: "/faculty-tools" },
      { label: "Student portal", link: "/student-portal" },
    ],
  },
  {
    title: "Miraai",
    items: [],
  },
  {
    title: "Vantage AI",
    items: [],
  },
];

const EdinaiSiteFooter = () => {
  const linkClassName =
    "group flex items-center gap-2 text-[#ccc] text-[15px] transition-all duration-200 hover:text-white hover:translate-x-1";

  return (
    <footer className="bg-[#0a0a0a] py-12 border-t border-white/10">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {productSections.map(({ title, items }) => (
            <section
              key={title}
              className="flex flex-col items-start text-left w-full"
            >
              <h2 className="!text-[22px] !font-semibold mb-5 ml-6 text-white">
                {title}
              </h2>
              <ul className="flex flex-col items-start gap-3">
                {items.map((item, idx) => (
                  <li key={idx}>
                    {item.link.startsWith("http") ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClassName}
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                        <span>{item.label}</span>
                      </a>
                    ) : (
                      <Link to={item.link} className={linkClassName}>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>


      </div>
    </footer>
  );
};

export default EdinaiSiteFooter;
