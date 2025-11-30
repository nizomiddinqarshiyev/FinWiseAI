import React, { useState } from 'react';
import { Menu, X, ChevronDown, Shield, Brain, TrendingUp, MessageCircle, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import TeamMembers from '../components/TeamMembers';

export default function FinWiseAI() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState('health');
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenFAQ(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">FinWise AI</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-blue-400 transition">Imkoniyatlar</a>
              <a href="#demo" className="hover:text-blue-400 transition">Demo</a>
              <a href="#banks" className="hover:text-blue-400 transition">Banklar</a>
              <a href="#faq" className="hover:text-blue-400 transition">Savollar</a>
            </div>

            <button className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-lg hover:opacity-90 transition">
              Boshla
            </button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-blue-500/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block hover:text-blue-400">Imkoniyatlar</a>
              <a href="#demo" className="block hover:text-blue-400">Demo</a>
              <a href="#banks" className="block hover:text-blue-400">Banklar</a>
              <a href="#faq" className="block hover:text-blue-400">Savollar</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-lg">
                Boshla
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm">🇺🇿 O'zbekistonning birinchi AI moliyaviy maslahatchisi</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            FinWise AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Sun'iy intellekt yordamida moliyaviy salomatligingizni tahlil qiling, eng yaxshi kredit takliflarini toping va firibgarlikdan himoyalaning
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition flex items-center justify-center gap-2">
              Bepul Sinab Ko'ring <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-blue-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500/10 transition">
              Video Ko'ring
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-blue-400">10,000+</div>
              <div className="text-gray-400">Foydalanuvchilar</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">15+</div>
              <div className="text-gray-400">Banklar</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400">99.8%</div>
              <div className="text-gray-400">Aniqlik</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Asosiy Imkoniyatlar</h2>
            <p className="text-gray-400 text-lg">AI texnologiyasi bilan moliyaviy hayotingizni yanada osonlashtiring</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Moliyaviy Tahlil",
                desc: "Daromad va xarajatlaringizni tahlil qilib, moliyaviy salomatlik darajasini hisoblaydi",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Kredit Tavsiyasi",
                desc: "Barcha banklar takliflarini taqqoslab, sizga eng mos kreditni topadi",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Firibgarlikdan Himoya",
                desc: "Shubhali tranzaksiyalarni aniqlaydi va sizni ogohlantiradi",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "AI Chat-bot",
                desc: "Moliyaviy savodxonlikni oddiy tilda o'rgatadigan shaxsiy yordamchi",
                color: "from-orange-500 to-red-500"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition group">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Jonli Demo</h2>
            <p className="text-gray-400 text-lg">Platformamizni amalda sinab ko'ring</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'health', label: 'Moliyaviy Salomatlik' },
              { id: 'credit', label: 'Kredit Tavsiyasi' },
              { id: 'fraud', label: 'Firibgarlik Aniqlash' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveDemo(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeDemo === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
            {activeDemo === 'health' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Moliyaviy Salomatlik Tahlili</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Oylik daromad (so'm)</label>
                      <input type="number" placeholder="5000000" className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 focus:border-blue-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Oylik xarajat (so'm)</label>
                      <input type="number" placeholder="3000000" className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 focus:border-blue-500 outline-none" />
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-semibold hover:opacity-90">
                      Tahlil Qilish
                    </button>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-6">
                    <div className="text-center mb-4">
                      <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        85
                      </div>
                      <div className="text-gray-400">Moliyaviy Salomatlik Darajasi</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle className="w-5 h-5" />
                        <span>Yaxshi tejamkorlik</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle className="w-5 h-5" />
                        <span>Barqaror daromad</span>
                      </div>
                      <div className="flex items-center gap-2 text-yellow-400">
                        <CheckCircle className="w-5 h-5" />
                        <span>Xarajatlarni kamaytirish mumkin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'credit' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Kredit Tavsiyasi</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Kredit summasi</label>
                      <input type="number" placeholder="50000000" className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Muddat (oy)</label>
                      <input type="number" placeholder="24" className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Maqsad</label>
                      <select className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3">
                        <option>Uy ta'mirlash</option>
                        <option>Avtomobil</option>
                        <option>Ta'lim</option>
                      </select>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold">
                    Eng Yaxshi Taklifni Toping
                  </button>
                </div>
              </div>
            )}

            {activeDemo === 'fraud' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Firibgarlik Aniqlash Tizimi</h3>
                <div className="bg-slate-900 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <Shield className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-red-400">Shubhali tranzaksiya aniqlandi!</div>
                        <div className="text-sm text-gray-400 mt-1">1,500,000 so'm - Noma'lum onlayn do'kon</div>
                        <div className="text-sm text-gray-400">Risk darajasi: Yuqori (92%)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                      <Shield className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-yellow-400">Ehtiyot bo'ling</div>
                        <div className="text-sm text-gray-400 mt-1">Noodatiy joy - Xorijiy tovar</div>
                        <div className="text-sm text-gray-400">Risk darajasi: O'rtacha (45%)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-green-400">Xavfsiz tranzaksiya</div>
                        <div className="text-sm text-gray-400 mt-1">250,000 so'm - Mahalliy supermarket</div>
                        <div className="text-sm text-gray-400">Risk darajasi: Past (5%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Banks Comparison */}
      <section id="banks" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Banklar Taqqoslash</h2>
            <p className="text-gray-400 text-lg">Barcha banklar takliflarini bir joyda ko'ring</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Bank A', rate: '18%', commission: '2%', color: 'from-blue-500 to-cyan-500' },
              { name: 'Bank B', rate: '16%', commission: '1.5%', color: 'from-purple-500 to-pink-500' },
              { name: 'Bank C', rate: '20%', commission: '3%', color: 'from-green-500 to-emerald-500' }
            ].map((bank, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition">
                <div className={`w-16 h-16 bg-gradient-to-br ${bank.color} rounded-lg flex items-center justify-center mb-4 text-2xl font-bold`}>
                  {bank.name[5]}
                </div>
                <h3 className="text-xl font-bold mb-4">{bank.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Foiz stavka:</span>
                    <span className="font-semibold">{bank.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Komissiya:</span>
                    <span className="font-semibold">{bank.commission}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 py-2 rounded-lg hover:opacity-90">
                  Batafsil
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <TeamMembers />

      {/* FAQ */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Tez-tez So'raladigan Savollar</h2>
          <div className="space-y-4">
            { [
              { q: 'FinWise AI qanday ishlaydi?', a: 'Platformamiz sun\'iy intellekt texnologiyasi yordamida sizning moliyaviy ma\'lumotlaringizni tahlil qiladi va shaxsiy tavsiyalar beradi.' },
              { q: 'Ma\'lumotlarim xavfsizmi?', a: 'Ha, barcha ma\'lumotlar yuqori darajada shifrlangan va xavfsiz serverlarda saqlanadi.' },
              { q: 'Qancha turadi?', a: 'Asosiy funksiyalar bepul. Premium funksiyalar oyiga 50,000 so\'mdan boshlanadi.' }
            ].map((item, idx) => {
               const isOpen = openFAQ === idx;
               return (
                 <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl">
                   <button
                     onClick={() => toggleFAQ(idx)}
                     aria-expanded={isOpen}
                     aria-controls={`faq-panel-${idx}`}
                     id={`faq-toggle-${idx}`}
                     className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none"
                   >
                     <div className="flex-1">
                       <h3 className="text-xl font-bold mb-1">{item.q}</h3>
                       <div
                         id={`faq-panel-${idx}`}
                         role="region"
                         aria-labelledby={`faq-toggle-${idx}`}
                         className={`text-gray-400 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}
                       >
                         <p className="mt-2">{item.a}</p>
                       </div>
                     </div>
                     <ChevronDown
                       className={`w-6 h-6 text-gray-400 flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                     />
                   </button>
                 </div>
               );
             })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">FinWise AI</span>
              </div>
              <p className="text-gray-400 text-sm">O'zbekistonning birinchi AI moliyaviy maslahatchisi</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Mahsulot</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>Imkoniyatlar</div>
                <div>Narxlar</div>
                <div>API</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kompaniya</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>Biz haqimizda</div>
                <div>Blog</div>
                <div>Aloqa</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Qo'llab-quvvatlash</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>Yordam markazi</div>
                <div>Hujjatlar</div>
                <div>Maxfiylik</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
            © 2024 FinWise AI. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </footer>
    </div>
  );
}