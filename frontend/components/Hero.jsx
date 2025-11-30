'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6 animate-fadeIn">
          <span className="text-blue-400 text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            🇺🇿 O'zbekistonning birinchi AI moliyaviy maslahatchisi
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fadeIn">
          FinWise AI
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeIn">
          Sun'iy intellekt yordamida moliyaviy salomatligingizni tahlil qiling, eng yaxshi kredit takliflarini toping va firibgarlikdan himoyalaning
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/50">
            Bepul Sinab Ko'ring 
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border border-blue-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500/10 transition-all duration-200">
            Video Ko'ring
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-200">
            <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
            <div className="text-gray-400">Foydalanuvchilar</div>
          </div>
          <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-200">
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-400">Banklar</div>
          </div>
          <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-200">
            <div className="text-3xl font-bold text-pink-400 mb-2">99.8%</div>
            <div className="text-gray-400">Aniqlik</div>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
        <div className="absolute top-60 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
      </div>
    </section>
  );
}