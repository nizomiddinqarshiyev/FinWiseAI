'use client';

import { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Imkoniyatlar' },
    { href: '#demo', label: 'Demo' },
    { href: '#banks', label: 'Banklar' },
    { href: '#team', label: 'Jamoa' },
    { href: '#faq', label: 'Savollar' },
  ];

  return (
    <nav className="fixed w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">FinWise AI</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-lg hover:opacity-90 transition-all duration-200 font-semibold">
            Boshla
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden hover:text-blue-400 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-blue-500/20 animate-fadeIn">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block hover:text-blue-400 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-lg hover:opacity-90 transition font-semibold">
              Boshla
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}