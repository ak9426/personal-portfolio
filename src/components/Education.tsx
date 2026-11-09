import React from 'react';
import { GraduationCap, Award, Calendar, Building2, CheckCircle2, FileText } from 'lucide-react';
import { portfolioData, EducationItem } from '../data/portfolioData';

interface EducationProps {
  onOpenCertificate: (certificateId: string) => void;
}

export const Education: React.FC<EducationProps> = ({ onOpenCertificate }) => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14213D] tracking-tight">
            Formal Education
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Secondary and higher secondary education in the Science discipline under Dhaka Education Board.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item: EducationItem) => {
            const gpaPercentage = (item.gpa / item.maxGpa) * 100;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Level Degree & Year Info */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-slate-500 flex items-center justify-end gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>Passing Year: {item.passingYear}</span>
                      </span>
                      <span className="text-xs text-[#2563EB] font-medium mt-0.5 block">
                        Group: {item.group}
                      </span>
                    </div>
                  </div>

                  {/* Degree Title & Institution */}
                  <h3 className="text-xl font-bold text-[#14213D] mb-1">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-slate-600 mb-6">
                    <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="font-medium text-slate-700">{item.institution}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-500">{item.board}</span>
                  </div>

                  {/* GPA Metric Display */}
                  <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/80 mb-6">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Grade Point Average (GPA)
                      </span>
                      <span className="text-base font-bold text-[#14213D] tabular-nums">
                        {item.gpa.toFixed(2)} <span className="text-xs font-normal text-slate-500">/ {item.maxGpa.toFixed(2)}</span>
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#2563EB] h-full rounded-full transition-all duration-500"
                        style={{ width: `${gpaPercentage}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-2xs text-slate-500 mt-1.5">
                      <span>Dhaka Board Scale</span>
                      <span className="font-medium text-slate-700">{gpaPercentage.toFixed(0)}% Achievement</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Key Focus Areas:
                    </p>
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action to open Certificate Preview */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Official Document Record</span>
                  <button
                    type="button"
                    onClick={() => onOpenCertificate(item.certificateId)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-[#14213D] transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-blue-50"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
