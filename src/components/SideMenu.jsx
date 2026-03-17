import { FiChevronRight } from "react-icons/fi";
import { ArrowRight } from "lucide-react";

const SideMenu = ({
  className = "",
  items = [],
  variant = "landing",
  onSelectItem,
  logoSrc,
}) => {
  if (!items.length) return null;

  if (variant === "login") {
    return (
      <nav className={className}>
        {items.map((item) => (
          <button
            key={item}
            className="group flex items-center justify-between py-3 px-0 bg-transparent border-none text-white/80 cursor-pointer transition-all duration-200 text-left w-full text-sm hover:text-white hover:translate-x-1"
            type="button"
            onClick={() => onSelectItem && onSelectItem(item)}
          >
            <span>{item}</span>
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
          </button>
        ))}
      </nav>
    );
  }

  return (
    <aside className={`flex flex-col ${className}`}>
      {/* Logo Section - Hidden on Mobile, Visible from Tablet (md) and up */}
      {logoSrc && (
        <div className="hidden md:flex justify-center p-4 w-full">
          <img
            src={logoSrc}
            alt="Logo"
            className="max-w-[150px] h-auto mx-auto"
          />
        </div>
      )}
      
      <nav className="flex flex-col gap-2">
        {items.map((item) => (
          <button
            key={item}
            className="group flex items-center justify-between px-4 py-3 bg-transparent border-none text-white/80 cursor-pointer transition-all duration-200 text-left w-full hover:bg-white/5 hover:text-white hover:translate-x-1"
            type="button"
            onClick={() => onSelectItem && onSelectItem(item)}
          >
            <span className="text-sm font-medium">{item}</span>
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SideMenu;