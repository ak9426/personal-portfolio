import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'IELTS', href: '#ielts' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#14213D] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#hero"
              className="text-2xl font-extrabold tracking-tight text-white hover:text-blue-400 transition-colors inline-block"
            >
              {personalInfo.preferredName}
            </a>
            <p className="text-sm font-medium text-slate-300">
              {personalInfo.fullName}
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {personalInfo.tagline} An enthusiastic learner with a background in science, web design, and mobile phone engineering.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-3 space-y-2 text-xs text-slate-300">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">
              Contact
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </p>
            <p className="flex items-center gap-2 truncate">
              <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors truncate">
                {personalInfo.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                {personalInfo.phone}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Akash. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-slate-500">Gazipur, Bangladesh</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer py-1 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
