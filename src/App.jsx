import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import FooterLegalLine from './components/FooterLegalLine'
import LandingPage from './pages/LandingPage/LandingPage'
import PricingPage from './pages/PricingPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import CookiePolicyPage from './pages/CookiePolicyPage'
import RefundPolicyPage from './pages/RefundPolicyPage'
import EdInaiPage from './features/EdInai/EdInaiPage'
import EdInaiDetail from './features/EdInaiDetail/EdInaiDetail'
import EdInaiStudentPage from './features/EdInaiStudent/EdInaiStudentPage'
import EdInaiAdminPage from './features/EdInaiAdmin/EdInaiAdminPage'
import EdInaiSetupPage from './features/EdInai/EdInaiSetupPage'
import StepsPage from './features/EdInai/StepsPage'
import Miraai from './pages/Miraai/Miraai'
import PayUCheckout from './components/payment/PayUCheckout';
import PaymentSuccess from './components/payment/PaymentSuccess';
import PaymentFailure from './components/payment/PaymentFailure';

import { useState } from 'react'

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  // Check if current route is a special page (no sidebar/header)
  const isSpecialPage = location.pathname === '/edinai' ||
    location.pathname === '/edinai-detail' ||
    location.pathname === '/edinai-student' ||
    location.pathname === '/edinai-admin' ||
    location.pathname === '/edinai-setup' ||
    location.pathname === '/pricing' ||
    location.pathname === '/privacy' ||
    location.pathname === '/terms' ||
    location.pathname === '/cookies' ||
    location.pathname === '/refund' ||
    location.pathname === '/saas-landing' ||
    location.pathname === '/stepspage' ||
    location.pathname === '/miraai' ||
    location.pathname === '/checkout' ||
    location.pathname.startsWith('/payment/')

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {!isSpecialPage && <Header onMenuClick={() => setSidebarOpen((v) => !v)} />}
      {!isSpecialPage && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
      <main className={`flex-1 ${!isSpecialPage ? "md:pl-[280px]" : ""}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/refund" element={<RefundPolicyPage />} />
          <Route path="/edinai" element={<EdInaiPage />} />
          <Route path="/edinai-detail" element={<EdInaiDetail />} />
          <Route path="/edinai-student" element={<EdInaiStudentPage />} />
          <Route path="/edinai-admin" element={<EdInaiAdminPage />} />
          <Route path="/edinai-setup" element={<EdInaiSetupPage />} />
          <Route path="/stepspage" element={<StepsPage />} />
          <Route path="/miraai" element={<Miraai />} />
          <Route path="/checkout" element={<PayUCheckout />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/failure" element={<PaymentFailure />} />
        </Routes>
      </main>
      <FooterLegalLine />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
