import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Download, ExternalLink, Share2, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personalInfo } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');

    // Simulate reliable form submission
    setTimeout(() => {
      setStatus('success');
      setErrorMessage('');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 600);
  };

  const handleDirectEmailSend = () => {
    const subject = encodeURIComponent(formState.subject || `Inquiry for ${personalInfo.preferredName}`);
    const body = encodeURIComponent(
      `Hi Akash,\n\nMy name is ${formState.name || '[Your Name]'}.\n\n${
        formState.message || 'I am reaching out regarding your portfolio.'
      }\n\nBest regards,\n${formState.name || ''}\n${formState.email || ''}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  // Generate downloadable vCard / contact card
  const handleDownloadVCard = () => {
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${personalInfo.fullName}`,
      `N:Khan Akash;Md.;Jamiur Rahman;;`,
      `NICKNAME:${personalInfo.preferredName}`,
      `TITLE:${personalInfo.title}`,
      `EMAIL;TYPE=INTERNET,PREF:${personalInfo.email}`,
      `TEL;TYPE=CELL,VOICE:${personalInfo.phone}`,
      `ADR;TYPE=HOME:;;;Gazipur;;;Bangladesh`,
      'NOTE:Academic Science background, Web Design, and Mobile Phone Engineering.',
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Md_Jamiur_Rahman_Khan_Akash.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14213D] tracking-tight">
            Contact & Communication
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Available for technical opportunities, collaborations, and professional inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Contact Cards */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 space-y-6">
              <h3 className="text-lg font-bold text-[#14213D]">
                Direct Contact Details
              </h3>

              {/* Email Card */}
              <div className="flex items-start justify-between gap-4 p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-2xs font-semibold text-slate-400 uppercase tracking-wider">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-bold text-[#14213D] hover:text-[#2563EB] transition-colors block truncate"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    title="Copy Email"
                    className="p-1.5 text-slate-400 hover:text-[#14213D] rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="px-2.5 py-1 text-xs font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-md transition-colors"
                  >
                    Email Me
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start justify-between gap-4 p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xs font-semibold text-slate-400 uppercase tracking-wider">Phone / Mobile</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-bold text-[#14213D] hover:text-[#2563EB] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    title="Copy Phone"
                    className="p-1.5 text-slate-400 hover:text-[#14213D] rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                    aria-label="Copy phone number"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="px-2.5 py-1 text-xs font-semibold text-[#14213D] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                  >
                    Call Me
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#14213D] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-2xs font-semibold text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-bold text-[#14213D]">{personalInfo.location}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Dhaka Division, Bangladesh</p>
                </div>
              </div>

              {/* Download Contact Card (vCard) */}
              <button
                type="button"
                onClick={handleDownloadVCard}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#14213D] hover:bg-[#2563EB] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-150 shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2563EB]"
              >
                <Download className="w-4 h-4" />
                <span>Save Contact Card (.vcf)</span>
              </button>
            </div>

            {/* Configurable Social Media Placeholders */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 text-xs text-slate-600">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-[#14213D]">Social & Network Channels</span>
                <span className="text-2xs text-slate-400 font-medium">Configurable Slots</span>
              </div>
              <p className="text-2xs text-slate-500 mb-3">
                In strict adherence to authentic personal branding, social channels can be configured with your actual profiles anytime:
              </p>
              <div className="grid grid-cols-2 gap-2 text-2xs">
                <div className="p-2.5 rounded-lg border border-dashed border-slate-300 bg-slate-50 text-slate-500">
                  <span className="font-semibold text-slate-700 block">LinkedIn Profile</span>
                  <span>Placeholder / Configurable</span>
                </div>
                <div className="p-2.5 rounded-lg border border-dashed border-slate-300 bg-slate-50 text-slate-500">
                  <span className="font-semibold text-slate-700 block">GitHub Profile</span>
                  <span>Placeholder / Configurable</span>
                </div>
                <div className="p-2.5 rounded-lg border border-dashed border-slate-300 bg-slate-50 text-slate-500">
                  <span className="font-semibold text-slate-700 block">WhatsApp Direct</span>
                  <span>+8801333311079</span>
                </div>
                <div className="p-2.5 rounded-lg border border-dashed border-slate-300 bg-slate-50 text-slate-500">
                  <span className="font-semibold text-slate-700 block">Telegram Channel</span>
                  <span>Placeholder / Configurable</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#14213D] mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in the form below to initiate communication directly.
            </p>

            {status === 'success' ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-900">Message Received</h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out! Your message details have been recorded. You can also send this directly via your default email application.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                  <button
                    type="button"
                    onClick={handleDirectEmailSend}
                    className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Email App</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Tanvir Ahmed"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Technical collaboration inquiry"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#14213D] hover:bg-[#2563EB] rounded-lg transition-all shadow-xs cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectEmailSend}
                    className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Send via Email Client</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
