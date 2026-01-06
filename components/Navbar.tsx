
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-3 sm:py-4 ${isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
          >
            <img 
              src="https://res.cloudinary.com/djwiyyxkm/image/upload/v1767700942/creators_hook_2_kuiltt.png" 
              alt="Creators Hook Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <span className="text-lg sm:text-xl font-black tracking-tighter transition-all duration-500 text-black group-hover:text-blue-600">
              CREATORS HOOK
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-10 font-bold text-xs uppercase tracking-widest">
            {menuItems.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                className="transition-colors relative group font-black text-[#0f172a] hover:text-blue-600"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="#contact" 
              className="hidden sm:block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-xs font-bold hover:shadow-xl hover:bg-blue-700 transition-all transform active:scale-95 shadow-lg shadow-blue-500/20"
            >
              BOOK A CALL
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 focus:outline-none text-[#0f172a]"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-white transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {menuItems.map(item => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={handleLinkClick}
              className="text-3xl font-black text-[#0f172a] hover:text-blue-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={handleLinkClick}
            className="w-full text-center bg-blue-600 text-white px-8 py-5 rounded-3xl text-lg font-black shadow-xl"
          >
            BOOK A CALL
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
