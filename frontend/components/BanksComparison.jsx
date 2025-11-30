'use client';

import { ExternalLink, TrendingUp, TrendingDown } from 'lucide-react';

export default function BanksComparison() {
  const banks = [
    {
      name: 'Bank A',
      logo: 'A',
      rate: '18%',
      rateChange: '+0.5%',
      commission: '2%',
      minAmount: '5,000,000',
      maxTerm: '60',
      color: 'from-blue-500 to-cyan-500',
      trending: 'up'
    },
    {
      name: 'Bank B',
      logo: 'B',
      rate: '16%',
      rateChange: '-0.3%',
      commission: '1.5%',
      minAmount: '10,000,000',
      maxTerm: '84',
      color: 'from-purple-500 to-pink-500',
      trending: 'down'
    },
    {
      name: 'Bank C',
      logo: 'C',
      rate: '20%',
      rateChange: '+1.2%',
      commission: '3%',
      minAmount: '3,000,000',
      maxTerm: '48',
      color: 'from-green-500 to-emerald-500',
      trending: 'up'
    },
    {
      name: 'Bank D',
      logo: 'D',
      rate: '17%',
      rateChange: '0%',
      commission: '2.5%',
      minAmount: '7,000,000',
      maxTerm: '72',
      color: 'from-orange-500 to-red-500',
      trending: 'neutral'
    },
    {
      name: 'Bank E',
      logo: 'E',
      rate: '19%',
      rateChange: '+0.8%',
      commission: '2.2%',
      minAmount: '5,000,000',
      maxTerm: '60',
      color: 'from-pink-500 to-rose-500',
      trending: 'up'
    },
    {
      name: 'Bank F',
      logo: 'F',
      rate: '15.5%',
      rateChange: '-1.0%',
      commission: '1%',
      minAmount: '15,000,000',
      maxTerm: '96',
      color: 'from-indigo-500 to-purple-500',
      trending: 'down'
    }
  ];

  return (
    <section id="banks" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Banklar Taqqoslash</h2>
          <p className="text-gray-400 text-lg">
            Barcha banklar takliflarini bir joyda ko'ring va eng yaxshisini tanlang
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">15+</div>
            <div className="text-sm text-gray-400">Banklar</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">15.5%</div>
            <div className="text-sm text-gray-400">Eng past foiz</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-400">96</div>
            <div className="text-sm text-gray-400">Maks muddat (oy)</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-400">1%</div>
            <div className="text-sm text-gray-400">Eng past komissiya</div>
          </div>
        </div>

        {/* Banks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banks.map((bank, idx) => (
            <div
              key={idx}
              className="glass rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Bank Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${bank.color} rounded-lg flex items-center justify-center text-2xl font-bold shadow-lg`}
                  >
                    {bank.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{bank.name}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      {bank.trending === 'up' && (
                        <TrendingUp className="w-4 h-4 text-green-400" />
                      )}
                      {bank.trending === 'down' && (
                        <TrendingDown className="w-4 h-4 text-red-400" />
                      )}
                      <span className={
                        bank.trending === 'up' ? 'text-green-400' :
                        bank.trending === 'down' ? 'text-red-400' :
                        'text-gray-400'
                      }>
                        {bank.rateChange}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Details */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Yillik foiz:</span>
                  <span className="font-bold text-lg">{bank.rate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Komissiya:</span>
                  <span className="font-semibold">{bank.commission}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Min summa:</span>
                  <span className="font-semibold">{bank.minAmount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Maks muddat:</span>
                  <span className="font-semibold">{bank.maxTerm} oy</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-2.5 rounded-lg hover:opacity-90 transition font-semibold flex items-center justify-center gap-2 group-hover:scale-105">
                Batafsil <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Sizga Eng Mos Kreditni Topishda Yordam Beramiz
            </h3>
            <p className="text-gray-400 mb-6">
              AI yordamida barcha banklar takliflarini taqqoslab, sizning ehtiyojingizga 
              mos keladigan eng yaxshi variantni tavsiya qilamiz
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Bepul Tahlil Oling
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}