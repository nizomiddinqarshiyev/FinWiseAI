'use client';

import { TrendingUp, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Imkoniyatlar', href: '#features' },
      { label: 'Narxlar', href: '#pricing' },
      { label: 'Demo', href: '#demo' },
      { label: 'API Hujjatlari', href: '#api' }
    ],
    company: [
      { label: 'Biz haqimizda', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Yangiliklar', href: '#news' },
      { label: 'Karyera', href: '#careers' }
    ],
    support: [
      { label: 'Yordam markazi', href: '#help' },
      { label: 'Aloqa', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Maxfiylik siyosati', href: '#privacy' }
    ],
    legal: [
      { label: 'Foydalanish shartlari', href: '#terms' },
      { label: 'Maxfiylik', href: '#privacy' },
      { label: 'Cookie siyosati', href: '#cookies' },
      { label: 'Litsenziya', href: '#license' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">FinWise AI</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              O'zbekistonning birinchi AI-ga asoslangan moliyaviy maslahatchisi. 
              Sizning moliyaviy salomatligingiz bizning ustuvorligimiz.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@finwise.uz</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+998 71 123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Toshkent, O'zbekiston</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Mahsulot</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Kompaniya</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Qo'llab-quvvatlash</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Yuridik</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-bold mb-2">Yangiliklar Obunasi</h4>
            <p className="text-gray-400 text-sm mb-4">
              Eng so'ngi yangiliklar va takliflardan xabardor bo'ling
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:border-blue-500 outline-none transition"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition whitespace-nowrap">
                Obuna Bo'lish
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400 text-sm">
              © {currentYear} FinWise AI. Barcha huquqlar himoyalangan.
            </div>

            {/* Language/Region */}
            <div className="flex items-center gap-2">
              <button className="text-gray-400 hover:text-white text-sm transition flex items-center gap-2">
                🇺🇿 O'zbek tili
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Badge */}
      <div className="bg-slate-950 py-3">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-500">
          Made with ❤️ in Uzbekistan | Powered by AI Technology
        </div>
      </div>
    </footer>
  );
}