import { Link } from "react-router-dom";
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

const StudentFooter = () => {
  // Shared class for all links to ensure they look exactly the same
  const linkClassName =
    "group flex items-center gap-2 text-[#ccc] text-[15px] transition-all duration-200 hover:text-white hover:translate-x-1";

  return (
    <footer className="bg-dark-card py-12 border-t border-white/10 w-full">
      <div className="w-full max-w-350 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {productSections.map(({ title, items }) => (
            <section
              key={title}
              className="flex flex-col items-start text-left w-full"
            >
              <h3 className="text-[22px] font-semibold mb-5 text-white ml-6">
                {title}
              </h3>
              <ul className="flex flex-col items-start gap-3">
                {items.map((item, idx) => {
                  const label = typeof item === "string" ? item : item.label;
                  const href = typeof item === "object" ? item.link : "#";
                  const isExternal = href.startsWith("http");

                  return (
                    <li key={idx}>
                      {isExternal ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClassName}
                        >
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                          <span>{label}</span>
                        </a>
                      ) : (
                        <Link to={href} className={linkClassName}>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                          <span>{label}</span>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        {/* Copyright Section */}
        {/* <div className="border-t  border-white/10 pt-8">
          <div className="text-center text-[#ccc] text-sm">
            <p>&copy; 2024 Ed-INAI. All rights reserved.</p>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default StudentFooter;
