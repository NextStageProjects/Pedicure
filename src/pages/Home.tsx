import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../sections/home/Hero';
import { TreatmentGrid } from '../sections/home/TreatmentGrid';
import { AboutTeaser } from '../sections/home/AboutTeaser';
import { Testimonials } from '../sections/home/Testimonials';
import { Metrics } from '../sections/home/Metrics';
import { Location } from '../sections/home/Location';
import { BookingCTA } from '../sections/home/BookingCTA';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <TreatmentGrid />
        <AboutTeaser />
        <Metrics />
        <Testimonials />
        <BookingCTA />
        <Location />
      </main>

      <Footer />
    </div>
  );
};