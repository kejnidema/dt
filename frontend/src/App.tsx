import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { I18nProvider } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StructuredData from '@/components/StructuredData';
import ScrollMemory from '@/components/ScrollMemory';
import RevealOnScroll from '@/components/RevealOnScroll';

import HomePage from '@/pages/HomePage';
import Home2Page from '@/pages/Home2Page';
import TreatmentsPage from '@/pages/TreatmentsPage';
import ServicesPage from '@/pages/ServicesPage';
import TreatmentDetailPage from '@/pages/TreatmentDetailPage';
import HollywoodSmilePage from '@/pages/HollywoodSmilePage';
import EmaxVeneersPage from '@/pages/EmaxVeneersPage';
import CompositeVeneersPage from '@/pages/CompositeVeneersPage';
import WhiteningPage from '@/pages/WhiteningPage';
import GumContouringPage from '@/pages/GumContouringPage';
import AllOn4Page from '@/pages/AllOn4Page';
import SingleImplantPage from '@/pages/SingleImplantPage';
import ImplantBridgePage from '@/pages/ImplantBridgePage';
import BoneGraftPage from '@/pages/BoneGraftPage';
import AllOn6Page from '@/pages/AllOn6Page';
import SinusLiftPage from '@/pages/SinusLiftPage';
import CtScanPage from '@/pages/CtScanPage';
import ToothExtractionPage from '@/pages/ToothExtractionPage';
import CompositeFillingsPage from '@/pages/CompositeFillingsPage';
import RootCanalPage from '@/pages/RootCanalPage';
import ZirconiaCrownPage from '@/pages/ZirconiaCrownPage';
import PorcelainCrownPage from '@/pages/PorcelainCrownPage';
import DenturesPage from '@/pages/DenturesPage';
import AlignersPage from '@/pages/AlignersPage';
import DentalExamPage from '@/pages/DentalExamPage';
import TeethCleaningPage from '@/pages/TeethCleaningPage';
import VeneersHubPage from '@/pages/VeneersHubPage';
import EMaxPage from '@/pages/EMaxPage';
import GalleryPage from '@/pages/GalleryPage';
import CostComparisonPage from '@/pages/CostComparisonPage';
import JourneyPage from '@/pages/JourneyPage';
import ReviewsPage from '@/pages/ReviewsPage';
import ContactPage from '@/pages/ContactPage';
import AboutPage from '@/pages/AboutPage';
import { AftercarePage, AllOnXPage, BlogPage, FacilityPage, PricingPage, StayPage } from '@/pages/FeaturePages';

function App() {
  useEffect(() => {
    const preventImageDrag = (event: DragEvent) => {
      if (event.target instanceof HTMLImageElement) event.preventDefault();
    };

    document.addEventListener('dragstart', preventImageDrag);
    return () => document.removeEventListener('dragstart', preventImageDrag);
  }, []);

  return (
    <I18nProvider>
      <StructuredData />
      <ScrollMemory />
      <RevealOnScroll />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home2" element={<Home2Page />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/treatments/all-on-x" element={<AllOnXPage />} />
            <Route path="/treatments/hollywood-smile" element={<HollywoodSmilePage />} />
            <Route path="/treatments/emax-veneers" element={<EmaxVeneersPage />} />
            <Route path="/treatments/composite-veneers" element={<CompositeVeneersPage />} />
            <Route path="/treatments/whitening" element={<WhiteningPage />} />
            <Route path="/treatments/gum-contouring" element={<GumContouringPage />} />
            <Route path="/treatments/all-on-4" element={<AllOn4Page />} />
            <Route path="/treatments/single-implant" element={<SingleImplantPage />} />
            <Route path="/treatments/implant-bridge" element={<ImplantBridgePage />} />
            <Route path="/treatments/bone-graft" element={<BoneGraftPage />} />
            <Route path="/treatments/all-on-6" element={<AllOn6Page />} />
            <Route path="/treatments/sinus-lift" element={<SinusLiftPage />} />
            <Route path="/treatments/3d-ct-scan" element={<CtScanPage />} />
            <Route path="/treatments/tooth-extraction" element={<ToothExtractionPage />} />
            <Route path="/treatments/composite-fillings" element={<CompositeFillingsPage />} />
            <Route path="/treatments/root-canal" element={<RootCanalPage />} />
            <Route path="/treatments/zirconia-crown" element={<ZirconiaCrownPage />} />
            <Route path="/treatments/porcelain-crown" element={<PorcelainCrownPage />} />
            <Route path="/treatments/dentures" element={<DenturesPage />} />
            <Route path="/treatments/invisible-aligners" element={<AlignersPage />} />
            <Route path="/treatments/dental-exam" element={<DentalExamPage />} />
            <Route path="/treatments/teeth-cleaning" element={<TeethCleaningPage />} />
            <Route path="/treatments/tartar-clean" element={<Navigate to="/treatments/teeth-cleaning" replace />} />
            <Route path="/treatments/removable-prosthetic" element={<Navigate to="/treatments/dentures" replace />} />
            <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />
            <Route path="/veneers" element={<VeneersHubPage />} />
            <Route path="/veneers/emax" element={<EmaxVeneersPage />} />
            <Route path="/veneers/porcelain" element={<EMaxPage />} />
            <Route path="/veneers/zirconia" element={<EMaxPage />} />
            <Route path="/veneers/gallery" element={<GalleryPage />} />
            <Route path="/veneers/cost-comparison" element={<CostComparisonPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/journey/travel" element={<StayPage />} />
            <Route path="/stay" element={<StayPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/doctors" element={<AboutPage />} />
            <Route path="/about/facility" element={<FacilityPage />} />
            <Route path="/aftercare" element={<AftercarePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}

export default App;
