import React, { useState } from 'react';
import { ArrowDown, Mail, Phone, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  const [imageLoaded, setImageLoaded] = useState(true);
  const { personalInfo } = portfolioData;

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline kicker - unboxed text */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2563EB] uppercase mb-3">
              <span>Personal Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>{personalInfo.tagline}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14213D] tracking-tight leading-[1.1] mb-6 text-balance">
              {personalInfo.heroGreeting}
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mb-8">
              {personalInfo.heroBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onExploreClick}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#14213D] hover:bg-[#2563EB] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              >
                <span>Explore My Portfolio</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className="px-6 py-3.5 text-sm font-semibold text-[#14213D] bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all duration-200 shadow-xs flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D]"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-[#2563EB]" />
              </button>
            </div>

            {/* Quick Contact & Location Bar - Clean unboxed text with separators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 pt-4 border-t border-slate-200/80">
              <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium">
                <MapPin className="w-4 h-4 text-[#2563EB]" />
                {personalInfo.location}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#2563EB] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.email}</span>
              </a>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-[#2563EB] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Profile Photo with Apple-style Minimalist Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle back ambient card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#14213D]/5 to-[#2563EB]/10 rounded-3xl transform rotate-2 scale-98 -z-10" />

              {/* Main Photo Card */}
              <div className="bg-white p-3 rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden group">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100">
                  {imageLoaded ? (
                    <img
                      src={personalInfo.profileImage}
                      alt="Md. Jamiur Rahman Khan Akash - Professional Portrait"
                      referrerPolicy="no-referrer"
                      onError={() => setImageLoaded(false)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-50 to-slate-100 text-slate-500">
                      <div className="w-16 h-16 rounded-full bg-[#14213D] text-white flex items-center justify-center text-xl font-bold mb-3">
                        AK
                      </div>
                      <p className="font-semibold text-slate-800">{personalInfo.fullName}</p>
                      <p className="text-xs text-slate-500 mt-1">{personalInfo.location}</p>
                    </div>
                  )}

                  {/* Sleek bottom overlay banner for verified branding */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#14213D]/90 via-[#14213D]/60 to-transparent p-4 text-white">
                    <p className="text-xs font-semibold tracking-wide uppercase text-blue-200">
                      Verified Portfolio
                    </p>
                    <p className="text-sm font-bold tracking-tight">
                      {personalInfo.fullName}
                    </p>
                  </div>
                </div>

                {/* Subtext info under the frame */}
                <div className="pt-3 px-1 pb-1 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    Verified Credentials
                  </span>
                  <span>Gazipur, BD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metric / Key Highlights Strip below the hero split */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Academic Foundation</p>
              <p className="text-xl sm:text-2xl font-bold text-[#14213D] tabular-nums">Science (SSC & HSC)</p>
              <p className="text-xs text-slate-500">Dhaka Education Board</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Web Training</p>
              <p className="text-xl sm:text-2xl font-bold text-[#14213D]">Web Design</p>
              <p className="text-xs text-slate-500">10 Minute School (2022)</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Technical Diploma</p>
              <p className="text-xl sm:text-2xl font-bold text-[#14213D]">Grade A (Excellent)</p>
              <p className="text-xs text-slate-500">Mobile Phone Engineering (2025)</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Language Proficiency</p>
              <p className="text-xl sm:text-2xl font-bold text-[#2563EB] tabular-nums">IELTS 6.5 (B2)</p>
              <p className="text-xs text-slate-500">Listening: 7.5 · Speaking: 6.5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
