import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { IeltsSection } from './components/IeltsSection';
import { Skills } from './components/Skills';
import { CertificateLightbox } from './components/CertificateLightbox';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { portfolioData, CertificateDoc } from './data/portfolioData';

export default function App() {
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);

  const { certificatesGallery } = portfolioData;

  const handleOpenCertificate = (certificateId: string) => {
    // If certificate ID exists directly in gallery, select it
    const exists = certificatesGallery.find((c) => c.id === certificateId);
    if (exists) {
      setSelectedCertId(certificateId);
      return;
    }

    // Map common aliases
    if (certificateId.includes('hsc')) {
      setSelectedCertId('cert-hsc');
    } else if (certificateId.includes('ssc')) {
      setSelectedCertId('cert-ssc');
    } else if (certificateId.includes('web')) {
      setSelectedCertId('cert-web-full');
    } else if (certificateId.includes('mpe')) {
      setSelectedCertId('cert-mpe-full');
    } else if (certificateId.includes('ielts')) {
      setSelectedCertId('cert-ielts');
    } else {
      setSelectedCertId(certificatesGallery[0].id);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedCertId(null);
  };

  const currentIndex = selectedCertId
    ? certificatesGallery.findIndex((c) => c.id === selectedCertId)
    : -1;

  const currentCertificate: CertificateDoc | null =
    currentIndex >= 0 ? certificatesGallery[currentIndex] : null;

  const handlePrevCertificate = () => {
    if (currentIndex > 0) {
      setSelectedCertId(certificatesGallery[currentIndex - 1].id);
    }
  };

  const handleNextCertificate = () => {
    if (currentIndex < certificatesGallery.length - 1) {
      setSelectedCertId(certificatesGallery[currentIndex + 1].id);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B]">
      {/* Sticky Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreClick={() => scrollToSection('about')}
          onContactClick={() => scrollToSection('contact')}
        />
        <About />
        <Education onOpenCertificate={handleOpenCertificate} />
        <Certifications onOpenCertificate={handleOpenCertificate} />
        <IeltsSection onOpenCertificate={handleOpenCertificate} />
        <Skills />
        <Contact />
      </main>

      {/* Global Lightbox Modal */}
      <CertificateLightbox
        certificate={currentCertificate}
        onClose={handleCloseLightbox}
        onPrev={handlePrevCertificate}
        onNext={handleNextCertificate}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < certificatesGallery.length - 1}
      />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
