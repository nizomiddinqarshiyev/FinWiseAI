'use client';

import { useState } from 'react';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function Demo() {
  const [activeDemo, setActiveDemo] = useState('health');
  const [healthData, setHealthData] = useState({ income: '', expense: '' });
  const [healthScore, setHealthScore] = useState(null);

  const calculateHealth = () => {
    const income = parseFloat(healthData.income);
    const expense = parseFloat(healthData.expense);
    
    if (income && expense) {
      const savingsRate = ((income - expense) / income) * 100;
      const score = Math.min(Math.round(50 + savingsRate), 100);
      setHealthScore(score);
    }
  };

  const tabs = [
    { id: 'health', label: 'Moliyaviy Salomatlik' },
    { id: 'credit', label: 'Kredit Tavsiyasi' },
    { id: 'fraud', label: 'Firibgarlik Aniqlash' }
  ];

  return (
    <section id="demo" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Jonli Demo</h2>
          <p className="text-gray-400 text-lg">Platformamizni amalda sinab ko'ring</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveDemo(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg scale-105'
                  : 'glass hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="glass rounded-2xl p-8">
          {/* Health Demo */}
          {activeDemo === 'health' && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-bold">Moliyaviy Salomatlik Tahlili</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Input Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Oylik daromad (so'm)
                    </label>
                    <input
                      type="number"
                      placeholder="5000000"
                      value={healthData.income}
                      onChange={(e) => setHealthData({...healthData, income: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 focus:border-blue-500 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Oylik xarajat (so'm)
                    </label>
                    <input
                      type="number"
                      placeholder="3000000"
                      value={healthData.expense}
                      onChange={(e) => setHealthData({...healthData, expense: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 focus:border-blue-500 outline-none transition"
                    />
                  </div>
                  <button
                    onClick={calculateHealth}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    Tahlil Qilish <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Results */}
                <div className="bg-slate-900 rounded-lg p-6">
                  {healthScore ? (
                    <>
                      <div className="text-center mb-4">
                        <div className={`text-6xl font-bold mb-2 ${
                          healthScore >= 70 ? 'text-green-400' : 
                          healthScore >= 50 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {healthScore}
                        </div>
                        <div className="text-gray-400">Moliyaviy Salomatlik Darajasi</div>
                      </div>
                      <div className="space-y-3">
                        {healthScore >= 70 && (
                          <>
                            <div className="flex items-center gap-2 text-green-400">
                              <CheckCircle className="w-5 h-5" />
                              <span>A'lo tejamkorlik</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-400">
                              <CheckCircle className="w-5 h-5" />
                              <span>Barqaror moliyaviy holat</span>
                            </div>
                          </>
                        )}
                        {healthScore >= 50 && healthScore < 70 && (
                          <>
                            <div className="flex items-center gap-2 text-yellow-400">
                              <CheckCircle className="w-5 h-5" />
                              <span>Yaxshi tejamkorlik</span>
                            </div>
                            <div className="flex items-center gap-2 text-yellow-400">
                              <CheckCircle className="w-5 h-5" />
                              <span>Xarajatlarni optimallashtiring</span>
                            </div>
                          </>
                        )}
                        {healthScore < 50 && (
                          <div className="flex items-center gap-2 text-red-400">
                            <CheckCircle className="w-5 h-5" />
                            <span>Xarajatlarni kamaytirish kerak</span>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="text-center text-gray-400 py-8">
                      Ma'lumotlarni kiriting va tahlil qilish tugmasini bosing
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Credit Demo */}
          {activeDemo === 'credit' && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-bold">Kredit Tavsiyasi</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Kredit summasi</label>
                    <input
                      type="number"
                      placeholder="50000000"
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Muddat (oy)</label>
                    <input
                      type="number"
                      placeholder="24"
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Maqsad</label>
                    <select className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 focus:border-blue-500 outline-none">
                      <option>Uy ta'mirlash</option>
                      <option>Avtomobil</option>
                      <option>Ta'lim</option>
                      <option>Biznes</option>
                    </select>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2">
                  Eng Yaxshi Taklifni Toping <ArrowRight className="w-5 h-5" />
                </button>

                {/* Sample Results */}
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {[
                    { bank: 'Bank A', rate: '18%', monthly: '2,500,000' },
                    { bank: 'Bank B', rate: '16%', monthly: '2,350,000' },
                    { bank: 'Bank C', rate: '20%', monthly: '2,700,000' }
                  ].map((offer, idx) => (
                    <div key={idx} className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                      <h4 className="font-bold mb-2">{offer.bank}</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Foiz:</span>
                          <span className="font-semibold">{offer.rate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Oylik:</span>
                          <span className="font-semibold">{offer.monthly} so'm</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Fraud Demo */}
          {activeDemo === 'fraud' && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-bold">Firibgarlik Aniqlash Tizimi</h3>
              <div className="bg-slate-900 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <Shield className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-red-400">Shubhali tranzaksiya aniqlandi!</div>
                      <div className="text-sm text-gray-400 mt-1">1,500,000 so'm - Noma'lum onlayn do'kon</div>
                      <div className="text-sm text-gray-400">Risk darajasi: Yuqori (92%)</div>
                      <button className="mt-2 text-sm text-red-400 hover:underline">Bloklash</button>
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
  );
}