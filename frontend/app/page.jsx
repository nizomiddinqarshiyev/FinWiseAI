'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Demo from '../components/Demo';
import BanksComparison from '../components/BanksComparison';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import TeamMembers from '../components/TeamMembers';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <BanksComparison />
      <TeamMembers />
      <FAQ />
      <Footer />
    </main>
  );
}