import React from 'react';
import { Award, Calendar, CheckCircle2, Headphones, BookOpen, PenTool, Mic, ShieldAlert, FileText } from 'lucide-react';
import { portfolioData, IeltsScore } from '../data/portfolioData';

interface IeltsSectionProps {
  onOpenCertificate: (certificateId: string) => void;
}

export const IeltsSection: React.FC<IeltsSectionProps> = ({ onOpenCertificate }) => {
  const { ielts } = portfolioData;

  const getModuleIcon = (module: string) => {
    switch (module.toLowerCase()) {
      case 'listening':
        return Headphones;
      case 'reading':
        return BookOpen;
      case 'writing':
        return PenTool;
      case 'speaking':
        return Mic;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="ielts" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase mb-2">
            Standardized English Language Proficiency
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14213D] tracking-tight">
            IELTS General Training
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Internationally recognized certification of English language proficiency across listening, reading, writing, and speaking.
          </p>
        </div>

        {/* IELTS Overview Container */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Overall Score Badge / Left Feature */}
            <div className="lg:col-span-5 bg-[#14213D] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-300 mb-4">
                  <span className="font-semibold uppercase tracking-wider text-blue-300">
                    Official Test Report
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {ielts.testDate}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight tabular-nums">
                    {ielts.overallBand.toFixed(1)}
                  </span>
                  <span className="text-xl text-slate-400 font-medium">/ 9.0</span>
                </div>
                <p className="text-sm font-bold text-blue-200 uppercase tracking-wide">
                  Overall Band Score
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-700/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">CEFR Equivalent</span>
                  <span className="text-sm font-bold text-white bg-blue-600/30 border border-blue-500/40 px-2.5 py-1 rounded-md">
                    {ielts.cefrLevel}
                  </span>
                </div>
                <p className="text-2xs text-slate-400 mt-2">
                  Independent User · Capable of effective operational language use in academic and professional settings.
                </p>
              </div>
            </div>

            {/* IELTS Context & Description */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#14213D] mb-3">
                  Verified Language Competency
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {ielts.description}
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-600 pt-2">
                  <div className="p-3 bg-[#F8FAFC] rounded-lg border border-slate-200/80">
                    <span className="block text-slate-400 text-2xs uppercase tracking-wider">Listening Strength</span>
                    <span className="font-bold text-[#14213D] text-sm tabular-nums">7.5 Band (Very Good)</span>
                  </div>
                  <div className="p-3 bg-[#F8FAFC] rounded-lg border border-slate-200/80">
                    <span className="block text-slate-400 text-2xs uppercase tracking-wider">Speaking & Writing</span>
                    <span className="font-bold text-[#14213D] text-sm tabular-nums">6.5 Band (Competent)</span>
                  </div>
                </div>
              </div>

              {/* View TRF modal button */}
              <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                <span className="text-xs text-slate-500">
                  Privacy Note: Candidate ID & photo withheld per privacy policies
                </span>
                <button
                  type="button"
                  onClick={() => onOpenCertificate(ielts.certificateId)}
                  className="px-4 py-2 text-xs font-semibold text-[#2563EB] hover:text-[#14213D] hover:bg-blue-50 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Test Record</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ielts.scores.map((item: IeltsScore) => {
            const Icon = getModuleIcon(item.module);
            const percentage = (item.score / item.maxScore) * 100;

            return (
              <div
                key={item.module}
                className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-2xl font-bold text-[#14213D] tabular-nums">
                      {item.score.toFixed(1)}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[#14213D] mb-1">{item.module}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.description}</p>
                </div>

                <div>
                  {/* Progress bar */}
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-1.5">
                    <div
                      className="bg-[#2563EB] h-full rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-2xs text-slate-400">
                    <span>Band {item.score}</span>
                    <span>Max {item.maxScore}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
