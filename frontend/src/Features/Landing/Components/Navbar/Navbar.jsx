import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Target } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", name: "Home", href: "#home" },
    {
      id: "features",
      name: "Features",
      href: "#features",
      dropdown: [
        { id: "ai-prep", name: "AI Interview Prep", href: "#ai-prep" },
        {
          id: "mock-interviews",
          name: "Mock Interviews",
          href: "#mock-interviews",
        },
        { id: "analytics", name: "Performance Analytics", href: "#analytics" },
        { id: "study-resources", name: "Study Resources", href: "#resources" },
      ],
    },
    { id: "pricing", name: "Pricing", href: "#pricing" },
    {
      id: "resources-menu",
      name: "Resources",
      href: "#resources",
      dropdown: [
        { id: "blog", name: "Blog", href: "#blog" },
        { id: "case-studies", name: "Case Studies", href: "#case-studies" },
        { id: "docs", name: "Documentation", href: "#docs" },
        { id: "community", name: "Community", href: "#community" },
      ],
    },
    { id: "about", name: "About", href: "#about" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-200"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="flex-shrink-0 group flex items-center gap-2"
          >
            <div className="flex items-center justify-center w-9 h-9 bg-orange-600 rounded-lg group-hover:bg-orange-700 transition-colors duration-200">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-slate-900">
              PrepPilot
            </span>
            <span className="px-2 py-0.5 text-xs font-medium bg-orange-500 text-white rounded-md">
              AI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.id)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-200 transform origin-top ${
                      activeDropdown === link.id
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="p-1">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-150"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-orange-600 transition-colors duration-200">
              Sign In
            </button>
            <button className="px-5 py-2 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-all duration-200 shadow-sm hover:shadow">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-orange-50 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pb-6 pt-2 bg-white border-t border-gray-200">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className="border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center justify-between">
                <a
                  href={link.href}
                  className="flex-1 px-4 py-3 text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                >
                  {link.name}
                </a>
                {link.dropdown && (
                  <button
                    onClick={() => toggleDropdown(link.id)}
                    aria-label={`Toggle ${link.name} dropdown menu`}
                    aria-expanded={activeDropdown === link.id}
                    className="p-2 text-slate-700 hover:text-orange-600 transition-colors duration-200"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        activeDropdown === link.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Mobile Dropdown */}
              {link.dropdown && (
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeDropdown === link.id
                      ? "max-h-64 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-8 pb-2">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-150"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA Buttons */}
          <div className="flex flex-col gap-3 mt-6 px-4">
            <button className="w-full px-5 py-2.5 text-sm font-medium text-slate-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
              Sign In
            </button>
            <button className="w-full px-6 py-2.5 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
