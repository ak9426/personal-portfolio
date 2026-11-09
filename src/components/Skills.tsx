import React, { useState } from 'react';
import { Cpu, Smartphone, Layout, Wrench, Monitor, Lightbulb, Users, RefreshCw, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { portfolioData, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'technical' | 'personal'>('all');
  const { skills } = portfolioData;

  const filteredSkills = skills.filter((skill) => {
    if (filter === 'all') return true;
    return skill.category === filter;
  });

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'Web Design':
        return Layout;
      case 'Mobile Phone Hardware & Software':
      case 'Mobile Phone Hardware':
      case 'Mobile Phone Software':
        return Smartphone;
      case 'Technical Troubleshooting':
        return Wrench;
      case 'Basic Computer Skills':
        return Monitor;
      case 'Continuous Learning':
        return RefreshCw;
      case 'Problem Solving':
        return Lightbulb;
      case 'Communication':
        return Users;
      case 'Adaptability':
        return CheckCircle2;
      case 'Self-Motivation':
        return HeartHandshake;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Segmented Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase mb-2">
              Capabilities & Attributes
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14213D] tracking-tight">
              Skills & Training Focus
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Demonstrated through academic training, vocational engineering coursework, and continuous practice.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented control) */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200/80 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-[#14213D] shadow-xs'
                  : 'text-slate-600 hover:text-[#14213D]'
              }`}
            >
              All Skills ({skills.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('technical')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'technical'
                  ? 'bg-white text-[#14213D] shadow-xs'
                  : 'text-slate-600 hover:text-[#14213D]'
              }`}
            >
              Technical Training ({skills.filter((s) => s.category === 'technical').length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('personal')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'personal'
                  ? 'bg-white text-[#14213D] shadow-xs'
                  : 'text-slate-600 hover:text-[#14213D]'
              }`}
            >
              Personal Strengths ({skills.filter((s) => s.category === 'personal').length})
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill: SkillItem) => {
            const Icon = getSkillIcon(skill.name);
            const isTechnical = skill.category === 'technical';

            return (
              <div
                key={skill.name}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200/80 p-6 hover:border-slate-300 hover:bg-white hover:shadow-2xs transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isTechnical ? 'bg-blue-50 text-[#2563EB]' : 'bg-slate-100 text-[#14213D]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Unboxed category metadata with separator */}
                    <span className="text-2xs font-semibold uppercase tracking-wider text-slate-500">
                      {isTechnical ? 'Technical' : 'Personal'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#14213D] mb-2">{skill.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{skill.description}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-2xs text-slate-500">
                  <span>{isTechnical ? 'Vocational & Practical' : 'Core Working Mindset'}</span>
                  <span className="text-[#2563EB] font-medium">Verified in Training</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
