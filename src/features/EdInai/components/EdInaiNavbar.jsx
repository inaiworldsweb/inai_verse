import { useNavigate } from 'react-router-dom';
import logo from "../../../assets/EdInai Logo.png";

const EdInaiNavbar = ({
  breadcrumbs = [],
  showLogo = true,
  logoSrc = logo,
  logoAlt = 'EdInai logo',
  logoClassName = 'h-[34px] md:h-[44px] w-auto object-contain',
  showPriceButton = true,
  showHomeButton = true,
  showMenuButton = true,
  onPriceClick,
  onMenuClick,
  onLogoClick,
  showBorder = true,
  headerClassName = 'bg-black/80 backdrop-blur-md',
}) => {
  const navigate = useNavigate();

  // Unified Click Handler
  const handleClick = (defaultPath, customHandler) => {
    if (customHandler) customHandler();
    else navigate(defaultPath);
  };

  return (
    <header className={`sticky top-0 z-50 flex items-center justify-between px-6 py-3 transition-all ${headerClassName} ${showBorder ? 'border-b border-white/10' : ''}`}>
      
      {/* LEFT: Logo & Breadcrumbs */}
      <div className="flex items-center gap-3">
        {showLogo && (
          <img
            src={logoSrc}
            alt={logoAlt}
            className={`${logoClassName} cursor-pointer hover:opacity-80 active:scale-95 transition-all`}
            // onClick={() => handleClick('/EdInaiPage', onLogoClick)}
          />
        )}

        {breadcrumbs.length > 0 && (
          <nav className="hidden sm:flex items-center gap-1" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <div key={i} className="flex items-center">
                <span className="text-white/30 text-xl font-light px-1">/</span>
                <button
                  onClick={crumb.onClick}
                  className="text-white/60 text-sm hover:text-white transition-colors tracking-[0.5px]"
                >
                  {crumb.label}
                </button>
              </div>
            ))}
          </nav>
        )}
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-5">
        {showPriceButton && (
          <button
            onClick={() => handleClick('/pricing', onPriceClick)}
            className="bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 px-5 py-1.5 rounded-full text-sm font-semibold tracking-[1px] transition-all active:scale-95 shadow-sm"
          >
            Price
          </button>
        )}

        {showHomeButton && (
          <button 
            onClick={() => navigate('/')} 
            className="text-white/80 hover:text-white transition-transform active:scale-90"
            aria-label="Home"
          >
            <HomeIcon />
          </button>
        )}

        {showMenuButton && (
          <button 
            onClick={onMenuClick} 
            className="text-white/80 hover:text-white transition-transform active:scale-90"
            aria-label="Menu"
          >
            <MenuIcon />
          </button>
        )}
      </div>
    </header>
  );
};

// --- Sub-components for cleaner JSX ---
const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export default EdInaiNavbar;