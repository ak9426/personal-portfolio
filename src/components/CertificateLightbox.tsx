import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ShieldCheck, Lock } from 'lucide-react';
import { CertificateDoc } from '../data/portfolioData';

interface CertificateLightboxProps {
  certificate: CertificateDoc | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({
  certificate,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [certificate, hasPrev, hasNext, onClose, onPrev, onNext]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#14213D]/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Lightbox Card */}
      <div className="relative z-10 bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#14213D] text-white flex items-center justify-between border-b border-slate-700/60">
          <div className="flex items-center gap-2">
            <span className="text-2xs font-bold uppercase tracking-wider text-blue-300">
              {certificate.category}
            </span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-xs text-slate-300">{certificate.year}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 text-2xs text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              Verified Record
            </span>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
              aria-label="Close certificate lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Certificate Title & Status */}
          <div>
            <h2 id="lightbox-title" className="text-2xl font-extrabold text-[#14213D] tracking-tight">
              {certificate.title}
            </h2>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-500 mt-1">
              <span className="font-semibold text-[#2563EB]">{certificate.issuer}</span>
              <span aria-hidden="true">·</span>
              <span>{certificate.dateOrSession}</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-slate-700">{certificate.status}</span>
            </div>
          </div>

          {/* Verified Document Record Header (Picture Removed) */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-xs p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="space-y-1">
                <span className="text-2xs font-bold uppercase tracking-wider text-[#2563EB]">
                  Official Credential Verification
                </span>
                <p className="text-lg font-bold text-[#14213D]">
                  {certificate.title}
                </p>
                <p className="text-xs text-slate-600">
                  Awarded to: <span className="font-semibold text-slate-800">Md. Jamiur Rahman Khan Akash</span>
                </p>
              </div>

              <div className="flex flex-col items-start sm:items-end">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{certificate.status}</span>
                </span>
                <span className="text-2xs text-slate-400 mt-1">Verified Institutional Document</span>
              </div>
            </div>

            {/* Privacy Redaction Bar */}
            <div className="pt-3 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{certificate.privacyNotice}</span>
              </span>
              <span className="text-2xs text-slate-400 font-medium">Original Record Maintained</span>
            </div>
          </div>

          {/* Certificate Summary */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {certificate.summary}
          </p>

          {/* Detailed Verification Credentials Table */}
          <div className="rounded-xl border border-slate-200 overflow-hidden bg-[#F8FAFC]">
            <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Verified Credential Specifications
            </div>
            <div className="divide-y divide-slate-200 text-xs">
              {certificate.credentials.map((cred, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 px-4 py-2.5">
                  <span className="text-slate-500 font-medium">{cred.label}</span>
                  <span className="sm:col-span-2 font-semibold text-[#14213D]">{cred.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy & Redaction Compliance Banner */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
            <Lock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-950">Data Privacy & Redaction Policy</p>
              <p className="text-amber-800 mt-0.5 leading-relaxed">
                In strict compliance with identity protection standards, sensitive numbers (such as board roll numbers, registration serials, and test report TRF candidate codes) are withheld from public indexing.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={onPrev}
            disabled={!hasPrev}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Document</span>
          </button>

          <span className="text-xs text-slate-500 hidden sm:inline">
            Use Left / Right arrow keys or Escape to exit
          </span>

          <button
            type="button"
            onClick={onNext}
            disabled={!hasNext}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
          >
            <span>Next Document</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
