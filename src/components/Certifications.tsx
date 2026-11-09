import React from 'react';
import { Award, Calendar, Clock, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolioData, CertificationItem } from '../data/portfolioData';

interface CertificationsProps {
  onOpenCertificate: (certificateId: string) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onOpenCertificate }) => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase mb-2">
            Vocational & Professional Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14213D] tracking-tight">
            Professional Training & Certifications
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Specialized technical credentials in Web Design and Mobile Phone Engineering (Hardware & Software).
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert: CertificationItem) => (
            <div
              key={cert.id}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 overflow-hidden hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Visual Banner Header */}
                <div className="relative aspect-16/9 w-full bg-slate-900 overflow-hidden group">
                  <img
                    src={cert.previewImage}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/90 via-[#14213D]/30 to-transparent flex items-end p-4 sm:p-5">
                    <div className="flex items-center justify-between w-full text-white">
                      <div>
                        <span className="text-2xs font-bold uppercase tracking-wider text-blue-300 block">
                          Verified Training
                        </span>
                        <span className="text-sm font-bold truncate max-w-xs block">
                          {cert.institution}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-200 font-medium block">
                          {cert.completionDate}
                        </span>
                        {cert.duration && (
                          <span className="text-2xs text-blue-200">
                            {cert.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">

                  {/* Title & Grade */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-[#14213D] leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  {cert.grade && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200/80 mb-4">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Result: {cert.grade}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills Acquired List */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
                      Training Syllabus & Capabilities:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cert.skillsAcquired.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-4 sm:px-7 sm:py-4 bg-white border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs text-slate-500">Official Certification Record</span>
                <button
                  type="button"
                  onClick={() => onOpenCertificate(cert.certificateId)}
                  className="px-4 py-2 text-xs font-semibold text-[#14213D] bg-slate-100 hover:bg-[#2563EB] hover:text-white rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Inspect Certificate</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
