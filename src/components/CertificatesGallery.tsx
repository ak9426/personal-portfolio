import React, { useState } from 'react';
import { ShieldCheck, Lock, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { portfolioData, CertificateDoc } from '../data/portfolioData';

interface CertificatesGalleryProps {
  onOpenCertificate: (certificateId: string) => void;
}

export const CertificatesGallery: React.FC<CertificatesGalleryProps> = ({ onOpenCertificate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { certificatesGallery } = portfolioData;

  const categories = ['All', 'Academic', 'Professional Training', 'Language Proficiency'];

  const filteredDocs = certificatesGallery.filter((doc) => {
    if (selectedCategory === 'All') return true;
    return doc.category === selectedCategory;
  });

  return (
    <section id="certificates" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase mb-2">
              Official Document Records
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14213D] tracking-tight">
              Certificates Gallery
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Explore primary educational and vocational certifications. Click any credential to inspect verified specifications and official document records.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-200/70 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-[#14213D] shadow-xs'
                    : 'text-slate-600 hover:text-[#14213D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sensitive Privacy Protection Notice */}
        <div className="mb-8 p-4 bg-white rounded-xl border border-slate-200/90 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#2563EB]" />
            <span>
              <strong>Document Privacy:</strong> Registration codes, roll numbers, and candidate IDs are intentionally masked to prevent identity misuse.
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 text-2xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            Verified Authentic
          </span>
        </div>

        {/* Gallery Cards Grid - Clean Document Records (No Pictures) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc: CertificateDoc) => {
            const isAcademic = doc.category === 'Academic';
            const isLanguage = doc.category === 'Language Proficiency';

            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="p-6">
                  {/* Document Badge Header (No Picture) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                    <span className="font-semibold text-[#2563EB] tracking-wide uppercase text-2xs">
                      {doc.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 font-medium text-xs">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {doc.year}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-bold text-[#14213D] leading-snug mb-1.5 group-hover:text-[#2563EB] transition-colors">
                    {doc.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-4">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-medium text-slate-700">{doc.issuer}</span>
                  </div>

                  {/* Document Summary */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {doc.summary}
                  </p>

                  {/* Status Banner */}
                  <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200/80">
                    <span className="text-2xs text-slate-400 uppercase tracking-wider block mb-0.5">
                      Verified Result
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#14213D] text-xs">{doc.status}</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-2xs text-slate-500 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>Privacy Masked</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenCertificate(doc.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-[#14213D] transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-white hover:shadow-2xs"
                  >
                    <span>View Record Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
