import { Routes, Route } from 'react-router-dom';
import { I18nProvider } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';
import StructuredData from '@/components/StructuredData';
import ScrollMemory from '@/components/ScrollMemory';

import HomePage from '@/pages/HomePage';
import TreatmentsPage from '@/pages/TreatmentsPage';
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
  return (
    <I18nProvider>
      <StructuredData />
      <ScrollMemory />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/treatments/all-on-x" element={<AllOnXPage />} />
            <Route path="/veneers" element={<VeneersHubPage />} />
            <Route path="/veneers/emax" element={<EMaxPage />} />
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
        <CookieConsent />
      </div>
    </I18nProvider>
  );
}

export default App;
