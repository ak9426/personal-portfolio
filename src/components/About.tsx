import React from 'react';
import { Mail, Phone, MapPin, User, Compass, Wrench, Globe, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personalInfo } = portfolioData;

  const corePillars = [
    {
      icon: BookOpen,
      title: 'Science Academic Foundation',
      description:
        'A strong educational background in secondary and higher secondary science cultivates disciplined analytical reasoning, quantitative accuracy, and logical problem-solving.',
    },
    {
      icon: Wrench,
      title: 'Mobile Phone Engineering',
      description:
        'Hands-on technical training spanning both hardware circuit diagnostics and software recovery/firmware flashing, enabling real-world component-level troubleshooting.',
    },
    {
      icon: Globe,
      title: 'Web Design & Digital Craft',
      description:
        'Specialized course training in modern web layout principles, responsive user interfaces, and structured semantic markup to build accessible digital experiences.',
    },
    {
      icon: Compass,
      title: 'Continuous Practical Learning',
      description:
        'Committed to expanding capabilities through rigorous vocational coursework, technical practice, and steady personal development.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase mb-2">
            Background & Mindset
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14213D] tracking-tight">
            About Me
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Prose Quote & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 bg-[#F8FAFC] rounded-2xl border border-slate-200">
              <p className="text-lg sm:text-xl text-[#1E293B] font-medium leading-relaxed mb-6">
                "{personalInfo.aboutBio}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 text-sm text-slate-500">
                <span className="font-semibold text-[#14213D]">{personalInfo.fullName}</span>
                <span aria-hidden="true">·</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corePillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors bg-white shadow-2xs"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#14213D] mb-1.5">{pillar.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Profile Summary Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#14213D] text-white p-7 rounded-2xl shadow-md space-y-6">
              <div>
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">
                  Profile Snapshot
                </p>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {personalInfo.fullName}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">Preferred Name: {personalInfo.preferredName}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-700/80 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-400">Location</p>
                    <p className="font-medium text-slate-100">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">Email Address</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium text-slate-100 hover:text-blue-300 transition-colors block truncate"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-400">Contact Number</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="font-medium text-slate-100 hover:text-blue-300 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-400">Focus Areas</p>
                    <p className="font-medium text-slate-100">
                      Science · Web Design · Mobile Engineering
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#14213D] bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Connect Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
