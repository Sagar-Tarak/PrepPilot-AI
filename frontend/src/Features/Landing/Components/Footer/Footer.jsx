import React from "react";
import {
  Target,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Instagram,
  Facebook,
  ArrowRight,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { id: "about-us", name: "About Us", href: "#about" },
    { id: "careers", name: "Careers", href: "#careers" },
    { id: "press", name: "Press Kit", href: "#press" },
    { id: "partners", name: "Partners", href: "#partners" },
    { id: "contact", name: "Contact", href: "#contact" },
  ];

  const productLinks = [
    { id: "features", name: "Features", href: "#features" },
    { id: "pricing", name: "Pricing", href: "#pricing" },
    { id: "integrations", name: "Integrations", href: "#integrations" },
    { id: "api", name: "API", href: "#api" },
    { id: "changelog", name: "Changelog", href: "#changelog" },
  ];

  const resourceLinks = [
    { id: "blog", name: "Blog", href: "#blog" },
    { id: "documentation", name: "Documentation", href: "#docs" },
    { id: "help-center", name: "Help Center", href: "#help" },
    { id: "community", name: "Community", href: "#community" },
    { id: "tutorials", name: "Tutorials", href: "#tutorials" },
  ];

  const legalLinks = [
    { id: "privacy", name: "Privacy Policy", href: "#privacy" },
    { id: "terms", name: "Terms of Service", href: "#terms" },
    { id: "cookie", name: "Cookie Policy", href: "#cookie" },
    { id: "security", name: "Security", href: "#security" },
    { id: "compliance", name: "Compliance", href: "#compliance" },
  ];

  const socialLinks = [
    { id: "twitter", icon: Twitter, href: "#twitter", label: "Twitter" },
    { id: "linkedin", icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { id: "github", icon: Github, href: "#github", label: "GitHub" },
    { id: "youtube", icon: Youtube, href: "#youtube", label: "YouTube" },
    {
      id: "instagram",
      icon: Instagram,
      href: "#instagram",
      label: "Instagram",
    },
    { id: "facebook", icon: Facebook, href: "#facebook", label: "Facebook" },
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-slate-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                Stay Updated
              </h3>
              <p className="text-slate-400">
                Get the latest updates on AI interview prep, industry insights,
                and exclusive tips.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <button className="group px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold transition-all duration-200">
                <span className="flex items-center gap-2 justify-center">
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-9 h-9 bg-orange-600 rounded-lg">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">
                PrepPilot
              </span>
              <span className="px-2 py-0.5 text-xs font-medium bg-orange-500 text-white rounded-md">
                AI
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering job seekers with AI-driven interview preparation.
              Master your skills and land your dream job.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@preppilot.ai"
                className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">hello@preppilot.ai</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-slate-400 text-sm">
              © {currentYear} PrepPilot AI. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-200"
                  >
                    <Icon className="w-5 h-5 text-slate-400 hover:text-orange-400 transition-colors duration-200" />
                  </a>
                );
              })}
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <select className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer transition-all duration-200">
                <option value="en" className="bg-slate-800">
                  English
                </option>
                <option value="es" className="bg-slate-800">
                  Español
                </option>
                <option value="fr" className="bg-slate-800">
                  Français
                </option>
                <option value="de" className="bg-slate-800">
                  Deutsch
                </option>
                <option value="zh" className="bg-slate-800">
                  中文
                </option>
                <option value="ja" className="bg-slate-800">
                  日本語
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
