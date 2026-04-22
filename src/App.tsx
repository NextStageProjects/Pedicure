import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Booking } from './pages/Booking';
import { ServicesGallery } from './pages/ServicesGallery';
import { Dashboard } from './pages/admin/Dashboard';
import { ScheduleManager } from './pages/admin/ScheduleManager';
import { NotFound } from './pages/NotFound';
import { CookieBanner } from './components/common/CookieBanner';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/gallery" element={<ServicesGallery />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/schedule" element={<ScheduleManager />} />
        {/* Rota Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
};

export default App;